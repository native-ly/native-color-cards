import React, { useContext } from 'react'
import { Dimensions, ScrollView, FlatListProps, StyleSheet } from 'react-native'
import DragSortableView from 'react-native-drag-sort/DragSortableView'

import { ListContext } from '../context'

// TODO
export const List: React.FC<FlatListProps<DragSortableView>> = ({
  renderItem,
  ...props // TODO
}) => {
  // TODO add checking
  const { data } = useContext(ListContext)

  const { width } = Dimensions.get('window') // TODO replace with hook

  return (
    <ScrollView scrollEnabled contentContainerStyle={styles.x}>
      <DragSortableView
        {...props} // TODO
        dataSource={data}
        parentWidth={width}
        childrenHeight={124}
        childrenWidth={width / 2 - 8}
        renderItem={renderItem}
      />
    </ScrollView>
  )
}

// TODO
const styles = StyleSheet.create({
  x: {
    paddingLeft: 12,
    paddingVertical: 12,
  },
})
