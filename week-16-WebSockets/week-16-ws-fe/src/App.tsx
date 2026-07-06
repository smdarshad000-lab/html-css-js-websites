import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = useRef();

  function sendMessage() {
    if (!socket) {
      return;
    }
    const message = inputRef.current.value;
    socket.send(message );
  }

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    setSocket(ws);

    ws.message = (ev) => {
      alert(ev.data);
    };

  }, []);

  return (
    <div>
      <input type="text" placeholder="Message..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App
