import ChatContact from '../ChatContact'

function ChatList() {
  return (
    <div className="w-1/4 border-r-2">
      <div className="mb-4 p-2">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 border rounded p-1 px-2 w-full"
        />
      </div>
      <div>
        <h2 className="ml-2 font-medium">Chats</h2>
        <ChatContact />
      </div>
    </div>
  )
}

export default ChatList
