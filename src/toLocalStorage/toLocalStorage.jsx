export const loadState = () => {
    try {
        const serializedShipmentState = localStorage.getItem('cofetchShipments');
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
        localStorage.setItem('cofetchShipments', serializeShipmentState);
    } catch (err) {
        new Error(err);
    }
}
