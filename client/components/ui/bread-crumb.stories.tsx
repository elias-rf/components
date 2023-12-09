import { HomeIcon } from '@/client/components/icons/home-icon.js'
import { BreadCrumb } from '@/client/components/ui/bread-crumb.js'
import '@/client/index.css'
import type { Story } from '@ladle/react'

export default {
  title: 'components / ui / Bread Crumb',
}

export const Default: Story = () => {
  return (
    <>
      <BreadCrumb onClick={(path: string) => console.log('clicked', path)}>
        <BreadCrumb.Item path="/">
          <HomeIcon className="w-3 h-3 mr-2" />
          Home
        </BreadCrumb.Item>
        <BreadCrumb.Item path="/projects">Projects</BreadCrumb.Item>
        <BreadCrumb.Item path="/projects/project_1">Project 1</BreadCrumb.Item>
      </BreadCrumb>
    </>
  )
}
