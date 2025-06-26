import Link from 'next/link'; 
export default function DashboardLayout({ 
  children, 
}: { 
  children: React.ReactNode; 
}) { 
  console.log("DashboardLayout rendered"); 
  return ( 
    <div style={{ border: '2px solid green', padding: '20px', margin: '10px', backgroundColor: 
'#f9f9f9' }}> 
      <header style={{ background: '#d1e7dd', padding: '15px', marginBottom: '20px', 
borderRadius: '5px' }}> 
        <h2 style={{ margin: 0 }}>Dashboard Navigation</h2> 
        <nav style={{ display: 'flex', gap: '15px', marginTop: '10px' }}> 
          <Link href="/dashboard" style={{ textDecoration: 'none', color: '#0f5132', fontWeight: 
'bold' }}>Dashboard Home</Link> 
          <Link href="/dashboard/settings" style={{ textDecoration: 'none', color: '#0f5132', 
fontWeight: 'bold' }}>Settings</Link> 
          <Link href="/dashboard/profile" style={{ textDecoration: 'none', color: '#0f5132', 
fontWeight: 'bold' }}>Profile</Link> 
        </nav> 
      </header> 
      <main> 
        {children} {/* นีคือทีที Page Content ของ Dashboard (page.tsx, settings/page.tsx, 
profile/page.tsx) จะถูก render */} 
      </main> 
      <footer style={{ background: '#d1e7dd', padding: '10px', textAlign: 'center', marginTop: 
'20px', borderRadius: '5px' }}> 
        <p>Dashboard specific footer</p> 
      </footer> 
    </div> 
  ); 
} 