import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-6">
          ยินดีต้อนรับสู่ <span className="text-gray-700 dark:text-gray-200">Personel Dashboard App!</span>
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          สวัสดีครับ, นายสกรรจ วกกุม
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          รหัสนักศึกษา: 652021073
        </p>

        <p className="text-md text-gray-500 dark:text-gray-400 mb-10">
          คุณสามารถไปยังส่วนแดชบอร์ดได้โดยใช้ลิงก์ด้านล่างนี้
        </p>

        {/* ปุ่มหรือลิงก์สำหรับไปยัง Dashboard */}
        <Link 
          href="/dashboard" 
          className="inline-flex items-center px-8 py-4 bg-gray-700 text-white font-bold text-lg rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-300 ease-in-out
                     transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l7 7m-7-7v10a1 1 0 01-1 1h-3"
            />
          </svg>
          เข้าสู่แดชบอร์ด
        </Link>
      </div>
    </div>
  );
}