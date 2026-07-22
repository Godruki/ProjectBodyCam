/**
 * ProjectBodyCam
 * Inventory Manager
 * Versión: 0.1.0
 */

import { world, system, ItemStack } from "@minecraft/server";

const TABLET_ID = "projectbodycam:tablet";
const TABLET_SLOT = 8; // Slot 9

function getInventory(player) {
    return player.getComponent("minecraft:inventory").container;
}

function countTablets(player) {

    const inventory = getInventory(player);

    let count = 0;

    for (let i = 0; i < inventory.size; i++) {

        const item = inventory.getItem(i);

        if (item && item.typeId === TABLET_ID) {
            count++;
        }

    }

    return count;
}

function ensureTablet(player) {

    const inventory = getInventory(player);

    // Si no tiene ninguna, crear una
    if (countTablets(player) === 0) {

        inventory.setItem(
            TABLET_SLOT,
            new ItemStack(TABLET_ID, 1)
        );

        return;
    }

    // Si hay varias, eliminar las extra
    let found = false;

    for (let i = 0; i < inventory.size; i++) {

        const item = inventory.getItem(i);

        if (!item || item.typeId !== TABLET_ID)
            continue;

        if (!found) {

            found = true;

            if (i !== TABLET_SLOT) {

                inventory.setItem(TABLET_SLOT, item);
                inventory.setItem(i);

            }

        } else {

            inventory.setItem(i);

        }

    }

}

system.runInterval(() => {

    for (const player of world.getPlayers()) {

        ensureTablet(player);

    }

}, 20);
