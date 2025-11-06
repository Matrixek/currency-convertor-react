import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "cur_live_DTIi1G5h0Kthi1a1Y2HRwJe0dSCFXO2YSGfya7wv";
const API_URL = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}`;

const USE_LOCAL_DATA = true;

export const useCurrencyConverter = () => {
  const [rates, setRates] = useState({});
  const [result, setResult] = useState(null);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        let data;

        if (USE_LOCAL_DATA) {
          const localData = await import("../Form/data/rates.json");
          data = localData.default;;
        } else {
          const response = await axios.get(API_URL);
          data = response.data;;
        }

        setRates(data.data);

        const anyCurrency = Object.keys(data.data)[0];
        setDate(
          data.data[anyCurrency].last_updated ||
            new Date().toISOString().split("T")[0]
        );
      } catch (error) {
        console.error("Błąd pobierania danych", error);
        setError("Nie udało się pobrać kursów walut.");
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };

    fetchRates();
  }, []);

  const calculateResult = (currency, amount) => {
    if (!rates[currency]) {
      setError("Nie znaleziono wybranej waluty.");
      return;
    }

    const rate = rates[currency].value;
    const resultValue = parseFloat(amount) * rate;

    setResult({
      from: currency,
      resultElement: resultValue,
    });
  };

  return { result, calculateResult, rates, loading, error, date };
};
