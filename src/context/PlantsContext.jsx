import { createContext } from "react";
import useFetch from "../hooks/useFetch";

const PlantsContext = createContext();

export function PlantsProvider({ children }) {

    const { data: plants, loading, error } = useFetch('https://gist.githubusercontent.com/ArnasJ-git/6077c384ce1fd51a3cea5ba5db6f05fc/raw/d4a6145cebc07e1e0218a4580e288db7453eb91d/plant.json',
        'plants',
        'image'
    );

    const value = { plants, loading, error };

    console.log(value);
    return (
        <PlantsContext.Provider value={value}>{children}</PlantsContext.Provider>
    )

}

export default PlantsContext;