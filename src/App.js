import { ChatEngine } from 'react-chat-engine';
import './app.css';
import ChatFeed from './component/chatFeed';

const App = () => {
    return <ChatEngine
        height="100vh"
        projectID="b6f3cede-3852-4965-9eae-849d9ad42881"
        userName="mike"
        userSecret="123"
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}></ChatFeed>}
    ></ChatEngine>
}
export default App