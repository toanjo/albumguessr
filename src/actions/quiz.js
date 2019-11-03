export const MARK_COMPLETED = 'MARK_COMPLETED';

export const completeQuestion = (album) => ({
    type: MARK_COMPLETED,
    payload: album
});