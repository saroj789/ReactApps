import React, { useState } from 'react';
import Icon from './components/Icon';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, CardBody, Container, Button, Col, Row} from "reactstrap";
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const itemArray = new Array(9).fill("empty");


const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [winMsg, setWinMsg] = useState("")

  
  const reloadGame= () => {
    setWinMsg("")
    setIsCross(false)
    itemArray.fill("empty",0,9)
  };

  const checkIsWinner = () => {

    if ( itemArray[0]!=="empty" &&
      itemArray[0]===itemArray[1] &&
      itemArray[0]===itemArray[2]
    ) {
      setWinMsg(`${itemArray[0]} won`)
    }

    else if ( itemArray[3]!=="empty" &&
      itemArray[3]===itemArray[4] &&
      itemArray[3]===itemArray[5]
    ) {
      setWinMsg(`${itemArray[3]} won`)
    }

    else if ( itemArray[6]!=="empty" &&
      itemArray[6]===itemArray[7] &&
      itemArray[6]===itemArray[8]
    ) {
      setWinMsg(`${itemArray[6]} won`)
    }

    else if ( itemArray[0]!=="empty" &&
      itemArray[0]===itemArray[3] &&
      itemArray[0]===itemArray[6]
    ) {
      setWinMsg(`${itemArray[0]} won`)
    }

    else if ( itemArray[1]!=="empty" &&
      itemArray[1]===itemArray[4] &&
      itemArray[1]===itemArray[7]
    ) {
      setWinMsg(`${itemArray[1]} won`)
    }

    else if ( itemArray[2]!=="empty" &&
      itemArray[2]===itemArray[5] &&
      itemArray[2]===itemArray[8]
    ) {
      setWinMsg(`${itemArray[2]} won`)
    }

    else if ( itemArray[0]!=="empty" &&
      itemArray[0]===itemArray[4] &&
      itemArray[0]===itemArray[8]
    ) {
      setWinMsg(`${itemArray[0]} won`)
    }

    else if ( itemArray[2]!=="empty" &&
      itemArray[2]===itemArray[4] &&
      itemArray[2]===itemArray[6]
    ) {
      setWinMsg(`${itemArray[2]} won`)
    }
    
  };


  const changeItem =  (itemNumber) => {
    if (winMsg) {
      return toast(`Already ${winMsg}s ! Reload to play again`,{type:"success"})
    }

    if (itemArray[itemNumber]==="empty") {
      itemArray[itemNumber] = isCross ? "cross" : 'circle';
      setIsCross(!isCross);
      // checkIsWinner()

    }else{
      return toast("Already filled",{type:"error"});
    }

    checkIsWinner()
    // checking winnwer after every move
  };

  return (
    <>
      <Container className='p-5'>
        <ToastContainer className="bottom-center" />
        <Row>
          <Col md={6} className="offset-md-3">

            {winMsg ? (
                <div className="my-2">
                  <h1 className="text-primary text-center text-uppercase">
                    {winMsg}
                  </h1>
                  <Button color="success" block onClick={reloadGame} > Reload The Game</Button>
                </div> 

            ) : (

              <h1 className="text-warning text-center">
                {
                  isCross ? "Cross" : "Circle"
                } turns
              </h1>
            )}

            <div className='grid'>
              { itemArray.map( (item, index) => (
                <Card color='warning' onClick={() => changeItem(index) }>
                  <CardBody className='box'>
                    <Icon name={item} />
                  </CardBody>
                </Card>
              ) ) }
            </div>

          </Col>
        </Row>

      </Container>
      
    </>
  );
}

export default App;
