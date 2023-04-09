import {useState} from 'react';
import uuid from "uuid";
import axios from 'axios';

const useAxios = (baseURL) => {
    const [state, setState] = useState([]);

    const addCard = async (pokemonName) => {
        const newBaseURL = typeof pokemonName === 'string' 
        ? `${baseURL}/${pokemonName}` 
        : baseURL;
        
        try {
            const response = await axios.get(newBaseURL);
            setState(state => [...state, { ...response.data, id: uuid() }]);
        } catch (err) {
            console.log(err);
        }
    };

    return [state, addCard];
}

export default useAxios;

