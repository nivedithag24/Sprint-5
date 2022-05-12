import React, { useContext } from "react";
import { CountContext } from "./contextwrap";

function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component F - {CountContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>Incement</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentF;
