const sampleComments = [
  { id: 1, author: 'Sarah', text: 'This site helped me find a therapist who understood my background.' },
  { id: 2, author: 'Dovid', text: 'Clear resources and easy to navigate.' },
  { id: 3, author: 'Ruth', text: 'I shared this with my rebbetzin — she appreciated the curated list.' },
];

export default function Comments() {
  return (
    <section id="comments" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Community Voices</h3>
        <div className="space-y-4">
          {sampleComments.map((c) => (
            <div key={c.id} className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-slate-700">{c.text}</p>
              <div className="mt-2 text-sm text-slate-500">— {c.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
