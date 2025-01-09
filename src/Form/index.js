import React, { useState } from "react";
import "./style.css";
import currencies from "../currencies.js";
import CurrentDate from "../Clock/index.js";
import ResetButton from "../ResetButton/index.js";




const Form = () => {
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);
    const [currencyvalue, setCurrencyValue] = useState(currencies[0].worth);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currencyvalue);
    };
    const calculateResult = (amount, currencyvalue) => {
        const calculationResult = (amount / currencyvalue);
        setResult(`${calculationResult}`);
    };


    const selectOption = currencies.map((currency) => (
        <option key={currency.id} value={currency.worth}>
            {currency.shrt}
        </option>
    ));


    return (
        <form onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <CurrentDate />
                <p>
                    <label>
                        <span className="form__labelText">Podaj kwotę:* (PLN)</span>
                        <input type="number" className="form__field" min="0" step="0.01" value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            name="value"
                            placeholder="Wpisz kwotę w zł" required />

                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Wybierz walutę:</span>
                        <select className=" form__field form__field--select"
                            value={currencyvalue.worth}
                            onChange={({ target }) => {
                                const currencyvalue = currencies.find(currency => currency.worth === parseFloat(target.value));
                                setCurrencyValue({
                                    worth: currencyvalue.worth,
                                    shrt: currencyvalue.shrt,

                                });
                            }}
                        >
                            {selectOption}
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Wynik:</span>
                        <p className="form__labelText--result">
                            {result && (
                            `${result.targetAmount} PLN = ${result.calculateResult.toFixed(2)}
                             ${result.selectedCurrency}`

                            )}
                        </p>
                    </label>



                </p>
                <p>
                    * - pole wymagane
                </p>
                <p>
                    <button className="form__button">Przelicz</button>

                </p>
                <p>

                </p>
                <ResetButton />

                <p>
                    Kurs pochodzi ze strony nbp.pl z Tabeli nr 115/A/NBP/2020 z dnia 2020-06-16
                </p>
            </fieldset>
        </form >
    )
};
export default Form;