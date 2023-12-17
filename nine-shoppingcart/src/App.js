import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart';
import { Col, Container, Row } from "reactstrap";


function App() {

  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex( (array) => {
      return array.id === item.id
    })

    if (isAlreadyAdded !== -1) {
      toast("Item already addeed in cart", {type:"error"})
      return;
    }

    setCartItem([...cartItem,item] )
  }


  const buyNow = () => {
    setCartItem([])
    toast("Purchase Complete" , {type: "succes" })
  }

  const removeItem = (item) => {
    const items = cartItem.filter( (ci)=>( ci.id!==item.id ) );
    setCartItem(items)
    toast("Item removed" , {type: "succes" })
  }
 


  return (
    <Container fluid>
      <ToastContainer> </ToastContainer>
        <Row>
          <Col md="8">
            <BuyPage  addInCart={addInCart}></BuyPage>
          </Col>
          <Col md="4">
            <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
          </Col>
        </Row>
        
    </Container>


    
  );
}

export default App;
