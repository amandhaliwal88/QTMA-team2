import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  greeting: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 50,
  },
  logo: {
    alignItems: 'center',
    marginTop: 40,
  },

  form: {
    flex: 1,
    margin: 25,
  },
  authInput: {marginTop: 5},
  authButton: {marginTop: 20},
  authSwitch: {
    marginTop: 15,
    alignItems: 'center',
  },

  pageTitle: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'left',
    marginTop: 20,
  },
  card: {
    marginTop: 20,
    zIndex: -1
  },
  avatar: {
    color: 'blue',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 30,
  },
  image: {
    width: 150,
    height: 293,
  },
  loading: {
    marginTop: 300,
  },
  homeScreenImage: {
    // padding: 20,
    marginTop: 20,
    flex: 1,
    zIndex: 1,
    // width: '45%',
    // height: '50%',

  }
});
