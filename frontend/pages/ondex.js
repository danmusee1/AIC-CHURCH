import React, { useState } from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import gql from 'graphql-tag';
import { useQuery} from "@apollo/react-hooks";

const client = new ApolloClient({
    uri : 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  })

  const MEMBERS_QUERY = gql`
  query {
    members {
      member_id
      first_name
      last_name
      email
      date_of_birth
    }
  }
`;


export default function MembersList() {
  const { loading, error, data } = useQuery(MEMBERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
    <ul>
      {data.members.map((member) => (
        <li key={member.member_id}>
          {member.first_name} 
        </li>
      ))}
    </ul>
    </div>
  );
}


