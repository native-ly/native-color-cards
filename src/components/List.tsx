import React, { useContext } from 'react'
import { Dimensions, ScrollView } from 'react-native'
import DragSortableView from 'react-native-drag-sort/DragSortableView'

import { ListContext } from '../context'

export const List = ({ renderItem, ...props }: any) => {
  const { data } = useContext(ListContext)

  const { width } = Dimensions.get('window')

  return (
    <ScrollView scrollEnabled={true}>
      <DragSortableView
        // {...props}
        dataSource={data}
        parentWidth={width}
        childrenHeight={114}
        childrenWidth={width / 2}
        renderItem={renderItem}
      />
    </ScrollView>
  )
}
