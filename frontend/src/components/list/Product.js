import { Card, Title, Type, Description, Block, SellingPrice, BestPrice, Button } from './Styled'

const ProductItem = ({ name, ingredients, description, sellingPrice, bestPrice, bindAddItemToCart }) => {
    return (
        <>
            <Card key>
                <Title>{name}</Title>
                <Type><strong>Ingredients:</strong> <br></br> {ingredients}</Type>
                <Description><strong>About:</strong> <br></br>{description}</Description>
                <Block>
                    <SellingPrice>R$ {sellingPrice}</SellingPrice>
                    <BestPrice>R$ {bestPrice}</BestPrice>
                </Block>
                <Button value={name} onClick={bindAddItemToCart}>Add to cart</Button>
            </Card>
        </>
    )
}

export default ProductItem
