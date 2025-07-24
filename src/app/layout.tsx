import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AuthProvider } from "@/hooks/use-auth";
import { CartProvider } from "@/hooks/use-cart";
import { BookingProvider } from "@/hooks/use-booking";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CurvvTech – Digital Solutions & AI",
  description: "Leading provider of AI-powered digital solutions, helping businesses transform their operations with cutting-edge technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <BookingProvider>
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </div>
            </BookingProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
