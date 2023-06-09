export const userChange = (payload) => ({
    type: 'SET_USER',
    payload: payload,
});

export const userAddToList = (payload) => ({
    type: 'SET_USER_LIST',
    payload: payload,
});

export const userReset = () => ({
    type: 'RESET_USER'
});

export const userRemoveFromList = (payload) => ({
    type: 'REMOVE_USER_FROM_LIST',
    payload: payload
});
