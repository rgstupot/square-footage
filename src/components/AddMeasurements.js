export default function AddMeasurements({ setLength, setWidth, handleSubmit }) {
  return (
    <>
      <form className="container-fluid" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Length</label>
          <input
            type="number"
            className="form-control"
            aria-describedby="lengthHelp"
            onChange={(e) => setLength(Number(e.target.value))}
            required
          />
          <div id="lengthHelp" className="form-text">
            Enter measurement in feet.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Width</label>
          <input
            type="number"
            className="form-control"
            aria-describedby="widthHelp"
            onChange={(e) => setWidth(Number(e.target.value))}
            required
          />
          <div id="widthHelp" className="form-text">
            Enter measurement in feet.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Calculate
        </button>
      </form>
    </>
  );
}
