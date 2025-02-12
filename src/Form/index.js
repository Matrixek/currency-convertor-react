import React, { useState } from "react";
import currencies from "../currencies.js";
import { Clock } from "../Clock/index.js";
import {StyledForm,Legend,LabelText,Input, Select,Button, ButtonResult} from "./styled.js"

const Form = () => {
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);
    const [currencyValue, setCurrencyValue] = useState({
        content: currencies[0].content,
        shrt: currencies[0].shrt,
        worth: currencies[0].worth
    })

    const onFormSubmit = (event) => {
        event.preventDefault();
        const foundCurrency = currencies.find(it => it.worth === parseFloat(currencyValue.worth));
        if (foundCurrency) {
            setResult({
                targetAmount: +amount,
                myResult: amount / foundCurrency.worth,
                selectedCurrency: foundCurrency.shrt,
            });
            setAmount("");
        }
    };


    const selectOption = currencies.map((currency) => (
        <option key={currency.id} value={currency.worth}>
            {currency.shrt}
        </option>
    ));
    return (
        <form onSubmit={onFormSubmit}>
          <StyledForm>
                <Legend>Kalkulator walut</Legend>
                <Clock />
                <p>
                    <label>
                        <LabelText>Podaj kwotę:* (PLN)</LabelText>
                        <Input type="number"  min="0" step="0.01" value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            name="value"
                            placeholder="Wpisz kwotę w zł" required />

                    </label>
                </p>
                <p>
                    <label>
                        <LabelText>Wybierz walutę:</LabelText>
                        <Select
                            value={currencyValue.worth}
                            onChange={({ target }) => {
                                const currencyValue = currencies.find(currency => currency.worth === parseFloat(target.value));
                                setCurrencyValue({
                                    worth: currencyValue.worth,
                                    shrt: currencyValue.shrt,

                                });
                            }}
                        >
                            {selectOption}
                        </Select>
                    </label>
                </p>
                <p>
                    <label>
                        <LabelText>Wynik:</LabelText>
                        <ButtonResult>
                            <p>
                            {result && (
                                `${result.targetAmount} PLN = ${result.myResult.toFixed(2)}
                             ${result.selectedCurrency}`

                            )}
                            </p>
                        </ButtonResult>
                    </label>

                </p>
                <p>
                    * - pole wymagane
                </p>
                <p>
                    <Button>Przelicz</Button>
                </p>
                <p>

                </p>

                <p>
                    Kurs pochodzi ze strony nbp.pl z Tabeli nr 115/A/NBP/2020 z dnia 2020-06-16
                </p>
            </StyledForm>
        </form >
    )
};
export default Form;