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
       <div className="res-card" id={id}>
           <img className="res-logo" src={ResLogoUrl} />
           <h3> {completed} </h3>
           <h5>  {title}</h5>
           <h5> Stars {id}</h5>
           <h5> {userId} </h5>
       </div>
    )
 }

 export default RestaurantCard;