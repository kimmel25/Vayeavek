import { useState } from 'react';
import { Phone, Mail, Globe, Clock, Heart, AlertCircle } from 'lucide-react';
import { resources, categoryNames, getResourcesByCategory } from '../data/resources';
import type { Resource } from '../data/resources';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<Resource['category'] | 'all'>('all');

  const filteredResources = getResourcesByCategory(activeCategory);

  const categories: Array<Resource['category'] | 'all'> = ['all', 'crisis', 'therapy', 'support', 'financial', 'rabbinic'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Nav />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Heart className="text-rose-600" size={40} />
            <h1 className="text-5xl font-bold text-slate-800">Resources</h1>
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-6">
            You don't have to struggle alone. These organizations understand the yeshiva world
            and are here to help. All services are confidential.
          </p>
          <div className="bg-rose-50 border-l-4 border-rose-600 p-6 rounded-r-lg max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-rose-600 flex-shrink-0 mt-1" size={24} />
              <div className="text-left">
                <p className="font-bold text-rose-900 mb-2">In Crisis? Get Help Now:</p>
                <p className="text-rose-800">
                  <strong>Relief Crisis Hotline:</strong> 718-431-9501 (24/7)<br />
                  <strong>National Crisis Line:</strong> 988 (24/7)<br />
                  <strong>Emergency:</strong> 911
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category === 'all' ? 'All Resources' : categoryNames[category]}
            </button>
          ))}
        </div>

        {/* Resources by Category */}
        <div className="space-y-8">
          {activeCategory === 'all'
            ? // Show grouped by category
              (Object.keys(categoryNames) as Resource['category'][]).map((category) => {
                const categoryResources = resources.filter(r => r.category === category);
                return (
                  <div key={category} className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 pb-2 border-b-2 border-blue-600">
                      {categoryNames[category]}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {categoryResources.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                      ))}
                    </div>
                  </div>
                );
              })
            : // Show filtered category
              <div className="grid md:grid-cols-2 gap-6">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
          }
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  const getCategoryColor = (category: Resource['category']) => {
    const colors = {
      crisis: 'border-rose-500 bg-rose-50',
      therapy: 'border-blue-500 bg-blue-50',
      support: 'border-teal-500 bg-teal-50',
      financial: 'border-amber-500 bg-amber-50',
      rabbinic: 'border-purple-500 bg-purple-50'
    };
    return colors[category];
  };

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border-l-4 ${getCategoryColor(resource.category)}`}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-slate-800">{resource.name}</h3>
        {resource.kosher && (
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded">
            Frum-Friendly
          </span>
        )}
      </div>

      <p className="text-slate-700 mb-4 leading-relaxed">
        {resource.description}
      </p>

      <div className="space-y-2">
        {resource.phone && (
          <div className="flex items-center gap-2 text-slate-600">
            <Phone size={18} className="text-blue-600 flex-shrink-0" />
            <a href={`tel:${resource.phone}`} className="hover:text-blue-600 transition">
              {resource.phone}
            </a>
          </div>
        )}

        {resource.website && (
          <div className="flex items-center gap-2 text-slate-600">
            <Globe size={18} className="text-blue-600 flex-shrink-0" />
            <a
              href={resource.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition truncate"
            >
              {resource.website.replace('https://', '')}
            </a>
          </div>
        )}

        {resource.email && (
          <div className="flex items-center gap-2 text-slate-600">
            <Mail size={18} className="text-blue-600 flex-shrink-0" />
            <a href={`mailto:${resource.email}`} className="hover:text-blue-600 transition">
              {resource.email}
            </a>
          </div>
        )}

        {resource.hours && (
          <div className="flex items-center gap-2 text-slate-600">
            <Clock size={18} className="text-blue-600 flex-shrink-0" />
            <span>{resource.hours}</span>
          </div>
        )}
      </div>
    </div>
  );
}
