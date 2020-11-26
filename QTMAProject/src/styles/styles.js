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
  },
  avatar: {
    color: 'blue',
  },
  row: {
    flexDirection: 'row',
    //alignItems: 'flex-start',
    marginTop: 30,
  },
  image: {
    width: 150,
    height: 293,
  },
  loading: {
    marginTop: 300,
  },

  profileHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profileHeadingText: {
    fontSize: 50,
    fontWeight: '500'
  },
  profileInfoCard: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#d62828',
    borderRadius: 20
  },
  profileInfoCardHeading: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  profileInfoCardText: {
    fontSize: 20
  }
});
