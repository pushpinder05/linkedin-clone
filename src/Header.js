import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    };

    return (
        <div className="header">
             
            <div className="header__left">
                <img src="http://lofrev.net/wp-content/photos/2017/04/linkedin_logo.jpg" alt="LinkedIn Logo" />

                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={HomeIcon} title="Notification" />
                <HeaderOption avatar="http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/01/Latest-Peace-Whatsapp-Dp-Download-Pics.jpg" title="Me" onClick={logoutOfApp} />
            
             </div>

        </div>
    )
}

export default Header
