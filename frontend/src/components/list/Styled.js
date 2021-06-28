import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(4, 1fr);

    max-width: 1250px;
    margin: 50px auto;

    @media (max-width: 575.98px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (min-width: 575.99px) and (max-width: 991.98px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

export const Card = styled.div`
    text-align: center;
    border-radius: 10px;
    background-color: #f1f1f1;
    padding: 40px 0;

    @media (max-width: 575.98px) {
        margin: 0 15px;
    }
`

export const Title = styled.h3`
    font-size: 24px;
    font-weight: 600;
    text-decoration: underline;
    margin-top: 0;
`

export const Type = styled.p``

export const Description = styled.p``

export const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SellingPrice = styled.p`
    text-decoration: line-through;
    color: #ccc;
    margin-right: 10px;
    font-weight: 100;
    text-transform: uppercase;
    font-size: 14px;
`

export const BestPrice = styled.p`
    font-weight: 600;
    text-transform: uppercase;
    font-size: 16px;
`

export const Button = styled.button`
    border-radius: 10px;
    width: 70%;
    height: 40px;
    background: #000;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    border: 0;
    cursor: pointer;

    &:hover {
        background-color: #1a1919;
    }
`