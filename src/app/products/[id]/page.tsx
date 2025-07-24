'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { products } from '@/data/products';
import { useCart } from '@/hooks/use-cart';
import { useAuth } from '@/hooks/use-auth';
import { ArrowLeft, Star, Check, ShoppingCart, Heart } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const { addItem, getItemQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button
            onClick={() => router.push('/products')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const currentQuantity = getItemQuantity(product.id);

  const handleAddToCart = () => {
    if (!user) {
      router.push('/login');
      return;
    }
    addItem(product, quantity);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="h-6 w-6" />
                </button>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < 4 ? 'fill-current' : ''}`} />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">(4.8) • 127 reviews</span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
            </div>

            {/* Price */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                <span className="text-gray-500 line-through">{formatPrice(product.price * 1.2)}</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                  Save 17%
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">{key}</span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center space-x-4 mb-4">
                <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
                {currentQuantity > 0 && (
                  <span className="text-sm text-gray-500">
                    ({currentQuantity} in cart)
                  </span>
                )}
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={() => router.push('/checkout')}
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Delivery</h4>
                  <p>Free shipping on orders over $100</p>
                  <p>Estimated delivery: 3-5 business days</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Returns</h4>
                  <p>30-day money-back guarantee</p>
                  <p>Free returns within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 