import { useState } from "react"
import { isTyping, sendMessage } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

const MessageForm = (props) => {
    const { chatId, creds } = props;
    const handleSubmit = (event) => {
        event.preventDefault();
        const text = value.trim();
        if (text.length > 0) { sendMessage(creds, chatId, { text }); }
        setValue('')
    }

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(props);
        isTyping(creds, chatId)
    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' })
    }

    const [value, setValue] = useState('');
    return <div>
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}></input>
            {/* upload file start */}
            <label htmlFor="upload-button">
                <span><PictureOutlined className="picture-icon"></PictureOutlined></span>
            </label>
            <input id="upload-button" type="file"
                multiple={false} style={{ display: 'none' }}
                onChange={handleUpload}></input>
            {/* upload file end */}
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon"></SendOutlined>
            </button>
        </form>
    </div>
}

export default MessageForm