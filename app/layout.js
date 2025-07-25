import { Geist, Geist_Mono, Young_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const fraunces = Young_Serif({
  variable: "--font-libre-bodoni",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "OneBill Knowledge Hub",
  description: "knowledge hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="./app/o.png" />
        <meta
          name="description"
          content="OneBill Knowledge Hub - Your go-to resource for all things OneBill."
        />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
