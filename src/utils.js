export function logTimestamp(message) {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0];
    console.log(`[${timeString}] CORE_SYSTEM: ${message}`);
}
