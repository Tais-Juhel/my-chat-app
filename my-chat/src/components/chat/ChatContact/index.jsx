function ChatContact() {
  return (
    <div className="border-b-2 p-2.5 hover:bg-gray-200 flex items-center cursor-pointer">
      <span className="mx-1.5 rounded-full">
        <img
          src="https://api.dicebear.com/7.x/big-smile/svg?randomizeIds=true"
          alt="avatar"
          className="h-8 w-8 full rounded-full"
        />
      </span>
      <span>Mon contact</span>
    </div>
  )
}

export default ChatContact
