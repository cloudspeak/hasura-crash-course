import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";
import { createHttpLink } from '@apollo/client';

const auth0Domain = "YOUR-AUTH0-DOMAIN"
const auth0ClientId = "YOUR-AUTH0-CLIENT-ID"
const auth0Audience = "example-blog-hasura"

const hasuraUri = "http://localhost:8080/v1/graphql"

// This code ensures that the access token from Auth0 is passed into the headers of each
// request made by Apollo.  See:
// https://community.auth0.com/t/how-to-use-react-auth0-spa-with-graphql/30516/4

const AuthorizedApolloProvider = ({ children }) => {
    const { getAccessTokenSilently, isLoading, isAuthenticated } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>
    }
    else {
        const httpLink = createHttpLink({
            uri: hasuraUri
        });

        const authLink = setContext(async () => {

            if (isAuthenticated) {
                const token = await getAccessTokenSilently();
                return {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
            }
            else {
                return {}
            }
        });

        const apolloClient = new ApolloClient({
            link: authLink.concat(httpLink),
            cache: new InMemoryCache(),
            connectToDevTools: true
        });


        return (
            <ApolloProvider client={apolloClient}>
                {children}
            </ApolloProvider>
        );
    }
};


ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain={auth0Domain}
            clientId={auth0ClientId}
            redirectUri={window.location.origin}
            cacheLocation="localstorage"
            audience={auth0Audience}
        >
            <AuthorizedApolloProvider>
                <App />
            </AuthorizedApolloProvider>
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
