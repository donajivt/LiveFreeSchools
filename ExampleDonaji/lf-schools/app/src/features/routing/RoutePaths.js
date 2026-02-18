const paths = {
    trips: '/trips',
    beacons: '/beacons'
};

export const RoutePaths = {
    trips:{
        list: () => paths.trips,
        create: () => `${paths.trips}/create`,
        update: id => `${paths.trips}/${id}/update` 
    },
    beacons: {
        list: () => paths.beacons,
        create: () => `${paths.beacons}/create`,
        update: id => `${paths.beacons}/${id}/update`
    }
}