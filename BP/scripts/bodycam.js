const enabledPlayers = new Map();

export function toggleBodyCam(player) {

    const id = player.id;

    if (enabledPlayers.has(id)) {

        enabledPlayers.delete(id);

        player.sendMessage("§cBodyCam OFF");

    } else {

        enabledPlayers.set(id, true);

        player.sendMessage("§aBodyCam ON");

    }

}

export function isBodyCamEnabled(player) {

    return enabledPlayers.has(player.id);

}
