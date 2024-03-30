import React from 'react'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill,BsFillGrid3X3GapFill, BsPeopleFill,
BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'


const Sidebar = () => {
  return (
    <aside id='sidebar'>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3 className='icon-header' />  Dashboard
            </div>
            <span className='icon close_icon'>X</span>
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    < BsGrid1X2Fill className='icon' />Patient Details
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    < BsFillArchiveFill className='icon' /> Medical Records
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon' /> Appointments
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon' /> Lab Results
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon' />Education & Resources
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon' /> Gamification
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    < BsFillGearFill className='icon' /> Settings
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
