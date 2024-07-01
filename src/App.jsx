import {useState} from 'react'
import {IconMoneybag} from '@tabler/icons-react';
import './App.css'
import BasicNumberInput from "./components/BasicNumberInput.jsx";
import Table from "./components/Table.jsx";

const INITIAL_INVESTMENT_PARAMETERS = {
    initialInvestment: 1000000,
    yearlyInvestment: 100000,
    couponRate: 4,
    years: 10
}

function App() {

    const [investmentParameters, setInvestmentParameters] = useState(INITIAL_INVESTMENT_PARAMETERS)


    function handleEdit(key, value) {
        const newInvestmentParameters = {
            ...investmentParameters,
            [key]: parseInt(value)
        }
        setInvestmentParameters(newInvestmentParameters)
    }

    return (
        <>
            <div className="bg-gray-950 w-screen h-screen justify-center items-center text-white text-center">
                <div className="bg-gray-800 w-screen h-12">
                </div>
                <IconMoneybag className={"w-12 h-12 text-white mx-auto m-4"}/>
                <h1 className="text-3xl font-bold">
                    투자 계산기
                </h1>
                <div className="grid grid-cols-8 gap-4 mx-auto mt-4 bg-green-800 p-4 rounded-lg w-1/2">
                    <BasicNumberInput label={"초기 투자 금액"} id={"initialInvestment"} initialValue={investmentParameters.initialInvestment} onEdit={handleEdit}/>
                    <BasicNumberInput label={"연간 투자 금액"} id={"yearlyInvestment"} initialValue={investmentParameters.yearlyInvestment} onEdit={handleEdit}/>
                    <BasicNumberInput label={"연 이자율"} id={"couponRate"} initialValue={investmentParameters.couponRate} onEdit={handleEdit}/>
                    <BasicNumberInput label={"투자 기간"} id={"years"} initialValue={investmentParameters.years} onEdit={handleEdit}/>

                </div>
                <div className="w-1/2 mx-auto mt-4 p-4 rounded-lg">
                    <Table params={investmentParameters}/>
                </div>
            </div>
        </>
    )
}

export default App
