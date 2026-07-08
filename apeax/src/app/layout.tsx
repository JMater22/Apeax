import type { Metadata } from "next";
import { Inter, Bebas_Neue, Poppins } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "APEAX",
  description:
    "APEAX is a story-driven e-commerce platform — experience the story before wearing it.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebasNeue.variable} ${poppins.variable} font-sans antialiased`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}