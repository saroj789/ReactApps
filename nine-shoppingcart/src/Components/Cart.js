import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Container, ListGroup, ListGroupItem, Row, Col ,Button} from "reactstrap";


const Cart = ({cartItem, removeItem, buyNow}) => {
    let amout = 0;

    cartItem.forEach(item => {
        amout = parseFloat(amout) + parseFloat(item.productPrice);
    });

    return (
        <Container fluid>
            <h1 color="text-success">Your Cart</h1>
            <ListGroup>
                { cartItem.map((item) => (
                    <ListGroupItem key={item.id}>
                        <Row >
                            <Col md="4">
                                <img height="80" src={item.tinyImage} />
                            </Col>
                            <Col md="8" className="d-flex justify-content-center align-items-center" >
                                <span className="text-primary">
                                    {item.productName}
                                </span>
                                <span className="mx-3 ">{item.productPrice}</span>
                                <Button className="" color="danger" onClick = {() => removeItem(item) }>
                                    Remove
                                </Button>
                            </Col>
                        </Row>
                    </ListGroupItem>   
                  ))
                }
            </ListGroup>
          
            {/* // if everything is empty */}
            {
                cartItem.length >= 1 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>   Grand Total </CardHeader>
                        <CardBody>
                            Your amount for {cartItem.length} product is {amout}
                        </CardBody>
                        <CardFooter>
                            <Button color="success" onClick={buyNow}>
                                Pay Here
                            </Button>
                        </CardFooter>
                    </Card>
                    ) : (
                    <h1 className="text-warning">Your cart is empty</h1>
                    )
            }


        </Container>
    )
}

export default Cart;