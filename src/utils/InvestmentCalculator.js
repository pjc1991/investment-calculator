class InvestmentCalculator {
    constructor(props) {
        this.initialInvestment = props.initialInvestment;
        this.yearlyInvestment = props.yearlyInvestment;
        this.couponRate = props.couponRate;
        this.years = props.years;
    }

    calculate() {
        const tableData = [];
        let totalInvestment = this.initialInvestment;
        let totalInterest = 0;
        let totalCapital = totalInvestment;
        for (let i = 0; i < this.years; i++) {
            const year = i + 1;
            const interest = totalInvestment * this.couponRate / 100;
            totalInterest += interest;
            totalInvestment += this.yearlyInvestment + interest;
            totalCapital += this.yearlyInvestment;
            tableData.push({
                year: year,
                totalInvestment: totalInvestment,
                interest: interest,
                totalInterest: totalInterest,
                totalCapital: totalCapital,
            })
        }
        return tableData;
    }
}

export default InvestmentCalculator;