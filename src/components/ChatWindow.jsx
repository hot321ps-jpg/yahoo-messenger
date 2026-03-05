import { useState, useRef, useEffect } from 'react';

export default function ChatWindow({ user, onClose }) {
  const [messages, setMessages] = useState([
    { id: 1, type: 'system', text: `*** 您已經建立與 ${user.name} 的連線 ***` },
    { id: 2, type: 'sender', text: '安安，你在嗎？', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }
  ]);
  const [inputText, setInputText] = useState('');
  const [isBuzzing, setIsBuzzing] = useState(false);
  const chatEndRef = useRef(null);

  const sendMessage = () => {
    if (!inputText.trim()) return;
    setMessages([...messages, { 
      id: Date.now(), type: 'me', text: inputText, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) 
    }]);
    setInputText('');
  };

  const sendBuzz = () => {
    const buzzAudio = new Audio('https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg');
    buzzAudio.play().catch(() => {});
    setIsBuzzing(false);
    setTimeout(() => setIsBuzzing(true), 10);
    setMessages([...messages, { id: Date.now(), type: 'system', text: `<< 你傳送了一個「叮咚！」給 ${user.name} >>` }]);
  };

  // 自動捲動到最新訊息
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  return (
    <div className={`window ${isBuzzing ? 'buzzing' : ''}`} id="chat-window">
      <div className="title-bar">
        <span>與 {user.name} 聊天中</span>
        <div className="window-controls"><span onClick={onClose}>X</span></div>
      </div>
      <div className="chat-header">
        <div style={{fontSize: '30px', marginRight: '10px'}}>{user.avatar}</div>
        <div>
          <div style={{fontWeight: 'bold'}}>{user.name}</div>
          <div style={{fontSize: '12px', color: '#666'}}>{user.status}</div>
        </div>
      </div>
      <div className="chat-history">
        {messages.map(msg => (
          <div key={msg.id} className="message">
            {msg.type === 'system' ? <span className="system">{msg.text}</span> : null}
            {msg.type === 'me' ? <><span className="me">我: </span><span>{msg.text}</span></> : null}
            {msg.type === 'sender' ? <><span className="sender">{user.name}: </span><span>{msg.text}</span></> : null}
            {msg.time && <span className="timestamp">{msg.time}</span>}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="toolbar">
        <button style={{color: '#7B0099', fontWeight: 'bold'}} onClick={sendBuzz}>🔔 叮咚！</button>
      </div>
      <div className="input-area">
        <textarea 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => { if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }}}
        />
        <div style={{paddingLeft: '5px', display: 'flex', alignItems: 'flex-end'}}>
          <button className="btn" onClick={sendMessage}>傳送</button>
        </div>
      </div>
    </div>
  );
}
