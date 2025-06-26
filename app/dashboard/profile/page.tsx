import React from "react";
import Link from "next/link";

const profiles = [
  { id: 'user1', name: 'Sakan Wokkum' },
  { id: 'user2', name: 'Jane Smith' },
  { id: 'user3', name: 'John Doe' },
];

const DashboardProfileListPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
          รายชื่อโปรไฟล์
        </h1>

        <ul className="space-y-4">
          {profiles.map((profile) => (
            <li key={profile.id}>
              <Link
                href={`/dashboard/profile/${profile.id}`}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ease-in-out
                           border border-gray-200 dark:border-gray-600
                           text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <span className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  {profile.name}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500 dark:text-blue-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
          ))}

          {/* ลิงก์สำหรับทดสอบหน้า Not Found */}
          <li className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
            <Link
              href="/dashboard/profile/invalid-id"
              className="flex items-center justify-center p-3 bg-red-100 dark:bg-red-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ease-in-out
                         border border-red-200 dark:border-red-700
                         text-red-700 hover:text-red-800 dark:text-red-300 dark:hover:text-red-200
                         font-medium text-sm
                         focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              ดูโปรไฟล์ที่ไม่มีอยู่จริง (สำหรับทดสอบ 404)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardProfileListPage;