import { HomeIcon } from '../icons/home-icon.jsx'
import { BreadCrumb } from './bread-crumb.jsx'

const meta = {
  component: BreadCrumb,
  args: {},
}

export default meta

export const Default = {
  render: () => (
    <>
      <BreadCrumb onClick={(path) => console.log('clicked', path)}>
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
