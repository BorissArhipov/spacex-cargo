import handleEvent from './handleEvent';
import clearMessage from './clearMessage';
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

const fetchData = () => (dispatch) => {
    dispatch(shipmentsRequested());
    fetch('https://cargo.borissarhipov.me/data/shipments.json')
        .then((data) => {
            data.json().then(res => {
                dispatch(shipmentsLoaded(res));
                dispatch(handleEvent('loaded'));
                setTimeout(dispatch, 4000, clearMessage());
            })
        })
        .catch(() => {
            dispatch(handleEvent('error'));
            setTimeout(dispatch, 4000, clearMessage());
        });
};

export {
    fetchData
};