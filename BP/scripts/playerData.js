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

export function toggleRecording(player){

    const data = getPlayerData(player);

    data.enabled = !data.enabled;

    if(data.enabled){

        data.recordingTime = 0;

    }

}
