import React,{useState,useEffect} from 'react';

//Repeat,Shuffle
import RepeatIcon from '@mui/icons-material/Repeat';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import ShuffleIcon from '@mui/icons-material/Shuffle';


//Play,Pause,Next,Prev
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

//Playlist - Remove,Add
import PlaylistRemoveOutlinedIcon from '@mui/icons-material/PlaylistRemoveOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';


import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import KeyboardfArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardfArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Components = {
	RepeatIcon,
	RepeatOneIcon,
	ShuffleIcon
}

/*

	let playPauseIcon = false;	
	
	 export function CheckPlayNot(){
		const SectionContainer = document.querySelector('.container');
		let isPlaying = SectionContainer.classList.contains('playing');
		console.log(isPlaying);
		if(isPlaying){
			playPauseIcon  = false;
			return;
		}
		playPauseIcon = true;
	}
	*/

/*export let playPauseIcon = false;	


export function ChangeIcon(){
	playPauseIcon = !playPauseIcon;
	console.log(playPauseIcon);
}
*/


//let mainAudio = document.querySelector('#mainAudio');	

function BottomBar({mainAudio,SongPlay,playSong,pauseSong,nextSong,prevSong,bottomToggle}){
	const [listOpen,setListOpen] = useState(false);
	console.log(listOpen);
		
	return(
			<div className="grid-item bottomSection">
			<div className="updownSong"  onClick={()=>{bottomToggle();setListOpen(!listOpen);}}>
				{ listOpen ? <KeyboardfArrowDownIcon />  : <KeyboardfArrowUpIcon /> }
			</div>
				<PlayerLog />
				
				<PlayerControls 
					mainAudio={mainAudio} 
					SongPlay={SongPlay} 
					playSong={playSong}
					pauseSong={pauseSong}
					nextSong={nextSong} 
					prevSong={prevSong}  />
					
				<PlayerProgress mainAudio={mainAudio} />
				<PlayerListOut mainAudio={mainAudio} />
				
			</div>
	);
}

function PlayerLog(){
	return(
		<div className="playerLogo">
		<a><img src="./images/music_images/logo-1.png" alt="Player Logo" /></a>
			<span></span>
		</div>
	);
}

export function PlayerControls({mainAudio,SongPlay,playSong,pauseSong,nextSong,prevSong}){
	const [playPauseIcon,setPlayPauseIcon] = useState(false);
	
	useEffect(()=>{	
		window.addEventListener("loadeddata",console.log("Bottom Called!!!"));
		CheckPlayNot();
	});
	
	//console.log(playPauseIcon);
	  function CheckPlayNot(){
		const isPaused = mainAudio.current.paused;
		console.log(isPaused);
		if(isPaused){
			setPlayPauseIcon(false);
			return;
		}
		setPlayPauseIcon(true);
	}
	



	return(
		<div className="playerControl">
			<a href="#" onClick={prevSong} ><SkipPreviousIcon/></a>

			<a href="#" onClick={()=>{SongPlay();CheckPlayNot();}}  className="PlayPauseIcon">
				{
					//Audio!=null ? ( Audio.paused ? <PlayCircleOutlineIcon/> :  <PauseIcon/>) : ""
					playPauseIcon ?   <PauseIcon/> :  <PlayCircleOutlineIcon/>
				}
				
			</a>
		
			<a href="#" onClick={nextSong} ><SkipNextIcon/></a>
		</div>
	);
}

function PlayerProgress({mainAudio}){
		
		function ProgressClick(event){
			const ProgressAreaWidth = event.target.clientWidth;
			const ProgressClicked = event.nativeEvent.offsetX;
			const duration =mainAudio.current.duration;
			
			let CurrentPlaying = (ProgressClicked / ProgressAreaWidth) * duration;
			//console.log(TotalWidth); 
			mainAudio.current.currentTime = CurrentPlaying  ;
			
		}
		
		
	return(
		<div className="playerProgress">
			<span id="startTime">00.00</span>
				<div className="Progress-Area" onClick = {ProgressClick} >
				<div  className="Progress"></div>
				</div>
			<span id="endTime">00.00</span>
		</div>
	);
}

function PlayerListOut({mainAudio}){
	
	const [CurrentIconValue,setCurrentIconValue] = useState("RepeatIcon");
	
	function SongPlayType(e){
		let CurrentIcon =  e.target.attributes[4].value;
		const AudioMain = mainAudio.current;
		
		switch(CurrentIcon){
			case "RepeatIcon" :{
				setCurrentIconValue("RepeatOneIcon");
				AudioMain.loop=true;
				//console.log(mainAudio);
				break;
			}			
			case "RepeatOneIcon" :{
				setCurrentIconValue("ShuffleIcon");
				break;
			}			
			case "ShuffleIcon" :{
				setCurrentIconValue("RepeatIcon");
				break;
			}
			default:{
				setCurrentIconValue("RepeatIcon");
				break;
			}
		}
		
	}
	
	let Component = Components[CurrentIconValue];
	
	return(
		<div className="playerListout">
		{
			/*<a href="#"><i className="fas fa-redo"></i></a>
			<a href="#"><i className="fas fa-random"></i></a>
			<a href="#"><i className="fas fa-volume-up"></i></a>*/
		}
		<a href="#" title="Repeat" onClick={SongPlayType}><Component/></a>
		<a href="#" title="Repeat" onClick={SongPlayType}><Component/></a>
		<a href="#" title="Repeat" onClick={SongPlayType}><Component/></a>
		
		</div>
	);
}


export default BottomBar;
