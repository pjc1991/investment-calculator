import BasicNumberInput from "./BasicNumberInput.jsx";

export default function InputParameters({investmentParameters, handleEdit}) {
    return (
        <div className="grid grid-cols-8 gap-4 mx-auto mt-4 bg-green-800 p-4 rounded-lg w-1/2">
            <BasicNumberInput label={"초기 투자 금액"} id={"initialInvestment"}
                              initialValue={investmentParameters.initialInvestment} onEdit={handleEdit}/>
            <BasicNumberInput label={"연간 투자 금액"} id={"yearlyInvestment"}
                              initialValue={investmentParameters.yearlyInvestment} onEdit={handleEdit}/>
            <BasicNumberInput label={"연 이자율"} id={"couponRate"} initialValue={investmentParameters.couponRate}
                              onEdit={handleEdit}/>
            <BasicNumberInput label={"투자 기간"} id={"years"} initialValue={investmentParameters.years}
                              onEdit={handleEdit}/>
        </div>
    )
}