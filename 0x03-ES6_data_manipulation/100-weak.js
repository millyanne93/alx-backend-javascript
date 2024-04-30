export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let queryCount = weakMap.get(endpoint) || 0;

  queryCount += 1;

  weakMap.set(endpoint, queryCount);

  if (queryCount >= 5) throw Error('Endpoint load is high');

  return queryCount;
}
