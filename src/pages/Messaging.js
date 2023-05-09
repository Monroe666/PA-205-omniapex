import "../styles/Messaging.css";
import msgsidebar from "../assets/messagingsidebar.png";

const Messaging = () => {
    return (
            <div className= "messagingborder">
            <div className="messaging">
                <h1 className="messages_title">Messages</h1>
                <img className="messagingsidebar" src={msgsidebar} alt=""></img>
            
                
                
            </div>
           
        </div>

    )
}

export default Messaging;