import ChatList from '../../components/chat/ChatList'
import ChatRoom from '../../components/chat/ChatRoom'

function ChatLayout() {
  return (
    <div className="mx-28 flex border border-t-0 h-5/6 rounded-b">
      <ChatList />
      <ChatRoom />
    </div>
  )
}

export default ChatLayout
