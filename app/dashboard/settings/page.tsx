'use client'

import React from 'react';

// คุณสามารถเพิ่มการ import component อื่นๆ ที่จำเป็นได้ที่นี่
// import Button from '../components/Button'; 
// import InputField from '../components/InputField';

export default function SettingsPage() {
  // หากต้องการจัดการสถานะ (state) ของการตั้งค่าต่างๆ 
  // สามารถใช้ useState hook ได้ที่นี่
  // const [username, setUsername] = React.useState('JohnDoe');
  // const [email, setEmail] = React.useState('john.doe@example.com');
  // const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  // ฟังก์ชันสำหรับบันทึกการตั้งค่า
  const handleSaveChanges = () => {
    // Implement logic to save settings, e.g., to an API or local storage
    console.log('บันทึกการตั้งค่าแล้ว!');
    // alert('การตั้งค่าถูกบันทึกเรียบร้อย!');
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        ตั้งค่า
      </h1>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          ข้อมูลส่วนตัว
        </h2>
        <div className="space-y-4">
          {/* ตัวอย่าง Input Field สำหรับชื่อผู้ใช้ */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              ชื่อผู้ใช้
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-50 dark:bg-gray-700 dark:text-white"
              placeholder="ป้อนชื่อผู้ใช้ของคุณ"
              // value={username} // หากใช้ state
              // onChange={(e) => setUsername(e.target.value)} // หากใช้ state
            />
          </div>

          {/* ตัวอย่าง Input Field สำหรับอีเมล */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              อีเมล
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-50 dark:bg-gray-700 dark:text-white"
              placeholder="ป้อนอีเมลของคุณ"
              // value={email} // หากใช้ state
              // onChange={(e) => setEmail(e.target.value)} // หากใช้ state
            />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          การแจ้งเตือน
        </h2>
        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300">รับการแจ้งเตือนทางอีเมล</span>
          <label htmlFor="notifications-toggle" className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="notifications-toggle"
              className="sr-only peer"
              // checked={notificationsEnabled} // หากใช้ state
              // onChange={() => setNotificationsEnabled(!notificationsEnabled)} // หากใช้ state
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSaveChanges}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
        >
          บันทึกการตั้งค่า
        </button>
      </div>
    </div>
  );
}