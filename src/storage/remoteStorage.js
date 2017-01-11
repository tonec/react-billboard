import { database } from './db'

export const loadData = () => {
  return database.ref('/').once('value')
}
