const db = {
  collection: (collectionName) => {
    return {
      bulkWrite: (data) => {
        localStorage.setItem(collectionName, JSON.stringify(data));
        window.dispatchEvent(new Event("storage"));
      },
      insertOne: (data) => {
        const collection =
          JSON.parse(localStorage.getItem(collectionName)) || [];
        collection.push(data);
        localStorage.setItem(collectionName, JSON.stringify(collection));
        window.dispatchEvent(new Event("storage"));
      },
      update: (query, update) => {
        const collection =
          JSON.parse(localStorage.getItem(collectionName)) || [];
          console.log("ANTES:", collection);

        const updatedCollection = collection.map((item) => {
          console.log("query id type Serviceeee:", typeof query.id);
          console.log("item id type Serviceeee:", typeof item.id);
          if (item.id === query.id) {
            console.log("ACTUALIZANDO:", item);
            return { ...item, ...update };
          }
          return item;
        });
        localStorage.setItem(collectionName, JSON.stringify(updatedCollection));
        window.dispatchEvent(new Event("storage"));
      },
      deleteOne: (query) => {
        const collection =
          JSON.parse(localStorage.getItem(collectionName)) || [];
          console.log("query id type Serviceeee:", typeof query.id);
        const updatedCollection = collection.filter(
          (item) => item.id !== query.id,
        );
        localStorage.setItem(collectionName, JSON.stringify(updatedCollection));
        window.dispatchEvent(new Event("storage"));
      },
    };
  },
};

function createAction(client, action, service) {
  return (...params) => {
    window.dispatchEvent(
      new CustomEvent(`lf:${action}:start`, { detail: { action } }),
    );
    return client[action](...params)
      .then((result) => {
        service.onSuccess({ action, payload: result, params, db });
        window.dispatchEvent(
          new CustomEvent(`lf:${action}:success`, { detail: { action } }),
        );
      })
      .catch((error) => {
        service.onError({ action, error, params, db });
        window.dispatchEvent(
          new CustomEvent(`lf:${action}:error`, { detail: { action } }),
        );
      });
  };
}

export function createService(client, service) {
  let result = {};

  Object.keys(client).forEach((key) => {
    result[key] = createAction(client, key, service);
  });

  return result;
}
