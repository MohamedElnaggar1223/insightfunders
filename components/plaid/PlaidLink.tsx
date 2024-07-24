'use client'
import { createLinkToken, exchangePublicToken } from "@/lib/actions/plaid";
import { UserType } from "@/lib/types/user";
import { Database } from "@/types/supabase";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from "react-plaid-link";

type Props = {
    user: UserType
}

export default function PlaidLink({ user }: Props) 
{
    const router = useRouter()

    const [token, setToken] = useState('')

    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken(user)

            setToken(data?.linkToken)
        }

        getLinkToken()
    }, [user])

    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
        await exchangePublicToken({
            public_token,
            user
        })
        router.push('/')
    }, [user])

    const config: PlaidLinkOptions = {
        token,
        onSuccess
    }

    const { open, ready } = usePlaidLink(config)

    return (
        <button 
            onClick={() => open()}
            disabled={!ready}
            className='w-full bg-main-purple text-white font-semibold rounded-[8px] py-2 px-4 disabled:opacity-65'
        >
            Connect Bank
        </button>
    )
}