import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    marginTop: 48,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24,
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380',
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },

  heroTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1313a1',
    lineHeight: 30,
  },

  heroDescription: {
    marginTop: 16,
    fontSize: 15,
    color: '#737380',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  action: {
    width: '48%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#e02041',
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});