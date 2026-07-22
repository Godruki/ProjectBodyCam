import { world } from "@minecraft/server";
import { toggleBodyCam } from "./bodycam.js";
import "./hud.js";
import "./inventoryManager.js";

world.afterEvents.itemUse.subscribe((event) => {

    const player = event.source;

    if (!player) return;

    const item = event.itemStack;

    if (!item) return;

    if (item.typeId === "projectbodycam:bodycam") {

        toggleBodyCam(player);

    }

});
