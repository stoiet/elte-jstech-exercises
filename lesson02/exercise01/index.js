'use strict';

const isNil = obj => obj === undefined || obj === null;
const isFieldMissing = (datas, field) => datas.every(data => isNil(data[field]));
const sortFieldValues = fieldValues => fieldValues.sort((first, second) => first < second);
const findByFieldValue = (datas, field) => fieldValue => datas.find(data => data[field] === fieldValue);

export const sortByField = (field = '') => {
  return (datas = []) => {
    if (isFieldMissing(datas, field)) { return datas; }
    const fieldValues = datas.map(data => data[field]);
    const sortedFieldValues = sortFieldValues(fieldValues);
    return sortedFieldValues.map(findByFieldValue(datas, field));
  };
};
