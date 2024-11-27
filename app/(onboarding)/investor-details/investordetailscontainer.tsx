import InvestorDetails from "@/components/onboarding/InvestorDetails";
import StartUpDetails from "@/components/onboarding/StartUpDetails";
import { getUser } from "@/lib/actions/auth";
import { createClient } from "@/utils/supabase/server";

export default async function InvestorDetailsContainer() {
  const user = await getUser();

  if (!user?.userInvestor) return null;

  return <InvestorDetails investorDetails={user?.userInvestor} />;
}
