import React,{useState} from 'react'
import "../layout.css"
import{Link, useLocation} from 'react-router-dom'



const Layout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false)
    const location = useLocation() 
    const useMenu =[
        {
            name:'Home',
            path:"/",
            icon:'ri-home-4-line'
        },
        {
            name:'Appointments',
            path:"/appoinments",
            icon:'ri-file-list-line'
        },
        {
            name:'Apply Doctor',
            path:"/apply-doctor",
            icon:'ri-hospital-line'
        },
        {
            name:'Profile',
            path:"/profile",
            icon:'ri-user-line'
        },
        {
            name:'Logout',
            path:"/logout",
            icon:'ri-logout-box-line'
        }
        
    ];

    const menuToBeRendered = useMenu

    return (
        <div className='main p-8'>
            <div className='d-flex layout'>
                <div className='sidebar'>
                    <div className= 'sidebar-header' >
                        <h1>Sh</h1>
                    </div>
                    <div className='menu'>
                        {menuToBeRendered.map((menu) => {
                            const isactive = location.pathname===menu.path
                            return <div className={`d-flex menu-item ${isactive && 'active-menu-item'}`}>
                                <i class={menu.icon}></i>
                                {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                                
                            </div>
                        })}
                    </div>
                </div>
                <div className='content'>
                    <div className='header'>
                        {!collapsed ?  <i className ="ri-close-fill header-action-icons" onClick={()=>setCollapsed(!collapsed)}></i> :  <i className ="ri-menu-2-fill header-action-icons" onClick={()=>setCollapsed(!collapsed)}></i>}
                       
                    </div>
                    <div className='body'>{children}</div>

                </div>
            </div>
        </div>
    )
}

export default Layout