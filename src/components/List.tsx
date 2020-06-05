import React, { useContext } from 'react'
import { Dimensions, ScrollView, FlatListProps } from 'react-native'
import DragSortableView from 'react-native-drag-sort/DragSortableView'

import { ListContext } from '../context'

export const List: React.FC<FlatListProps<any>> = ({
  renderItem,
  ...props
}) => {
  const { data } = useContext(ListContext)

  const { width } = Dimensions.get('window')

  return (
    <ScrollView
      scrollEnabled={true}
      contentContainerStyle={{ paddingLeft: 12, paddingVertical: 12 }}
    >
      <DragSortableView
        // {...props}
        dataSource={data}
        parentWidth={width}
        childrenHeight={124}
        childrenWidth={width / 2 - 8}
        renderItem={renderItem}
      />
    </ScrollView>
  )
}
