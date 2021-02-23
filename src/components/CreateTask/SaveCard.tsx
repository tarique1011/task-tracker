import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../../styles'
import { Button } from '../../components'

interface ItemType {
  title: string,
  value: string
}

interface SaveCardProps {
  items: Array<ItemType>,
  saved: boolean,
  onSave: () => void,
  disableSaveCta: boolean
}

const SaveCard: React.FunctionComponent<SaveCardProps> = (props) => {
  const { items, saved, onSave, disableSaveCta } = props
  return (
    <View style={styles.mainContainer}>
      <View style={styles.detailContainer}>
        {items.map(item => {
          return (
            <View key={item.title} style={styles.itemContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          )
        })}
      </View>
      <View style={styles.ctaContainer}>
        <Button
          title={saved ? 'Saved' : 'Save'}
          disabled={disableSaveCta || saved}
          onPress={onSave}
          buttonContainerStyle={saved ? { backgroundColor: Colors.green } : {}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 15,
    paddingHorizontal: '5%',
    backgroundColor: Colors.white,
    borderRadius: 5,
    elevation: 5
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  itemContainer: {
    width: '40%',
    paddingVertical: 10
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  value: {
    fontSize: 14
  },
  ctaContainer: {
    paddingVertical: 15
  }
})

export { SaveCard }
