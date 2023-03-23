import { useEffect, useMemo, useState } from 'react';

const useMountTransition = (
    isMounted: boolean,
    unmountDelay: number = 1000,
) => {
    const [isUnmounting, setIsUnmounting] = useState(false);
    const animateClass = useMemo(() => {
        return isMounted
            ? { className: 'mountFromTop' }
            : { className: 'unmountFromBottom' };
    }, [isMounted]);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (isMounted && !isUnmounting) {
            setIsUnmounting(true);
        } else if (!isMounted && isUnmounting) {
            timeout = setTimeout(() => setIsUnmounting(false), unmountDelay);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [isMounted]);

    return { isUnmounting, animateClass };
};

export default useMountTransition;
