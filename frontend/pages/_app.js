
import '../styles/globals.css'
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apolloClient';

function MyApp({ Component, pageProps }) {
 
  return (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
)}

export default MyApp
