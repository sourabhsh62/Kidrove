const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold text-white">Kidrove</span>
            <p className="mt-2 text-sm">
              Empowering young minds through innovative AI and robotics education.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#details" className="hover:text-white transition-colors">Workshop Details</a></li>
              <li><a href="#outcomes" className="hover:text-white transition-colors">Learning Outcomes</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#register" className="hover:text-white transition-colors">Register</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>hello@kidrove.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Kidrove. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
