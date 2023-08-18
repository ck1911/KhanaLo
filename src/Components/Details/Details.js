import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Badge, Button, Col, Modal, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Context/auth_context";

function Details() {
  const { id } = useParams();
  const [foodDetails, setFoodDetails] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [price, setPrice] = useState(Math.floor(Math.random() * 20 + 10));
  const [quantity, setQuantity] = useState(1);
  const [boughtItem, setBoughtItem] = useState({});

  const { setHistory } = useContext(AuthContext);
  useEffect(() => {
    console.log(id);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        console.log(res.data.meals[0]);
        setFoodDetails(res.data.meals[0]);
      });

    return () => {};
  }, []);

  return (
    <div>
      <Modal show={modalShow}>
        <Modal.Header>
          <Modal.Title>Buy this item?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={3}>
              <img width={"100%"} src={foodDetails.strMealThumb} />
            </Col>
            <Col md={7}>
              <h4 style={{ fontWeight: "400", wordSpacing: "2" }}>
                {foodDetails.strMeal}
              </h4>
              <h4
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "rgb(118, 118, 118)",
                  wordSpacing: "2",
                }}
              >
                {foodDetails.strArea}
              </h4>
              <h5
                style={{
                  fontWeight: "400",
                  fontSize: "18px",
                  wordSpacing: "2",
                }}
              >
                ${price}
              </h5>
            </Col>
            <Col md={2}>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                style={{width:"50px"}}
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", marginTop: "30px" }}>
            <button
              style={{
                backgroundColor: "rgb(241,125,64)",
                width: "100px",
                height: "40px",
                border: "0",
                borderRadius: "5px",
                color: "white",
                marginBottom: "10px",
              }}
              onClick={(e) => {
                setHistory((his) => [
                  ...his,
                  {
                    idMeal: foodDetails.idMeal,
                    strMealThumb: foodDetails.strMealThumb,
                    strMeal: foodDetails.strMeal,
                    price: price,
                    date: new Date(),
                    quantity: parseInt(quantity),
                  },
                ]);
                console.log( {
                    idMeal: foodDetails.idMeal,
                    strMealThumb: foodDetails.strMealThumb,
                    strMeal: foodDetails.strMeal,
                    price: price,
                    date: new Date(),
                    quantity: parseInt(quantity),
                  })
                setModalShow(false)
              }}
            >
              Buy
            </button>
            <button
              style={{
                backgroundColor: "rgb(124, 121, 119)",
                width: "100px",
                height: "40px",
                border: "0",
                borderRadius: "5px",
                color: "white",
                marginBottom: "10px",
                margin: "0 5px 0 10px",
              }}
              onClick={(e) => {
                setModalShow(false);
              }}
            >
              Close
            </button>
          </Row>
        </Modal.Body>
      </Modal>
      <Row>
        <Col md={7}>
          <img width={"100%"} src={foodDetails.strMealThumb} />
        </Col>
        <Col md={5} style={{ padding: "0 50px" }}>
          <h4 style={{ fontWeight: "400", wordSpacing: "2" }}>
            {foodDetails.strMeal}
          </h4>
          <h4
            style={{
              fontWeight: "400",
              fontSize: "14px",
              color: "rgb(118, 118, 118)",
              wordSpacing: "2",
            }}
          >
            {foodDetails.strArea}
          </h4>
          <h5 style={{ fontWeight: "400", fontSize: "18px", wordSpacing: "2" }}>
            ${price}
          </h5>
          <button
            style={{
              backgroundColor: "rgb(241,125,64)",
              width: "100px",
              height: "40px",
              border: "0",
              borderRadius: "70px",
              color: "white",
              marginBottom: "20px",
            }}
            onClick={(e) => {
              setModalShow(true);
            }}
          >
            Buy
          </button>
          <h4 style={{ fontWeight: "400", fontSize: "20px", wordSpacing: "2" }}>
            Cooking Instructions
          </h4>
          <h5
            style={{
              fontWeight: "400",
              fontSize: "14px",
              color: "rgb(94, 94, 94)",
              wordSpacing: "2",
            }}
          >
            {foodDetails.strInstructions}
          </h5>

          <h5
            style={{
              fontWeight: "400",
              fontSize: "20px",
              wordSpacing: "2",
              marginTop: "20px",
            }}
          >
            Tags
          </h5>
          {foodDetails.strTags?.split(",").map((tag) => (
            <Badge bg="secondary" style={{ margin: "1px 2px" }}>
              {tag}
            </Badge>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default Details;
