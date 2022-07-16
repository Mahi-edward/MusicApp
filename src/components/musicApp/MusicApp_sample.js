import React,{useState,useEffect,useRef} from 'react';
import {artistsRecords,PopularArtist} from './AllData.js';
import './Music.css';


//Container Bars   https://css-tricks.com/snippets/css/a-guide-to-flexbox/
import LeftBar from './LeftBar.js';
import MainBar from './MainBar.js';
import BottomBar from './BottomBar.js';

const StartIndex = 0;
const TotalSongs = artistsRecords.length;
const ImageofSong = document.querySelector(".playerLogo img");



function MusicApp(){
		const [SongIndex,setSongIndex] = useState(0);
		const [songPlayPause,setSongPlayPause] = useState(true);
		const [buttonIcon,setButtonIcon] = useState("PLAY");
		const mainAudio = useRef(null);
		
		
	useEffect(()=>{	
	//console.log(ImageofSong);
	console.log(SongIndex);
		const Song = artistsRecords[SongIndex ].song; 
		const songImage = artistsRecords[SongIndex ].img; 
		console.log(Song);  
		LoadSong(Song,songImage);	
		SongPlaying();
	},[SongIndex]);
	
	function LoadSong(Song,songImage){
			mainAudio.current.src = Song;
			if(ImageofSong!=undefined){
				ImageofSong.src = songImage;
			}
			//console.log(ImageofSong);
	}
	
	function SongPlaying(){
		console.log("hi");
		if(songPlayPause){
			mainAudio.current.play();
			setSongPlayPause((prevalue)=>!prevalue);
			setButtonIcon("PAUSE");
			return;
		} 
		mainAudio.current.pause();
		setButtonIcon("PLAY");
		setSongPlayPause((prevalue)=>!prevalue);
	}	
	
	function nextSong(){
		setSongIndex((preValue)=>preValue >= TotalSongs-1 ?  StartIndex : preValue+1 );  
		setSongPlayPause(true);
	}
	
		function prevSong(){
		setSongIndex((preValue)=> preValue <= 0  ? TotalSongs-1 : preValue-1);
		console.log(SongIndex);
		setSongPlayPause(true);
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
			/*
			sidebar-active
		<button onClick={prevSong}>PREV</button>
		<button onClick={ SongPlaying }>{buttonIcon}</button>
		<button onClick={nextSong}>NEXT</button>
		<audio ref ={mainAudio} id="mainAudio" onTimeUpdate={TimeUpdateFunction} controls ></audio>
		*/
		}
		
			<audio ref ={mainAudio} id="mainAudio" onTimeUpdate={TimeUpdateFunction} ></audio>
			<LeftBar />	
			<MainBar />	
			<BottomBar mainAudio={mainAudio} SongPlaying={SongPlaying} nextSong={nextSong} prevSong={prevSong} />		
		</section>
	</>
	);
}

export default MusicApp;
