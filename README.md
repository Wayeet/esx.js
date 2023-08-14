# ESX.js

<div style="margin: auto 0; width: 100%">
  <img src="https://i.imgur.com/lj2RCGp.jpg" width="150" height="150"/>
  <div>
  <a href="https://www.npmjs.com/package/@r3ps4j/esx.js">
    <img src="https://img.shields.io/npm/v/@r3ps4j/esx.js?style=flat" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/@r3ps4j/esx.js">
    <img src="https://img.shields.io/npm/dm/@r3ps4j/esx.js?style=flat">
  </a>
</div>

## About

This is a JavaScript/TypeScript wrapper for the ESX (es_extended) framework in FiveM.

If you experience any issues, please create an issue.

## About this fork

This fork of [ItsChip's ESX.js](https://github.com/itschip/esx.js) aims to support the latest version of es_extended. It also makes use of ESLint to check syntax and find problems, and enforces a code style using Prettier. By now, the package has almost completely been rewritten to provide typings for ESX Legacy.

The fork was made primarily to get typings for one of my projects aimed towards ESX Legacy, but after having changed so much I decided to publish it on NPM as well for anyone who needs typings for the newer versions of ESX.

Please check out the version table below to see which version of this package you need to install to get the correct typings for your version of es_extended.

### Version table

| @r3ps4j/esx.js version | es_extended version |
| ---------------------- | ------------------- |
| 1.0.x                  | 1.9.4               |

## Installation

Run `npm install @r3ps4j/esx.js --save-dev` to install the package as a developer dependency. 

## Usage

To use the type definitions this package provides you will need to import either the `Client` class or `Server` class. It is also possible to import a single type as shown in the last example.

### Client:

```ts
import { Client } from "esx.js";

const ESX: Client = exports["es_extended"].getSharedObject();
```

### Server:

```ts
import { Server } from "esx.js";

const ESX: Server = exports["es_extended"].getSharedObject();
```

### Single type:

```ts
import { XPlayer } from "esx.js/@types/server";

const xPlayer: XPlayer = ESX.GetPlayerFromId(source);
```
