const cache = new Map<string, any>()

export function CacheResponse(expirationTime: number = 60000) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value
    descriptor.value = async function (...args: any[]) {
      const key = propertyKey + JSON.stringify(args)
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = await originalMethod.apply(this, args)
      cache.set(key, result)
      setTimeout(() => cache.delete(key), expirationTime)
      return result
    }
    return descriptor
  }
}