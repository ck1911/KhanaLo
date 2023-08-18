import React, { useContext } from 'react'
import { AuthContext } from '../../Context/auth_context';
import { Col, Row } from 'react-bootstrap';

function History() {
    const {history}=useContext(AuthContext)
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
            <div >
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
                  fontSize: "20px",
                  color: "rgb(74,74,74)",
                }}
              >
                {foodItem.strMeal?.toUpperCase()}
              </h6>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  
                 
                  
                  <h6
                    style={{
                      fontWeight: "500",
                      fontSize: "20px",
                      color: "rgb(74,74,74)",
                    }}
                  >
                    Total Cost : ${foodItem.price} X {foodItem.quantity} = ${foodItem.price*foodItem.quantity}
                  </h6>
                  <h6
                    style={{
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "rgb(74,74,74)",
                    }}
                  >
                    Buying Date : {foodItem.date?.getDay()}/{foodItem.date?.getMonth()}/{foodItem.date?.getDate()}
                  </h6>
                  
                </div>
                {/* <button
                  style={{
                    backgroundColor: "rgb(241,125,64)",
                    width: "100px",
                    height: "50px",
                    border: "0",
                    borderRadius: "70px",
                    color: "white",
                  }}
                >
                  Buy
                </button> */}
              </div>
            </div>
            </div>
            <hr style={{ color: "rgb(228, 227, 227)" }} />
          </div>
        );
      };
  return (
    <div>
        <h4 style={{ marginBottom: "20px", fontSize: "26px" }}>
                      HISTORY
                    </h4>
        <Row>
        {history.map((his)=>{
            return <Col md={3}><Card foodItem={his} /></Col>
        })}
        </Row>
        
    </div>
  )
}

export default History