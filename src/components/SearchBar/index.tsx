import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Colors } from '../../styles'
import Icon from 'react-native-vector-icons/Ionicons'

interface SearchBarProps {
  searchText: string,
  onChangeText: (text: string) => void
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({ searchText, onChangeText }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Icon name='search' color={Colors.gray} size={20} style={styles.icon} />
        <TextInput
          value={searchText}
          style={styles.input}
          placeholder='Search'
          onChangeText={onChangeText}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
    paddingHorizontal: '5%',
    backgroundColor: Colors.gray
  },
  inputContainer: {
    width: '100%',
    height: 45
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1
  },
  input: {
    borderRadius: 10,
    backgroundColor: Colors.white,
    paddingLeft: 35
  }
})

export { SearchBar }
