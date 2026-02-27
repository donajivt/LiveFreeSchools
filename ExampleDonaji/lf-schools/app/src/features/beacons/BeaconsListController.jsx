import { BeaconsList } from "./BeaconsList";
import { withReactive } from "@/reactive/withReactive";

export const BeaconsListController = withReactive((
    { data, services, monitors, onEdit, onInfo }
) => {
    const isLoading = monitors.getBeacons;
    return (<div>
        <BeaconsList 
            onClick={services.beacons.getBeacons}
            onDelete={(id) => {
                services.beacons.deleteBeacon({ id });
            }}
            onEdit={(id) => onEdit(id)}
            onInfo={(id) => onInfo(id)}

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