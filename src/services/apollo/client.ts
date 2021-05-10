import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

const httpLink = new HttpLink({
    uri: process.env.REACT_APP_API_URL || 'http://localhost:5000',
    credentials: 'same-origin',
});

const authLink = setContext(() => {
    const token = localStorage.getItem('jwtToken');
    return {
        headers: {
            Authorization: token ? `Miskine ${token}` : ''
        }
    };
});

export const apollo = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
        freezeResults: true
    }),
    assumeImmutableResults: true
})