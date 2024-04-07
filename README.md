# ESX.js

<div style="margin: auto 0; width: 100%">
  <img src="https://i.imgur.com/lj2RCGp.jpg" width="150" height="150"/>
</div>

## About

This is a JavaScript/TypeScript wrapper for the ESX (es_extended) framework in FiveM.

If you experience any issues, please create an issue.

## About this fork

This fork of [r3ps4J's ESX.js](https://github.com/r3ps4J/esx.js) which is a fork of [ItsChip's ESX.js](https://github.com/itschip/esx.js) is simply an updated Systax for ESX 1.10.5 and above. It provides typings for the ESX Framework and provides a wrapper for working with the client- and serversided ESX objects.

The version of ItsChip is deprecated since ESX remove the `getSharedObject()` function and r3ps4J updated it for ESX 1.9.4. Now this is the update for the current working version, as the accessor of exports will change to `global` when migrating to >1.10.45.


### Version table

| esx.js version | es_extended version |
| ---------------------- | ------------------- |
| @r3ps4j/esx.js@1.0.5   | 1.9.4               |
| @wayeet/esx.js@1.0.1   | 1.10.5               |

## Installation

Run `npm install @wayeet/esx.js --save-dev` to install the package as a developer dependency. 

## Usage

To use the type definitions this package provides you will need to import either the `Client` class or `Server` class. It is also possible to import a single type as shown in the last example.

### Client:

```ts
import { Client } from "esx.js";

//@ts-ignore
const ESX: Client = global.exports["es_extended"].getSharedObject();
```

### Server:

```ts
import { Server } from "esx.js";

//@ts-ignore
const ESX: Server = global.exports["es_extended"].getSharedObject();
```

### Single type:

```ts
import { XPlayer } from "esx.js/@types/server";

const xPlayer: XPlayer = ESX.GetPlayerFromId(source);
```
