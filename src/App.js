import { useState } from "react";
import Title from "./components/Title";
import AddMeasurements from "./components/AddMeasurements";
import Result from "./components/Result";

export default function App() {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [area, setArea] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (!length && !width) return;

    setArea(length * width);
  }

  return (
    <div>
      <Title />
      <AddMeasurements
        setLength={setLength}
        setWidth={setWidth}
        handleSubmit={handleSubmit}
      />
      {area > 0 ? <Result area={area} length={length} width={width} /> : <></>}
    </div>
  );
}
