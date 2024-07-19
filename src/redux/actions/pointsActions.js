export const decreaseQty = (id) => {
    return{
        type: "DECREASE_QTY",
         id,
    };
} ;
export const addQty=(id) => {
    return{
        type: "ADD_QTY",
        id,
    };
} ;
export const addSumQty=(id) => {
    return{
        type: "ADD_SUM_QTY",
        id,
    };
} ;
