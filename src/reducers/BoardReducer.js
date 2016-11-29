
const INITIAL_STATE = {
  lanes: [],
  stories: []
}

export default (state = INITIAL_STATE, action) => {
  console.log('Board Reducer: ', state, action)
  return {}
}
