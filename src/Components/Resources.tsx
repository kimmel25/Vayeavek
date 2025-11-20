import { Link } from 'react-router-dom';
import { Heart, Phone, ArrowRight, AlertCircle } from 'lucide-react';

export default function Resources() {
  return (
    <section id="resources" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Heart className="text-rose-600" size={32} />
            <h3 className="text-3xl font-bold text-slate-800">Resources & Support</h3>
          </div>
          <Link
            to="/resources"
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 transition"
          >
            View All <ArrowRight size={20} />
          </Link>
        </div>

        <p className="text-slate-600 mb-8 text-lg">
          Mental health resources that understand and respect our world.
          Because you deserve support that speaks your language.
        </p>

        {/* Crisis Box */}
        <div className="bg-rose-50 border-l-4 border-rose-600 p-6 rounded-r-lg mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-rose-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <p className="font-bold text-rose-900 mb-2">In Crisis? Get Help Now:</p>
              <div className="space-y-1 text-rose-800">
                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  <strong>Relief Crisis Hotline:</strong> 718-431-9501 (24/7)
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  <strong>National Crisis Line:</strong> 988 (24/7)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
            <h4 className="font-bold text-slate-800 mb-3 text-lg">Crisis Support</h4>
            <ul className="space-y-2 text-slate-700">
              <li>• Relief Resources (24/7)</li>
              <li>• Amudim Crisis Line</li>
              <li>• 988 Suicide & Crisis</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg border border-teal-200">
            <h4 className="font-bold text-slate-800 mb-3 text-lg">Therapy & Treatment</h4>
            <ul className="space-y-2 text-slate-700">
              <li>• Relief Referrals</li>
              <li>• OHEL Services</li>
              <li>• Nefesh Directory</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200">
            <h4 className="font-bold text-slate-800 mb-3 text-lg">Financial Help</h4>
            <ul className="space-y-2 text-slate-700">
              <li>• Achiezer Assistance</li>
              <li>• Therapy Gemachs</li>
              <li>• Insurance Navigation</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/resources"
            className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition shadow-lg hover:shadow-xl"
          >
            Explore All Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
