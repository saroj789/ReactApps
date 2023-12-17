import {Card,CardImg,CardBody,CardTitle, CardText, Button} from "reactstrap"

const CartItem = ({product, addInCart}) => {

    return(
        <Card className="my-2">
            <CardImg 
            top
            height="250"
            width="100%"
            src = {product.mediumImage}
            />
            <CardBody className="text-center" >
                <CardTitle>  {product.productName}</CardTitle>
                <CardText className="secondaty">
                    Price : RS {product.productPrice}
                </CardText>
                <Button color="success"
                onClick={ () => addInCart(product) }
                >
                    Buy Now
                </Button>
            </CardBody>
        </Card>
    )
}

export default CartItem;