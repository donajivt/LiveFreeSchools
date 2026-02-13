
const db = {
  collection: (collectionName) => {

    const getCollection = () =>
      JSON.parse(localStorage.getItem(collectionName));

    const saveCollection = (data) => {
      localStorage.setItem(collectionName, JSON.stringify(data));
      window.dispatchEvent(new Event("storage"));
    };

    return {
      bulkWrite: (data) => {
        saveCollection(data);
      },

      insertOne: (data) => {
        const collection = getCollection();
        collection.push(data);
        saveCollection(collection);
      },

      getOne: (query) => {
        return getCollection().find((item) => item.id === query.id) || null;
      },

      updateOne: (data) => {
        const collection = getCollection();
        const index = collection.findIndex(
          (item) => item.id === data.id
        );

        if (index !== -1) {
          collection[index] = { ...collection[index], ...data };
          saveCollection(collection);
        }
      },

      deleteOne: (query) => {
        const newCollection = getCollection().filter(
          (item) => item.id !== query.id
        );
        saveCollection(newCollection);
      },
    };
  },
};


function createAction(client, action, service) {

  const dispatchActionEvent = (status, ...details) => {
    window.dispatchEvent(
      new CustomEvent(`lf:${action}:${status}`, { ...details }),
    );
  }

  return (...params) => {

    dispatchActionEvent("start", { details: action })

    return client[action](...params)
      .then((result) => {

        service.onSuccess({ action, payload: result, params, db });
        dispatchActionEvent("success", { details: action })
        return result;

      })
      .catch((error) => {

        service.onError({ ctiaon, error, params, db });
        dispatchActionEvent("error", { details: action })

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
