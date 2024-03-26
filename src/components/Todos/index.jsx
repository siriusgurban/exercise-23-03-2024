import { useEffect, useState } from "react";

function Todos() {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.log(error, "error");
      }
    }

    getData();
  }, [todos]);

  function handleInp(e) {
    let value1 = e.target.value;
    setTodo({ title: value1, completed: true });

    console.log(todo, "todo");
  }

  function handleAdd() {
    setTodos((todos) => [todo, ...todos]);
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column gap-5">
        <div className="d-flex gap-5 w-50">
          <h1>Todos</h1>
          <input
            className="form-control"
            onChange={(e) => handleInp(e)}
            value={todo?.title}
          />
          <button className="btn btn-primary" onClick={handleAdd}>
            Add
          </button>
        </div>
        <div className="d-flex flex-wrap gap-3 p-3">
          {todos?.map((item, index) => {
            return (
              <div
                className="card bg-dark"
                style={{ width: 250 + "px" }}
                key={index}
              >
                <div className="card-body text-white">
                  <h5
                    className={`card-title ${
                      item.completed ? "text-uppercase" : ""
                    }`}
                  >
                    Title: {item.title}
                  </h5>
                  <p className="card-text">
                    Completed:{item.completed ? "true" : "false"}
                  </p>
                  <p className="card-text">User Id: {item.id}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Todos;
