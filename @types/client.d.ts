import { Coords } from "./common";

declare interface VehicleProperties {
    /**
     * The vehicle hash
     */
    model: number;
    /**
     * Vehicle plate, maximum 8 characters
     */
    plate: number;
    /**
     * Plate style
     */
    plateIndex: number;
    /**
     * Body health
     */
    bodyHealth: number;
    /**
     * Engine health
     */
    engineHealth: number;
    /**
     * Petrol Tank health
     */
    tankHealth: number;
    /**
     * Fuel level
     */
    fuelLevel: number;
    /**
     * Dirtiness level
     */
    dirtLevel: number;
    /**
     * Primary color
     */
    color1: number;
    /**
     * Secondary color
     */
    color2: number;
    /**
     * Pearlescent color
     */
    pearlescentColor: number;
    /**
     * Wheel color
     */
    wheelColor: number;
    /**
     * Dashboard color
     */
    dashboardColor: number;
    /**
     * Interior color
     */
    interiorColor: number;
    /**
     * Wheel type
     */
    wheels: number;
    windowTint: number;
    /**
     * Table with hardcoded four children for left, back, front & back neons
     */
    neonEnabled: {
        left: boolean;
        back: boolean;
        front: boolean;
        right: boolean;
    };
    /**
     * Packed table with three children for r, g, b
     */
    neonColor: {
        r: number;
        g: number;
        b: number;
    };
    /**
     * Pair table with id as index and state as value
     */
    extras: {
        [id: string]: boolean;
    };
    /**
     * Packed table with three children for r, g, b
     */
    tyreSmokeColor: {
        r: number;
        g: number;
        b: number;
    };
    modSpoilers: number;
    modFrontBumper: number;
    modRearBumper: number;
    modSideSkirt: number;
    modExhaust: number;
    modFrame: number;
    modGrille: number;
    modHood: number;
    modFender: number;
    modRightFender: number;
    modRoof: number;
    modEngine: number;
    modBrakes: number;
    modTransmission: number;
    modHorns: number;
    modSuspension: number;
    modArmor: number;
    /**
     * Indicates if the vehicle has turbo modification
     */
    modTurbo: boolean;
    /**
     * Indicates if the vehicle has smoke modification enabled
     */
    modSmokeEnabled: boolean;
    /**
     * Indicates if the vehicle has xenon modification
     */
    modXenon: boolean;
    modFrontWheels: number;
    modBackWheels: number;
    modPlateHolder: number;
    modVanityPlate: number;
    modTrimA: number;
    modOrnaments: number;
    modDashboard: number;
    modDial: number;
    modDoorSpeaker: number;
    modSeats: number;
    modSteeringWheel: number;
    modShifterLeavers: number;
    modAPlate: number;
    modSpeakers: number;
    modTrunk: number;
    modHydrolic: number;
    modEngineBlock: number;
    modAirFilter: number;
    modStruts: number;
    modArchCover: number;
    modAerials: number;
    modTrimB: number;
    modTank: number;
    modWindows: number;
    modLivery: number;
}

export declare interface ProgressbarOptions {
    FreezePlayer?: boolean;
    animation?: { type: "anim"; dict: string; lib: string } | { type: "Scenario"; Scenario: string };
    onFinish?: () => void;
    onCancel?: () => void;
}

declare interface Menu {
    type: string;
    namespace: string;
    name: string;
    data: { title: string; elements: Record<string, any>[] };
    submit?: () => void;
    cancel?: () => void;
    change?: () => void;
    close: () => void;
    update: (query: Partial<Record<string, any>>, newData: Record<string, any>) => void;
    refresh: () => void;
    setElement: (i: number, key: string, val: any) => void;
    setElements: (newElements: Record<string, any>[]) => void;
    setTitle: (val: string) => void;
    removeElement: (query: Record<string, any>) => void;
}

export class Game {
    /**
     * This function deletes an object.
     * @param object The object handle
     */
    DeleteObject(object: number): void;

