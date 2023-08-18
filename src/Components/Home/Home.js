import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import ReactPaginate from 'react-paginate';


function Home() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [foodByCategory, setFoodByCategory] = useState({});
  const [selectedCat, setSelectedCat] = useState("Beef");
  const categories = [
    {
      strCategory: "Beef",
    },
    {
      strCategory: "Breakfast",
    },
    {
      strCategory: "Chicken",
    },
    {
      strCategory: "Dessert",
    },
    {
      strCategory: "Goat",
    },
    {
      strCategory: "Lamb",
    },
    {
      strCategory: "Miscellaneous",
    },
    {
      strCategory: "Pasta",
    },
    {
      strCategory: "Pork",
    },
    {
      strCategory: "Seafood",
    },
    {
      strCategory: "Side",
    },
    {
      strCategory: "Starter",
    },
    {
      strCategory: "Vegan",
    },
    {
      strCategory: "Vegetarian",
    },
  ];

  const initial_foodByCategory = {
    Beef: [
      {
        strMeal: "Beef and Mustard Pie",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
        idMeal: "52874",
      },
      {
        strMeal: "Beef and Oyster pie",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
        idMeal: "52878",
      },
      {
        strMeal: "Beef Asado",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg",
        idMeal: "53071",
      },
      {
        strMeal:
          "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
        idMeal: "52997",
      },
    ],
    Breakfast: [
      {
        strMeal: "Breakfast Potatoes",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1550441882.jpg",
        idMeal: "52965",
      },
      {
        strMeal: "English Breakfast",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg",
        idMeal: "52895",
      },
      {
        strMeal: "Fruit and Cream Cheese Breakfast Pastries",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1543774956.jpg",
        idMeal: "52957",
      },
      {
        strMeal: "Full English Breakfast",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/sqrtwu1511721265.jpg",
        idMeal: "52896",
      },
      {
        strMeal: "Home-made Mandazi",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg",
        idMeal: "52967",
      },
      {
        strMeal: "Salmon Eggs Eggs Benedict",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1550440197.jpg",
        idMeal: "52962",
      },
      {
        strMeal: "Smoked Haddock Kedgeree",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1550441275.jpg",
        idMeal: "52964",
      },
    ],
    Chicken: [
      {
        strMeal: "Ayam Percik",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
        idMeal: "53050",
      },
      {
        strMeal: "Brown Stew Chicken",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg",
        idMeal: "52940",
      },
      {
        strMeal: "Chick-Fil-A Sandwich",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
        idMeal: "53016",
      },
      {
        strMeal: "Chicken & mushroom Hotpot",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",
        idMeal: "52846",
      },
      {
        strMeal: "Chicken Alfredo Primavera",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
        idMeal: "52796",
      },
    ],
  };

  useEffect(() => {
    let searchParam = searchParams.get("c");
    if (searchParam) {
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchParam}`
        )
        .then((res) => {
          setFoodByCategory({
            [searchParam]: res.data.meals,
          });
        });
    } else {
      setFoodByCategory(initial_foodByCategory);
    }

    return () => {};
  }, [selectedCat]);

  const Card = ({ foodItem }) => {
    return (
      <div
        style={{
          minHeight: "300px",
          borderRadius: "10px",
          padding: "0 5px",
          marginBottom: "30px",
        }}
      >
        <div onClick={()=>{navigate(`/food/${foodItem.idMeal}`)}}>
        <img
          src={foodItem.strMealThumb}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            marginBottom: "5px",
          }}
        />
        <div>
          <h6
            style={{
              fontWeight: "400",
              fontSize: "18px",
              color: "rgb(74,74,74)",
            }}
          >
            {foodItem.strMeal?.toUpperCase()}
          </h6>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h5 style={{ fontWeight: "500", fontSize: "20px" }}>
                ${Math.floor(Math.random() * 20 + 5)}
              </h5>
              <h6
                style={{
                  fontWeight: "400",
                  fontSize: "15px",
                  color: "rgb(74,74,74)",
                }}
              >
                {Math.floor(Math.random() * 50 + 20)}% OFF
              </h6>
            </div>
            <button
              style={{
                backgroundColor: "rgb(241,125,64)",
                width: "100px",
                height: "50px",
                border: "0",
                borderRadius: "70px",
                color: "white",
              }}
            >
              View
            </button>
          </div>
        </div>
        </div>
        <hr style={{ color: "rgb(228, 227, 227)" }} />
      </div>
    );
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h5 style={{ fontWeight: "400" }}>CATEGORIES</h5>
        <div>Filter</div>
      </div>
      <hr />
      <div>
        <Row>
          <Col
            md={2}
            style={{
              position: "-webkit-sticky",
              position: "sticky",
              top: 0,
            }}
          >
            {categories.map((category) => {
              return (
                <h6
                  style={{
                    fontWeight: "400",
                    padding: "5px 0",
                    color:
                      selectedCat === category.strCategory
                        ? "rgb(241,125,64)"
                        : "rgb(74,74,74)",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    setSelectedCat(category.strCategory);
                    navigate(`/?c=${category.strCategory}`);
                  }}
                >
                  {category.strCategory}
                </h6>
              );
            })}
          </Col>
          <Col
            md={10}
            style={{
              position: "-webkit-sticky",
              display: "block",
              position: "sticky",
              top: 0,
            }}
          >
            <div>
              {Object.entries(foodByCategory).map(([key, value]) => {
                return (
                  <>
                    <h4 style={{ marginBottom: "20px", fontSize: "26px" }}>
                      {key?.toUpperCase()}
                    </h4>
                    <Row style={{ marginBottom: "10px" }}>
                      {foodByCategory[key].map((cat) => {
                        return (
                          <Col md={4}>
                            {" "}
                            <Card foodItem={cat} />
                          </Col>
                        );
                      })}
                    </Row>
                  </>
                );
              })}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
