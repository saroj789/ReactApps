import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  Form
} from "reactstrap";

import UserCard from "../Components/UserCard";
import Repos from "../Components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";


const Home = () => {

    const context = useContext(UserContext);
    const [query, setQuery] = useState("");
    
    const [gitUser,setGituser] = useState(null);

    const fetchDetails = async () => {
        try {
            const {data} = await Axios.get(`https://api.github.com/users/${query}`)
            setGituser(data);
        } catch (error) {
            toast("Not able to locate user",{type:"error"})
        }
    }
  
    const handleFormSubmit = (e) => {
			e.preventDefault();
      // setGituser("")
			fetchDetails();
		}

  // show homwpage if user is logged in:
  // put anything behind login

  
  if (!context.user?.uid) {
      return <Redirect to="/signin" />
  }


  return (
    <Container>
        <Row className="mt-3">
            <Col md="5">
              <Form onSubmit={handleFormSubmit}>
                <InputGroup>
                    <Input 
                        type="text"
                        value={query}
                        placeholder="Please provide the git username .."
                        onChange={(e)=>(setQuery(e.target.value))}
                    />

                    <Button color="primary">
                        Fetch User
                    </Button>
                </InputGroup>
              </Form>

                { gitUser ? (
                    <UserCard gitUser={gitUser} />
                    ) : (null) }
            </Col>
            <Col md="6" >
              { gitUser ? (
                  <Repos repos_url={gitUser.repos_url} />
              ) : (null) }
            </Col>
        </Row>
    
    </Container>
  );
};

export default Home;
