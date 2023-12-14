function ChatMessage({ sender }) {
  return (
    <div className={`my-6 flex flex-col ${sender ? '' : 'items-end'}`}>
      <p
        className={`py-1.5 px-4 border rounded-lg w-fit ${
          sender ? '' : 'bg-blue-800 text-slate-200'
        }`}
      >
        Mon message...😉
      </p>
      <span className="text-sm text-gray-500">53 minutes ago</span>
    </div>
  )
}

export default ChatMessage
