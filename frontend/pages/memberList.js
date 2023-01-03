
import React, { useState } from 'react';


import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


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
const ADD_MEMBER_MUTATION = gql`
  mutation AddMember($first_name: String!, $lastName: String!, $email: String!) {
    addMember(firstName: $firstName, lastName: $lastName, email: $email) {
      memberId
      firstName
      lastName
      email
    }
  }
`;

export default function MemberList() {
  const { loading, error, data } = useQuery(MEMBERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
<h1>pastoral data</h1>
    </div>
   
  
  )}

