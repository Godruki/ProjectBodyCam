const players = new Map();

export function getPlayerData(player) {

    if (!players.has(player.id)) {

        players.set(player.id, {

            enabled: false,

            battery: 100,

            recordingTime: 0,

            firstJoin: true

        });

    }

    return players.get(player.id);

}

export function resetRecording(player){

    const data = getPlayerData(player);

    data.recordingTime = 0;

}

export function startRecording(player){

    const data = getPlayerData(player);

    data.enabled = true;

}

export function stopRecording(player){

    const data = getPlayerData(player);

    data.enabled = false;

}
