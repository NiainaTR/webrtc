import { useEffect } from "react";
import socketIO from "socket.io-client";
const ws = "http://localhost:5000";

function App() {
  useEffect(() => {
    socketIO(ws);
  }, []);

  return <></>;
}

export default App;
