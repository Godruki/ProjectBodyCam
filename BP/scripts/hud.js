import { world, system } from "@minecraft/server";
import { getCamera } from "./bodycam.js";

function getDimensionName(player) {
    switch (player.dimension.id) {
        case "minecraft:overworld":
            return "OVERWORLD";
        case "minecraft:nether":
            return "NETHER";
        case "minecraft:the_end":
            return "THE END";
        default:
            return "UNKNOWN";
    }
}

system.runInterval(() => {

    const now = new Date();

    const time =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0") +
        ":" +
        now.getSeconds().toString().padStart(2, "0");

    for (const player of world.getPlayers()) {

        const cam = getCamera(player);

        if (!cam) continue;

        const loc = player.location;

        player.onScreenDisplay.setActionBar(
            `§c● REC §f🔋${cam.battery.toFixed(0)}% §7| 🕒 ${time}\n` +
            `📍 ${Math.floor(loc.x)} ${Math.floor(loc.y)} ${Math.floor(loc.z)}\n` +
            `🌍 ${getDimensionName(player)}`
        );

    }

}, 20);
