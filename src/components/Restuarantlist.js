import React from 'react'
import { useState, useEffect } from 'react'
import Restaurantcards from './Restaurantcards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestuarantlistAction } from '../Actions/restaurantlistAction';
import { useDispatch, useSelector } from 'react-redux';


function Restuarantlist() {
  //to hold value//
  const [allRestuarents, setRestuarants] = useState([])//here array is to be fetched from json

  //funtion to cakl API to get all restaurant  items from restaurant.json
  // const getRestuarents=async()=>{
  //    await fetch('/restaurants.json')
  //    .then((data)=>{
  //     data.json()
  //     .then((result)=>{
  //       setRestuarants(result.restaurants);//to convert array of  object to array
  //       // console.log(result);
  //     })
  //     // console.log(data);
  //    })
  // }
  // console.log(allRestuarents);
  const dispatch = useDispatch();

  const result = useSelector(state => state.restaurantReducer)//useSelector is a hook it is used to update the value from store to component
  console.log(result);
  const { restaurantList } = result
  useEffect(() => {
    // getRestuarents()
    dispatch(RestuarantlistAction())
  }, [])

  return (
    <Row>{
      restaurantList.map(item => (
        // <h1>{item.name}</h1>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Restaurantcards restaurant={item} /></Col>
      ))
    }
    </Row>
  )
}

export default Restuarantlist