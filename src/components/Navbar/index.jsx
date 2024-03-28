import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav>
      {/* <Link className=""  to="/"> Home</Link> */}

      <ul style={{ cursor: "pointer" }}>
        <li
          onClick={() => navigate("/")}
          style={{
            color: `${location.pathname == "/" ? "yellow" : ""}`,
          }}
        >
          Start
        </li>
        <li
          onClick={() => navigate("/todos")}
          style={{
            color: `${location.pathname == "/todos" ? "red" : ""}`,
          }}
        >
          Todos
        </li>
        <li
          onClick={() => navigate("/count")}
          style={{
            color: `${location.pathname == "/count" ? "purple" : ""}`,
          }}
        >
          Count
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
