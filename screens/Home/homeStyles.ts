import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  addButtonContainer: { flexDirection: 'row', justifyContent: 'center' },
  projectItem: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  projectDescription: {
    fontSize: 14,
    color: '#666'
  }
});
