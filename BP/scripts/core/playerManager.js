/**
 * ProjectBodyCam
 * Player Manager
 * Versión: 0.1.0
 */

import { world } from "@minecraft/server";
import { createCamera } from "./cameraManager.js";

world.afterEvents.playerSpawn.subscribe((event) => {

    const player = event.player;

    // Solo inicializamos la cámara la primera vez que aparece
    if (event.initialSpawn) {

        const camera = createCamera(player);

        console.warn(
            `[ProjectBodyCam] Cámara creada para ${player.name} (${camera.cameraId})`
        );

    }

});
