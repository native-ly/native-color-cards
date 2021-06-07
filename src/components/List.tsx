import React, { useCallback, useState } from 'react'
import { ScrollView, LayoutChangeEvent } from 'react-native'
import { AutoDragSortableView } from 'react-native-drag-sort'

import { ThemeProvider } from '../contexts/ThemeContext'
import { Variant } from '../types'
import { Card } from './Card'

type Item = {
  readonly key: number
  readonly title: string
  readonly subtitle: string
  readonly color: string
  readonly icon: string
  readonly flat: boolean
}

interface Props {
  readonly variant?: Variant
  readonly compact?: boolean
  readonly editable?: boolean
  readonly setEditable?: any
  readonly data: Item[]
  readonly columns: number // TODO rename
  readonly onReorder: (data: Item[]) => void // TODO
}

export const List = ({
  variant,
  compact,
  editable,
  setEditable,
  data,
  onReorder,
  columns = 2,
}: Props) => {
  const [wrapperWidth, setWarapperWidth] = useState(320)

  const handleSize = useCallback((e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout

    // setWarapperWidth(width);
  }, [])

  return (
    <ThemeProvider>
      <ScrollView onLayout={handleSize}>
        <AutoDragSortableView
          dataSource={data}
          parentWidth={wrapperWidth}
          childrenWidth={wrapperWidth / columns - 10}
          childrenHeight={80 - 20}
          marginChildrenBottom={10}
          marginChildrenRight={5}
          marginChildrenLeft={5}
          marginChildrenTop={10}
          onDataChange={onReorder}
          keyExtractor={(item) => item.key}
          sortable={editable}
          renderItem={(item) => (
            <Card {...item} onLongPress={() => setEditable(true)} />
          )}
        />
      </ScrollView>
    </ThemeProvider>
  )
}
