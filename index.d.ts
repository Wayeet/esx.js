import { MenuObject, ProgressbarOptions, Scaleform, Streaming, VehicleProperties } from "./@types/client";
import { Common, Coords, PlayerData } from "./@types/common";
import { ConfigJob, OneSync, XPlayer } from "./@types/server";

export interface Client extends Common {
    /**
     * This function checks if the player has loaded in.
     */
    IsPlayerLoaded(): boolean;

    /**
     * This function gets player data.
     */
    GetPlayerData(): PlayerData;

    /**
     * This function searches the inventory for the specified item and count.
     * @param item The item to search for
     * @param count Whether to return the count or the item object
     */
    SearchInventory(item: string, count: true): number;
    SearchInventory(item: string, count?: false): object;
    SearchInventory(item: string[], count: true): Record<string, number>;
    SearchInventory(item: string[], count?: false): Record<string, object>;
    SearchInventory(item: string | string[], count: boolean): number | Record<string, number>;

    /**
     * This function sets player data.
     * @param key Key to set
     * @param val Value to set
     */
    SetPlayerData(key: string, val: any): void;

    /**
     * This function shows a progress bar and execute code on finish and/or on cancel.
     * @param message Message to show
     * @param length Length of the progressbar
     * @param options Progressbar options
     * @returns `false` if a progressbar is already running
     */
    Progressbar(message?: string, length?: number, options?: ProgressbarOptions): boolean;

    /**
     * This function shows a notification to the player.
     * @param msg The message to display
     * @param type What type the notification would be
     * @param time For how long the notification should show
     */
    ShowNotification(msg: string, type?: "info" | "success" | "error", time?: number): void;

    TextUI(message: string, type: string): void;

    HideUI(): void;

    /**
     * This function shows an avanced notification.
     * @param sender Message header
     * @param subject Message subject
     * @param msg Message content
     * @param textureDict Texture dictionary
     * @param iconType Icon type
     * @param flash Flash the notification?
     * @param saveToBrief Save to brief? Located in Pause Menu > Help
     * @param hudColorIndex The background color
     */
    ShowAdvancedNotification(
        sender: string,
        subject: string,
        msg: string,
        textureDict: string,
        iconType: number,
        flash?: boolean,
        saveToBrief?: boolean,
        hudColorIndex?: number
    ): void;

    /**
     * This function shows a help notification with a message. These help notifications support displaying button inputs.
     * @param msg The message to display
     * @param thisFrame Only show this frame? Should be used with scripts that show notifications in a loop
     * @param beep Play the beep sound?
     * @param duration Duration to show the help notification in milliseconds
     */
    ShowHelpNotification(msg: string, thisFrame?: boolean, beep?: boolean, duration?: number): void;

    /**
     * This function shows a help notification with a message. These help notifications support displaying button inputs.
     * @param msg The message to display
     * @param coords The coordinates to show the notification at
     */
    ShowFloatingHelpNotification(msg: string, coords: Coords): void;

    HashString(str: string): string;

    OpenContext(...args: any[]): void;

    PreviewContext(...args: any[]): void;

    CloseContext(...args: any[]): void;

    RefreshContext(...args: any[]): void;

    RegisterInput(
        command_name: string,
        label: string,
        input_group: string,
        key: string,
        on_press: () => void,
        on_release?: () => void
    ): void;

    UI: {
        Menu: {
            /**
             * This function registers a menu type.
             * @param type
             * @param open
             * @param close
             */
            RegisterType(type: string | number, open: any, close: any): void;

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
            ): MenuObject;

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
            GetOpened(type: string | number, namespace: string, name: string): MenuObject;

            GetOpenedMenus(): MenuObject[];

            /**
             * This function checks if a menu is open.
             * @param type
             * @param namespace
             * @param name
             */
            IsOpen(type: string | number, namespace: string, name: string): boolean;
        };

