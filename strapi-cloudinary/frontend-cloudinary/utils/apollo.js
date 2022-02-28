import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import '../styles/globals.css'
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo";

const link = createHttpLink({
  fetch, 
  uri: "http://localhost:1337/graphql"
});

export default withApollo(
  ({ initialState }) => new ApolloClient({
      link: link,
      cache: new InMemoryCache().restore(initialState || {})
    })
);
function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default withData(MyApp)