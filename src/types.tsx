export interface Event<T = EventTarget> {
    target: T;
}


export type PayloadAction = {
    type: string;
    payload?: any;
}