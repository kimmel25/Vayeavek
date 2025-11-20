import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import BlogPreview from './BlogPreview';
import Resources from './Resources';
import Haskamos from './Haskamos';
import Comments from './Comments';
import Footer from './Footer';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <main>
        <Hero />
        <About />
        <BlogPreview />
        <Resources />
        <Haskamos />
        <Comments />
      </main>
      <Footer />
    </div>
  );
}