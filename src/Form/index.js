import React, { useState } from "react";
import "./style.css";
import currencies from "../currencies.js"
import Result from "../Result";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);
    const [CurrencyValue, setCurrencyValue] = useState({
        content: currencies[0].content,
        shrt: currencies[0].shrt,
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        const foundCurrency = currencies.find(it => it.worth === parseFloat(CurrencyValue.worth));
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
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
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
                            value={CurrencyValue.worth}
                            onChange={({ target }) => {
                                const CurrencyValue = currencies.find(currency => currency.worth === parseFloat(target.value));
                                setCurrencyValue({
                                    worth: CurrencyValue.worth,
                                    shrt: CurrencyValue.shrt,
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
                        <input className="form__field" readonly
                        />


                    </label>
                </p>
                <p>
                    * - pole wymagane
                </p>
                <p>
                    <button className="form__button">Przelicz</button>
                    <span className="form__button--result">
                        {result &&
                            <Result />
                        }
                    </span>
                </p>
                <p>
                    <button type="reset" className="form__button" name="value">Wyczyść</button>
                </p>
                <p>
                    Kurs z dnia: 21.01.23
                </p>
            </fieldset>
        </form >
    )
};
export default Form;