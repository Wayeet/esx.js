# ESX.js
<div style="margin: auto 0; width: 100%">
  <img src="https://i.imgur.com/lj2RCGp.jpg" width="300" height="300"/>
  <div>
  <a href="https://www.npmjs.com/package/esx.js">
    <img src="https://img.shields.io/npm/v/esx.js?style=flat" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/esx.js">
    <img src="https://img.shields.io/npm/dm/esx.js?style=flat">
  </a>
</div>

## About

This is a JavaScript/TypeScript wrapper for the ESX (es_extended) framework in FiveM. 

If you experience any issues, please post them in the `Issues`. 

## Guide

### `Installation`

Run `npm i esx.js` to install the package. When this is done you are ready to use it. 

### `Usage`

So how do you use it? 

First you need to import either the `Client` class or `Server` class. 

### `Client`

```ts
import { Client } from "esx.js";

const ESX: Client = exports["es_extended"].getSharedObject();
```

### `Server`
```ts
import { Server } from "esx.js";

const ESX: Server = exports["es_extended"].getSharedObject();
```

### You can also import a single type:
```ts
import { XPlayer } from "esx.js/@types/server";

const xPlayer: XPlayer = ESX.GetPlayerFromId(source);
```

### That's it. Now you are ready to rock the world!
