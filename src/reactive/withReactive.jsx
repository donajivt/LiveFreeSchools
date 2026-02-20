import { useState, useEffect } from "react";
import { Query, Monitor } from "@/hooks";
import services from "@/services";



export const withReactive = (Component, options) => {
  const Wrapper = ({ ...props }) => {
    const [data, setData] = useState({});
    const [monitors, setMonitors] = useState([]);

    useEffect(() => {
      options.init && options.init({ services, ...props });
    }, []);

    return (
      <>
        {
          options.monitors && options.monitors({ ...props }).map((monitor) => (
            <Monitor
              key={monitor}
              monitor={monitor}
              setMonitors={setMonitors}
            />
          ))
        }
        {
          options.queries && options.queries({ ...props }).map((query) => (
            <Query
              key={query.name}
              collection={query.collection}
              name={query.name}
              orderBy={query.orderBy}
              defaultValue={query.defaultValue}
              where={query.where}
              setData={setData}
            />
          ))
        }
        <Component
          data={data}
          monitors={monitors}
          services={services}
          {...props}
        />
      </>
    );
  };

  return Wrapper;
};
