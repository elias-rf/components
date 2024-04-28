import { validData as vldData } from "../utils/valid/valid-data.mjs";
import { validFirst as vldFirst } from "../utils/valid/valid-first.mjs";
import { validGroupBy as vldGroupBy } from "../utils/valid/valid-group-by.mjs";
import { validId as vldId } from "../utils/valid/valid-id.mjs";
import { validOrderBy as vldOrderBy } from "../utils/valid/valid-order-by.mjs";
import { validReturning as vldReturning } from "../utils/valid/valid-returning.mjs";
import { validSelect as vldSelect } from "../utils/valid/valid-select.mjs";
import { validWhere as vldWhere } from "../utils/valid/valid-where.mjs";

/**
 * Generates a set of utility functions for working with a given schema.
 *
 * @return {Object} An object containing various utility functions.
 */
export function ormUtils(schema) {
  const validWhere = (where) => {
    return vldWhere(where, schema);
  };

  const validOrderBy = (orderBy) => {
    return vldOrderBy(orderBy, schema);
  };

  const getIdColumns = () => {
    return schema.primary;
  };

  const getTableName = () => {
    return schema.table;
  };

  const getAdapter = (db) => () => {
    return db;
  };

  const getSchema = () => {
    return schema;
  };

  const validFirst = (first) => {
    return vldFirst(first, schema);
  };

  const validGroupBy = (groupBy) => {
    return vldGroupBy(groupBy, schema);
  };

  const validData = (data) => {
    return vldData(data, schema);
  };

  const getFields = () => {
    return Object.keys(schema.fields);
  };

  const validId = (id = []) => {
    return vldId(id, schema);
  };

  const validSelect = (select) => {
    return vldSelect(select, schema);
  };

  const validReturning = (returning) => {
    return vldReturning(returning, schema);
  };

  return {
    getFields,
    getIdColumns,
    validWhere,
    validOrderBy,
    validId,
    validSelect,
    validReturning,
    validFirst,
    validGroupBy,
    validData,
    getTableName,
    getAdapter,
    getSchema,
  };
}
