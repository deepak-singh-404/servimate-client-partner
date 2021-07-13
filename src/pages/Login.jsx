import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { partnerLogin } from "../redux/actions/action";

//Component
import Loader from "../components/Loader"

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const { loader } = useSelector(store => store._root);
  const history = useHistory();

  const formHandler = (e) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length !== 10) {
      alert("Invalid Phone Number");
      return;
    }
    localStorage.setItem("phoneNumber",phoneNumber)
    let data = {
      phoneNumber: Number(phoneNumber),
    };
    dispatch(
      partnerLogin(data, () => {
        history.push("/jobs");
      })
    );
  };

  return (
    <Container>
      <Row className="mx-auto my-auto">
        <Col md={5} className="my-auto">
          <h5 className="text-center">WELCOME TO SERVIMATE</h5>
          <Form onSubmit={formHandler}>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="number"
                placeholder="Enter Phone Number"
              />
            </Form.Group>
            {loader ? (
              <Loader />
            ) : (
              <Button variant="outline-primary" type="submit">
                Submit
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
