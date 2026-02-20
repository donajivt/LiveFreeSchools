import { BeaconsList } from "./BeaconsList";
import { withReactive } from "@/reactive/withReactive";


export const BeaconsListController = withReactive((
    { data, services, monitors }
) => {
    const isLoading = monitors.getBeacons;
    console.log("BeaconCreateController.Services", services);
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