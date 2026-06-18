const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Kidrove</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#details" className="hover:text-primary transition-colors">Details</a>
          <a href="#outcomes" className="hover:text-primary transition-colors">Outcomes</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href="#register" className="bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary-dark transition-colors">
            Enroll Now
          </a>
        </nav>
        <a href="#register" className="md:hidden bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">
          Enroll
        </a>
      </div>
    </header>
  )
}

export default Header
