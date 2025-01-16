
import "./globals.css";
import Header from "./Component/Header";
import Create from "./Component/Create";
import Seller from "./Component/Seller";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
      >
        {children}
       <Seller></Seller>
      </body>
    </html>
  );
}
