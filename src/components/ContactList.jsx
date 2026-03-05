export default function ContactList({ onOpenChat }) {
  const friends = [
    { id: 1, name: '檸檬羊', status: '- 準備開台囉！', avatar: '🐑' },
    { id: 2, name: '瓦斯超人', status: '- 守護世界的和平！', avatar: '🦸‍♂️' },
    { id: 3, name: '地瓜', status: '- 剛出爐，燙燙燙...', avatar: '🍠' },
    { id: 4, name: '煞氣a小明', status: '- 無名相簿更新囉~', avatar: '👦' }
  ];

  return (
    <div className="window" id="main-window">
      <div className="title-bar">
        <span>Yahoo! 奇摩即時通</span>
        <div className="window-controls"><span>X</span></div>
      </div>
      <div className="menu-bar">
        <span>即時通(Y)</span><span>聯絡人(C)</span>
      </div>
      
      {/* 更新了這裡的個人資訊區塊 */}
      <div className="my-profile">
        <div className="my-avatar">😎</div>
        <div>
          <div style={{fontWeight: 'bold'}}>我的帳號</div>
          <select style={{marginTop: '3px', fontSize: '11px', padding: '1px'}}>
            <option>✅ 上線</option>
            <option>👻 隱身</option>
          </select>
          {/* 加入正在收聽彩蛋 */}
          <div className="music-status" title="點擊播放/暫停">
            🎵 正在收聽：妥協 - 蔡依林
          </div>
        </div>
      </div>

      <div className="buddy-list">
        <div className="group-header">▼ 我的好友群</div>
        {friends.map(friend => (
          <div 
            key={friend.id} 
            className="contact-item" 
            onDoubleClick={() => onOpenChat(friend)}
          >
            <span className="status-icon">☻</span>
            <span className="contact-name">{friend.name}</span>
            <span className="status">{friend.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
