'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { services } from '@/data/services';
import { useBooking } from '@/hooks/use-booking';
import { useAuth } from '@/hooks/use-auth';
import { ArrowLeft, Star, Check, Clock, Calendar, Users, BookOpen } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const { setBooking } = useBooking();
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [requirements, setRequirements] = useState('');

  const service = services.find(s => s.id === params.id);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <button
            onClick={() => router.push('/services')}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const handleBookService = () => {
    if (!user) {
      router.push('/login');
      return;
    }

    if (!bookingDate || !bookingTime) {
      alert('Please select a date and time for your booking.');
      return;
    }

    setBooking(service, bookingDate, bookingTime, requirements);
    router.push('/service-checkout');
  };

  // Generate available dates (next 30 days)
  const availableDates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date.toISOString().split('T')[0];
  });

  const availableTimes = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-purple-600 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Image */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Service Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {service.category}
                </span>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < 4 ? 'fill-current' : ''}`} />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">(4.9) • 89 reviews</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
            </div>

            {/* Price and Duration */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-4xl font-bold text-gray-900">{formatPrice(service.price)}</span>
                <span className="text-gray-500">per project</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2" />
                <span>Duration: {service.duration}</span>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Included</h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Deliverables</h3>
              <ul className="space-y-2">
                {service.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking Form */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Book This Service</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date *
                    </label>
                    <select
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select a date</option>
                      {availableDates.map(date => (
                        <option key={date} value={date}>
                          {new Date(date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time *
                    </label>
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select a time</option>
                      {availableTimes.map(time => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Requirements
                  </label>
                  <textarea
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="Tell us about your project requirements, goals, and any specific needs..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <button
                  onClick={handleBookService}
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Book This Service</span>
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Process</h4>
                  <p>Initial consultation → Project planning → Development → Testing → Delivery</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
                  <p>Post-delivery support and maintenance included in the service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 