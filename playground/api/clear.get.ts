export default defineEventHandler((event) => {
    clearH3EventContextSession(event);
    return 'success';
});
