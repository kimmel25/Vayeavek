import { useState } from 'react';
import { Menu, X, Heart, BookOpen, User, FileText, MessageCircle } from 'lucide-react';

export default function VayeavekHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, author: "Anonymous", text: "This site has been a lifeline for me. Thank you.", date: "Nov 15, 2025" },
    { id: 2, author: "A Yungerman", text: "Finally, resources that understand our world.", date: "Nov 12, 2025" }
  ]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([{
        id: comments.length + 1,
        author: "Anonymous",
        text: newComment,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      }, ...comments]);
      setNewComment("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-slate-800">Vayeavek</h1>
                <p className="text-xs text-slate-500 italic">The dust reaches the Kisei HaKavod</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition">Home</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition">About</a>
              <a href="#blog" className="text-slate-700 hover:text-blue-600 transition">Blog & Divrei Torah</a>
              <a href="#resources" className="text-slate-700 hover:text-blue-600 transition">Resources</a>
              <a href="#haskamos" className="text-slate-700 hover:text-blue-600 transition">Haskamos</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-700">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded">Home</a>
              <a href="#about" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded">About</a>
              <a href="#blog" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded">Blog & Divrei Torah</a>
              <a href="#resources" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded">Resources</a>
              <a href="#haskamos" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded">Haskamos</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            The Struggle Reaches Up
          </h2>
          <p className="text-xl text-slate-600 mb-4 leading-relaxed">
            "וַיֵּאָבֵק אִישׁ עִמּוֹ" - And a man wrestled with him
          </p>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-8">
            The dust of Yaakov's struggle with the Sar shel Eisav rose to cover the Kisei HaKavod. 
            In our own struggles with the Sitra Achra, we sometimes lose sight of the connection between 
            our battles down here and the Yaakov above. This space exists to support, connect, and remind 
            us that the struggle itself is holy.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#resources" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Find Resources
            </a>
            <a href="#about" className="bg-slate-200 text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-300 transition">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Featured prominently */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-blue-600" size={32} />
            <h3 className="text-3xl font-bold text-slate-800">About This Journey</h3>
          </div>
          <div className="bg-slate-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-slate-700 leading-relaxed mb-4">
              I write anonymously because this isn't about me - it's about us. I'm someone who has walked through 
              the valley, who has felt the dust rise, who has wondered where Hashem was in the darkness.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The yeshiva world is my home, my neshama, my everything. But like many of us, I've struggled. 
              Mental health challenges, questions that felt too heavy to voice, loneliness in a crowded beis medrash. 
              The Modern Orthodox world has built infrastructure for these struggles. We deserve the same.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This website is my contribution. A place where we can access resources, share divrei Torah that 
              speak to our pain, and know we're not alone in the dust. The struggle is real. The struggle is holy. 
              And the struggle reaches all the way up.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section id="blog" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-blue-600" size={32} />
            <h3 className="text-3xl font-bold text-slate-800">Blog & Divrei Torah</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <span className="text-sm text-blue-600 font-semibold">PARSHAS VAYISHLACH</span>
              <h4 className="text-xl font-bold text-slate-800 mt-2 mb-3">The Dust That Rises</h4>
              <p className="text-slate-600 mb-4">
                Why did the dust of Yaakov's struggle reach the Kisei HaKavod? What does this teach us 
                about our own battles with the yetzer hara?
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">Read more →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <span className="text-sm text-blue-600 font-semibold">PERSONAL REFLECTION</span>
              <h4 className="text-xl font-bold text-slate-800 mt-2 mb-3">When Davening Feels Empty</h4>
              <p className="text-slate-600 mb-4">
                A raw exploration of spiritual dryness, depression, and finding Hashem when He feels 
                impossibly distant.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">Read more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="text-blue-600" size={32} />
            <h3 className="text-3xl font-bold text-slate-800">Resources</h3>
          </div>
          <p className="text-slate-600 mb-8">
            Mental health resources that understand and respect our world. Because you deserve support 
            that speaks your language.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="font-bold text-slate-800 mb-3">Crisis Support</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Chazkeinu Hotline</li>
                <li>• Relief Resources</li>
                <li>• Amudim</li>
                <li>• JBFCS Crisis Line</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="font-bold text-slate-800 mb-3">Therapy & Counseling</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Frum Therapist Directory</li>
                <li>• Yeshiva-Sensitive Counselors</li>
                <li>• Sliding Scale Options</li>
                <li>• Telehealth Providers</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="font-bold text-slate-800 mb-3">Educational Resources</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Understanding Depression</li>
                <li>• Anxiety in the Frum World</li>
                <li>• When to Seek Help</li>
                <li>• Supporting Others</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Haskamos */}
      <section id="haskamos" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-blue-600" size={32} />
            <h3 className="text-3xl font-bold text-slate-800">Haskamos</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border-r-4 border-blue-600">
              <p className="text-slate-700 italic mb-2">
                "In a world where so many suffer in silence, this resource provides a voice and a path forward. 
                May it bring comfort and healing to many."
              </p>
              <p className="text-slate-600 text-sm">— [Gadol Name], Rosh Yeshiva</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-r-4 border-blue-600">
              <p className="text-slate-700 italic mb-2">
                "The struggle for mental health is a spiritual struggle. This work sanctifies that truth."
              </p>
              <p className="text-slate-600 text-sm">— [Gadol Name], Posek</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <MessageCircle className="text-blue-600" size={32} />
            <h3 className="text-3xl font-bold text-slate-800">Community Voices</h3>
          </div>
          
          {/* Comment Input */}
          <div className="mb-8">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts, words of chizuk, or how this site has helped you..."
              className="w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
            />
            <button
              onClick={handleCommentSubmit}
              className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Post Comment
            </button>
          </div>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map(comment => (
              <div key={comment.id} className="bg-slate-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-semibold text-slate-800">{comment.author}</span>
                  <span className="text-sm text-slate-500">{comment.date}</span>
                </div>
                <p className="text-slate-700">{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Vayeavek</h3>
          <p className="text-slate-300 mb-6">
            The dust of the struggle reaches the Throne of Glory
          </p>
          <p className="text-slate-400 text-sm">
            You are not alone in your struggle. You are seen. You matter.
          </p>
        </div>
      </footer>
    </div>
  );
}