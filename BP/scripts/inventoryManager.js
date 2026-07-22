import { world, system, ItemStack } from "@minecraft/server";

const BODYCAM_ID = "projectbodycam:bodycam";
const SLOT = 8; // Slot 9 (empieza en 0)

function getInventory(player) {
    return player.getComponent("minecraft:inventory").container;
}

function hasBodyCam(player) {

    const inventory = getInventory(player);

    for (let i = 0; i < inventory.size; i++) {

        const item = inventory.getItem(i);

        if (item && item.typeId === BODYCAM_ID) {
            return true;
        }

    }

    return false;
}

export function giveBodyCam(player) {

    const inventory = getInventory(player);

    if (hasBodyCam(player))
        return;

    inventory.setItem(
        SLOT,
        new ItemStack(BODYCAM_ID, 1)
    );
}

system.runInterval(() => {

    for (const player of world.getPlayers()) {

        giveBodyCam(player);

    }

}, 40);
