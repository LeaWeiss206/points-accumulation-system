export const addPoints=(id,points) => {
    return{
        type: "ADD_POINTS",
        id,
        points,
    };
} ;
export const resetPoints = () => {
    return{
    type: 'RESET_POINTS'
};
};
