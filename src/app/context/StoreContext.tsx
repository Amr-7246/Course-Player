"use client"

import React, { createContext, useReducer, ReactNode } from "react";

// & Start Reale Data 
type State = {
    IsOppend: boolean;
    WhichOppend: string;
    };

const initialState: State = {
    IsOppend: false,
    WhichOppend: "",
    };
// & End Reale Data 
// & Start Data Storing manibulations logic 
type Action =
    | { type: "SET_OPPEND"; payload: { isOppend: boolean; whichOppend: string } }
    | { type: "CLEAR_OPPEND" };

const StoreContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_OPPEND":
            return {
                ...state,
                IsOppend: action.payload.isOppend,
                WhichOppend: action.payload.whichOppend,
            };
        case "CLEAR_OPPEND":
            return {
                ...state,
                IsOppend: false,
                WhichOppend: "",
            };
        default:
            return state;
        }
};
// & End Data Storing manibulations logic 
// & Start Data delivers  
export const StoreProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
    <StoreContext.Provider value={{ state, dispatch }}>
        {children}
    </StoreContext.Provider>
);
};
// & Start Data delivers  

export default StoreContext;
