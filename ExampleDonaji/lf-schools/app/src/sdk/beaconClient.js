import { beaconsData } from './models';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function RandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const beaconClient ={
    getBeacons: async () => {
        await sleep(1000);
        return beaconsData;
    },
    addBeacon: async (beacon) => {
        await sleep(1000);
        const newBeacon = {
            id: RandomInt(5, 100).toString(),
            ...beacon,
        };
        beaconsData.push(newBeacon);
        return newBeacon;
    },
    updateBeacon: async (updatedBeacon, { id }) => {
        await sleep(1000);
        const index = beaconsData.findIndex((beacon) => beacon.id === id.toString());
        if (index !== -1) {
            beaconsData[index] = { ...beaconsData[index], ...updatedBeacon };
            return beaconsData[index];
        }
        throw new Error('Beacon not found');
    },
    deleteBeacon: async ({ id }) => {
        await sleep(1000);
        const index = beaconsData.findIndex((beacon) => beacon.id === id.toString());
        if (index !== -1) {
            const deletedBeacon = beaconsData.splice(index, 1)[0];
            return deletedBeacon;
        }
        throw new Error('Beacon not found');
    },
}
