import "./style.css";

const Form = () => {
    <form>
    <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>
        <p>
            <label>
                <span className="form__labelText">Podaj kwotę:* (PLN)</span>
                <input type="number" className="form__field" min="0" step="0.01" name="value"
                    placeholder="Wpisz kwotę w zł" required/>
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
    </fieldset>
</form>
}

export default Form;