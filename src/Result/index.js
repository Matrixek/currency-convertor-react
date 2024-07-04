const Result = ({ targetAmonut, myResult, selectedCurrency }) => {
    return (
        `${targetAmonut} PLN = ${myResult.toFixed(2)} ${selectedCurrency}`
    );
};
export default Result;