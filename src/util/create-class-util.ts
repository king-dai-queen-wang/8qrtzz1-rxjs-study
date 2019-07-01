export function createClass(obj: any, protoClass: any) {
  const func = new Function('ctor', `return new ctor();`);

  if (typeof obj === 'object') {

    const newObj = func.call(null, protoClass);

    Object.assign(newObj, obj);

    return newObj;
  }

  return obj;
}