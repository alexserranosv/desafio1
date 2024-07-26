import { Inter } from "next/font/google";
import "../styles/globals.css";
import "highlight.js/styles/atom-one-dark.css"; // Añade esta línea

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
