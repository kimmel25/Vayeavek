import { Link } from 'react-router-dom';
import { BookOpen, Heart, ArrowRight } from 'lucide-react';
import { getRecentPosts } from '../data/blogPosts';

export default function BlogPreview() {
  const recentPosts = getRecentPosts(3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section id="blog" className="py-16 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <BookOpen className="text-blue-600" size={32} />
            <h3 className="text-3xl font-bold text-slate-800">Recent Writings</h3>
          </div>
          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 transition"
          >
            View All <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-t-4 ${
                post.type === 'divrei-torah' ? 'border-amber-500' : 'border-teal-500'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                {post.type === 'divrei-torah' ? (
                  <BookOpen className="text-amber-600" size={20} />
                ) : (
                  <Heart className="text-teal-600" size={20} />
                )}
                <span className={`text-xs font-semibold uppercase tracking-wide ${
                  post.type === 'divrei-torah' ? 'text-amber-700' : 'text-teal-700'
                }`}>
                  {post.type === 'divrei-torah' ? 'Divrei Torah' : 'Reflection'}
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">{post.title}</h4>
              <p className="text-sm text-slate-500 mb-3">{formatDate(post.date)}</p>
              <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <Link
                to="/blog"
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
              >
                Read more <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
          >
            Explore All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
