import { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState(222);
  const [random, setRandom] = useState(0);

  useEffect(() => {
    setRandom(Math.round(Math.random(10)));
  }, [count]);

  function handleCount() {
    setCount((prev) => prev * random);
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
