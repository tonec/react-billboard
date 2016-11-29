
const INITIAL_STATE = {
  lanes: [
    { id: 1, name: 'Lane 1'},
    { id: 2, name: 'Lane 2'}
  ],
  stories: []
}

export default (state = INITIAL_STATE, action) => {
  console.log('Board Reducer: ', state, action)
  return state
}