        /**
         * This function shows an inventory item notification.
         * @param add
         * @param item
         * @param count
         */
        ShowInventoryItemNotification(add: boolean, item: string, count: number): void;
    };

    Game: {
        /**
         * This function generates a Mugshot of the ped usable in various applications.
         *
         * Be sure to use `UnregisterPedheadshot(mugshot)` after using it, because the game only allows you 34 mugshots, and you won't be allowed to use mugshot once this limit is reached if you don't unregister it.
         * @param ped The ped handle
         */
        GetPedMugshot(ped: number): [number, string];

        /**
         * This function teleports an entity.
         * @param entity The entity to teleport
         * @param coords The coords to be teleported to.
         * @param cb The returned function when the entity has been teleported
         */
        Teleport(entity: number, coords: Coords, cb?: () => void): void;

        /**
         * This function spawns an object visible to everyone on the server.
         *
         * !!! warning This is an async function because it awaits the object model to be streamed, there is an example below on how to properly utilize it.
         * @param modelOrHash You can either specify a model, for example prop_cs_cuffs_01, or a object hash
         * @param coords The coords where the object should be spawned.
         * @param cb The returned function when the object has been spawned. The invoked function has one argument, which is the object handle.
         * @param networked If the object should be visible to everyone on the server.
         */
        SpawnObject(
            modelOrHash: string | number,
            coords: Coords,
            cb?: (object: number) => void,
            networked?: boolean
        ): void;

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
         * This function deletes the parsed vehicle.
         * @param vehicle The vehicle handle
         */
        DeleteVehicle(vehicle: number): void;

        /**
         * This function deletes an object.
         * @param object The object handle
         */
        DeleteObject(object: number): void;

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
         * Returns a bool for if the vehicle has no players inside.
         * @param vehicle Vehicle handle
         */
        IsVehicleEmpty(vehicle: number): boolean;

        /**
         * This function gets all objects found in the game world.
         */
        GetObjects(): number[];

        /**
         * This function gets all peds found in the game world.
         * @param onlyOtherPeds Only return other peds than your own ped?
         */
        GetPeds(onlyOtherPeds: boolean): number[];

        /**
         * Returns all vehicles in the world.
         */
        GetVehicles(): number[];

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
         * This function gets all players within the max distance of a coord.
         * @param coords The coords to search at
         * @param maxDistance The maxmimum search distance
         */
        GetPlayersInArea(coords: Coords, maxDistance: number): number[];

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
         * The function returns the closest entity handle, and distance to the entity.
         * @param coords Coords to search at
         * @param modelFilter Enables whitelist mode for getting closest entity. The table must be key-value where the key is the model hash, and value set to true.
         */
        GetClosestEntity(coords?: Coords, modelFilter?: Record<string, boolean>): [number, number];

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
         * This function sets various properties for an vehicle object.
         *
         * See https://esx-framework.github.io/es_extended/client/functions/game/setvehicleproperties/ for more information
         * @param vehicle  Vehicle handle
         * @param props Vehicle properties to set
         */
        SetVehicleProperties(vehicle: number, props: Partial<VehicleProperties>): any;

        Utils: {
            /**
             * This function draws 3D text on the specified coords. Must be drawn every frame, ideally in a loop. size and font arguments are optional.
             * @param coords The coords where the text should be.
             * @param text The text that will be display.
             * @param size The text size.
             * @param font The font type.
             */
            DrawText3D(coords: Coords, text: string, size: number, font: string): void;
        };
    };

    /**
     * This function shows the inventory.
     */
    ShowInventory(): void;

    GetVehicleType(model: string | number): string;

    Scaleform: Scaleform;

    Streaming: Streaming;

    /**
     * This function triggers a server callback.
     *
     * !!! warning This is an async function and must be treated as one.
     * @param name A valid server callback name
     * @param cb The returned function when the async task has completed. The invoked function a varied size of arguments depending on how many arguments are parsed from the server
     * @param args Any arguments to parse to the async funtion
     */
    TriggerServerCallback(name: string, cb: (...args: any[]) => void, ...args: any[]): void;

    RegisterClientCallback(eventName: string, handler: (cb: (...args: any[]) => void, ...args: any[]) => void): void;
}

export interface Server extends Common {
    /**
     * This function writes a trace if debugging is enabled in the configuration file.
     * @param msg Anything to print to console
     */
    Trace(msg: any): void;

    /**
     * Registers a command using ESX functions.
     * @param name Name of command
     * @param Permissions Minimum permission group
     * @param cb Function to run
     * @param allowConsole Can be ran from console
     * @param suggestion Chat suggestion
     */
    RegisterCommand(
        name: string,
        Permissions: string,
        cb: (xPlayer: XPlayer, args: any[], showError: boolean) => void,
        allowConsole: boolean,
        suggestion?: {
            help?: string;
            arguments?: {
                name: string;
                help: string;
                validate?: boolean;
                type?: "number" | "player" | "string" | "item" | "weapon" | "any";
            }[];
        }
    ): void;

