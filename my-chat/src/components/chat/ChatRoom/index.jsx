import ChatContact from '../ChatContact'
import ChatMessage from '../ChatMessage'

function ChatRoom() {
  return (
    <div className="w-3/4 flex flex-col">
      <div className="border-b-2 p-2.5 flex items-center">
        <span className="mx-1.5 rounded-full">
          <img
            src="https://api.dicebear.com/7.x/big-smile/svg?randomizeIds=true"
            alt="avatar"
            className="h-8 w-8 full rounded-full"
          />
        </span>
        <span>Mon contact</span>
      </div>
      <div className="flex-1 border-b-2 px-6">
        <ChatMessage sender={true} />
        <ChatMessage />
      </div>
      <div className="py-2 px-2.5 flex">
        <button className="h-10 w-10 p-2 rounded-full hover:bg-gray-200">
          😉
        </button>
        <input
          type="text"
          placeholder="Write a message"
          className="flex-1 bg-gray-100 border rounded mx-2.5 px-4 py-1"
        />
        <button className="h-10 w-10 p-2 rounded-full hover:bg-gray-200">
          ➡️
        </button>
      </div>
    </div>
  )
}

export default ChatRoom
