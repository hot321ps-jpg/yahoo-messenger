export default function Login({ onLogin }) {
  const handleLogin = () => {
    const loginAudio = new Audio('https://actions.google.com/sounds/v1/water/glass_water_pour.ogg');
    loginAudio.volume = 0.5;
    loginAudio.play().catch(() => {});
    onLogin();
  };

  return (
    <div className="window" id="login-window">
      <div className="title-bar">
        <span>Yahoo! 奇摩即時通</span>
        <div className="window-controls"><span>X</span></div>
      </div>
      <div className="login-header">
        <div className="y-logo">YAHOO!<span>!</span></div>
      </div>
      <div className="login-body">
        <div className="input-group">
          <label>Yahoo! 帳號:</label>
          <input type="text" defaultValue="my_account_123" />
        </div>
        <div className="input-group">
          <label>密碼:</label>
          <input type="password" defaultValue="password" />
        </div>
        <div className="login-actions">
          <button className="btn" onClick={handleLogin}>登入(S)</button>
        </div>
      </div>
    </div>
  );
}
