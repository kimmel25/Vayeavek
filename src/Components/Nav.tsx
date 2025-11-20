import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-slate-800">Vayeavek</h1>
              <p className="text-xs text-slate-500 italic">The dust reaches the Kisei HaKavod</p>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`transition ${
                isActive('/') ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className={`transition ${
                isActive('/blog') ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/resources"
              className={`transition ${
                isActive('/resources') ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Resources
            </Link>
            <Link
              to="/haskamos"
              className={`transition ${
                isActive('/haskamos') ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Sources
            </Link>
            <Link
              to="/contact"
              className={`transition ${
                isActive('/contact') ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-700">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded ${
                isActive('/') ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Home
            </Link>
            <Link
              to="/blog"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded ${
                isActive('/blog') ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/resources"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded ${
                isActive('/resources') ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Resources
            </Link>
            <Link
              to="/haskamos"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded ${
                isActive('/haskamos') ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Sources
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded ${
                isActive('/contact') ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
