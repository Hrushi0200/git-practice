interface HeaderProps {
  onMenuClick: () => void
}

function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-slate-800 text-white px-4 md:px-8 py-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="md:hidden text-2xl">☰</button>
        <h1 className="text-lg md:text-2xl font-bold">📚 Storybook App</h1>
      </div>
      <div className="flex gap-2 md:gap-4">
        <button className="px-2 md:px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-sm md:text-base">Search</button>
        <button className="px-2 md:px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-sm md:text-base">Profile</button>
      </div>
    </header>
  )
}

export default Header
