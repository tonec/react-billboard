const data = {
  board: {},
  lane: {
    byId: {
      '1': {
         'id': '1',
         'name': 'Lane 1',
         'editing': false,
         'storyIds': [ '2' ]
      },
      '2': {
         'id': '2',
         'name': 'Lane 2',
         'editing': false,
         'storyIds': [ '3' ]
      },
      '3': {
         'id': '3',
         'name': 'Lane 3',
         'editing': false,
         'storyIds': []
      }
    }
  },
  story: {
    byId: {
      '1': {
        id: '1',
        title: 'Story 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      '2': {
        id: '2',
        title: 'Story 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      '3': {
        id: '3',
        itle: 'Story 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    }
  }
}

export default data
