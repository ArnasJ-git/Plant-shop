import { createContext } from "react";
import useFetch from "../hooks/useFetch";

const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {

    const { data: categories, loading, error } = useFetch('https://gist.githubusercontent.com/ArnasJ-git/4b935a2e57af668d76dffb5dc124c662/raw/fed518e18891b30e759eb7d9066812f93b3edc58/gistfile1.txt',
        'category',
        'fileName')
    const value = { categories, loading, error };



    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )

}

export default CategoriesContext;