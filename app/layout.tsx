import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ChakraProvider } from '@chakra-ui/react';
import './globals.css';
import Navbar from './components/navbar';
import { useContext } from 'react';
import { CartContext, CartProvider } from './cart-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shopper',
  description: 'Apparel shopping',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
