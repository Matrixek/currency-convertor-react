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
  const {
    result,
    calculateResult,
    rates,
    loading,
    error,
    date,
    reloadRates,
  } = useCurrencyConverter();

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

        {loading ? (
          <Loading>
            <div className="loader"></div>
            <p>
              Sekundka... <br />
              Ładuję kursy walut.
            </p>
          </Loading>
        ) : error ? (
          <Failure>
            {error}
            <br />
            <Button onClick={reloadRates}>Spróbuj ponownie</Button>
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
                  onChange={({ target }) =>
                    setAmount(target.value.replace(",", "."))
                  }
                  name="value"
                  placeholder="0,00"
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
                  {Object.keys(rates ?? {}).map((code) => (
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
                    {parseFloat(amount).toFixed(2)} PLN ={" "}
                    {result.resultElement.toFixed(2)} {result.from}
                  </p>
                )}
              </ButtonResult>
            </p>

            <p>* - pole wymagane</p>

            <p>
              <Button
                type="submit"
                disabled={!amount || amount <= 0 || loading}
              >
                Przelicz
              </Button>
            </p>

            <p>
              Kursy walut pobrane w dniu:{" "}
              <strong>{new Date().toLocaleDateString("pl-PL")}</strong>
            </p>

          </>
        )}
      </StyledForm>
    </form>
  );
};

export default Form;
