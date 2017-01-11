var config = {
  apiKey: 'AIzaSyBm7qUcL9-I7TKU6rzoTvn-EXSzuvF5K94',
  authDomain: 'react-billboard-dev.firebaseapp.com',
  databaseURL: 'https://react-billboard-dev.firebaseio.com',
  storageBucket: 'react-billboard-dev.appspot.com',
  messagingSenderId: '224216958382'
}

firebase.initializeApp(config)
const database = firebase.database()

export default database
