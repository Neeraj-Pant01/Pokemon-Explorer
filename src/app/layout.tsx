import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pokémon Explorer | Gotta Catch Em All',
  description: 'Explore the wonderful world of Pokémon!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-repeat bg-[length:300px]">
        {children}
      </body>
    </html>
  );
}