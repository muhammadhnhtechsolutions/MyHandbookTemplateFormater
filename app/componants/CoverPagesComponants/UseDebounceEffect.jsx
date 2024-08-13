'use client'
function useEffect(callback, dependencies) {
    // Implementation of useEffect function
}

export function useDebounceEffect(fn, waitTime, deps) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            fn.apply(undefined, deps);
        }, waitTime);

        return () => {
            clearTimeout(timeout);
        };
    }, [fn, waitTime, ...deps]);
}