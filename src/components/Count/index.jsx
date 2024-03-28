import { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState(22);
  const [random, setRandom] = useState(1);

  // useEffect(() => {
  //   setRandom(Math.round(Math.random() * 10));
  //   console.log(Math.round(Math.random() * 10), "random");
  // }, [count]);

  function handleCount() {
    setRandom(Math.round(Math.random() * 10) + 1);
    console.log(random, "rnd");
    let newNumber = count * random;
    setCount(newNumber);
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column gap-5">
        <h1>Count page</h1>
        {console.log(count, "count")}
        <button className="btn btn-primary" onClick={handleCount}>
          Count
        </button>
        <h1 className="bg-success">{count}</h1>
      </div>
    </>
  );
}

export default Count;
