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
    const [isConnected, setIsConnected] = useState(false)

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
        setIsConnected(true)
    }, [user])

    const config: PlaidLinkOptions = {
        token,
        onSuccess
    }

    const { open, ready } = usePlaidLink(config)

    return (
        <button 
            onClick={() => open()}
            disabled={!ready || isConnected}
            type='button'
            className={`w-full ${isConnected ? 'bg-[#FF5A00]' : 'bg-[#FF7A00]'} text-white font-semibold rounded-[8px] py-2 px-4 disabled:opacity-65`}
        >
            {isConnected ? 'Connected' : 'Connect Bank'}
        </button>
    )
}