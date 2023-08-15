export default function Result({ area, length, width }) {
  return (
    <>
      <div className="container">
        <div
          className="border broder-primary"
          style={{ width: `${length}rem`, height: `${width}rem` }}
        >
          <p className="d-flex justify-content-center">{length} ft.</p>
          <p className="d-flex justify-content-end alight-items-center">
            {width} ft.
          </p>
        </div>
        <p>The room is {area} square feet.</p>
      </div>
    </>
  );
}
