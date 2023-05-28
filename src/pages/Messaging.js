import "../styles/Messaging.css";
import msgsidebar from "../assets/messagingsidebar.png";
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '../ChatComponents/ChatFeed';
import LoginForm from '../ChatComponents/LoginForm';
import { useNavigate } from "react-router-dom"


const projectID = '49cd6d49-4dac-4c22-9a9f-f3f37d49d064';

const Messaging = () => {
    const navigate = useNavigate(); // Hooks should be called at the top level of your React function.
    
    if (!localStorage.getItem('username')) return <LoginForm />;
    
    const backHome = () => { // backHome function should be defined before using it in the onClick handler.
        navigate("/");
    }

    return (
        <div>
            <button className="backhome" onClick={backHome}>Home</button>
            <ChatEngine
                height="96vh"
                projectID={projectID} // use the variable projectID defined above
                userName="Bryant"
                userSecret="123"
                renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
                onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            />
        </div>
    )
}

export default Messaging;
