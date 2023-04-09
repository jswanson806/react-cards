import React, {useState} from 'react';
import uuid from "uuid";
import axios from 'axios';

const useAxios = () => {
    const [state, setState] = useState([]);

    const addCard = async () => {
      const response = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/draw/"
      );
      setState(state => [...state, { ...response.data, id: uuid() }]);
    };

    return [state, addCard];
}

export default useAxios;