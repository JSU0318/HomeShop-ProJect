import { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import data from "./data.js";
import Cart from "./routes/Cart.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";
import axios from "axios";

export let Context1 = createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let [list] = useState([10, 11, 12]);
  let navigate = useNavigate();

  let obj = { name: "kim" };
  localStorage.setItem("data", JSON.stringify(obj));
  let checkout = localStorage.getItem("data");
  JSON.parse(checkout);
  console.log(checkout);

  //   useEffect(()=>{
  //     localStorage.setItem('watched', JSON.stringify( [] ))
  //   },[])

  // }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeSHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i} />;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  axios.get("https://codingapple1.github.io/shop/data2.json").then((data) => {
                    console.log(data.data);
                    console.log(shoes);
                    let copy = [...shoes, ...data.data];
                    setShoes(copy);
                  });
                  // axios.post('safdfas', { name: 'kim'})
                }}
              >
                더 보기
              </button>
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={(list, shoes)}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>404 ForBidden</div>} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치임</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  );
}
function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
