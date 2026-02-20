import { BeaconsList } from "./BeaconsList";
import { withReactive } from "@/reactive/withReactive";


export const BeaconsListController = withReactive((
    { data, services, monitors }
) => {
    console.log("BeaconsListController.Data", data);
    const isLoading = monitors.getBeacons;
    return (<div>
        <BeaconsList 
            onClick={services.beacons.getBeacons} 
            data={data.beacons} 
            isLoading={isLoading} 
        />
    </div>);
},
{
    init: ({ services }) => {
        services.beacons.getBeacons();
    },
    queries: () => [
        {
            collection: 'beacons',
            name: 'beacons',
            defaultValue: [],
        },
    ],
    monitors: () => (['getBeacons']),
});