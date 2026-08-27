import { useEffectEvent } from "react";

function ChatRoom({ roomId, theme }) {
  const onMessage = useEffectEvent((msg) => {
    logAnalytics(roomId, theme);
  });
  useEffect(() => {
    const connection = createConnection(roomId);

    connection.on("message", (msg) => {
      onMessage(msg);
    });

    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
}

export default ChatRoom;
