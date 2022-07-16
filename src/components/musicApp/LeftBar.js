import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import AudiotrackOutlinedIcon from '@mui/icons-material/AudiotrackOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';

function LeftBar({sidebarToggle}){
	return(
	<>
			<div className="grid-item leftSidebar">
			<SideBarLogo/ >
			<SideBarLinks sidebarToggle={sidebarToggle} />
			</div>
	</>
	);
}

function SideBarLogo(){
		{
	/*
		<div className="logoContainer">
		<img src="./images/music_images/icons/Logo.svg" alt="LeftBar Logo" />
	</div>
	*/	
	}
	return(
	<img src="./images/music_images/icons/Logo.svg" alt="LeftBar Logo" className="topLogo" />
	);
}

function SideBarLinks({sidebarToggle}){
	
	function openPlaylist(){
		//const sub_playlist = document.querySelector('.sub_playlist');
		const open_playlist = document.querySelector('.open_playlist');
		open_playlist.classList.toggle("active");
		//sub_playlist.classList.toggle("active");
	}
	
	return(
	<nav className="sideBarNav">
		<ul>
		{
			/*
			<li><a href="#" className="active"	><i className="fas fa-chart-bar"></i>Podcasts</a></li>
			<li><a href="#"><i className="fab fa-playstation"></i>Music Player</a></li>
			<li><a href="#"><i className="fab fa-discord"></i>Top Lists</a></li>
			<li><a href="#"><i className="fab fa-playstation"></i>Discover</a></li>
			<li><a href="#"><i className="fab fa-playstation"></i>Favourites</a></li>
			<li><a href="#"><i className="fab fa-playstation"></i>Messages</a></li>
			<li><a href="#"><i className="fab fa-playstation"></i>Playlists</a></li>
			
			*/
		}
		{
			/*
					<li onClick={sidebarToggle}><a href="#" className="active"><KeyboardVoiceOutlinedIcon /><span>Podcasts</span></a></li>
					<li onClick={sidebarToggle}><a href="#"><AudiotrackOutlinedIcon /><span>Music List</span></a></li>
					<li onClick={sidebarToggle}><a href="#"><StackedBarChartOutlinedIcon /><span>Top Lists</span></a></li>
					<li onClick={sidebarToggle}><a href="#"><EmojiEventsOutlinedIcon /><span>Discover</span></a></li>
					<li onClick={sidebarToggle}><a href="#"><FavoriteBorderOutlinedIcon /><span>Favourites</span></a></li>
					<li onClick={sidebarToggle}><a href="#"><ChatOutlinedIcon /><span>Messages</span></a></li>
					<li className="open_playlist" onClick={openPlaylist}>
					<a href="#" ><PlaylistAddOutlinedIcon /><span>Playlists </span><KeyboardVoiceOutlinedIcon /></a>
					<ul className="sub_playlist">
					<li><a href="#"><span>First List</span></a></li>
					<li><a href="#"><span>Second List</span></a></li>
					</ul>
					</li>
			
			*/
		}
		{
			/*
			<li onClick={sidebarToggle}><a href="#" className=""><img src="./images/music_images/icons/Podcasts Icon@2x.svg" /><span>Podcasts</span></a></li>
			<li onClick={sidebarToggle}><a href="#" className="active"><img src="./images/music_images/icons/Videos Icon (1).svg" /><span>Music</span></a></li>
			<li onClick={sidebarToggle}><a href="#"><img src="./images/music_images/icons/Top Lists Icon.svg" /><span>Top Lists</span></a></li>
			<li onClick={sidebarToggle}><a href="#"><img src="./images/music_images/icons/Discover Icon.svg" /><span>Discover</span></a></li>
			<li onClick={sidebarToggle}><a href="#"><img src="./images/music_images/icons/Favourites Icon.svg" /><span>Favourites</span></a></li>
			<li onClick={sidebarToggle}><a href="#"><img src="./images/music_images/icons/Messages Icon.svg" /><span>Messages</span></a></li>
			<li className="open_playlist" onClick={openPlaylist}>
			<a href="#" ><img src="./images/music_images/icons/Playlist Icon.svg" /><span>Playlists </span><img src="./images/music_images/icons/Add New Icon.svg" /></a>
			<ul className="sub_playlist">
			<li><a href="#"><span>First List</span></a></li>
			<li><a href="#"><span>Second List</span></a></li>
			</ul>
			</li>
			*/
		}
			<li onClick={sidebarToggle}><Link to="/"  className=""><img src="./images/music_images/icons/Podcasts Icon@2x.svg" /><span>Podcasts</span></Link></li>
			<li onClick={sidebarToggle}><Link to="/"  className="active"><img src="./images/music_images/icons/Videos Icon (1).svg" /><span>Music</span></Link></li>
			<li onClick={sidebarToggle}><Link to="/toplist" > <img src="./images/music_images/icons/Top Lists Icon.svg" /><span>Top Lists</span></Link></li>
			<li onClick={sidebarToggle}><Link to="/"  ><img src="./images/music_images/icons/Discover Icon.svg" /><span>Discover</span></Link></li>
			<li onClick={sidebarToggle}><Link to="/"  ><img src="./images/music_images/icons/Favourites Icon.svg" /><span>Favourites</span></Link></li>
			<li onClick={sidebarToggle}><Link to="/"  ><img src="./images/music_images/icons/Messages Icon.svg" /><span>Messages</span></Link></li>
			<li className="open_playlist" onClick={openPlaylist}>
			<Link to="/" ><img src="./images/music_images/icons/Playlist Icon.svg" /><span>Playlists </span><img src="./images/music_images/icons/Add New Icon.svg" /></Link>
			<ul className="sub_playlist">
			<li><Link to="/" ><span>First List</span></Link></li>
			<li><Link to="/" ><span>Second List</span></Link></li>
			</ul>
			</li>
		</ul>
	</nav>
	);
}


export default LeftBar;
