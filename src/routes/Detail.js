import { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Context1 } from "./../App.js";

// const YellowBtn = styled.button`
//   background: yellow;
//   color: black;
//   padding: 10px;
// `;

// const Box = styled.div`
//   background: grey;
//   padding: 20px;
// `;
function Detail(props) {
  useEffect(() => {
    console.log("안녕");
    // for (var i = 0; i < 50000; i++) {
    //   console.log(1);
    // }

    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [tap, setTap] = useState(0);

  let { list, shoes } = useContext(Context1);

  let { id } = useParams();
  let findItem = props.shoes.find(function (x) {
    return x.id == id;
  });

  return (
    <div className="container">
      {/* {count} */}
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        + 버튼
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        - 버튼
      </button> */}
      {alert == true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}

      <div className="row">
        <div className="dol-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <br></br>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TapContent tap={tap} />
    </div>
  );
}
function TapContent({ tap }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      setFade("");
    };
  }, [tap]);

  return <div className={`start` + fade}>{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap]}</div>;
}

export default Detail;
