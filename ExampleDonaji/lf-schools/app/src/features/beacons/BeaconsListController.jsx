import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/features/routing/RoutePaths";
import { BeaconsList } from "./BeaconsList";
import { withReactive } from "@/reactive/withReactive";

export const BeaconsListController = withReactive((
    { data, services, monitors }
) => {
    const navigate = useNavigate();
    const isLoading = monitors.getBeacons;
    return (<div>
        <BeaconsList 
            onClick={services.beacons.getBeacons}
            onDelete={(id) => {
                services.beacons.deleteBeacon({ id });
            }}
            onEdit={(id) => {
                navigate(RoutePaths.beacons.update(id))
            }}
            onInfo={(id) => {
                navigate(RoutePaths.beacons.detail(id))
            }}
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