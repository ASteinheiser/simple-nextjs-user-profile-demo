import Image from "next/image";
import Link from "next/link";
import type { User } from "@/app/api/graphql/user-data";

interface UserRowProps {
  user: User;
}

export default function UserRow({ user }: UserRowProps) {
  return (
    <Link href={`/user/${user.id}`} key={user.id}>
      <div className="flex flex-row items-center justify-between shadow-md rounded-lg p-4">
        <div className="flex flex-row items-center gap-6">
          <Image
            src={`/profile-${user.profilePictureVariant}.svg`}
            alt={user.name}
            width={80}
            height={80}
          />

          <h2 className="text-lg font-body">{user.name}</h2>
        </div>

        <span className="text-md font-body">
          {user.friends.length} friend{user.friends.length === 1 ? '' : 's'}
        </span>
      </div>
    </Link>
  );
}
