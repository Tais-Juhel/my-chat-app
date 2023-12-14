function Header() {
  return (
    <nav className="px-10 py-2.5 bg-gray-50 border-gray-200 text-gray-900 text-sm rounded border flex justify-between">
      <span className="self-center text-lg font-semibold whitespace-nowrap text-gray-900">
        Chat App
      </span>
      <div className="flex items-center">
        <span>☀️</span>
        <span className="mx-3">Exit</span>
        <span className="rounded-full hover:bg-gray-200 p-2.5">
          <img
            src="https://api.dicebear.com/7.x/big-smile/svg?randomizeIds=true"
            alt="avatar"
            className="h-8 w-8 rounded-full"
          />
        </span>
      </div>
    </nav>
  )
}

export default Header
