import { createContext } from "react";
import { data } from "../assets/data";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const contextValue = {
        data
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider
