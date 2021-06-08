import { ChatEngine } from 'react-chat-engine';
import './app.css';
import ChatFeed from './component/chatFeed';
import LoginForm from './component/loginForm';

const App = () => {
    if (!localStorage.getItem('username')) {
        return <LoginForm></LoginForm>
    }

    return <ChatEngine
        height="100vh"
        projectID="b6f3cede-3852-4965-9eae-849d9ad42881"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}></ChatFeed>}
    ></ChatEngine>
}
export default App