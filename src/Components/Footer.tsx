import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
              <Heart size={20} className="text-rose-400" />
              Vayeavek
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Supporting mental health in the yeshiva world. The struggle is real. The struggle is holy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white transition">
                  Blog & Divrei Torah
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-white transition">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/haskamos" className="text-slate-400 hover:text-white transition">
                  Sources of Chizuk
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Crisis Resources */}
          <div>
            <h3 className="text-white font-bold mb-3">Crisis Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">
                <strong className="text-white">Relief:</strong> 718-431-9501
              </li>
              <li className="text-slate-400">
                <strong className="text-white">Crisis Line:</strong> 988
              </li>
              <li className="text-slate-400">
                <strong className="text-white">Emergency:</strong> 911
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Vayeavek — Resources for mental health within our community.
          </p>
          <p className="text-xs mt-2 text-slate-500">
            Not a crisis line. For emergencies, contact local emergency services.
          </p>
          <p className="text-xs mt-2 text-slate-500 italic">
            "The dust of their struggle rose to the Kisei HaKavod" - Bereishis Rabbah 77:3
          </p>
        </div>
      </div>
    </footer>
  );
}
