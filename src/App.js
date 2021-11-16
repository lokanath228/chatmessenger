import {ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import  ChatFeed from './components/ChatFeed';
import './App.css'

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    
    return(
        <ChatEngine
        height="100vh"
        projectID="b2fe4153-6613-47cf-a706-426ed4437092"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed{...chatAppProps}/>}
        
        />
    )
}

export default App