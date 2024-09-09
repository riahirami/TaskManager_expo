import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  kanbanContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  kanbanColumn: {
    flex: 1,
    marginHorizontal: 10
  },
  kanbanTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  }
});
