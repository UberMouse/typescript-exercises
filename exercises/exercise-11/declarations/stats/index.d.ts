declare module 'stats' {
    type Comparator<T> = (input: T, input2: T) => number;

    type getIndex = <T>(input: T[], comparator: Comparator<T>) => number;
    export const getMaxIndex: getIndex;
    export const getMinIndex: getIndex;
    export const getMedianIndex: getIndex;

    type getElement = <T>(input: T[], comparator: Comparator<T>) => T | null;
    export const getMaxElement: getElement;
    export const getMinElement: getElement;
    export const getMedianElement: getElement;

    export function getAverageValue<T>(input: T[], get: Comparator<T>): number;
}
