import { ActionFormData } from "@minecraft/server-ui";

export async function openBodyCamMenu(player) {

    const form = new ActionFormData();

    form.title("§l§cProject BodyCam");

    form.body("Selecciona una opción");

    form.button("📹 Activar");

    form.button("⏹ Desactivar");

    form.button("⚙ Configuración");

    const result = await form.show(player);

    if (result.canceled) return;

    switch (result.selection) {

        case 0:
            player.sendMessage("§aBodyCam Activada");
            break;

        case 1:
            player.sendMessage("§cBodyCam Desactivada");
            break;

        case 2:
            player.sendMessage("§eConfiguración próximamente...");
            break;

    }

}
