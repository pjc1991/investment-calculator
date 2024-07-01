import InvestmentCalculator from '../utils/InvestmentCalculator'

export default function Table({params}) {

    const calculator = new InvestmentCalculator(params)
    const tableData = calculator.calculate()

    if (tableData.length === 0) {
        return null;
    }


    return (
        <table className="w-full text-white">
            <thead>
            <tr className="text-green-400">
                <th>
                    연차
                </th>
                <th>
                    투자총액
                </th>
                <th>
                    이자
                </th>
                <th>
                    총 이자
                </th>
                <th>
                    총 자본
                </th>
            </tr>
            </thead>
            <tbody>
            {tableData.map((row, index) => (
                <tr key={index}>
                    <td>
                        {row.year.toLocaleString('ko-KR')}년
                    </td>
                    <td>
                        {row.totalInvestment.toLocaleString('ko-KR', {maximumFractionDigits: 0})}
                    </td>
                    <td>
                        {row.interest.toLocaleString('ko-KR', {maximumFractionDigits: 0})}
                    </td>
                    <td>
                        {row.totalInterest.toLocaleString('ko-KR', {maximumFractionDigits: 0})}
                    </td>
                    <td>
                        {row.totalCapital.toLocaleString('ko-KR', {maximumFractionDigits: 0})}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}