    /**
     * This function deletes the parsed vehicle.
     * @param vehicle The vehicle handle
     */
    DeleteVehicle(vehicle: number): void;

    /**
     * The function returns the closest entity handle, and distance to the entity.
     * @param coords Coords to search at
     * @param modelFilter Enables whitelist mode for getting closest entity. The table must be key-value where the key is the model hash, and value set to true.
     */
    GetClosestEntity(coords?: Coords, modelFilter?: Record<string, boolean>): [number, number];

    /**
     * This function returns the closest object handle, and distance to the object.
     * @param coords Coords to search at
     * @param modelFilter Enables whitelist mode for getting closest object. The table must be key-value where the key is the model hash, and value set to true.
     */
    GetClosestObject(coords?: Coords, modelFilter?: Record<string, boolean>): [number, number];

    /**
     * This function returns the closest ped handle, and distance to the ped.
     * @param coords Coords to search at
     * @param modelFilter Enables whitelist mode for getting closest ped. The table must be key-value where the key is the model hash, and value set to true.
     */
    GetClosestPed(coords?: Coords, modelFilter?: string[]): [number, number];

    /**
     * This function gets the closest player client id, and distance to the player.
     * @param coords Coords to search at
     */
    GetClosestPlayer(coords?: Coords): [number, number];

    /**
     * This function gets the closest vehicle.
     * @param coords Coords to search at
     * @param modelFilter Enables whitelist mode for getting closest vehicle. The table must be key-value where the key is the model hash, and value set to true.
     */
    GetClosestVehicle(coords?: Coords, modelFilter?: Record<string, boolean>): [number, number];

    /**
     * This function gets all objects found in the game world.
     */
    GetObject(): number[];

    /**
     * This function generates a Mugshot of the ped usable in various applications.
     *
     * Be sure to use `UnregisterPedheadshot(mugshot)` after using it, because the game only allows you 34 mugshots, and you won't be allowed to use mugshot once this limit is reached if you don't unregister it.
     * @param ped The ped handle
     */
    GetPedMugshot(ped: number): [number, string];

    /**
     * This function gets all peds found in the game world.
     * @param onlyOtherPeds Only return other peds than your own ped?
     */
    GetPeds(onlyOtherPeds: boolean): number[];

    /**
     * This function is used to get all the active players.
     * @param onlyOtherPlayers Only return other players than yourself?
     * @param returnKeyValue If set to true it will return in a key-value arry where key is player client id and key being the ped handle. Otherwise it create a index-value array, with value being either the ped handle or client id depending on `returnPeds`
     * @param returnPeds If set to true it will return the ped handle for that player, otherwise it will return the player client id
     */
    GetPlayers(onlyOtherPlayers?: boolean, returnKeyValue?: false, returnPeds?: boolean): number[];
    GetPlayers(onlyOtherPlayers?: boolean, returnKeyValue?: true, returnPeds?: boolean): Record<number, number>;
    GetPlayers(
        onlyOtherPlayers?: boolean,
        returnKeyValue?: boolean,
        returnPeds?: boolean
    ): number[] | Record<number, number>;

    /**
     * This function gets all players within the max distance of a coord.
     * @param coords The coords to search at
     * @param maxDistance The maxmimum search distance
     */
    GetPlayersInArea(coords: Coords, maxDistance: number): number[];

    /**
     * This function gets the closest vehicle in the player's direction within 5 units, utilizes ray-casts.
     */
    GetVehicleInDirection(): number;

    /**
     * This function gets a vehicle's properties.
     * @param vehicle
     */
    GetVehicleProperties(vehicle: any): VehicleProperties;

    /**
     * Returns all vehicles in the world.
     */
    GetVehicles(): number[];

    /**
     * This function gets all vehicles within the max distance of a coord.
     * @param coords The coords to search at
     * @param maxDistance The maxmimum search distance
     */
    GetVehiclesInArea(coords: Coords, maxDistance: number): number[];

