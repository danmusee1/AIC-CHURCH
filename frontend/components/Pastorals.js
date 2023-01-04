import { useQuery, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";

const QUERY = gql`
  query  {
    pastorals {
      first_name
      last_name
      mission
    }
  }
`;

export default function Pastorals() {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const pastorals = data.pastorals.slice(0, 4);

  return (
    <div className={styles.grid}>
      {pastorals.map((pastoral) => (
        <div key={pastoral.pastoral_id} className={styles.card}>
          <h3>{pastoral.first_name}</h3>
          <p>
            {pastoral.last_name} - {pastoral.mission}
          </p>
        </div>
      ))}
    </div>
  );
}
