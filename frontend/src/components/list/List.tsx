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
                    <div key={index}>
                        <h1>{menu.name}</h1>
                        <h2>{menu.type}</h2>
                        <p>{menu.description}</p>
                        <div>
                            <span>{menu.sellingPrice}</span>
                            <span>{menu.bestPrice}</span>
                        </div>
                    </div>
                ))}
            </>
        );
    };

    return <>{ array ? <MountList /> : null}</>;
};

export default List;
