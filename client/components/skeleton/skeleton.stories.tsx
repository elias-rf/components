import { JsonView } from '@/client/components/json-view/json-view.js'
import type { Meta, StoryObj } from '@storybook/react'
import { ptBR } from 'date-fns/locale'
import React from 'react'
import { Skeleton } from './skeleton.js'

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: (props) => {
    return (
      <>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </>
    )
  },
}
