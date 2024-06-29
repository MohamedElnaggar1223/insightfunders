import StartUpDetails from "@/components/onboarding/StartUpDetails"
import { getUser } from "@/lib/actions/auth"
import { createClient } from "@/utils/supabase/server"

export default async function StartUpDetailsContainer()
{
    const user = await getUser()

    if(user?.userStartUp?.error || user?.userStartUpOwners?.error) return null

    return <StartUpDetails startUpDetails={user?.userStartUp?.data!} startUpOwners={user?.userStartUpOwners?.data!} />
}