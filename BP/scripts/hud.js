import { world, system } from "@minecraft/server";
import { getPlayerData } from "./playerData.js";
import { formatClock, formatDate, formatRecordingTime } from "./utils.js";

function getDimensionName(player) {

    switch (player.dimension.id) {

        case "minecraft:overworld":
            return "Overworld";

        case "minecraft:nether":
            return "Nether";

        case "minecraft:the_end":
            return "The End";

        default:
            return player.dimension.id;
    }

}

/*
 * Temporal.
 * En la siguiente versión este método leerá el bioma real
 * (incluyendo biomas de addons si la API lo permite).
 */
function getBiomeName(player) {

    return "Detectando...";

}

function batteryBar(percent) {

    const bars = 10;

    const filled = Math.round(percent / 10);

    return "█".repeat(filled) + "░".repeat(bars - filled);

}

system.runInterval(() => {

    for (const player of world.getPlayers()) {

        const data = getPlayerData(player);

        if (!data.enabled)
            continue;

        const pos = player.location;

        const hud = [

            "§c● REC",
            "",
            "§fPROJECT BODYCAM",
            "",
            `§a${player.name}`,
            "",
            `${formatDate()} ${formatClock()}`,
            "",
            `🌲 ${getBiomeName(player)}`,
            `🌍 ${getDimensionName(player)}`,
            "",
            `📍 ${Math.floor(pos.x)} / ${Math.floor(pos.y)} / ${Math.floor(pos.z)}`,
            "",
            `🔋 ${batteryBar(data.battery)} ${Math.floor(data.battery)}%`,
            "",
            `⏺ ${formatRecordingTime(data.recordingTime)}`

        ].join("\n");

        player.onScreenDisplay.setActionBar(hud);

    }

}, 20);
