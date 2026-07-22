import { world, system } from "@minecraft/server";
import { toggleBodyCam, getCamera } from "./bodycam.js";

world.afterEvents.itemUse.subscribe((event) => {

    const player = event.source;

    if (!player) return;

    const item = event.itemStack;

    if (!item) return;

    if (item.typeId === "minecraft:spyglass") {

        toggleBodyCam(player);

    }

});

system.runInterval(() => {

    for (const player of world.getPlayers()) {

        const cam = getCamera(player);

        if (!cam) continue;

        player.onScreenDisplay.setActionBar(
            `§c● REC   §f🔋${cam.battery.toFixed(0)}%`
        );

    }

}, 20);
