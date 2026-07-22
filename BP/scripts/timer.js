import { world, system } from "@minecraft/server";
import { getPlayerData } from "./playerData.js";

system.runInterval(() => {

    for (const player of world.getPlayers()) {

        const data = getPlayerData(player);

        if (!data.enabled)
            continue;

        data.recordingTime++;

    }

}, 20);
