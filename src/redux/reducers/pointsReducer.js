const points =[
   {"id":1,"class":"ט","points":0},
   {"id":2,"class":"י","points":0},
   {"id":3,"class":"יא","points":0},
   {"id":4,"class":"יב","points":0}
   ]

 const pointsReducer = (state = points, action) =>{
   switch (action.type) {
      case "DECREASE_QTY":
          {
              const newCarriages = [...state];
              newCarriages.find((carriage) => carriage.id === action.id).qty -= 1;
              newCarriages.find((carriage) => carriage.id === action.id).qtyInCart += 1
              return newCarriages;
          }


      case "ADD_QTY":
          {
              const newCarriages = [...state];
              newCarriages.find((carriage) => carriage.id === action.id).qty += 1;
              newCarriages.find((carriage) => carriage.id === action.id).qtyInCart -= 1
              return newCarriages;
          }
      case "ADD_SUM_QTY":
      {
          const newCarriages = [...state];
          newCarriages.find((carriage) => carriage.id === action.id).qty +=  newCarriages.find((carriage) => carriage.id === action.id).qtyInCart;
          newCarriages.find((carriage) => carriage.id === action.id).qtyInCart = 0
          return newCarriages; 
      }

      default:
          return state
  }
    }
    export default pointsReducer