// A small reusable component: label + input (children) + error message.
// Teaching point: "children" lets one component wrap any kind of input.
function FormField({ label, id, error, children }) {
  return (
    <div className={`field ${error ? "field-invalid" : ""}`}>
      <label htmlFor={id}>{label}</label>

      {children}

      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormField;