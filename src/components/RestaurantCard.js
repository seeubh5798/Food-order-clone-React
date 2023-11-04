import { ResLogoUrl} from "../Utils/constants";
// named export is imported like this

const RestaurantCard = (props)=>{
    // console.log(props);
    const { resData} = props;
    const { name , cuisine , rating, ETA } = resData;
    return (
       <div className="res-card" id={name}>
           <img className="res-logo" src={ResLogoUrl} />
           <h3> {name} </h3>
           <h5>  {cuisine}</h5>
           <h5> Stars {rating}</h5>
           <h5> {ETA} </h5>
       </div>
    )
 }

 export default RestaurantCard;