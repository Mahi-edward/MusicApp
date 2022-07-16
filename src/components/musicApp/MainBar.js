import React,{useState,useEffect,useRef} from 'react';
import {Routes,Route} from 'react-router-dom';
import {artistsRecords,PopularArtist} from './AllData.js';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const usersArray = [1,2,3,4,5];
//console.log(artistsRecords);

function MainBar({mainAudio,SelctedMusic,sidebarToggle}){
	const [artists,setArtists] = useState(artistsRecords);
	const [popular,setPopular] = useState(PopularArtist);
	
	function songSearchingSorting(event){
		const SearchValue =  event.target.value ;
		if(SearchValue!=""){
			//artistsRecords
			const SerachedArtist  = artistsRecords.filter((artist)=>{
				return artist.songName.toLowerCase().includes(SearchValue.toLowerCase());
			})
			if(SerachedArtist.length>0){
				setArtists(SerachedArtist);
				return;
			}
			setArtists([]);
			return;
		}
		setArtists(artistsRecords);
	}	
	

	
	return(
			<div className="grid-item mainSection">
			<div className="left-hamburger" onClick={sidebarToggle}><MenuOutlinedIcon/></div>
				<SearchBar songSearchingSorting={songSearchingSorting} />
				<div className="main-container sub-item">
				<Routes>
					<Route path="/" element={<Featured artists={artists} SelctedMusic ={SelctedMusic} / >}></Route>
					<Route path="/toplist" element={<Toplist artists={artists} SelctedMusic ={SelctedMusic} / >}></Route>
				</Routes>
		
				{/*<Featured artists={artists} SelctedMusic ={SelctedMusic} / >*/}
					<Artists popular={popular} />
				</div>
			</div>
	);
}

function SearchBar({songSearchingSorting}){
	return(
		<div className="topSearchBox">
			<div className="searchBox">
				<i className="fas fa-search"></i>
				<input type="text" name="" placeholder="Search Music" onKeyUp={songSearchingSorting} />
			</div>
			<div className="links">
				<a href="#"><i className="fas fa-cog"></i></a>
				<a href="#"><i className="fas fa-bell"></i></a>
			</div>
		</div>
	);
}

function Featured({artists,SelctedMusic}){
	//const [artistsCount,setArtistsCount] = useState(3);
	//let Sliceartist = artists.slice(0,artistsCount);
	let Sliceartist = artists;
	
	/*function showMoreArtists(){
		setArtistsCount((prevalue)=>prevalue + 3);
		console.log(artistsCount);
	}*/
	return(
	<>
		<div className="featureBox">
			<div className="header">
				<h4>Featured Music</h4>
				<a ><i className="fas fa-ellipsis-h"></i></a>
			</div>
			<div className="TotalSongBox">
			{
				Sliceartist.length>0 ? Sliceartist.map((artist,index)=>{
						return <SongBox key={index} artist={artist} SelctedMusic={SelctedMusic} /> ;
				}) : <h3>No Songs Found!!!</h3>
			}
		</div>
		</div>
		</>
	);
}

function Toplist({artists,SelctedMusic}){
	let Sliceartist = artists.filter((artist)=>{
		return artist.year>2000;
	});
	console.log(Sliceartist);
	return(
	<>
		<div className="featureBox">
			<div className="header">
				<h4>Toplist Music</h4>
				<a ><i className="fas fa-ellipsis-h"></i></a>
			</div>
			<div className="TotalSongBox">
			{
				Sliceartist.length>0 ? Sliceartist.map((artist,index)=>{
						return <SongBox key={index} artist={artist} SelctedMusic={SelctedMusic} /> ;
				}) : <h3>No Songs Found!!!</h3>
			}
		</div>
		</div>
		</>
	);
}


function Home(){
	return(
		<h1>Home</h1>
	);
}

function Music(){
	return(
		<h1>Music</h1>
	);
}

function SongBox({artist,SelctedMusic}){

	const {name,img,songName,album,year,time}  = artist;
	return(
			<div className="songsBox" onClick={()=>SelctedMusic(artist)}>
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
	const [popularCount,setPopularCount] = useState(3);
	//console.log(popular);
	let PopularArt = popular.slice(0,popularCount);
	
	function showMorePopular(){
		setPopularCount((prevalue)=>prevalue + 3);
		console.log(popularCount);
	}
	

	return(
		<div className="artistSection">
			<div className="header">
				<h4>Popular Artist</h4>
				<a href="#" onClick={showMorePopular}>show more</a>
			</div>
			<div className="users-container">
			{
				PopularArt&&PopularArt.map((user,index)=>{
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
