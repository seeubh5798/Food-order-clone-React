import { ResLogoUrl} from "../Utils/constants";
// named export is imported like this

const RestaurantCard = (props)=>{
    // console.log(props);
    const { resData} = props;
    const { completed , id , title, userId } = resData;
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