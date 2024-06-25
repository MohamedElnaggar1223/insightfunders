import StartUpDetails from "@/components/onboarding/StartUpDetails"
import { createClient } from "@/utils/supabase/server"

export default async function StartUpDetailsContainer()
{
    const supabase = createClient()

	const { data: { user } } = await supabase.auth.getUser()

    const userStartUp = await supabase.from('startups').select(`*,user:user_id(*)`).eq('user_id', user?.id!).single()
    const userStartUpOwners = await supabase.from('startups_owners').select().eq('startup_id', userStartUp?.data?.id!)

    if(userStartUp.error || userStartUpOwners.error) return null

    console.log(userStartUpOwners.data)

    return <StartUpDetails startUpDetails={userStartUp.data} startUpOwners={userStartUpOwners.data} />
}