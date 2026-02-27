import { withReactive } from '@/reactive/withReactive';

import { BeaconInfoList } from "./BeaconInfoList";

export const BeaconInfoController = withReactive((
    { data, onClick, id }
) => {

  const beacon = data?.beacon?.[0] || null;

    if (!beacon) return <p>Loading...</p>;

     return (
      <div className="beacon-detail-container">
        <BeaconInfoList beacon={ beacon } onClick={ onClick } />
      </div>
    );

},
{
    init: ({ services, id }) => {
      id && services.beacons.getBeaconById({ id });
    },
    queries: ({ id }) => [
      {
        collection: "beacons",
        name: "beacon",
        where:{
          op: '==',
          field: 'id',
          value: Number(id)
        },
        defaultValue: [],
      },
    ],
    monitors: () => ["getBeaconById"],
  }
);