import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1250px;
    margin: 100px auto 0 auto;
`

export const Info = styled.div`
    text-align: center;
    margin-bottom: 30px;
    font-size: 16px;

    span {
        display: block;
        font-weight: 400;
        margin-bottom: 10px;
    }
`

export const Payments = styled.div`
    img {
        margin: 0 5px;
        max-width: 100%;
        width: 20%;
    }
`

export const Credits = styled.span`
    display: block;
    text-align: center;
    font-size: 12px;
    max-width: 50%;
    margin: 15px auto;
`