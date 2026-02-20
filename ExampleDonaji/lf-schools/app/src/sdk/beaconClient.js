
const beaconsData = [
  {
    id: '1',
    deviceName: 'Beacon 01',
    beaconType: '1',
    phoneNumber: 8563245616,
    districtId: '1',
    schoolId: '',
    facultyId: '6',
    isAvailable: true,
    locations: [
        {
            beaconId: '1',
            locationDateUTC: '01/01/2024 10:00:00',
            street1: 'Street 1',
            street2: 'Street 2',
            locality: 'Locality',
            state: 'State',
            postalCode: '12345',
            country: 'Country',
            reverseGeocode: 'Reverse Geocode',
            latitude: 97.365,
            longitude: 65.432,
            batteryLevel: 'slow',
        },
        {
            beaconId: '2',
            locationDateUTC: '01/01/2024 11:00:00',
            street1: 'Street 3',
            street2: 'Street 4',
            locality: 'Locality 2',
            state: 'State 2',
            postalCode: '54321',
            country: 'Country 2',
            reverseGeocode: 'Reverse Geocode 2',
            latitude: 27.365,
            longitude: 77.432,
            batteryLevel: 'medium',
        }
    ],
    events: [
        {
            beaconId: '1',
            emergencyType: 'Fire',
            latitude: 97.365,
            longitude: 65.432,
            reverseGeocode: 'Reverse Geocode',
            address1: 'Address 1',
            address2: 'Address 2',
            address3: 'Address 3',
            city: 'City',
            state: 'State',
            postalCode: '12345',
            createdOnUTC: '01/01/2024 10:00:00',
            createdBy: 'Doanji',
        },
        {
            beaconId: '1',
            emergencyType: 'Fire',
            latitude: 27.365,
            longitude: 77.432,
            reverseGeocode: 'Reverse Geocode',
            address1: 'Address 3',
            address2: 'Address 4',
            address3: 'Address 5',
            city: 'City 2',
            state: 'State 2',
            postalCode: '54321',
            createdOnUTC: '01/01/2024 11:00:00',
            createdBy: 'Doanji',
        },
    ]
  },
  {
    id: '2',
    deviceName: 'Beacon 02',
    beaconType: '2',
    phoneNumber: 8465168467,
    districtId: '3',
    schoolId: '7',
    facultyId: '19',
    isAvailable: true,
    locations: [
        {
            beaconId: '2',
            locationDateUTC: '01/01/2024 10:00:00',
            street1: 'Street 1',
            street2: 'Street 2',
            locality: 'Locality',
            state: 'State',
            postalCode: '12345',
            country: 'Country',
            reverseGeocode: 'Reverse Geocode',
            latitude: 97.365,
            longitude: 65.432,
            batteryLevel: 'slow',
        },
        {
            beaconId: '2',
            locationDateUTC: '01/01/2024 11:00:00',
            street1: 'Street 3',
            street2: 'Street 4',
            locality: 'Locality 2',
            state: 'State 2',
            postalCode: '54321',
            country: 'Country 2',
            reverseGeocode: 'Reverse Geocode 2',
            latitude: 27.365,
            longitude: 77.432,
            batteryLevel: 'medium',
        }
    ],
    events: [
        {
            beaconId: '2',
            emergencyType: 'Fire',
            latitude: 97.365,
            longitude: 65.432,
            reverseGeocode: 'Reverse Geocode',
            address1: 'Address 1',
            address2: 'Address 2',
            address3: 'Address 3',
            city: 'City',
            state: 'State',
            postalCode: '12345',
            createdOnUTC: '01/01/2024 10:00:00',
            createdBy: 'Doanji',
        },
        {
            beaconId: '2',
            emergencyType: 'Fire',
            latitude: 27.365,
            longitude: 77.432,
            reverseGeocode: 'Reverse Geocode',
            address1: 'Address 3',
            address2: 'Address 4',
            address3: 'Address 5',
            city: 'City 2',
            state: 'State 2',
            postalCode: '54321',
            createdOnUTC: '01/01/2024 11:00:00',
            createdBy: 'Doanji',
        },
    ]
  },
  {
    id: '3',
    deviceName: 'Beacon 03',
    beaconType: '2',
    phoneNumber: 2654835616,
    districtId: '7',
    schoolId: '15',
    facultyId: '',
    isAvailable: false,
    locations: [
        {
            beaconId: '3',
            locationDateUTC: '01/01/2024 10:00:00',
            street1: 'Street 1',
            street2: 'Street 2',
            locality: 'Locality',
            state: 'State',
            postalCode: '12345',
            country: 'Country',
            reverseGeocode: 'Reverse Geocode',
            latitude: 97.365,
            longitude: 65.432,
            batteryLevel: 'slow',
        },
        {
            beaconId: '3',
            locationDateUTC: '01/01/2024 11:00:00',
            street1: 'Street 3',
            street2: 'Street 4',
            locality: 'Locality 2',
            state: 'State 2',
            postalCode: '54321',
            country: 'Country 2',
            reverseGeocode: 'Reverse Geocode 2',
            latitude: 27.365,
            longitude: 77.432,
            batteryLevel: 'medium',
        }
    ],
    events: [
        {
            beaconId: '3',
            emergencyType: 'Fire',
            latitude: 97.365,
            longitude: 65.432,
            reverseGeocode: 'Reverse Geocode',
            address1: 'Address 1',
            address2: 'Address 2',
            address3: 'Address 3',
            city: 'City',
            state: 'State',
            postalCode: '12345',
            createdOnUTC: '01/01/2024 10:00:00',
            createdBy: 'Doanji',
        },
        {
            beaconId: '3',
            emergencyType: 'Fire',
            latitude: 27.365,
            longitude: 77.432,
            reverseGeocode: 'Reverse Geocode',
            address1: 'Address 3',
            address2: 'Address 4',
            address3: 'Address 5',
            city: 'City 2',
            state: 'State 2',
            postalCode: '54321',
            createdOnUTC: '01/01/2024 11:00:00',
            createdBy: 'Doanji',
        }, 
    ]
  },
  {
    id: '4',
    deviceName: 'Beacon 04',
    beaconType: '2',
    phoneNumber: 2654835616,
    districtId: '91',
    schoolId: '104',
    facultyId: '46',
    isAvailable: false,
    locations: [
        {
            beaconId: '4',
            locationDateUTC: '01/01/2024 10:00:00',
            street1: 'Street 1',
            street2: 'Street 2',
            locality: 'Locality',
            state: 'State',
            postalCode: '12345',
            country: 'Country',
            reverseGeocode: 'Reverse Geocode',
            latitude: 97.365,
            longitude: 65.432,
            batteryLevel: 'slow',
        },
        {
            beaconId: '4',
            locationDateUTC: '01/01/2024 11:00:00',
            street1: 'Street 3',
            street2: 'Street 4',
            locality: 'Locality 2',
            state: 'State 2',
            postalCode: '54321',
            country: 'Country 2',
            reverseGeocode: 'Reverse Geocode 2',
            latitude: 27.365,
            longitude: 77.432,
            batteryLevel: 'medium',
        }
    ],
    events: [
     {
            beaconId: '4',
            emergencyType: 'Fire',
            latitude: 97.365,
            longitude: 65.432,
            reverseGeocode: 'Reverse Geocode',
            address1: 'Address 1',
            address2: 'Address 2',
            address3: 'Address 3',
            city: 'City 4',
            state: 'State 4',
            postalCode: '12345',
            createdOnUTC: '01/01/2024 10:00:00',
            createdBy: 'Doanji',
        },
        {
            beaconId: '4',
            emergencyType: 'Fire',
            latitude: 97.365,
            longitude: 65.432,
            reverseGeocode: 'Reverse Geocode',
            address1: 'Address 4',
            address2: 'Address 5',
            address3: 'Address 6',
            city: 'City 2',
            state: 'State 2',
            postalCode: '54321',
            createdOnUTC: '01/01/2024 11:00:00',
            createdBy: 'Doanji',
        },
    ],
  }
];

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
