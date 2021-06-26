import React, { useState, useEffect } from "react";
import axios from "axios";

const List = () => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        await axios
            .get("http://localhost:3000/menu")
            .then(function (response) {
                setArray(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const MountList = () => {
        return (
            <>
                {array.map((menu: any, index) => (
                    <h1 key={index}>{menu.name}</h1>
                ))}
            </>
        );
    };

    return <>{ array ? <MountList /> : null}</>;
};

export default List;
