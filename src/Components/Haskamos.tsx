import { Link } from 'react-router-dom';
import { BookMarked, Sparkles, ArrowRight } from 'lucide-react';
import { haskamos } from '../data/haskamos';

export default function Haskamos() {
  const featuredHaskamos = haskamos.slice(0, 3);

  return (
    <section id="haskamos" className="py-16 px-4 bg-gradient-to-b from-slate-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <BookMarked className="text-amber-700" size={32} />
            <h3 className="text-3xl font-bold text-slate-800">Sources of Chizuk</h3>
          </div>
          <Link
            to="/haskamos"
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 transition"
          >
            View All <ArrowRight size={20} />
          </Link>
        </div>

        <p className="text-slate-600 mb-8 text-lg text-center max-w-3xl mx-auto">
          Throughout our mesorah, our struggles have been acknowledged, validated, and given meaning.
          These are the words of our sages, our prophets, our teachers.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredHaskamos.map((haskama) => (
            <div
              key={haskama.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 border-t-4 border-amber-500"
            >
              <div className="flex items-start gap-2 mb-4">
                <Sparkles className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {haskama.theme}
                </span>
              </div>

              <blockquote className="text-lg font-serif text-slate-800 mb-3 leading-relaxed italic">
                "{haskama.quote}"
              </blockquote>

              {haskama.translation && (
                <p className="text-slate-600 mb-3 text-sm leading-relaxed">
                  {haskama.translation}
                </p>
              )}

              <cite className="text-sm font-semibold text-slate-700 not-italic">
                — {haskama.source}
              </cite>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/haskamos"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition shadow-lg hover:shadow-xl"
          >
            Explore Torah Sources on Struggle
          </Link>
        </div>
      </div>
    </section>
  );
}
