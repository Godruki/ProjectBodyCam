import { system } from "@minecraft/server";

const cameras = new Map();

export function toggleBodyCam(player) {

    const id = player.id;

    if (cameras.has(id)) {

        cameras.delete(id);

        player.sendMessage("§c📹 BodyCam apagada");

        return;

    }

    cameras.set(id, {

        recording: true,

        battery: 100,

        started: Date.now()

    });

    player.sendMessage("§a📹 BodyCam encendida");

}

export function getCamera(player) {

    return cameras.get(player.id);

}

export function isRecording(player) {

    return cameras.has(player.id);

}

system.runInterval(() => {

    for (const [, camera] of cameras) {

        if (camera.battery > 0) {

            camera.battery -= 0.02;

        }

    }

}, 20);
