import { UserType } from "@/lib/types/user";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FinancialRoundActionEdit from "./financial-round-action-edit";

type Props = { 
    user: UserType, 
    startUpFinancialRounds: {
        investor: string[];
        date: string | null;
        id: number;
        round: "Pre-seed" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Public" | null;
        amount: string | null;
        startup_id: number | null;
    }[]
}

export default function FinancialsDetails({ user, startUpFinancialRounds }: Props)
{
    return (
        <Table className='bg-white'>
            <TableHeader>
                <TableRow className=''>
                    <TableHead className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat">Investor</TableHead>
                    <TableHead className='p-6 border-2 text-center border-[#EAEAEA] font-Montserrat'>Round</TableHead>
                    <TableHead className='p-6 border-2 text-center border-[#EAEAEA] font-Montserrat'>Date</TableHead>
                    <TableHead className='p-6 border-2 text-center border-[#EAEAEA] font-Montserrat'>Amount</TableHead>
                    <TableHead className='p-6 border-2 text-center border-[#EAEAEA] font-Montserrat'>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {startUpFinancialRounds?.map((financialRound) => (
                <TableRow key={financialRound.id}>
                    <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat">{financialRound.investor.map((investor, index) => <div key={index}>{investor}</div>)}</TableCell>
                    <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat">{financialRound.round}</TableCell>
                    <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat">{financialRound.date}</TableCell>
                    <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat">${financialRound.amount}</TableCell>
                    <TableCell className="p-6 border-2 text-center border-[#EAEAEA] font-Montserrat">
                        <FinancialRoundActionEdit financialRound={financialRound!} />
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}