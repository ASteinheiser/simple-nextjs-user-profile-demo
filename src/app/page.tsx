import { gql } from "@apollo/client";
import { createGraphClient } from "@/client-api/graph-client";

export default async function Home() {
  const client = createGraphClient();
  const { data, error } = await client.query({
    query: gql`
      query GetHello {
        hello
      }
    `,
  });

  console.log(data, error);

  return (
    <div>Users</div>
  );
}
