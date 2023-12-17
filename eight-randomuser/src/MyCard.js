import React from "react";
import {Card,CardBody,CardTitle, CardText} from "reactstrap"
import { } from "react-icons"

const MyCard = ({details}) => {
    console.log('hiii' , details);
   
    return (
        <Card className="text-center" >
            <CardBody>
                <img height="150" width="150" 
                    alt="profile"
                    className="rounded-circle img-thumbnail border-danger"
                    src={details.picture?.large}
                />
                <CardTitle className="text-primary">
                    <h1>
                        <span className="pr-2">{details.name?.title}</span>
                        <span className="pr-2">{details.name?.first}</span>
                        <span className="pr-2">{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    {details.location?.city} <br/>
                    {details.phone}
                </CardText>
                
            </CardBody>
        </Card>
    )

}

export default MyCard;