import React from 'react'
import { ScrollView } from 'react-native'
import { DragSortableView } from 'react-native-drag-sort'

import { StoreProvider } from '../contexts/StoreContext'
import { ThemeProvider } from '../contexts/ThemeContext'

interface Props {
  compact?: boolean
}

export const List = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <ScrollView scrollEnabled contentContainerStyle={null}>
          {/* <DragSortableView {...props} renderItem={renderItem} /> */}
        </ScrollView>
      </ThemeProvider>
    </StoreProvider>
  )
}
