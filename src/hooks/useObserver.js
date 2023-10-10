import { useEffect, useRef } from "react";

export const useObserver = (ref, isLoading, canload, callback ) => {
    const observer = useRef();
	useEffect(() => {
		if (isLoading) return;
		if (observer.current) observer.current.disconnect();
	    let cb = (entries) => {
			if (entries[0].isIntersecting && canload) {
				callback();
			}
		}
		observer.current  = new IntersectionObserver(cb);
		observer.current.observe(ref.current);
	},[isLoading])
}