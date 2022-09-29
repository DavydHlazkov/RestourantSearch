import { useState } from "react";
import yelp from "../api/yelp";

export default () => {

    const [result, setResults] = useState({
        data: null,
        loading: false,
        error: null
    });

    const searchRestaurant = async (id) => {
        setResults({
            data: null,
            loading: true,
            error: null
        })
        try{
            const responce = await yelp.get(`/${id}`, {
            });

            setResults({
                data: responce.data,
                loading: false,
                error: null
            })
        } catch (error){
            setResults({
                data: null,
                loading: false,
                error: "Something went wrong"
            })

        }
    };
    return [result, searchRestaurant]
}