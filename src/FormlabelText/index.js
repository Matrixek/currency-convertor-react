import "./style.css"

const formlabelText = () => (
    <input type="number" className="form__field" min="0" step="0.01" name="value"
        placeholder="Wpisz kwotę w zł" required />
);

export default formlabelText;