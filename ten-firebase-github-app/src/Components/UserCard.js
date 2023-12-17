import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
} from "reactstrap"


const UserCard = ( {gitUser} ) => {
    return ( 
        <Card className="text-center mt-3 mb-4" >
            <CardImg src={gitUser.avatar_url} className="img-thumnail" />
            <CardBody>
                <CardTitle className="text-primary">
                    <a href={gitUser.html_url} target="_blank" rel="noreferrer" className="text-decoration-none" >{gitUser.name}</a> 
                </CardTitle>
                <CardText className="text-primary">{gitUser.location }</CardText>
                <CardText className="text-primary">{gitUser.bio }</CardText>
                <CardText className="text-info">
                    Available for hire : {gitUser.hirable ? "YES" : "NOPE"}
                </CardText>
            </CardBody>
        </Card>
     );
}

export default UserCard ;