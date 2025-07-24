'use client';

import Link from 'next/link';
import { CheckCircle, Package, Truck, Home, ShoppingBag } from 'lucide-react';
import { generateId } from '@/lib/utils';

export default function OrderConfirmationPage() {
  const orderId = generateId();
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 text-lg">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Order Information</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Order ID:</span>
                  <span className="font-mono font-medium">#{orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Order Date:</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment Status:</span>
                  <span className="text-green-600 font-medium">Paid</span>
                </div>
                <div className="flex justify-between">
                  <span>Order Status:</span>
                  <span className="text-blue-600 font-medium">Processing</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">Shipping Information</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Estimated Delivery:</span>
                  <span>{estimatedDelivery.toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Method:</span>
                  <span>Standard Shipping</span>
                </div>
                <div className="flex justify-between">
                  <span>Tracking:</span>
                  <span className="text-blue-600">Will be available soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Timeline */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Timeline</h2>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">Order Confirmed</h3>
                <p className="text-sm text-gray-600">Your order has been received and confirmed</p>
                <p className="text-xs text-gray-500">{new Date().toLocaleString()}</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Package className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">Processing</h3>
                <p className="text-sm text-gray-600">Your order is being prepared for shipment</p>
                <p className="text-xs text-gray-500">Expected: Within 24 hours</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                <Truck className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-400">Shipped</h3>
                <p className="text-sm text-gray-400">Your order will be shipped soon</p>
                <p className="text-xs text-gray-400">Expected: 1-2 business days</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                <CheckCircle className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-400">Delivered</h3>
                <p className="text-sm text-gray-400">Your order will be delivered</p>
                <p className="text-xs text-gray-400">Expected: {estimatedDelivery.toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What's Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Order Updates</h3>
              <p className="text-gray-600">
                You'll receive email updates about your order status and tracking information.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">
                Need help? Contact our support team at support@curvvtech.com or call us at +1 (555) 123-4567.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Home className="h-5 w-5" />
            <span>Continue Shopping</span>
          </Link>
          <Link
            href="/products"
            className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
          >
            <ShoppingBag className="h-5 w-5" />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 