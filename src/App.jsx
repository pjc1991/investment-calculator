import {useState} from 'react'
import './App.css'
import Table from "./components/Table.jsx";
import Header from "./components/Header.jsx";
import InputParameters from "./components/InputParameters.jsx";

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
                <Header/>
                <InputParameters investmentParameters={investmentParameters} handleEdit={handleEdit}/>
                <Table params={investmentParameters}/>
            </div>
        </>
    )
}

export default App
