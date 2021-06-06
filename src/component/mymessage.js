const MyMessage = ({msg}) => {
    // 如果是圖片
    if(msg?.attachments?.length>0){
        return <img 
        src={msg.attachments[0].file}
        alt="message-attchments"
        className="message-img"
        style={{float:'right'}}
        ></img>
    }
    return <div className="message" style={{float:'right',marginRight:'18px',color:'white',backgroundColor:'#3B2A50'}}>
        {msg.text}
    </div>
}

export default MyMessage