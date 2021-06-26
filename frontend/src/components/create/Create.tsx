import React, { useEffect } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"

import { Block, Label, Error } from './Styled'

const Create = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data: any) => {
        console.log('data', data)
        postData(data)
    }

    useEffect(() => {

    }, [])

    async function postData(data: any) {
        if (data) {
            await axios({
                method: "POST",
                url: "http://localhost:3000/menu",
                headers: { 'Content-type': 'application/json' },
                data: {
                    name: data.name,
                    type: data.type,
                    description: data.description,
                    sellingPrice: Number(data.sellingPrice),
                    bestPrice: Number(data.bestPrice),
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Block>
                    <Label>Name</Label>
                    <input type="text" {...register("name", { required: true, maxLength: 40 })} />
                    {errors.name && <Error>This name field is required</Error>}
                </Block>

                <Block>
                    <Label>Type</Label>
                    <input type="text" {...register("type", { required: true })} />
                    {errors.type && <Error>This type field is required</Error>}
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

                <input type="submit" />
            </form>
        );
    };

    return (
        <>
            <MountForm />
        </>
    );
};

export default Create;
