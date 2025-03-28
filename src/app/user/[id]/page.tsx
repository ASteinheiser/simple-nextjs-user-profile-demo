import Image from "next/image";
import Link from "next/link";
import { gql } from "@apollo/client";
import { createGraphClient } from "@/client-api/graph-client";
import type { User } from "@/app/api/graphql/user-data";
import UserRow from "@/components/UserRow";

interface UserPageProps {
  params: Promise<{ id: string }>;
}

export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params;

  const client = createGraphClient();
  const { data, error } = await client.query({
    variables: { id },
    query: gql`
      query GetUser($id: ID!) {
        user(id: $id) {
          id
          name
          profilePictureVariant
          friends {
            id
            name
            profilePictureVariant
          }
        }
      }
    `,
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col gap-8 max-w-lg m-auto p-6">
      <div className="flex flex-row items-center gap-6">
        <Link href="/">
          <Image
            src={`/arrow-back.svg`}
            alt={'arrow back'}
            width={48}
            height={48}
          />
        </Link>

        <h1 className="text-xl font-title">{data?.user?.name}</h1>
      </div>

      <Image
        src={`/profile-${data?.user?.profilePictureVariant}.svg`}
        alt={data?.user?.name ?? ''}
        width={200}
        height={200}
      />

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-title">Friends</h2>

        <div className="w-full h-[2px] bg-secondary" />

        {(data?.user?.friends ?? []).map((friend: User) => (
          <UserRow key={friend.id} user={friend} />
        ))}
      </div>
    </div>
  );
}
