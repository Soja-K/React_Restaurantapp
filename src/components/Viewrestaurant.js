import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Restoperation from './Restoperation';
import Restreview from './Restreview';

function Viewrestaurant() {
    const params=useParams()
    console.log(params.id);
     //to hold value//
     const [allRestuarents,setRestuarants]=useState([])//here array is to be fetched from json

     //funtion to cakl API to get all restaurant  items from restaurant.json
     const getRestuarents=async()=>{
        await fetch('/restaurants.json')
        .then((data)=>{
         data.json()
         .then((result)=>{
           setRestuarants(result.restaurants);//to convert array of  object to array
           // console.log(result);
         })
         // console.log(data);
        })
     }
     // console.log(allRestuarents);
     useEffect(()=>{
         getRestuarents()
     },[])
     console.log(allRestuarents);
     const viewrest=allRestuarents.find(item=>item.id==params.id)
     console.log(viewrest);

  return (
    <>
    { 
    viewrest?
    (
        <Row>
            <Col>
            <Image src={viewrest.photograph} fluid/>
        
            </Col>
            <Col>
       <h3> Name:{viewrest.name}</h3>
       <p>Id:{viewrest.id}</p>
       <b><p> Neighborhood:{viewrest.neighborhood}</p></b>
       <b><p> Address:{viewrest.address}</p></b>
       <b><p> Cuisine type:{viewrest.cuisine_type}</p></b>
       <Restoperation operate={viewrest.operating_hours}/>
       <Restreview review={viewrest.reviews}/>
       



            </Col>
            
        </Row>

    ):'null'
   
    }
     </>

  )
}

export default Viewrestaurant