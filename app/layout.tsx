

import "./globals.css";
import Link from 'next/link';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <html lang="en"> 
      <body> 
        <nav style={{ background: '#333', padding: '15px', color: 'white', display: 'flex', 
justifyContent: 'space-around' }}> 
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link> 
          <Link href="/dashboard" style={{ color: 'white', textDecoration: 'none' 
}}>Dashboard</Link> 
          <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link> 
        </nav> 
        <div style={{ padding: '20px', border: '1px solid #ddd', margin: '20px', minHeight: 
'calc(100vh - 150px)' }}> 
          {children} {/* นีคือทีที Root Page หรือ Dashboard Layout จะถูก render */} 
        </div> 
        <footer style={{ background: '#eee', padding: '10px', textAlign: 'center', marginTop: '20px' 
}}> 
          <p>&copy; {new Date().getFullYear()} Developted by Sakan Wokkum</p> 
        </footer> 
      </body> 
    </html> 
  ); 
} 