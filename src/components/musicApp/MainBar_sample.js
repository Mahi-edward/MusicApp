import React,{useState,useEffect,useRef,useContext} from 'react';
import {artistsRecords,PopularArtist} from './AllData.js';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const usersArray = [1,2,3,4,5];

function MainBar(){
	const [artists,setArtists] = useState(artistsRecords);
	const [popular,setPopular] = useState(PopularArtist);
	
	function sidebarToggle(e){
		const SectionContainer = document.querySelector('.container');
		//SectionContainer.classList.add('sidebar-active');
		let isActive = SectionContainer.classList.contains('sidebar-active');
		if(isActive){
			SectionContainer.classList.remove('sidebar-active');
			return;
		}
		SectionContainer.classList.add('sidebar-active');
		
	}
	
	return(
			<div className="mainSection">
			<div className="left-hamburger" onClick={sidebarToggle}><MenuOutlinedIcon/></div>
				<SearchBar />
				<Featured artists={artists}/ >
				<Artists popular={popular} />
			</div>
	);
}

function SearchBar(){
	return(
		<div className="topSearchBox">
			<div className="searchBox">
				<i className="fas fa-search"></i>
				<input type="text" name="" placeholder="Search Music" />
			</div>
			<div className="links">
				<a href="#"><i className="fas fa-cog"></i></a>
				<a href="#"><i className="fas fa-bell"></i></a>
			</div>
		</div>
	);
}

function Featured({artists}){
	return(
		<div className="featureBox">
			<div className="header">
				<h4>Featured Music</h4>
				<a><i className="fas fa-ellipsis-h"></i></a>
			</div>
			<div className="TotalSongBox">
			{
				artists&&artists.map((artist,index)=>{
					return <SongBox key={index} artist={artist} /> ;
				})
			}
		</div>
		</div>
	);
}

function SongBox({artist}){
	
	function SelctedMusic(){
		
	}
	
	const {name,img,songName,album,year,time}  = artist;
	return(
			<div className="songsBox" onClick={SelctedMusic}>
				<div className="img-container" >
				{
					//<img src="./images/music_images/feature/three.jpg" alt="userImages" /> 
				}
				<img src={img} alt="userImages" />
					<span id="time">{time}</span>
				</div>
				<div className="description">
					<h5 id="songName">{songName}</h5>
					<span id="songYear">{album},{year}</span>
				</div>
			</div>
	);
}



function Artists({popular}){
	return(
		<div className="artistSection">
			<div className="header">
				<h4>Popular Artist</h4>
				<a href="#">show more</a>
			</div>
			<div className="users-container">
			{
				popular&&popular.map((user,index)=>{
					return <Users key={index} user={user} /> ;
				})
			}
		</div>
		</div>
	);
}



function Users({user}){
	const {name,img,followers} = user;
	return(
	<div className="users">
	<img src={user.img} alt="ArtistImage" />
		<div>
		<h5>{name}</h5>
		<span>{followers}</span>
		</div>
		<a href="#"><i className="fas fa-ellipsis-h"></i></a>
	</div>
	);
}


export default MainBar;
