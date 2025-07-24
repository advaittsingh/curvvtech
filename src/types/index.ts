export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  features: string[];
  specifications: Record<string, string>;
}

export interface Service {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  duration: string;
  features: string[];
  deliverables: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface ServiceBooking {
  id: string;
  service: Service;
  date: string;
  time: string;
  requirements: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: string;
}

export interface ServiceOrder {
  id: string;
  booking: ServiceBooking;
  total: number;
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed';
  requirements: string;
  createdAt: string;
}

export interface Address {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
} 