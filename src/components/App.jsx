import React, { useState } from "react";

function App() {

  let time = new Date().toLocaleTimeString();
  const [current_t, time_Update] = useState(time);
  setInterval(set_time, 1000);
  

  function set_time() {
    const time2 = new Date().toLocaleTimeString();
    time_Update(time2); 
  }


  return (
    <div className="container">
      <h1>{current_t}</h1>
      <button onClick={set_time}>Get time</button>
    </div>
  );
}

export default App;