
import { useQuery, useMutation } from '@apollo/react-hooks';

import gql from 'graphql-tag';

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

function MembersList() {
  const { loading, error, data } = useQuery(MEMBERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.members.map(Member => (
        <li key={Member.member_id}>
          {Member.first_name} {Member.last_name} ({Member.email})
        </li>
      ))}
    </ul>
  );
}

export default MembersList;
