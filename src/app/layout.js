import '../index.css';
import PortfolioContextProvider from '../context/PortfolioContext';

export const metadata = {
  title: 'Portfolio',
  description: 'My Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PortfolioContextProvider>
          {children}
        </PortfolioContextProvider>
      </body>
    </html>
  )
}
