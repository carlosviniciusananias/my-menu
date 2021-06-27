import React from "react"

import { Container, Logo, Cart } from './Styled'

const Header = () => {
    return (
        <Container>
            <Logo>
                <img src="http://placehold.it/120x40" alt="" />
            </Logo>
            <Cart>
                <img src="http://placehold.it/40x40" alt="" />
            </Cart>
        </Container>
    );
};

export default Header;
