import { useState } from 'react';
import { BookMarked, Sparkles } from 'lucide-react';
import { categoryNames, getHaskamasByCategory } from '../data/haskamos';
import type { Haskama } from '../data/haskamos';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

export default function HaskamosPage() {
  const [activeCategory, setActiveCategory] = useState<Haskama['category'] | 'all'>('all');

  const filteredHaskamos = getHaskamasByCategory(activeCategory);

  const categories: Array<Haskama['category'] | 'all'> = ['all', 'tanach', 'chazal', 'acharonim', 'contemporary'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Nav />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <BookMarked className="text-amber-700" size={40} />
            <h1 className="text-5xl font-bold text-slate-800">Sources of Chizuk</h1>
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-4">
            Throughout our mesorah, our struggles have been acknowledged, validated, and given meaning.
            These are not empty platitudes - they are the words of our sages, our prophets, our teachers.
          </p>
          <p className="text-md text-slate-600 italic max-w-2xl mx-auto">
            "The dust of their struggle rose to the Kisei HaKavod" - Bereishis Rabbah 77:3
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                activeCategory === category
                  ? 'bg-amber-600 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category === 'all' ? 'All Sources' : categoryNames[category]}
            </button>
          ))}
        </div>

        {/* Haskamos Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredHaskamos.map((haskama) => (
            <HaskamaCard key={haskama.id} haskama={haskama} />
          ))}
        </div>

        {filteredHaskamos.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-slate-500">No sources found in this category yet.</p>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="font-bold text-blue-900 mb-2">A Note on These Sources</h3>
            <p className="text-blue-800 leading-relaxed">
              These are not meant to minimize your pain or offer easy answers. They are meant to remind you
              that your struggle is part of an ancient conversation between Klal Yisrael and HaKadosh Baruch Hu.
              You are not the first to walk this path, and you walk it in the company of giants.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function HaskamaCard({ haskama }: { haskama: Haskama }) {
  const getCategoryColor = (category: Haskama['category']) => {
    const colors = {
      tanach: 'border-purple-500 bg-purple-50',
      chazal: 'border-blue-500 bg-blue-50',
      acharonim: 'border-amber-500 bg-amber-50',
      contemporary: 'border-teal-500 bg-teal-50'
    };
    return colors[category];
  };

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 border-l-4 ${getCategoryColor(haskama.category)} hover:scale-[1.02]`}>
      <div className="flex items-start gap-2 mb-4">
        <Sparkles className="text-amber-600 flex-shrink-0 mt-1" size={20} />
        <div className="flex-grow">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {haskama.theme}
          </span>
        </div>
      </div>

      <blockquote className="text-xl font-serif text-slate-800 mb-4 leading-relaxed italic">
        "{haskama.quote}"
      </blockquote>

      {haskama.translation && (
        <p className="text-slate-600 mb-4 leading-relaxed">
          {haskama.translation}
        </p>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <cite className="text-sm font-semibold text-slate-700 not-italic">
          {haskama.source}
        </cite>
        <span className={`text-xs px-3 py-1 rounded-full ${
          haskama.category === 'tanach' ? 'bg-purple-100 text-purple-700' :
          haskama.category === 'chazal' ? 'bg-blue-100 text-blue-700' :
          haskama.category === 'acharonim' ? 'bg-amber-100 text-amber-700' :
          'bg-teal-100 text-teal-700'
        }`}>
          {categoryNames[haskama.category]}
        </span>
      </div>
    </div>
  );
}
