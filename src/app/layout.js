import localFont from "next/font/local";
import "./globals.css";


const italianno = localFont({
  src: "./fonts/Italianno-Regular.ttf",
  variable: "--font-italianno",
  weight: "100 900",
});

export const metadata = {
  title: "Andrey Viola",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${italianno.variable}`}>
        {children}
      </body>
    </html>
  );
}
