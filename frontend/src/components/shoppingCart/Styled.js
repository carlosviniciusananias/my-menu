import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
`

export const CartBox = styled.div`
    position: fixed;
    bottom: 0;
    width: 98%;
    background-color: #f1f1f1;
    padding: 20px;
    box-shadow: -20px -5px 8px #f1f1f1;
    text-align: center;
`

export const CartTitleBox = styled.div`
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
`

export const CartItems = styled.ul`
    list-style: none;
    padding: 10px 0;
`

export const CartItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ItemName = styled.p`
    font-size: 14px;
    color: #000;
`

export const Close = styled.button`
    position: absolute;
    right: 50px;
    font-weight: 600;
`

export const Button = styled.button`
    border-radius: 10px;
    width: 90%;
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