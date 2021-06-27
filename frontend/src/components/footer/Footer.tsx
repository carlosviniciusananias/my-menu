import React from "react"

import { Container, Payments, Credits } from './Styled'

const Footer = () => {
    return (
        <Container>
            <Payments>
                <img src="http://placehold.it/25x25" alt="" />
                <img src="http://placehold.it/25x25" alt="" />
                <img src="http://placehold.it/25x25" alt="" />
                <img src="http://placehold.it/25x25" alt="" />
            </Payments>
            <Credits>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis, harum quam officia doloribus dolore beatae delectus, praesentium provident alias, dolor culpa doloremque tempora. Minus ipsum ducimus fugiat laborum quidem!</Credits>
        </Container>
    );
};

export default Footer;
