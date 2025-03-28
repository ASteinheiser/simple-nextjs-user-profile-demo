import { gql } from "@apollo/client";
import { createGraphClient } from "@/client-api/graph-client";

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

  return <div>User Page: {data?.user?.name ?? ''}</div>;
}
