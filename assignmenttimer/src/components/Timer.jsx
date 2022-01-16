import { useEffect, useState } from "react";

export const Timer = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [effect, setEffect] = useState(false);
  useEffect(() => {
    if (effect) {
      const id = setInterval(() => {
        setStart((e) => {
          if (+(end) === e) {
            clearInterval(id);
            setEffect(!effect);
            return 0;
          }
          return +(e) + 1;
        });
      }, 1000);

      return () => {
        clearInterval(id);
      };
    }
  }, [effect, end]);
  return (
    <div>
      <h1>starting time : {start}</h1>
      <h1>end time : {end}</h1>
      <br />
      <label>enter start time </label>
      <input type="number" onChange={(e) => setStart(e.target.value)}></input>
      <br />
      <label>enter end time</label>
      <input type="number" onChange={(e) => setEnd(e.target.value)}></input>
      <br />
      <button onClick={() => setEffect(!effect)}>
        {effect ? "Pause The Timer" : "Start The Timer"}
      </button>
    </div>
  );
};