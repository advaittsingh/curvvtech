# CurvvTech - Digital Solutions & AI

A modern, full-stack website for CurvvTech, a leading provider of AI-powered digital solutions. Built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

### 🛍️ E-commerce Flow
- **Product Catalog** - Browse AI products with search, filtering, and sorting
- **Product Details** - Detailed product information with specifications
- **Shopping Cart** - Add/remove items with quantity management
- **Checkout Process** - Complete checkout with shipping and payment
- **Order Confirmation** - Order tracking and confirmation

### 🔧 Service Booking Flow
- **Service Catalog** - Browse professional services
- **Service Details** - Service information with features and deliverables
- **Service Booking** - Date/time selection and requirements input
- **Service Checkout** - Booking confirmation and payment
- **Service Confirmation** - Project timeline and booking details

### 👤 User Authentication
- **User Registration** - Create new accounts with validation
- **User Login** - Secure authentication system
- **Protected Routes** - Access control for authenticated features

### 🎨 Modern UI/UX
- **Responsive Design** - Works perfectly on all devices
- **Modern Interface** - Beautiful, professional design
- **Smooth Animations** - Enhanced user experience
- **Accessible** - WCAG compliant components

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API with useReducer
- **UI Components**: Headless UI
- **Development**: ESLint, Turbopack

## 📁 Project Structure

```
curvvtech-portal/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── products/          # Product pages
│   │   ├── services/          # Service pages
│   │   ├── cart/              # Shopping cart
│   │   ├── checkout/          # Checkout process
│   │   ├── login/             # Authentication
│   │   └── ...                # Other pages
│   ├── components/            # Reusable UI components
│   ├── hooks/                 # Custom React hooks
│   ├── data/                  # Mock data
│   ├── types/                 # TypeScript interfaces
│   └── lib/                   # Utility functions
├── public/                    # Static assets
└── package.json              # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/curvvtech.git
   cd curvvtech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features

### State Management
- **Authentication Context** - User login/logout state
- **Cart Context** - Shopping cart management
- **Booking Context** - Service booking state

### Routing
- **File-based Routing** - Next.js App Router
- **Dynamic Routes** - Product and service detail pages
- **Protected Routes** - Authentication required pages

### Data Management
- **TypeScript Interfaces** - Type-safe data structures
- **Mock Data** - Sample products and services
- **Form Validation** - Client-side validation

## 🔧 Customization

### Adding Products
Edit `src/data/products.ts` to add new products:

```typescript
export const products: Product[] = [
  {
    id: "p1",
    title: "AI Chatbot Solution",
    price: 999,
    description: "Intelligent chatbot for customer support",
    // ... other properties
  }
]
```

### Adding Services
Edit `src/data/services.ts` to add new services:

```typescript
export const services: Service[] = [
  {
    id: "s1",
    title: "AI Consulting",
    price: 500,
    description: "Expert AI strategy consulting",
    // ... other properties
  }
]
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify** - Static site hosting
- **Railway** - Full-stack deployment
- **AWS Amplify** - AWS hosting solution

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Website**: [curvvtech.com](https://curvvtech.com)
- **Email**: info@curvvtech.com
- **Phone**: +1 (555) 123-4567

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- UI components from [Headless UI](https://headlessui.dev/)

---

**CurvvTech** - Transforming businesses with AI-powered digital solutions.
