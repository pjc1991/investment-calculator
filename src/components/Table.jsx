import InvestmentCalculator from '../utils/InvestmentCalculator'

const formatter = new Intl.NumberFormat('ko-KR', {
    maximumFractionDigits: 0,
});

export default function Table({params}) {

    const calculator = new InvestmentCalculator(params)
    const tableData = calculator.calculate()

    if (tableData.length === 0) {
        return null;
    }


    return (
        <div className="w-1/2 mx-auto mt-4 p-4 rounded-lg">
            <table className="w-full text-white">
                <thead>
                <tr className="text-green-400 text-right">
                    <th>
                        연차
                    </th>
                    <th>
                        총액
                    </th>
                    <th>
                        해당년도 이자
                    </th>
                    <th>
                        누적 이자
                    </th>
                    <th>
                        누적 자본
                    </th>
                </tr>
                </thead>
                <tbody className="text-right">
                {tableData.map((row, index) => (
                    <tr key={index}>
                        <td>
                            {row.year}년
                        </td>
                        <td>
                            {formatter.format(row.totalInvestment)}원
                        </td>
                        <td>
                            {formatter.format(row.interest)}원
                        </td>
                        <td>
                            {formatter.format(row.totalInterest)}원
                        </td>
                        <td>
                            {formatter.format(row.totalCapital)}원
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}