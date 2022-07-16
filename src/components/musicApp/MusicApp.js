import React,{useState,useEffect,useRef} from 'react';
import {Routes,Route} from 'react-router-dom';
import {artistsRecords,PopularArtist} from './AllData.js';
import './Music.css';
//import './Music_demo.css';

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseIcon from '@mui/icons-material/Pause';


//Container Bars   https://css-tricks.com/snippets/css/a-guide-to-flexbox/
import LeftBar from './LeftBar.js';
import MainBar from './MainBar.js';
import BottomBar,{PlayerControls} from './BottomBar.js';

let StartIndex = 0;
const TotalSongs = artistsRecords.length;


const Components = {
	PlayCircleOutlineIcon,
	PauseIcon,
}

	function sidebarToggle(){
		const SectionContainer = document.querySelector('.container');
		SectionContainer.classList.toggle('sidebar-active');
		/*if(isActive){
			SectionContainer.classList.remove('sidebar-active');
			return;
		}
		SectionContainer.classList.add('sidebar-active');*/
		
	}	
	
	function bottomToggle(){
		const bottomSection = document.querySelector('.bottomSection');
		bottomSection.classList.toggle('active');
	}



function MusicApp(){
		//const [SongIndex,setSongIndex] = useState(StartIndex);
		//const [songPlayPause,setSongPlayPause] = useState(true);
		//const [buttonIcon,setButtonIcon] = useState("PLAY");
		const [featureSelected,setFeatureSelected] = useState(0);
		const mainAudio = useRef(null);
		console.log(StartIndex);

		
	
		
	useEffect(()=>{	
	//console.log(CheckPlayNot);
		window.addEventListener("load",LoadMusic);
	},[]);
	
	function LoadMusic(){
		console.log(StartIndex);
		const ImageofSong = document.querySelector(".playerLogo img");
		const TitleofSong = document.querySelector(".playerLogo span");
		const {song,img,songName} = artistsRecords[StartIndex ]; 
		console.log(song);
		
		mainAudio.current.src = song;
		if(ImageofSong!=undefined){
			ImageofSong.src = img;
			TitleofSong.innerText = songName;
		}
		console.log(mainAudio.current.src);
	}
	
	function SongPlay(){
		const SectionContainer = document.querySelector('.container');
		let isPlaying = SectionContainer.classList.contains('playing');
		if(isPlaying){
			pauseSong();
			SectionContainer.classList.remove('playing');
			return;
		}
		playSong();
		SectionContainer.classList.add('playing');
	}	
	
	function playSong(){
		mainAudio.current.play();
	}
	
	function pauseSong(){
		mainAudio.current.pause();
	}
	


	
	
	function nextSong(){
		StartIndex  = StartIndex >= TotalSongs-1 ?  0 : StartIndex+1;
		LoadMusic();
		playSong();
	}
	
		function prevSong(){
		StartIndex  = StartIndex <= 0 ? TotalSongs-1  : StartIndex-1 ;
		LoadMusic();
		playSong();
	}  
	
	function SelctedMusic(artist){
		const SectionContainer = document.querySelector('.container');
		let isPlaying = SectionContainer.classList.contains('playing');
		const {id} = artist;
		setFeatureSelected(id);
		StartIndex = id-1;
		LoadMusic();
		SectionContainer.classList.add('playing');
		playSong();
	}
	
	
	
	async function TimeUpdateFunction(e){
		 let {duration,currentTime} = await e.target;
		 let Progress = document.querySelector('.Progress-Area .Progress');
		let startTime = document.querySelector('#startTime');
		let endTime = document.querySelector('#endTime');
		
			
		let TotalWidth = parseFloat((currentTime / duration) *100);
		Progress.style.width = `${TotalWidth}%` ;
		
		
		let currentTimeMin = beforeZeroAdded(Math.floor(currentTime / 60));
		let currentTimeSec = beforeZeroAdded(Math.floor(currentTime % 60));
		startTime.innerText = `${currentTimeMin}:${currentTimeSec}` ;		
		
		
		let durationMin =  beforeZeroAdded(Math.floor(duration / 60));
		let durationSec =   beforeZeroAdded(Math.floor(duration % 60));
		if(isNaN(duration)){
			endTime.innerText = `00:00` ; 
		}
		else{
			endTime.innerText = `${durationMin}:${durationSec}` ; 
		}
		
		if(currentTime  == duration){
			nextSong();
		}
	

		}
		

	function beforeZeroAdded(value){
		return value < 10 ? `0${value}` : value;
	}

	return(
	<>
		<section className="container " >
		{
			
			/*sidebar-active
		<button onClick={prevSong}>PREV</button>
		<button onClick={ SongPlaying }>{buttonIcon}</button>
		<button onClick={nextSong}>NEXT</button>
		<audio ref ={mainAudio} id="mainAudio" onTimeUpdate={TimeUpdateFunction} controls ></audio>
	
		
		<button onClick={prevSong}>PREV</button>
		<button onClick={ SongPlay}>Play</button>
		<button onClick={nextSong}>NEXT</button>
					*/
		}
		
		
			<audio ref ={mainAudio} id="mainAudio" onTimeUpdate={TimeUpdateFunction} ></audio>
			<LeftBar sidebarToggle={sidebarToggle} />	
			<MainBar mainAudio={mainAudio} SelctedMusic={SelctedMusic} sidebarToggle={sidebarToggle} />	
			<BottomBar 
				mainAudio={mainAudio} 
				SongPlay={SongPlay} 
				playSong={playSong}
				pauseSong={pauseSong} 
				nextSong={nextSong} 
				prevSong={prevSong}
				bottomToggle={bottomToggle}
				/>	
				
			{
				//<BottomBar mainAudio={mainAudio} SongPlay={SongPlay} nextSong={nextSong} prevSong={prevSong} />	
			}
				
		</section>
	</>
	);
}



export default MusicApp;
