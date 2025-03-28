import Link from "next/link";
import { gql } from "@apollo/client";
import { createGraphClient } from "@/client-api/graph-client";
import type { User } from "@/app/api/graphql/user-data";

export default async function Home() {
  const client = createGraphClient();
  const { data, error } = await client.query({
    query: gql`
      query GetUsers {
        users {
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
    <div>
      {(data?.users ?? []).map((user: User) => (
        <Link href={`/user/${user.id}`} key={user.id}>
          <div>
            <h2>{user.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
