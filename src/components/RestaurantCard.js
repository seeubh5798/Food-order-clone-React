import { ResLogoUrl} from "../Utils/constants";
import useOnlineStatus from "../Utils/useOnlineStatus";
// named export is imported like this

const RestaurantCard = (props)=>{
    // console.log(props);
    const { resData} = props;
    const { completed , id , title, userId } = resData;

    const status = useOnlineStatus();
    if(status === false){
        return (
            <div><h3>You are offline , pls check internet connection</h3></div>
        )
    }
    return (
       <div className="res-card m-4 p-4 w-[200px]  bg-gray-100" id={id}>
           <img className="res-logo" src={ResLogoUrl} />
           <h3> {completed} </h3>
           <h5 className="font-bold">  {title}</h5>
           <h5> Stars {id}</h5>
           <h5> {userId} </h5>
       </div>
    )
 }



 export const RestaurantHigherOrderFunction = (RestaurantCard)=>{
        return (props)=>{

            return (
                <>
                
                <label className="absolute">Promoted by HOF</label>
                <RestaurantCard resData={props}/>

                </>
            )
        }
 }

 export default RestaurantCard;