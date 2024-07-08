'use server'
import { CountryCode, ProcessorTokenCreateRequest, ProcessorTokenCreateRequestProcessorEnum, Products } from "plaid";
import { UserType } from "../types/user";
import { plaidClient } from "../plaid";
import { encryptId, parseStringify } from "../utils";
import { revalidatePath } from "next/cache";
import { addFundingSource } from "./dwolla";
import { createBankAccount } from "./auth";

export const createLinkToken = async (user: UserType) => {
    try
    {
        const tokenParams = {
            user: {
                client_user_id: user?.userInfo?.plaid_id!,
            },
            client_name: `${user?.userInfo?.first_name!} ${user?.userInfo?.last_name!}`,
            products: ['auth'] as Products[],
            country_codes: ["US"] as CountryCode[],
            language: "en",
        }

        const response = await plaidClient.linkTokenCreate(tokenParams)

        return parseStringify({ linkToken: response.data.link_token })
    }
    catch(error)
    {
        console.error("error: ", error)
    }
}

export const exchangePublicToken = async ({ public_token, user }: { public_token: string, user: UserType }) => {
    try
    {
        const response = await plaidClient.itemPublicTokenExchange({
            public_token
        })

        const accessToken = response.data.access_token
        const itemId = response.data.item_id

        const accountsResponse = await plaidClient.accountsGet({
            access_token: accessToken
        })

        const accountData = accountsResponse.data.accounts[0]

        const request: ProcessorTokenCreateRequest = {
            access_token: accessToken,
            account_id: accountData.account_id,
            processor: "dwolla" as ProcessorTokenCreateRequestProcessorEnum,
        }

        const processorTokenResponse = await plaidClient.processorTokenCreate(request)

        const processorToken = processorTokenResponse.data.processor_token

        const fundingSourceUrl = await addFundingSource({
            dwollaCustomerId: user?.userInfo?.dwolla_customer_id!,
            processorToken,
            bankName: accountData.name!
        })

        if(!fundingSourceUrl) throw new Error('Failed to create funding source')

        await createBankAccount({
            userId: user?.user.id!,
            bankId: itemId,
            accountId: accountData.account_id,
            accessToken,
            fundingSourceUrl,
            shareableId: encryptId(accountData.account_id)
        })

        revalidatePath('/')

        return parseStringify({ publicTokenExchange: 'complete' })
    }
    catch(error)
    {
        console.error(error)
    }
}