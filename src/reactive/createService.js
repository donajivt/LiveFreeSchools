
const db = {
  collection: (collectionName) => {

    const getCollection = () =>
      JSON.parse(localStorage.getItem(collectionName));

    const saveCollection = (data) => {
      localStorage.setItem(collectionName, JSON.stringify(data));
      window.dispatchEvent(new Event("storage"));
    };

    const update = (data) => {
      const collection = getCollection();
      const index = collection.findIndex(
        (item) => item.id === data.id
      );

      if (index !== -1) {
        collection[index] = { ...collection[index], ...data };
        saveCollection(collection);
      }
    }

    return {
      bulkWrite: (data) => {
        saveCollection(data);
      },

      insertOne: (data) => {
        const collection = getCollection();
        collection.push(data);
        saveCollection(collection);
      },

      getOne: (data) => {
        const dbdata = getCollection().find((item) => item.id === data.id) || null;
        if (dbdata) {
          JSON.stringify(dbdata) != JSON.stringify(data) && update(data)
        }
      },

      updateOne: (data) => {
        update(data)
      },

      deleteOne: (data) => {
        const newCollection = getCollection().filter(
          (item) => item.id !== data
        );
        saveCollection(newCollection);
      },
    };
  },
};


function createAction(client, action, service) {

  const dispatchActionEvent = (status, details) => {
    window.dispatchEvent(
      new CustomEvent(`lf:${action}:${status}`, { detail: { action, ...details } }),
    );
  }

  return (...params) => {

    dispatchActionEvent("start")

    return client[action](...params)
      .then((result) => {

        service.onSuccess({ action, payload: result, params, db });
        dispatchActionEvent("success", result)

      })
      .catch((error) => {

        service.onError({ action, error, params, db });
        dispatchActionEvent("error")

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
