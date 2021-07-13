import React,{useEffect} from "react";
import { Container, Col, Row, Card, ListGroup, Button } from "react-bootstrap";
import {useSelector, useDispatch} from 'react-redux'
import {partnerLogin, jobDone} from '../redux/actions/action'
import {useHistory} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Job = () => {
  const { jobs, loader } = useSelector((state) => state._root);

  const notify = () => toast("Working!!!");

  const dispatch = useDispatch()
  const history = useHistory()

  const clickHandler = (d) =>{
      notify()
      dispatch(jobDone(d,()=>{
        window.location.reload();
      }))
  }

  useEffect(()=>{
      const temp = localStorage.getItem("phoneNumber")
      let data = {
        phoneNumber: Number(temp),
      };
      if (data){
          dispatch(partnerLogin(data))
      }
      else{
          history.push('/')
      }
  },[])
  return (
      <>
    <ToastContainer />
    <Container className="mt-5">
      <Col md={8} className="m-auto">
          <h4 className="text-center">JOBS FOR YOU</h4>
          {jobs && jobs.length !== 0 ? (
            jobs.map((j) => (
              <Card key={j._id} className="m-3 p-3" style={{ width: "18rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item>Service: {j.serviceName}</ListGroup.Item>
                  <ListGroup.Item>Customer: {j.customerName}</ListGroup.Item>
                  <ListGroup.Item>Paid: {j.isPaid ? "YES" : "NO"}</ListGroup.Item>
                  <ListGroup.Item>Price: {j.price}</ListGroup.Item>
                  <ListGroup.Item>ServiceDate: {j.serviceDate}</ListGroup.Item>
                  <ListGroup.Item>TimeSlot: {j.timeSlot}</ListGroup.Item>
                  <ListGroup.Item>Address: {JSON.stringify(j.address)}</ListGroup.Item>
                  <ListGroup.Item><Button onClick={()=>clickHandler({bookingId:j._id, serviceProviderId: j.serviceProviderId})} variant="outline-primary" type="button">Done</Button></ListGroup.Item>
                </ListGroup>
              </Card>
            ))
          ) : (
            <>
              <h5>Oops.. No job found</h5>
            </>
          )}
      </Col>
    </Container>
    </>
  );
};

export default Job;