    /**
     * Returns a boolean if the spawn point coords area is clear from vehicles within the max distance.
     * @param coords The coords to search at
     * @param maxDistance The maxmimum search distance
     */
    IsSpawnPointClear(coords: Coords, maxDistance: number): number[];

    /**
     * Returns a bool for if the vehicle has no players inside.
     * @param vehicle Vehicle handle
     */
    IsVehicleEmpty(vehicle: number): boolean;

    /**
     * This function sets various properties for an vehicle object.
     *
     * See https://esx-framework.github.io/es_extended/client/functions/game/setvehicleproperties/ for more information
     * @param vehicle  Vehicle handle
     * @param props Vehicle properties to set
     */
    SetVehicleProperties(vehicle: number, props: Partial<VehicleProperties>): any;

    /**
     * This function spawns a local object, which is only visible to the local player and no one else.
     *
     * !!! warning This is an async function because it awaits the object model to be streamed, there is an example below on how to properly utilize it.
     * @param modelOrHash	You can either specify a model, for example prop_cs_cuffs_01, or a object hash
     * @param coords The coords where the object should be spawned. You can also parse an vector type without any issues
     * @param cb The returned function when the object has been spawned. The invoked function has one argument, which is the object handle.
     */
    SpawnLocalObject(modelOrHash: string | number, coords: Coords, cb?: (object: number) => void): void;

    /**
     * This function spawns a local vehicle, which is only visible to the local player and no one else.
     *
     * !!! warning This is an async function because it awaits the vehicle model to be streamed, there is an example below on how to properly utilize it.
     * @param modelOrHash You can either specify a model, for example blista, or a vehicle hash.
     * @param coords The coords where the vehicle should be spawned.
     * @param heading The heading of the spawned vehicle, must contain a decimal
     * @param cb The returned function when the vehicle has been spawned. The invoked function has one argument, which is the vehicle handle
     */
    SpawnLocalVehicle(
        modelOrHash: string | number,
        coords: Coords,
        heading: number,
        cb?: (vehicle: number) => void
    ): void;

    /**
     * This function spawns an object visible to everyone on the server.
     *
     * !!! warning This is an async function because it awaits the object model to be streamed, there is an example below on how to properly utilize it.
     * @param modelOrHash You can either specify a model, for example prop_cs_cuffs_01, or a object hash
     * @param coords The coords where the object should be spawned.
     * @param cb The returned function when the object has been spawned. The invoked function has one argument, which is the object handle.
     * @param networked If the object should be visible to everyone on the server.
     */
    SpawnObject(modelOrHash: string | number, coords: Coords, cb?: (object: number) => void, networked?: boolean): void;

    /**
     * This function spawns an vehicle visible to everyone on the server.
     *
     * !!! warning This is an async function because it awaits the vehicle model to be streamed, there is an example below on how to properly utilize it.
     * @param modelOrHash You can either specify a model, for example blista, or a vehicle hash.
     * @param coords The coords where the vehicle should be spawned.
     * @param heading The heading of the spawned vehicle, must contain a decimal
     * @param cb The returned function when the vehicle has been spawned. The invoked function has one argument, which is the vehicle handle
     * @param networked If the vehicle should be visible to everyone on the server.
     */
    SpawnVehicle(
        modelOrHash: string | number,
        coords: Coords,
        heading: number,
        cb?: (vehicle: number) => void,
        networked?: boolean
    ): void;

    /**
     * This function teleports an entity.
     * @param entity The entity to teleport
     * @param coords The coords to be teleported to.
     * @param cb The returned function when the entity has been teleported
     */
    Teleport(entity: number, coords: Coords, cb?: () => void): void;

    Utils: GameUtils;
}

declare class GameUtils {
    /**
     * This function draws 3D text on the specified coords. Must be drawn every frame, ideally in a loop. size and font arguments are optional.
     * @param coords The coords where the text should be.
     * @param text The text that will be display.
     * @param size The text size.
     * @param font The font type.
     */
    DrawText3D(coords: Coords, text: string, size: number, font: string): void;
}

