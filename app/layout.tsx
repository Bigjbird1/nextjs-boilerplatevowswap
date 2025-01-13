// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ShoppingBag } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WeddingTransfer - Wedding Date Transfer Marketplace',
  description: 'Transfer your wedding date or find pre-loved wedding items',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                WeddingTransfer
              </div>
              <div className="flex items-center gap-6">
                <button className="text-gray-500 hover:text-gray-900">List your date</button>
                <button className="text-gray-500 hover:text-gray-900 flex items-center gap-1">
                  <ShoppingBag className="w-4 h-4" />
                  Marketplace
                </button>
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
