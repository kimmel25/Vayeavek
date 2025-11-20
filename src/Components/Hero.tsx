import { Link } from 'react-router-dom';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">The Struggle Reaches Up</h2>
        <p className="text-xl md:text-2xl text-slate-600 mb-4 leading-relaxed font-serif italic">
          "וַיֵּאָבֵק אִישׁ עִמּוֹ"
        </p>
        <p className="text-lg text-slate-500 mb-6">And a man wrestled with him</p>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-8 leading-relaxed">
          The dust of Yaakov's struggle with the Sar shel Eisav rose to cover the Kisei HaKavod.
          In our own struggles with the Sitra Achra, we sometimes lose sight of the connection between
          our battles down here and the Yaakov above. This space exists to support, connect, and remind
          us that the struggle itself is holy.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/resources"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl font-semibold"
          >
            Find Resources
          </Link>
          <button
            onClick={() => scrollToSection('about')}
            className="bg-white text-slate-800 px-8 py-3 rounded-lg hover:bg-slate-100 transition border-2 border-slate-300 font-semibold"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