export class Scaleform {
    /**
     * This function shows the 'Breaking News' scaleform used multiple times in the campaign.
     * @param title Title text
     * @param msg Message text, supports HTML syntax
     * @param bottom Footer text, supports HTML syntax
     * @param sec Time in seconds to show scaleform
     */
    ShowBreakingNews(title: string, msg: string, bottom: string, sec: number): void;

    /**
     * This function displays a freemode message for the player.
     * @param title Title text
     * @param msg Message text
     * @param sec Time in seconds to show scaleform
     */
    ShowFreemodeMessage(title: string, msg: string, sec: number): void;

    /**
     * This function shows a basic popup warning, like the quit confirmation warning.
     * @param title Title text
     * @param msg Message text
     * @param bottom Footer text
     * @param sec Time in seconds to show scaleform
     */
    ShowPopupWarning(title: string, msg: string, bottom: string, sec: number): void;

    /**
     * This function starts the traffic scaleform movie used in the campaign.
     * @param sec Time in seconds to show scaleform
     */
    ShowTrafficMovie(sec: number): void;

    Utils: ScaleformUtils;
}

declare class ScaleformUtils {
    /**
     * This function requests and returns a scaleform handle for the movie parsed.
     * @param movie The movie name
     */
    RequestScaleformMovie(movie: string): number;
}

export class Streaming {
    /**
     * This function requests and returns the nimation directory parsed. A very common usage it to play animations using TaskPlayAnim(). You can use Alex Guirre's Animations List found on Github.
     *
     * https://alexguirre.github.io/animations-list/
     * @param animDict
     * @param cb
     */
    RequestAnimDict(animDict: string, cb: () => void): void;

    /**
     * This function requests and returns the animation set parsed. Animation sets provide movement styles, commonly used with SetPedMovementClipset().
     * @param animSet
     * @param cb
     */
    RequestAnimSet(animSet: any, cb: () => void): void;

    /**
     * This function requests and returns the specified model parsed, a very common usage is spawning objects, etc.
     * @param model
     * @param cb
     */
    RequestModel(model: string | number, cb: () => void): void;

    /**
     * @param assetName
     * @param cb
     */
    RequestNamedPtfxAsset(assetName: string | number, cb: () => void): void;

    /**
     * This function requests and returns the texture directory parsed. This is commonly used when loading sprites, then draw them on screen using DrawSprite(), an example would be drawing a speedometer.
     * @param textureDict
     * @param cb
     */
    RequestStreamedTextureDict(textureDict: string | number, cb: () => void): void;

    /**
     * @param weaponHash
     * @param cb
     */
    RequestWeaponAsset(weaponHash: string | number, cb: () => void): void;
}

export class UI {
    /**
     * This function shows an inventory item notification.
     * @param add
     * @param item
     * @param count
     */
    ShowInventoryItemNotification(add: boolean, item: string, count: number): void;

    Menu: Menu;
}

declare class Menu {
    /**
     * This function closes a menu.
     * @param type
     * @param namespace
     * @param name
     */
    Close(type: string | number, namespace: string, name: string): void;

    /**
     * This function closes all open menus.
     */
    CloseAll(): void;

    /**
     * This function gets all opened menus.
     * @param type
     * @param namespace
     * @param name
     */
    GetOpened(type: string | number, namespace: string, name: string): Menu;

    /**
     * This function checks if a menu is open.
     * @param type
     * @param namespace
     * @param name
     */
    IsOpen(type: string | number, namespace: string, name: string): boolean;

    /**
     * This function opens a menu.
     * @param type
     * @param namespace
     * @param name
     * @param data
     * @param submit
     * @param cancel
     * @param change
     * @param close
     */
    Open(
        type: string | number,
        namespace: string,
        name: string,
        data: any,
        submit: any,
        cancel: any,
        change: string,
        close: () => void
    ): Menu;

    /**
     * This function registers a menu type.
     * @param type
     * @param open
     * @param close
     */
    RegisterType(type: string | number, open: any, close: any): void;
}
