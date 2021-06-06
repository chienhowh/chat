import MyMessage from './mymessage';
import TheirMessage from './theirMessage';
import MessageForm from './messageForm';


const ChatFeed = (props) => {
    // chats所有聊天室, activeChat身處聊天室, messages身處聊天室所有訊息
    const { chats, activeChat, userName, messages } = props;
    // console.log(Object.keys(messages));
    // 目前點中聊天室
    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        console.log(messages);
        const keys = Object.keys(messages);
        return keys.map((key, index) => {
            const msg = messages[key];
            // TODO:lastMsgKey怎麼來的不知道
            const lastMsgKey = index === 0 ? null : keys[index - 1];
            const isMyMsg = userName === msg.sender.username;
            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                    {/* 測試prop key value同名能不能用 */}
                        {isMyMsg ? <MyMessage msg={msg}></MyMessage> : <TheirMessage msg={msg} lastMsg={messages[lastMsgKey]}></TheirMessage>}
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMsg ? '18px' : '0px', marginLeft: isMyMsg ? '0px' : '68px' }}>
                        receipts
                    </div>
                </div>
            )
        })
    }

    if (!chat) return 'Loading...';
    return <div className="chat-feed">
        <div className="chat-title-container">
            <div className="chat-title">{chat.title}</div>
            <div className="sub-title">
                {chat.people.map(person =>
                    `${person.person.username}`
                )}
            </div>
        </div>
        {renderMessages()}
        <div style={{height:'100px'}}>分隔線</div>
        {/* 輸入區start */}
        <div className="message-form-container">
            <MessageForm {...props} chatId={activeChat}></MessageForm>
        </div>
    </div>
}

export default ChatFeed