import { useEffect, useRef, useState } from "react";

export const useInterSectionObserver = (options) => {
    const [isIntersecting, setIntersecting] = useState(true);
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(node);

        return () => {
            observer.unobserve(node);
            observer.disconnect();
        }
    }, [options, ref]);

    return [ref, isIntersecting];
};