    /**
     * @deprecated As of version 1.9, this function has been deprecated and removed!
     * Calling this function will return ESX.GetExtendedPlayers.
     */
    GetPlayers(): number[];

    /**
     * This function returns an array of all users. You can use this function to filter players to find specific types of people such as police or admins.
     * @param key Filter key
     * @param val Filter value
     */
    GetExtendedPlayers(key?: string, val?: any): XPlayer[];

    /**
     * This function gets a ESX player object from a server id. Returns `undefined` for invalid players
     * @param source The player server id
     */
    GetPlayerFromId(source: number): XPlayer | undefined;

    /**
     * This function returns the ESX player from the Rockstar identifier. Returns `undefined` if no player is found.
     * @param identifier
     */
    GetPlayerFromIdentifier(identifier: string): XPlayer | undefined;

    GetIdentifier(playerId: number): string | undefined;

    /**
     * @param model string | number
     * @param player number playerId
     * @param cb function
     */
    GetVehicleType(model: string | number, player: number, cb: (vehicleType: string) => void): void;

    /**
     * This function logs to a Discord Webhook.
     * @param name Webhook name (found in `Config.logs.lua`)
     * @param title Webhook title
     * @param color Webhook colour (found in `Config.logs.lua`)
     * @param message Message to log
     */
    DiscordLog(name: string | undefined, title: string, color: string | undefined, message: string): void;

    /**
     * This function logs to a Discord Webhook.
     * @param name Webhook name (found in `Config.logs.lua`)
     * @param title Webhook title
     * @param color Webhook colour (found in `Config.logs.lua`)
     * @param fields Fields to log
     */
    DiscordLogFields(
        name: string | undefined,
        title: string,
        color: string | undefined,
        fields: { name: string; value: string; inline: boolean }
    ): void;

    RefreshJobs(): void;

    /**
     * This function registers an item as usable.
     * @param item Item to register as usable
     * @param cb Callback function
     */
    RegisterUsableItem(item: string, cb: (playerId: number) => void): void;

    /**
     * This function is to force a player to use an item.
     * @param playerId Player server id
     * @param itemName An item
     */
    UseItem(playerId: number, itemName: string): void;

    RegisterPlayerFunctionOverrides(index: string, overrides: ((...args: any[]) => any)[]): void;

    SetPlayerFunctionOverride(index: string): void;

    /**
     * This function returns an item label or `undefined` if not found.
     * @param item 	Item name
     */
    GetItemLabel(item: string): string | undefined;

    /**
     * Returns all known jobs along with their grades.
     */
    GetJobs(): Record<string, ConfigJob>;

    GetUsableItems(): Record<string, true>;

    /**
     * This function creates a pickup.
     * @param type The pickup type, valid inputs: item_standard for items, item_money for cash, item_account for an account and item_weapon for weapons
     * @param name The name of either the item, account or weapon
     * @param count The count of the item, cash, account or weapon ammo
     * @param label The pickup label drawn
     * @param playerId The player server id who created the pickup, used to determine pickup spawn point
     * @param components Only used when type is item_weapon, an index-value table with components
     * @param tintIndex Only used when type is item_weapon, a tint index
     */
    CreatePickup?(
        type: string,
        name: string,
        count: number,
        label: string,
        playerId: number,
        components?: any[],
        tintIndex?: number
    ): void;

    /**
     * This function returns whether or not the job and grade specified is valid.
     * @param job The name of the job.
     * @param grade The grade of the job.
     */
    DoesJobExist(job: string, grade: number): boolean;

    OneSync: OneSync;

    /**
     * This function registers a server callback.
     * @param name Server callback name
     * @param handler Callback handler, which contains an varied size of arguments depending on how many arguments are sent from client
     */
    RegisterServerCallback(
        name: string,
        handler: (playerId: number, cb: (...args: any[]) => void, ...args: any[]) => void
    ): void;

    /**
     * @param player number playerId
     * @param eventName string
     * @param cb function
     * @param args ... any
     */
    TriggerClientCallback(player: number, eventName: string, cb: (...args: any[]) => void, ...args: any[]): void;
}
