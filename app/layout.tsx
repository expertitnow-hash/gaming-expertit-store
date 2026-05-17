import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gaming Expertit Store - Buy Cheap Game Keys',
  description: 'Digital Games Marketplace - Instant Delivery',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">
        {children}
      </body>
    </html>
  );
}
