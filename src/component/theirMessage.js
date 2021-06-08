const TheirMessage = ({ msg, lastMsg }) => {
    const isFirstMsgByUser = !lastMsg || lastMsg.sender.username;

    return <div className="message-row">
        {isFirstMsgByUser && (<div className="message-avatar" style={{ backgroundImage: `url:(${lastMsg?.sender?.avatar})` }}>
        </div>)}
        {/* 訊息 start */}
        {msg?.attachments?.length > 0 ?
            <img
                src={msg.attachments[0].file}
                alt="message-attchments"
                className="message-img"
                style={{ marginLeft: isFirstMsgByUser ? '4px' : '48px' }}
            ></img> :
            <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMsgByUser ? '4px' : '48px' }}>
                {msg.text}
            </div>}
        {/* 訊息 end */}
    </div>
}

export default TheirMessage