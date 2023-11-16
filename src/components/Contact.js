import useOnlineStatus from "../Utils/useOnlineStatus";

const Contact = ()=>{

    const status = useOnlineStatus();
    if(status === false){
        return (
            <div><h3>You are offline , pls check internet connection</h3></div>
        )
    }

    return (
        <h1> Hi! Please contact me </h1>
    )
}

export default Contact;