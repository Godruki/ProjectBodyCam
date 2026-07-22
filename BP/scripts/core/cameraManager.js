/**
 * ProjectBodyCam
 * Camera Manager
 * Versión: 0.1.0
 */

const cameras = new Map();

const DEFAULT_CAMERA = {
    cameraId: "",
    serial: "",
    firmware: "0.1.0",

    battery: 100,
    recordingTime: 0,

    theme: "axon",

    initialized: false,

    startupFinished: false,

    hud: {
        showName: true,
        showDate: true,
        showTime: true,
        showBiome: true,
        showDimension: true,
        showCoordinates: true,
        showBattery: true,
        showRecordingTime: true
    }
};

function cloneCamera() {
    return structuredClone(DEFAULT_CAMERA);
}

export function createCamera(player) {

    if (cameras.has(player.id))
        return cameras.get(player.id);

    const camera = cloneCamera();

    camera.cameraId = generateCameraId();
    camera.serial = generateSerial();
    camera.initialized = true;

    cameras.set(player.id, camera);

    return camera;
}

export function getCamera(player) {

    if (!cameras.has(player.id))
        return createCamera(player);

    return cameras.get(player.id);

}

export function removeCamera(player) {

    cameras.delete(player.id);

}

function generateCameraId() {

    return "PB-" + Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, "0");

}

function generateSerial() {

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let serial = "AXN-";

    for (let i = 0; i < 12; i++) {

        if (i === 4 || i === 8)
            serial += "-";

        serial += chars[Math.floor(Math.random() * chars.length)];

    }

    return serial;

}
