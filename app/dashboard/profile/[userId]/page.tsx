import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image'; // สำหรับแสดงรูปภาพใน Next.js

interface UserProfilePageProps {
  params: {
    userId: string;
  };
}

// ข้อมูลผู้ใช้จำลองที่เพิ่มรายละเอียดมากขึ้น
const mockUsers = [
  {
    id: 'user1',
    name: 'Sakan Wokkum',
    email: 'sakan.w@example.com',
    role: 'Administrator',
    bio: 'ผู้ดูแลระบบที่มีประสบการณ์ด้านการจัดการเครือข่ายและระบบคลาวด์',
    avatar: '/guneang.jpg', // เพิ่ม path รูปโปรไฟล์
  },
  {
    id: 'user2',
    name: 'Jane Smith',
    email: 'jane.s@example.com',
    role: 'Editor',
    bio: 'นักเขียนและบรรณาธิการผู้เชี่ยวชาญด้านเนื้อหาดิจิทัลและ SEO',
    avatar: '/images/avatar-jane.jpg',
  },
  {
    id: 'user3',
    name: 'John Doe',
    email: 'john.d@example.com',
    role: 'Member',
    bio: 'สมาชิกใหม่ที่สนใจเทคโนโลยีและกำลังเรียนรู้การพัฒนาเว็บไซต์',
    avatar: '/images/avatar-john.jpg',
  },
];

export default function UserProfilePage({ params }: UserProfilePageProps) {
  const user = mockUsers.find(u => u.id === params.userId);

  if (!user) {
    notFound(); // ถ้าไม่พบผู้ใช้ ให้แสดงหน้า 404 Not Found
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 text-center">
        {/* ส่วนรูปโปรไฟล์ */}
        {user.avatar && (
          <div className="mb-6">
            <Image
              src={user.avatar}
              alt={`${user.name}'s avatar`}
              width={120}
              height={120}
              className="rounded-full mx-auto border-4 border-blue-400 dark:border-blue-600 shadow-md"
            />
          </div>
        )}

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {user.name}
        </h1>
        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
          {user.role}
        </p>

        <div className="text-left text-gray-700 dark:text-gray-300 space-y-3 mb-6">
          <p>
            <strong className="text-gray-800 dark:text-gray-200">ID:</strong> {user.id}
          </p>
          <p>
            <strong className="text-gray-800 dark:text-gray-200">อีเมล:</strong> {user.email}
          </p>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md shadow-sm border border-gray-200 dark:border-gray-600">
            <strong className="block text-gray-800 dark:text-gray-200 mb-1">เกี่ยวกับ:</strong>
            <p className="text-gray-700 dark:text-gray-300 text-sm italic">{user.bio}</p>
          </div>
        </div>

        <Link
          href="/dashboard/profile"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
        >
          กลับสู่หน้าโปรไฟล์ทั้งหมด
        </Link>
      </div>
    </div>
  );
}

