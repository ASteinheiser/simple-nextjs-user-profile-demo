import Link from "next/link";
import type { User } from "@/app/api/graphql/user-data";

interface UserRowProps {
  user: User;
}

export default function UserRow({ user }: UserRowProps) {
  return (
    <Link href={`/user/${user.id}`} key={user.id}>
      <div>
        <h2>{user.name}</h2>
      </div>
    </Link>
  );
}
