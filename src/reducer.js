export function reducer(state = {
    socket_connected: false,
    stories: {}
}, action) {
    switch(action.type) {
        case 'UI:SOCKET:CONNECTED':
            return _.merge({}, state, {socket_connected: true})
        case 'UI:SOCKET:DISCONNECTED':
            return _.merge({}, state, {socket_connected: false})
        case 'UI:STORY:OPEN':
            return _.merge({}, state, {stories: {[action.id]: {open: true}}})
        case 'UI:STORY:CLOSE':
            return _.merge({}, state, {stories: {[action.id]: {open: false}}})
    }

    return state
}
