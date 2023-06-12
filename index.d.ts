import { Game, IGetPlayerData, Scaleform, Streaming, UI } from "./@types/client";
import { ConfigJob, OneSync, XPlayer } from "./@types/server";
import { Common } from "./common/common";

// ================== CLIENT ================================
// ==========================================================

export class Client extends Common {

  /**
   * Returns ESX Player Data for the current player
   */
  GetPlayerData(): IGetPlayerData;

  /**
   * This function checks if the player is loaded.
   */
  IsPlayerLoaded(): boolean;

  /**
   * This function sets player data.
   * @param key 
   * @param val 
   */
  SetPlayerData(key: string, val: any): void

  /**
   * Creates a help notification
   */
  ShowHelpNotification(msg: string, thisFrame: boolean, beep: boolean, duration: number): void

  /**
   * Creates an advanced notification with more properties
   */
  ShowAdvancedNotification(
    sender: string,
    subject: string,
    msg: string,
    textureDict: string,
    iconType: number,
    flash: boolean,
    saveToBrief: boolean,
    hudColorIndex: number
  ): void

  /**
   * This function shows the inventory.
   */
  ShowInventory(): void

  /**
   * 
   * This function shows a basic notification to the player.
   */
  ShowNotification(msg: string, flash: boolean, saveToBreif: boolean, hudColorIndex: number): void

  /**
   * This function triggers a server callback. See ESX.RegisterServerCallback on registering server callbacks.
   * 
   * This is an async function and must be treated as one, examples on how to properly use the async function callback is shown below.
   */
  TriggerServerCallback(name: string, cb: Function, args: any): void

  Game: Game;

  Scaleform: Scaleform;

  Streaming: Streaming;

  UI: UI;
}

// ================== SERVER ================================
// ==========================================================
export class Server extends Common {
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
  CreatePickup(type: string, name: string, count: number, label: string, playerId: number, components?: any[], tintIndex?: number): void

  /**
   * This function logs to a Discord Webhook.
   * @param name Webhook name (found in `Config.logs.lua`)
   * @param title Webhook title
   * @param color Webhook colour (found in `Config.logs.lua`)
   * @param message Message to log
   */
  DiscordLog(name: string|undefined, title: string, color: string|undefined, message: string): void;

  /**
   * This function logs to a Discord Webhook.
   * @param name Webhook name (found in `Config.logs.lua`)
   * @param title Webhook title
   * @param color Webhook colour (found in `Config.logs.lua`)
   * @param fields Fields to log
   */
  DiscordLog(name: string|undefined, title: string, color: string|undefined, fields: {name: string, value: string, inline: boolean}): void;

  /**
   * This function returns whether or not the job and grade specified is valid.
   * @param job The name of the job.
   * @param grade The grade of the job.
   */
  DoesJobExist(job: string, grade: number): boolean;

  /**
   * This function returns an array of all users. You can use this function to filter players to find specific types of people such as police or admins.
   * @param key Filter key
   * @param val Filter value
   */
  GetExtendedPlayers(key: string, val: any): XPlayer[];

  /**
   * This function returns an item label or `undefined` if not found.
   * @param item 	Item name
   */
  GetItemLabel(item: string): string | undefined

  /**
   * Returns all known jobs along with their grades.
   */
  GetJobs(): Record<string, ConfigJob>;
 
  /**
   * This function gets a ESX player object from a server id. Returns `undefined` for invalid players
   * @param source The player server id
   */
  GetPlayerFromId(source: number): XPlayer | undefined

  /**
   * This function returns the ESX player from the Rockstar identifier. Returns `undefined` if no player is found.
   * @param identifier 
   */
  GetPlayerFromIdentifier(identifier: string): XPlayer | undefined

  /**
   * @deprecated As of version 1.9, this function has been deprecated and removed!
   * Calling this function will return ESX.GetExtendedPlayers.
   */
  GetPlayers(): XPlayer[]

  /**
   * Registers a command using ESX functions.
   * @param name Name of command
   * @param Permissions Minimum permission group
   * @param cb Function to run
   * @param allowConsole Can be ran from console
   * @param suggestion Chat suggestion
   */
  RegisterCommand(name: string, Permissions: string, cb: (xPlayer: XPlayer, args: any[], showError: boolean) => void, allowConsole: boolean, suggestion?: {help: string, arguments: {name: string, help: string, type?: 'number'|'player'|'string'|'item'|'weapon'|'any'}[]}): void;

  /**
   * This function registers a server callback.
   * @param name Server callback name
   * @param handler Callback handler, which contains an varied size of arguments depending on how many arguments are sent from client
   * @param args The args provided after the handler on the client TriggerServerCallback
   */
  RegisterServerCallback(name: string, handler: (playerId: number, cb: (...args: any[]) => void) => void, ...args: any[]): void

  /**
   * This function registers an item as usable.
   * @param item Item to register as usable
   * @param cb Callback function
   */
  RegisterUsableItem(item: string, cb: (playerId: number) => void): void

  /**
   * This function writes a trace if debugging is enabled in the configuration file.
   * @param msg Anything to print to console
   */
  Trace(msg: any): void

  /**
   * This function is to force a player to use an item.
   * @param playerId Player server id
   * @param itemName An item
   */
  UseItem(playerId: number, itemName: string): void

  OneSync: OneSync;
}
