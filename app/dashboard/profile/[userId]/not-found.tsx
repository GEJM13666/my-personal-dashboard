// ถ้าใช้ Next.js หรือ Router อื่นๆ อย่าลืม import Link หรือ useRouter
// import Link from 'next/link'; 
// import { useRouter } from 'next/router';

export default function NotFoundPage() { 
  return ( 
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <h1 className="text-6xl font-bold text-red-600 dark:text-red-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">ขออภัย, ไม่พบหน้านี้</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          หน้าที่คุณกำลังมองหาอาจถูกลบ, เปลี่ยนชื่อ, หรือไม่พร้อมใช้งานชั่วคราว
        </p>
        
        {/* ตัวอย่างลิงก์กลับหน้าหลัก */}
        {/* ถ้าใช้ Next.js ให้ใช้ <Link href="/"> แทน <a href="/"> */}
        <a 
          href="/dashboard/profile" 
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
        >
          กลับสู่หน้า Dashboard
        </a>

        {/* ตัวอย่างลิงก์เพิ่มเติม (ถ้ามี) */}
        {/* <div className="mt-4 text-gray-500 dark:text-gray-400">
          หรือลอง: <a href="/contact" className="text-blue-500 hover:underline">ติดต่อเรา</a> | <a href="/faq" className="text-blue-500 hover:underline">คำถามที่พบบ่อย</a>
        </div> */}
      </div>
    </div>
  ); 
}