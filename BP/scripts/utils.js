export function formatClock() {

    const now = new Date();

    return (
        now.getHours().toString().padStart(2, "0") + ":" +
        now.getMinutes().toString().padStart(2, "0") + ":" +
        now.getSeconds().toString().padStart(2, "0")
    );

}

export function formatDate() {

    const now = new Date();

    return (
        now.getDate().toString().padStart(2, "0") + "/" +
        (now.getMonth() + 1).toString().padStart(2, "0") + "/" +
        now.getFullYear()
    );

}

export function formatRecordingTime(seconds) {

    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return (
        h.toString().padStart(2, "0") + ":" +
        m.toString().padStart(2, "0") + ":" +
        s.toString().padStart(2, "0")
    );

}
