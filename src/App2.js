import { useState } from "react";

let a = new Array(10000).fill(0);

function App2() {
  let [name, setName] = useState("");

  return (
    <div className="App">
      <input
        onChange={(e) => {
          setName(e.target.value.name);
        }}
      />
    </div>
  );
}
