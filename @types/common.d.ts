export declare interface PlayerData {
    accounts: Account[];
    coords: Coords;
    group: string;
    identifier: string;
    inventory: InventoryItem[];
    job: Job;
    loadout: LoadoutItem[];
    name: string;
    playerId: number;
    source: number;
    variables: Record<string, any>;
    weight: number;
    maxWeight: number;
    metadata: Record<string, any>;
}

export declare interface InventoryItem {
    name: string;
    count: number;
    label: string;
    weight: number;
    usable: boolean;
    rare: boolean;
    canRemove: boolean;
}

export declare interface Job {
    id: number;
    name: string;
    label: string;
    grade: number;
    grade_name: string;
    grade_label: string;
    grade_salary: number;
    skin_male: any[];
    skin_female: any[];
}

export declare interface LoadoutItem {
    name: string;
    ammo: number;
    label: string;
    components: any[];
}

export declare interface Coords {
    x: number;
    y: number;
    Z: number;
}

export declare interface Account {
    name: string;
    money: number;
    label: string;
}
