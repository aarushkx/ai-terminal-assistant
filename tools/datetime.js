export async function getCurrentDateTime() {
    const now = new Date();

    const date = now.toISOString().split("T")[0];
    const time = now.toTimeString().split(" ")[0];
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return { date, time, timezone };
}
