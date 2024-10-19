const Result = ({ result }) => {
    {result && 
        {result.targetAmonut}PLN = {result.myResult.toFixed(2)} {result.selectedCurrency}
     }
};
export default Result; 