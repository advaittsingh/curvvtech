'use client';

import Link from 'next/link';
import { CheckCircle, Calendar, Clock, Users, Home, Briefcase } from 'lucide-react';
import { generateId } from '@/lib/utils';

export default function ServiceConfirmationPage() {
  const bookingId = generateId();
  const estimatedStart = new Date();
  estimatedStart.setDate(estimatedStart.getDate() + 2);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600 text-lg">
            Thank you for booking our service. Your project has been scheduled successfully.
          </p>
        </div>

        {/* Booking Details */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Booking Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Booking Information</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Booking ID:</span>
                  <span className="font-mono font-medium">#{bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Booking Date:</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment Status:</span>
                  <span className="text-green-600 font-medium">Paid</span>
                </div>
                <div className="flex justify-between">
                  <span>Booking Status:</span>
                  <span className="text-blue-600 font-medium">Confirmed</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">Project Timeline</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Estimated Start:</span>
                  <span>{estimatedStart.toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Duration:</span>
                  <span>4-8 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Team Assignment:</span>
                  <span className="text-blue-600">In Progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Timeline */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Project Timeline</h2>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">Booking Confirmed</h3>
                <p className="text-sm text-gray-600">Your service booking has been confirmed</p>
                <p className="text-xs text-gray-500">{new Date().toLocaleString()}</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Users className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">Team Assignment</h3>
                <p className="text-sm text-gray-600">Our team will be assigned to your project</p>
                <p className="text-xs text-gray-500">Expected: Within 24 hours</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                <Calendar className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-400">Initial Consultation</h3>
                <p className="text-sm text-gray-400">Kickoff meeting to discuss project requirements</p>
                <p className="text-xs text-gray-400">Expected: 2-3 business days</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                <Briefcase className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-400">Project Development</h3>
                <p className="text-sm text-gray-400">Active development phase</p>
                <p className="text-xs text-gray-400">Expected: 4-8 weeks</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                <CheckCircle className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-400">Project Delivery</h3>
                <p className="text-sm text-gray-400">Final delivery and handover</p>
                <p className="text-xs text-gray-400">Expected: End of project timeline</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-purple-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What's Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Project Manager Contact</h3>
              <p className="text-gray-600">
                You'll receive an email within 24 hours with your dedicated project manager's contact information.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Project Updates</h3>
              <p className="text-gray-600">
                Regular updates will be sent to your email with project progress and milestones.
              </p>
            </div>
          </div>
        </div>

        {/* Support Information */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Support & Communication</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Project Communication</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Weekly progress reports</li>
                <li>• Milestone notifications</li>
                <li>• Direct access to project manager</li>
                <li>• Real-time project dashboard</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Support Channels</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Email: projects@curvvtech.com</li>
                <li>• Phone: +1 (555) 123-4567</li>
                <li>• Live chat: Available 24/7</li>
                <li>• Project portal: Access your dashboard</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Home className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/services"
            className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-colors flex items-center justify-center space-x-2"
          >
            <Briefcase className="h-5 w-5" />
            <span>Browse More Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 