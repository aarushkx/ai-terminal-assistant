import { IgApiClient } from "instagram-private-api";

export async function sendInstagramMessage({
    loginUsername,
    loginPassword,
    recipientUsername,
    message,
}) {
    try {
        const ig = new IgApiClient();
        ig.state.generateDevice(loginUsername);
        await ig.account.login(loginUsername, loginPassword);

        const userId = await ig.user.getIdByUsername(recipientUsername);
        const thread = ig.entity.directThread([userId.toString()]);

        await thread.broadcastText(message);

        return {
            status: "success",
            message: `Message sent to @${recipientUsername}`,
        };
    } catch (error) {
        return {
            status: "error",
            message: error.message,
        };
    }
}
