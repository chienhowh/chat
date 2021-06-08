import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();// 避免網頁重整
        const authObject = { 'Project-ID': 'b6f3cede-3852-4965-9eae-849d9ad42881', 'User-Name': username, 'User-Secret': password }

        try {
            const login = await axios.get('https://api.chatengine.io/chats', { headers: authObject })

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            console.log(login);
            window.location.reload();
        } catch (error) {
            console.log(error);
            const errMsg = '帳號密碼錯誤'
            setErrMsg(errMsg);
        }
    }

    return (<div className="wrapper">
        <div className="form">
            <h1 className="title">Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="username" required ></input>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required ></input>
                <div align="center" >
                    <button type="submit" className="button"><span>
                        Start Chatting
                    </span></button>
                </div>
                <div className="error">{errMsg}</div>
            </form>
        </div>
    </div>)
}

export default LoginForm