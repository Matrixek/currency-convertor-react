import React, { useState } from "react";
import { Clock } from "../Clock";
import {
  StyledForm,
  Legend,
  LabelText,
  Input,
  Select,
  Button,
  ButtonResult,
  Loading,
  Failure,
} from "./styled";
import { useCurrencyConverter } from "./useRatesData";

export const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState(null);
  const ratesData = useCurrencyConverter();

  const calculateResult = (currency, amount) => {
  const rate = ratesData.rates[currency]?.value;

  if (!rate) {
    console.error("Brak kursu dla:", currency);
    return;
  }

  setResult({
    sourceAmount: +amount,
    targetAmount: +amount * rate,
    currency,
  });
};


  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!amount || amount <= 0) return;
    calculateResult(currency, amount);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <StyledForm>
        <Legend>Kalkulator walut</Legend>
        <Clock />
        {ratesData.state === "loading" ? (
          <Loading>
            Sekundka... <br />
            Ładuję kursy walut z Europejskiego Banku Centralnego
          </Loading>
        ) : ratesData.state === "error" ? (
          <Failure>
            Coś poszło nie tak 💥 Sprawdź, czy masz internet
          </Failure>
        ) : (
          <>
            <p>
              <label>
                <LabelText>Podaj kwotę:* (PLN)</LabelText>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                  name="value"
                  placeholder="Wpisz kwotę w zł"
                  required
                />
              </label>
            </p>

            <p>
              <label>
                <LabelText>Wybierz walutę:</LabelText>
                <Select
                  value={currency}
                  onChange={({ target }) => setCurrency(target.value)}
                >
                  {Object.keys(ratesData.rates ?? {}).map((code) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </Select>
              </label>
            </p>

            <p>
              <LabelText>Wynik:</LabelText>
              <ButtonResult>
                {result && (
                  <p>
                    {result.sourceAmount} PLN ={" "}
                    {result.targetAmount.toFixed(2)} {result.currency}
                  </p>
                )}
              </ButtonResult>
            </p>

            <p>* - pole wymagane</p>

            <p>
              <Button type="submit">Przelicz</Button>
            </p>

            <p>
              Kursy walut pobierane są z Europejskiego Banku Centralnego.
            </p>
          </>
        )}
      </StyledForm>
    </form>
  );
};

export default Form;




