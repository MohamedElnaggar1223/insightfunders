
import { getPartnerDetails } from "@/lib/actions/auth"

export default async function Dashboard({ searchParams }: { searchParams: { page?: string } })
{
    const partnerDetails = await getPartnerDetails()

    //define return
    return(
        null
    )
}