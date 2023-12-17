import React, {useState, useEffect} from "react";
import Axios from "axios";
import {faker} from "@faker-js/faker";
// import {random, commerse} from "faker";
import { Container, Col, Row, Form} from "reactstrap"
import CartItem from "./CartItem";

//  go this https://myjson.dit.upm.es/
// to put json on url
// url - http://myjson.dit.upm.es/api/bins/2upk

// const apiKey = "INSERT_YOUR_PIXEL_API_KEY";
// const url    = "https://api.pexels.com/v1/search?query=laptop&page=6&per_page=40"
const localurl = "http://myjson.dit.upm.es/api/bins/2upk"

const BuyPage = ({addInCart}) => {
    
    const [product, SetProduct] = useState([]);

    // const fetchPhotos = async () => {
    //     const response = await Axios.get(url, {
    //         header : {
    //             Authorization : apiKey
    //         }
    //     } );
    // };

    const fetchPhotos = async () => {
        const {data} = await Axios.get(localurl)
    
        const {photos} = data;
        // const photos = data.photos

        const allProduct = photos.map((photo) => (
            {
            mediumImage : photo.src.medium,
            tinyImage  : photo.src.tiny,
            productName : faker.commerce.product(),
            productPrice : faker.commerce.price(),
            id          : faker.datatype.uuid()
            }
        ));
        SetProduct(allProduct)
    };


    useEffect(() => {
        fetchPhotos()
    },[]) 


    return (
        <Container fluid>
            <h1 className="text-center text-success">
                Buy Page
            </h1>
            <Row>
                {product.map( (p) => (
                    <Col md={4} key={p.id}>
                        <CartItem product={p} addInCart={addInCart} />
                    </Col>
                ) )}
            </Row>
        </Container>
    )



};

export default BuyPage;