import InvestorsChart from "@/components/investors/InvestorsChart";
import InvestorsStartups from "@/components/investors/InvestorsStartups";
import { getUser } from "@/lib/actions/auth";
import { getContracts } from "@/lib/actions/investor";
import StartUpsChart from "@/components/startup/StartUpsChart";
import { CustomSearch } from "@/components/lenders/CustomSearch";
import InvestorDashboardCard from "@/components/investors/investorDashboardCard";

export default async function Dashboard({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const user = await getUser();
  console.log(user);
  const investorContracts = await getContracts(user?.userInvestor?.id!);

  // await new Promise(resolve => setTimeout(resolve, 10000))
  const formatCurrency = (value: number) =>
    `$${Intl.NumberFormat("us").format(value)}`;

  const totalAmountInvested = investorContracts.acceptedContracts?.reduce(
    (acc, contract) =>
      acc +
      (contract.investment_amount_paid
        ? parseFloat(contract.amount_invested)
        : 0),
    0
  );
  const totalROI = investorContracts.acceptedContracts?.reduce(
    (acc, contract) =>
      acc +
      (contract.investment_amount_paid
        ? parseFloat(contract.amount_invested) *
          ((parseFloat(contract.interest_rate ?? "0") + 100) / 100)
        : 0),
    0
  );
  const totalStartups = investorContracts.acceptedContracts?.filter(
    (contract) => contract.investment_amount_paid
  ).length;

  console.log({ totalAmountInvested, totalROI, totalStartups });
  const investmentData = [
    {
      name: "Slope AI",
      category: "Tech",
      amount: 5000000,
      apy: "19%",
      term: "12 months",
      maturityDate: "05/12/2025",
      dueDate: "05/12/2024",
    },
    {
      name: "Acme Corp",
      category: "Fintech",
      amount: 3000000,
      apy: "17%",
      term: "48 months",
      maturityDate: "03/18/2028",
      dueDate: "03/18/2024",
    },
    {
      name: "Epsilon Dynamics",
      category: "Software",
      amount: 10000000,
      apy: "18%",
      term: "36 months",
      maturityDate: "10/08/2027",
      dueDate: "10/08/2024",
    },
    {
      name: "Arch",
      category: "AI",
      amount: 1000000,
      apy: "20%",
      term: "48 months",
      maturityDate: "09/15/2028",
      dueDate: "09/15/2024",
    },
    {
      name: "Pharmator",
      category: "Pharmaceutical",
      amount: 1000000,
      apy: "18%",
      term: "24months",
      maturityDate: "01/18/2026",
      dueDate: "01/18/2024",
    },
  ];

  return (
    <div className="w-full mx-auto space-y-6 my-23 max-w-[90%]">
      {/* Left column with stats */}
      <div className="flex gap-[21px]">
        <div className="flex flex-col justify-between space-y-[20px] min-w-[332px]">
          <InvestorDashboardCard
            title="Total Investment"
            value={"$20,000,000"}
            className="text-center content-center"
          />
          <InvestorDashboardCard
            title="Total Expected Return"
            value={"$4,000,000"}
            className="text-center content-center"
          />
          <InvestorDashboardCard
            title="Companies Invested"
            value={"6"}
            className="text-center content-center"
          />
        </div>

        {/* Right column with ROI card spanning 2 columns */}
        <div className="w-full">
          <StartUpsChart totalAmountInvested={totalAmountInvested!} />
        </div>
      </div>

      {/* Search and Table */}
      <div className="relative">
        <CustomSearch
          placeholder="Search startups"
          className="pl-10 bg-white border-gray-800 text-white font-Montserrat"
        />
      </div>

      <div className="overflow-x-auto bg-[#FAFAFA] rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="text-[#1A1A1A] text-sm leading-[15px] text-[12px]">
              <th className=" text-[12px] text-center p-6 font-medium font-Montserrat">
                Company Name
              </th>
              <th className="text-[12px] text-center p-6 font-medium font-Montserrat">
                Amount Invested
              </th>
              <th className="text-[12px] text-center p-6 px-12 font-medium font-Montserrat">
                APY
              </th>
              <th className="text-[12px] text-center p-6 font-medium font-Montserrat">
                Term
              </th>
              <th className="text-[12px] text-center p-6 font-medium font-Montserrat">
                Maturity Date
              </th>
              <th className="text-[12px] text-center p-6 font-medium font-Montserrat">
                Due Payment Date
              </th>
            </tr>
          </thead>
          <tbody>
            {investmentData.map((company, index) => (
              <tr key={index}>
                <td className={`p-4 bg-[#EAEAEA] font-Montserrat`}>
                  <div>
                    <div className="font-medium font-Montserrat text-[13px] leading-[15px]">
                      {company.name}
                    </div>
                    <div className="text-sm text-gray-500 font-Montserrat text-[13px]">
                      {company.category}
                    </div>
                  </div>
                </td>
                <td
                  className={`p-4 bg-white font-Montserrat text-[13px] leading-[15px] text-[#1A1A1A]`}
                >
                  ${company.amount.toLocaleString()}
                </td>
                <td
                  className={`p-4 bg-[#EAEAEA] font-Montserrat text-[13px] leading-[15px] text-[#1A1A1A]`}
                >
                  {company.apy}
                </td>
                <td
                  className={`p-4 bg-white font-Montserrat text-[13px] leading-[15px] text-[#1A1A1A]`}
                >
                  {company.term}
                </td>
                <td
                  className={`p-4 bg-[#EAEAEA] font-Montserrat leading-[15px] text-[#1A1A1A] text-[13px]`}
                >
                  {company.maturityDate}
                </td>
                <td
                  className={`p-4 bg-white font-Montserrat leading-[15px] text-[#1A1A1A] text-[13px]`}
                >
                  {company.dueDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
