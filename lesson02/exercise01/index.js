
const isNil = value => value === undefined || value === null;
const isFieldMissing = (datas, field) => datas.every(obj => isNil(obj[field]));

export const sortByField = field => {
  return (datas = []) => {
    if (isFieldMissing(datas, field)) { return datas; }
    const fieldValues = datas.map(data => data[field]);
    const sortedFieldValues = fieldValues.sort((fst, snd) => fst < snd);
    return sortedFieldValues.map(value => datas.find(data => value === data[field]));
  };
};
