import { HomeIcon } from '../icons/home-icon.jsx'
import { BreadCrumb, BreadCrumbItem } from './bread-crumb.jsx'

const meta = {
  component: BreadCrumb,
  args: {},
}

export default meta

export const Default = {
  render: () => (
    <>
      <BreadCrumb onClick={(path) => console.log('clicked', path)}>
        <BreadCrumbItem path="/">
          <HomeIcon className="w-3 h-3 mr-2" />
          Home
        </BreadCrumbItem>
        <BreadCrumbItem path="/projects">Projects</BreadCrumbItem>
        <BreadCrumbItem path="/projects/project_1">Project 1</BreadCrumbItem>
      </BreadCrumb>
    </>
  ),
}
