const _toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return _toString.call(val) === '[object Date]'
}

export function isPlainObject(val: any): val is Object {
  return _toString.call(val) === '[object Object]'
}