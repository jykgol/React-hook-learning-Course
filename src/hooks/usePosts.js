import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        return sort.length ? [...posts].sort((a, b) => a[sort].localeCompare(b[sort])) : posts;
    }, [sort, posts])

    return sortedPosts;
}

export const usePosts = (posts, sort, quarry) => {

    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(el => el.title.toLowerCase().includes(quarry.toLowerCase()))
    }, [quarry, sortedPosts])

    return sortedAndSearchedPosts;

}

