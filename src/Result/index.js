const Result = ({ targetAmonut, myResult, selectedCurrency }) => {
  
    `$ targetAmonut = { targetAmonut }
    $  myResult = { myResult }
     $ selectedCurrency = { selectedCurrency }`

        `$({Form.targetAmonut})PLN = $({Form.myResult.toFixed(2)}) $({Form.selectedCurrency})`
};
export default Result; 