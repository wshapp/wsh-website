import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

import withApollo from 'next-with-apollo';

const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API || 'http://localhost:5000',
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
    cache: new InMemoryCache()
})

export default withApollo(
    ({ ctx, headers, initialState }) =>
        new ApolloClient({
            link: authLink.concat(httpLink),
            cache: new InMemoryCache().restore(initialState || {}),
        })
);
