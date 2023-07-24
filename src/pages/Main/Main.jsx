import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

import {ProductsList} from "../../components/ProductsList/index.js";


import axios from "axios";
axios.defaults.baseURL = 'https://64934ce0428c3d2035d1a156.mockapi.io/api/v1';
const getAllProducts = async () => {
    try {
        const {data} = await axios.get('/users');
        return data;
    } catch (err) {
        console.log(err.message);
    }
};


const Main = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        getAllProducts().then(res => setData(res));
    }, []);

    return (
        <>
            <div>
                <h1>Main Page</h1>
                <NavLink to="/login" style={{marginRight: "10px"}}>
                    Login
                </NavLink>
                <NavLink to="/signup">Signup</NavLink>
            </div>

            <ProductsList products={data}/>
        </>
    );
};

export default Main;
