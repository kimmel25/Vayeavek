import { User } from 'lucide-react';

export default function About() {
  return (
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
  );
}
