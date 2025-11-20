import { useState } from 'react';
import { BookOpen, Heart, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

export default function BlogPage() {
  const [filter, setFilter] = useState<'all' | 'divrei-torah' | 'reflection'>('all');

  const filteredPosts = filter === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.type === filter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Nav />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">מאבק ואמונה</h1>
          <h2 className="text-3xl text-slate-600 mb-6">Struggle & Faith</h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Divrei Torah and personal reflections on walking through the valley,
            finding Hashem in the darkness, and rising from the dust.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Posts
          </button>
          <button
            onClick={() => setFilter('divrei-torah')}
            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
              filter === 'divrei-torah'
                ? 'bg-amber-600 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <BookOpen size={20} />
            Divrei Torah
          </button>
          <button
            onClick={() => setFilter('reflection')}
            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
              filter === 'reflection'
                ? 'bg-teal-600 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Heart size={20} />
            Personal Reflections
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 border-l-4 ${
                post.type === 'divrei-torah'
                  ? 'border-amber-500'
                  : 'border-teal-500'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                {post.type === 'divrei-torah' ? (
                  <BookOpen className="text-amber-600" size={24} />
                ) : (
                  <Heart className="text-teal-600" size={24} />
                )}
                <span className={`text-sm font-semibold uppercase tracking-wide ${
                  post.type === 'divrei-torah' ? 'text-amber-700' : 'text-teal-700'
                }`}>
                  {post.type === 'divrei-torah' ? 'Divrei Torah' : 'Personal Reflection'}
                </span>
              </div>

              <h2 className="text-3xl font-bold text-slate-800 mb-3">
                {post.title}
              </h2>

              <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                <Calendar size={16} />
                <span>{formatDate(post.date)}</span>
              </div>

              <p className="text-slate-600 text-lg mb-4 italic">
                {post.excerpt}
              </p>

              <div className="prose prose-slate max-w-none mb-6">
                {post.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-slate-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-slate-500">No posts found in this category yet.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
