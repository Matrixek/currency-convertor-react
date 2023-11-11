import formlabelText from "./FormlabelText";
import Container from "./Container";
import FormHeader from "./FormHeader";

function App() {
  return (
  <Container>
            <div className="form_header">
                <FormHeader/>
                </div>
                <p>
                    <label>
                        <div className="form__labelText">Podaj kwotę:* (PLN)
                        <formlabelText/>
                        </div>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Wybierz walutę:</span>
                        <select className=" form__field form__field--select" name="currency">
                            <option value="EUR">EUR - Euro</option>
                            <option value="USD">USD - Dolar</option>
                            <option value="GPB">GPB - Funt brytyjski</option>
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Wynik:</span>
                        <input className="form__field" name="value" readonly/>
                    </label>
                </p>
                <p>
                    * - pole wymagane
                </p>
                <p>
                    <button className="form__button">Przelicz</button>
                </p>
                <p>
                    <button type="reset" className="form__button" name="value">Wyczyść</button>
                </p>
                <p>
                    Kurs z dnia: 21.01.23
                </p>
        </Container>
  ) 
}

export default App;
