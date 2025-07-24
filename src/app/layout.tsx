import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AuthProvider } from "@/hooks/use-auth";
import { CartProvider } from "@/hooks/use-cart";
import { BookingProvider } from "@/hooks/use-booking";
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CurvvTech – Digital Solutions & AI",
  description: "Leading provider of AI-powered digital solutions, helping businesses transform their operations with cutting-edge technology.",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>
              <BookingProvider>
                <div className="min-h-screen flex flex-col bg-gray-900">
                  <Navbar />
                  <main className="flex-1">
                    {children}
                  </main>
                  <Footer />
                </div>
              </BookingProvider>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
