import { useSelector } from "react-redux";


export default function ClassPoints()
{
    const points = useSelector((state) => state.points);
   
   // const [sunOfProducts, setSunOfProducts] = useState(0)
  //  const dispatch = useDispatch();


    return(
        <>
         {points ? points.map((item, index) => (
                    

                <div key={item.id}>
                    <h1>{item.class}</h1>
                    <h2>{item.points}</h2>
                </div>

                    

                )) : <div>Products is null</div>}
        </>
    )

}