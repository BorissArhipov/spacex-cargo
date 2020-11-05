export const loadState = () => {
    try {
        const serializedShipmentState = localStorage.getItem('fetchShipments');
        if (serializedShipmentState === null) {
            return undefined;
        }
        return JSON.parse(serializedShipmentState);
    } catch (err) {
        return undefined;
    }
}

export const saveState = shipments => {
    try {
        const serializeShipmentState = JSON.stringify(shipments);
        localStorage.setItem('fetchShipments', serializeShipmentState);
    } catch (err) {
        new Error(err);
    }
}
