import React from 'react';
import Link from 'next/link'; // สำหรับการนำทางไปยังหน้าอื่น ๆ

export default function DashboardHomePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 text-center sm:text-left">
          ภาพรวมแดชบอร์ด
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center sm:text-left">
          ยินดีต้อนรับสู่แดชบอร์ดส่วนตัวของคุณ! นี่คือภาพรวมกิจกรรมและข้อมูลสำคัญของคุณ
        </p>

        {/* ส่วนของการ์ดข้อมูลหลัก */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* การ์ด: โปรไฟล์ของคุณ */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              โปรไฟล์ของคุณ
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              อัปเดตข้อมูลส่วนตัวและตั้งค่าความเป็นส่วนตัวของคุณ
            </p>
            <Link href="/dashboard/profile" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center">
              จัดการโปรไฟล์
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* การ์ด: การตั้งค่า */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.545.334 1.25.624 2.036.852.786.228 1.624.354 2.478.354z" />
              </svg>
              การตั้งค่า
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              ปรับแต่งการตั้งค่าแอปพลิเคชันและการแจ้งเตือน
            </p>
            <Link href="/dashboard/settings" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center">
              ไปที่การตั้งค่า
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* การ์ด: สรุปกิจกรรม */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 lg:col-span-1 md:col-span-2 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              สรุปกิจกรรม
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              ดูบันทึกกิจกรรมล่าสุดและการเปลี่ยนแปลงสำคัญทั้งหมด
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              (ยังไม่มีข้อมูลแสดง: คุณสามารถเพิ่มกราฟหรือรายการกิจกรรมได้ที่นี่)
            </p>
          </div>
        </div>

        {/* ส่วนคำแนะนำการใช้งาน */}
        <div className="text-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-4 rounded-lg shadow-md border border-blue-200 dark:border-blue-700">
          <p className="font-medium">
            **เคล็ดลับ:** ใช้เมนูด้านข้างหรือด้านบนเพื่อสำรวจส่วนต่างๆ เช่น โปรไฟล์และการตั้งค่า
          </p>
        </div>
      </div>
    </div>
  );
}