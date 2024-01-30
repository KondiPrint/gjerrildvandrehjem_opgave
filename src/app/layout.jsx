import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gjerrild Vandrehjem',
  description: 'Et fantastisk vandrehjem til at hvile dine trætte ben',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='min-h-dvh scroll-smooth'>
      <body className={inter.className + ' ' + 'min-h-dvh flex flex-col'}>
        <section className='flex-grow bg-offWhite'>{children}</section>
        <Footer />
      </body>
    </html>
  );
}
