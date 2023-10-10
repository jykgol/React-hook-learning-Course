import { useMemo } from "react";

export const getPageCount = (totalPosts, limit) => {
  return Math.ceil(totalPosts / limit);
}

export const usePagesArray = (totalPageCount) => {

  const pagesArray = useMemo(() => {
    let newArray =[];

    for (let i = 0; i < totalPageCount; i++) {
      newArray.push(i+1);
    }
      return newArray;
  }, [totalPageCount]);

  return pagesArray;
}