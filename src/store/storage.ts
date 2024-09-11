import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { WebStorage } from 'redux-persist/lib/types'

const createPersistStorage = (): WebStorage => {
  const isServer = typeof window === 'undefined'

  if (!isServer) {
    return createWebStorage('local')
  }

  return {
    getItem(_key: string) {
      return Promise.resolve(null)
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value)
    },
    removeItem(_key: string) {
      return Promise.resolve()
    },
  }
}

export const storage = createPersistStorage()
