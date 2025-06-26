import Link from 'next/link';
import { notFound } from 'next/navigation';

interface UserProfilePageProps {
  params: {
    userId: string;
  };
}

const mockUsers = [ 
  { id: 'user1', name: 'Sakan Wokkum' }, 
  { id: 'user2', name: 'Jane Smith' }, 
  { id: 'user3', name: 'John Doe' }, 
];

export default function UserProfilePage({ params }: UserProfilePageProps) {
  const user = mockUsers.find(u => u.id === params.userId);

  if (!user) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Profile of User: {params.userId}</h1>
      <p className="text-lg mb-4">Name: {user?.name}</p>

  
    </div>
  );
}
