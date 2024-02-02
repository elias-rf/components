import { BreadCrumb } from '@/client/components/bread-crumb/bread-crumb.js'
import { HomeIcon } from '@/client/components/icons/home-icon.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof BreadCrumb> = {
  component: BreadCrumb,
  args: {},
}

export default meta
type Story = StoryObj<typeof BreadCrumb>

export const Default: Story = {
  render: () => (
    <>
      <BreadCrumb onClick={(path: string) => console.log('clicked', path)}>
        <BreadCrumb.Item path="/">
          <HomeIcon className="mr-2 h-3 w-3" />
          Home
        </BreadCrumb.Item>
        <BreadCrumb.Item path="/projects">Projects</BreadCrumb.Item>
        <BreadCrumb.Item path="/projects/project_1">Project 1</BreadCrumb.Item>
      </BreadCrumb>
    </>
  ),
}
