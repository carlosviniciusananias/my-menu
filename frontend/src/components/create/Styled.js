import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1250px;
    margin: 50px auto 100px auto;
    text-align: center;

    form {
        max-width: 50%;
        margin: 0 auto;
    }
`

export const Title = styled.h2``

export const Block = styled.div`
    grid-gap: 10px;
    
    input {
        display: block;
        box-sizing: border-box;
        width: 100%;
        border-radius: 4px;
        border: 1px solid #000;
        padding: 10px 15px;
        margin-bottom: 10px;
        font-size: 14px;
    }
`

export const Label = styled.label`
    display: block;
`

export const Error = styled.span`
    display: block;
    color: red;
    font-size: 12px;
    margin-top: 2px;
`

export const Button = styled.input`
    border-radius: 10px;
    height: 40px;
    width: 50%;
    background: #000;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    border: 0;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #1a1919;
    }
`