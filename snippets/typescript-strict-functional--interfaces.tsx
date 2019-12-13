export interface MetalsState = {
    platinum: number;
    gold: number;
    silver: number;
    copper: number;
}

// becomes:

export type MetalsState = {
    readonly platinum: number;
    readonly gold: number;
    readonly silver: number;
    readonly copper: number;
}