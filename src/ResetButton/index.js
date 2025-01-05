import "./style.css";

const ResetButton = () => {
  const reset = () => {
    window.location.reload();
  };

  return (
      <button
        className="form__button--reset"
        type="button"
        onClick={(event) => {
          event.preventDefault();
          reset();
        }}
      >
        Reset
      </button>
  );
};

export default ResetButton;
