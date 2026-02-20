import { useMemo, useEffect } from "react";
import {useDeepCompareEffect} from "use-deep-compare";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

export const useQuery = ({ collection, where, orderBy }) => {
  const [table] = useLocalStorage(collection);

  const result = useMemo(() => {

    if (!table) return [];
    if (!where && !orderBy) return table;

    const { op, field, value } = where;

    const condition = whereConditions(op, field, value);
    return table.filter(condition);

  }, [table, where]);

  return order(result, orderBy);
};

const whereConditions = (op, field, value) => {
  switch (op) {
    case "==":
      return (item) => item[field] === value;
    case "contains":
      return (item) => item[field].toLowerCase().includes(value.toLowerCase());
    case "startsWith":
      return (item) => item[field].toLowerCase().startsWith(value.toLowerCase());
    case "endsWith":
      return (item) => item[field].toLowerCase().endsWith(value.toLowerCase());
    case ">":
      return (item) => item[field] > value;
    case "<":
      return (item) => item[field] < value;
    case ">=":
      return (item) => item[field] >= value;
    case "<=":
      return (item) => item[field] <= value;
    case "!=":
      return (item) => item[field] !== value;
    case "in":
      return (item) => Array.isArray(value) && value.includes(item[field]);
    default:
      return () => true;
  }
};

const order = (data, orderBy) => {

  if (!orderBy) return data;

  const { field, direction } = orderBy;

  const sorted = [...data].sort((a, b) => {
    if (a[field] < b[field]) return -1;
    if (a[field] > b[field]) return 1;
    return 0;
  });

  return direction === 'desc' ? sorted.reverse() : sorted;
};


export const Query = ({ collection, name, orderBy, defaultValue, where, setData }) => {
  const result = useQuery({ collection, where, orderBy });

  useDeepCompareEffect(() => {
    setData((prev) => ({ 
      ...prev, 
      [name]: result.length > 0 ? result : (defaultValue || []) 
    }));
  }, [result]);

  return null;
};
