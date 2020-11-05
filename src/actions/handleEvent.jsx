const handleEvent = (answer) => {
    return {
        type: 'HANDLE_EVENT',
        payload: answer
    };
}

export default handleEvent;