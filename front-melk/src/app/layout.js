
import "./globals.css";
import Header from "./Component/Header";
import Create from "./Component/Create";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
      >
        {children}
       <Header/>
     
      </body>
    </html>
  );
}
