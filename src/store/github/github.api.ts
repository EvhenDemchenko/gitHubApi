import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IRepo, IUser, ServerResponse} from "../../models/models";

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    refetchOnFocus: true,
    endpoints: (build) => ({
        searchUsers: build.query<IUser[], string>({ //searchUsers our naming of actions
            query: (search: string) => ({
                url: 'search/users',
                params: {
                    q: search, // githubApi field to search something
                    per_page: 10 // githubApi field to limit response count
                },
            }),
            transformResponse: (response: ServerResponse<IUser>) => response.items
        }),
        searchUserRepos: build.query<IRepo[], string>({
            query: (userName: string) => ({
                url: `users/${userName}/repos`
            })
        })
    })
})
export const {useSearchUsersQuery, useLazySearchUserReposQuery} = githubApi;