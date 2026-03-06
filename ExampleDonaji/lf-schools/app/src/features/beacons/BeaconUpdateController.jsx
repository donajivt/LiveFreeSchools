import { withReactive } from "@/reactive/withReactive";
import { BeaconForm } from "./BeaconForm";

export const BeaconUpdateController = withReactive((
    { data, services, monitors, onCancel, onSubmit, id }
) => {
    const isLoading = monitors.updateBeacon || monitors.getBeaconById;
    const beacon = data.beacons?.[0] || null;

  return (<div>    
            <BeaconForm 
                onSubmit={(values) => onSubmit( services, values )}
                onCancel={onCancel}
                beacon={beacon}
                isLoading= {isLoading}
            />        
        </div>);
    },
    {
        init: ({services, id}) => {
            id && services.beacons.getBeaconById({id})
        },
        queries: ({id}) => [
            {
                collection: "beacons",
                name: "beacons",
                where: {
                    op: "==",
                    field: "id",
                    value: Number(id)
                },
            }
        ],
        monitors: () => (['updateBeacon', 'getBeaconById']),
    }
);