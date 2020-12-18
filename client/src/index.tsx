import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { theme, ChakraProvider } from "@chakra-ui/react";
import "./utils/i18n";

const wsLink = new WebSocketLink({
  uri: "ws://localhost:8080/v1/graphql",
  options: {
    reconnect: true,
  },
});

const client = new ApolloClient({
  uri: "http://localhost:8080/v1/graphql",
  cache: new InMemoryCache(),
  link: wsLink,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
