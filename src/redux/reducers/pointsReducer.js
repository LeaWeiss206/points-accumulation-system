const points =[
   {"id":1,"class":"ט","points":0},
   {"id":2,"class":"י","points":0},
   {"id":3,"class":"יא","points":0},
   {"id":4,"class":"יב","points":0}
   ]

 const pointsReducer = (state = points, action) =>{
   switch (action.type) {

      case "ADD_POINTS":
          {
              const newPoints = [...state];
              newPoints.find((selectedclass) => selectedclass.id === action.id).points +=action.points;
              return newPoints;
          }
      
          case 'RESET_POINTS':
            return state.map(point => ({ ...point, points: 0 }));
       
      default:
          return state
  }
    }
    export default pointsReducer