interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && <div onClick={onClose} className="fixed inset-0 bg-black/50 z-40 md:hidden" />}
      <aside className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-slate-700 text-white h-full transform transition-transform md:transform-none ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <nav>
          <ul>
            <li><a href="#home" onClick={onClose} className="block px-6 py-4 hover:bg-slate-800 transition">🏠 Home</a></li>
            <li><a href="#library" onClick={onClose} className="block px-6 py-4 hover:bg-slate-800 transition">📖 My Library</a></li>
            <li><a href="#favorites" onClick={onClose} className="block px-6 py-4 hover:bg-slate-800 transition">⭐ Favorites</a></li>
            <li><a href="#categories" onClick={onClose} className="block px-6 py-4 hover:bg-slate-800 transition">📂 Categories</a></li>
            <li><a href="#recent" onClick={onClose} className="block px-6 py-4 hover:bg-slate-800 transition">🕒 Recent</a></li>
            <li><a href="#settings" onClick={onClose} className="block px-6 py-4 hover:bg-slate-800 transition">⚙️ Settings</a></li>
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
