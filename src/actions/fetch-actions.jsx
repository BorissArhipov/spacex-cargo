const shipmentsRequested = () => {
    return {
        type: 'FETCH_SHIPMENTS_REQUEST'
    };
};

const shipmentsLoaded = (newShipments) => {
    return {
        type: 'FETCH_SHIPMENTS_SUCCESS',
        payload: newShipments
    };
};

const shipmentsError = (error) => {
    return {
        type: 'FETCH_SHIPMENTS_FAILURE',
        payload: error
    };
};

const fetchData = () => (dispatch) => {
    dispatch(shipmentsRequested());
    fetch('http://localhost:8080/data/shipments.json')
        .then((data) => {
            data.json().then(res => {
                dispatch(shipmentsLoaded(res));
            })
        })
        .catch((err) => {
            dispatch(shipmentsError(err))
            console.log(err)
        });
};

export {
    fetchData
};