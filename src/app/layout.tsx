import './globals.css';
import Header from '@/components/header';  // Adjust path if necessary
import Footer from '@/components/footer';


export const metadata = {
  title: 'Home | Matthew Gardiner',
  description: 'Homepage of my portfolio.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark:bg-gray-900">
      <body className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
