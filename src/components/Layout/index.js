import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags body top-tags-body">&lt;body&gt;</span>
        <br />
        <span className="tags top-tags-html">&lt;html&gt;</span>

        <Outlet />
          <span className="tags bottom-tag-html">&lt;/html&gt;</span> 
        <br />
        <span className="tags body bottom-tags-body">&lt;/body&gt;</span>
      
       </div>
    </div>
  )
}

export default Layout
