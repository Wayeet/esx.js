export interface VehicleProperties {
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

export interface ProgressbarOptions {
    FreezePlayer?: boolean;
    animation?: { type: "anim"; dict: string; lib: string } | { type: "Scenario"; Scenario: string };
    onFinish?: () => void;
    onCancel?: () => void;
}

export interface MenuObject {
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

export interface Scaleform {
    /**
     * This function displays a freemode message for the player.
     * @param title Title text
     * @param msg Message text
     * @param sec Time in seconds to show scaleform
     */
    ShowFreemodeMessage(title: string, msg: string, sec: number): void;

    /**
     * This function shows the 'Breaking News' scaleform used multiple times in the campaign.
     * @param title Title text
     * @param msg Message text, supports HTML syntax
     * @param bottom Footer text, supports HTML syntax
     * @param sec Time in seconds to show scaleform
     */
    ShowBreakingNews(title: string, msg: string, bottom: string, sec: number): void;

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

    Utils: {
        /**
         * This function requests and returns a scaleform handle for the movie parsed.
         * @param movie The movie name
         */
        RequestScaleformMovie(movie: string): number;
    };
}

export interface Streaming {
    /**
     * This function requests and returns the specified model parsed, a very common usage is spawning objects, etc.
     * @param model
     * @param cb
     */
    RequestModel(model: string | number, cb: () => void): void;

    /**
     * This function requests and returns the texture directory parsed. This is commonly used when loading sprites, then draw them on screen using DrawSprite(), an example would be drawing a speedometer.
     * @param textureDict
     * @param cb
     */
    RequestStreamedTextureDict(textureDict: string | number, cb: () => void): void;

    /**
     * @param assetName
     * @param cb
     */
    RequestNamedPtfxAsset(assetName: string | number, cb: () => void): void;

    /**
     * This function requests and returns the animation set parsed. Animation sets provide movement styles, commonly used with SetPedMovementClipset().
     * @param animSet
     * @param cb
     */
    RequestAnimSet(animSet: any, cb: () => void): void;

    /**
     * This function requests and returns the nimation directory parsed. A very common usage it to play animations using TaskPlayAnim(). You can use Alex Guirre's Animations List found on Github.
     *
     * https://alexguirre.github.io/animations-list/
     * @param animDict
     * @param cb
     */
    RequestAnimDict(animDict: string, cb: () => void): void;

    /**
     * @param weaponHash
     * @param cb
     */
    RequestWeaponAsset(weaponHash: string | number, cb: () => void): void;
}
