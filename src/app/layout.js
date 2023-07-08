import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Undangan Pernikahan - Lilis ❤️ Davit",
  description: "Save the date",
  openGraph: {
    images: "/images/aset8.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
