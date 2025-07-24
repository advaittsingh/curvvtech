'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { services } from '@/data/services';
import { Service } from '@/types';
import { Search, Clock, Star, ArrowRight } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['all', ...Array.from(new Set(services.map(s => s.category)))];

  const filteredServices = useMemo(() => {
    let filtered = services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.title.localeCompare(b.title);
        case 'duration':
          return parseInt(a.duration.split('-')[0]) - parseInt(b.duration.split('-')[0]);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional development and consulting services tailored to your business needs. 
            From web development to AI integration, we've got you covered.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration">Duration: Short to Long</option>
            </select>
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

        {/* Results count */}
        <div className="mt-8 text-center text-gray-600">
          Showing {filteredServices.length} of {services.length} services
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-purple-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {service.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{service.duration}</span>
          </div>
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-current' : ''}`} />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">(4.9)</span>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <h4 className="font-medium text-gray-900 text-sm">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">{formatPrice(service.price)}</span>
          <Link
            href={`/services/${service.id}`}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
          >
            <span>View Details</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
} 