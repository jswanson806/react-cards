import React, { useState } from "react";

const useFlip = (initState=true) => {
    const [state, setState] = useState(initState);
    const flipCard = () => {
      setState(isUp => !isUp);
    };
    return [state, flipCard];
}

export default useFlip;