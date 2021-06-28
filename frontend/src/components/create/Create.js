import React, { useEffect } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"

import { Container, Title, Block, Label, Error, Button } from './Styled'

const Create = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const onSubmit = (data) => {
        postData(data)
        reset()
        window.location.reload()
    }

    useEffect(() => {

    }, [])

    async function postData(data) {
        if (data) {
            await axios({
                method: "POST",
                url: "http://localhost:3000/menu",
                headers: { 'Content-type': 'application/json' },
                data: {
                    name: data.name,
                    type: data.type,
                    ingredients: data.ingredients,
                    description: data.description,
                    sellingPrice: data.sellingPrice,
                    bestPrice: data.bestPrice,
                }
            })
                .then(function (response) {
                    console.log('response', response)
                })
                .catch(function (error) {
                    console.log(error)
                })
        } else {
            console.log('não foi um sucesso o postData')
        }
    }

    const MountForm = () => {
        return (
            <Container>
                <Title>Register your menu</Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Block>
                        <Label>Name</Label>
                        <input type="text" {...register("name", { required: true, maxLength: 40 })} />
                        {errors.name && <Error>This name field is required</Error>}
                    </Block>

                    <Block>
                        <Label>Ingredients</Label>
                        <input type="text" {...register("ingredients", { required: true })} />
                        {errors.ingredients && <Error>This Ingredients field is required</Error>}
                    </Block>

                    <Block>
                        <Label>Description</Label>
                        <input type="text" {...register("description", { required: false })} />
                    </Block>

                    <Block>
                        <Label>Selling price</Label>
                        <input type="text" {...register("sellingPrice", { required: true })} />
                        {errors.sellingPrice && <Error>This selling price field is required</Error>}
                    </Block>

                    <Block>
                        <Label>Best price</Label>
                        <input type="text" {...register("bestPrice", { required: true })} />
                        {errors.bestPrice && <Error>This best price field is required</Error>}
                    </Block>

                    <Button type="submit" />
                </form>
            </Container>
        );
    };

    return (
        <>
            <MountForm />
        </>
    );
};

export default Create;
