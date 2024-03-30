import React from 'react'
import 
{ BsGrid1X2Fill, BsMenuButtonWideFill}
 from 'react-icons/bs'
 import { FaUserMd, FaUser, FaGraduationCap, FaCheck, FaFileMedical} from 'react-icons/fa';
 import { BiCalendarEvent } from 'react-icons/bi';
 

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <FaUserMd className='icon_header'/> AFRIMED
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BiCalendarEvent  className='icon'/> Appointments
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaUser className='icon'/> Patient Details
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaGraduationCap className='icon'/> Education & Resources
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaCheck className='icon'/> Gamification
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/>Medical Lab Reports
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar