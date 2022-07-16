import React,{useState,useEffect,useRef} from 'react';
//import {artistsRecords,PopularArtist} from './AllData.js';
import './Music_demo.css';

	function MusicApp_demo(){
		return(
					<section class="grid-container active">
						<div class="grid-item sidebar">Sidebar</div>
						<div class="grid-item main">
							<div class="search-header sub-item">Search Header</div>
							<div class="main-container sub-item">
								<div class="sub2-item feature">Feature</div>
								<div class="sub2-item popular">Popular</div>
							</div>
						</div>
						<div class="grid-item footer">Footer</div>
					</section>
		);
	}

export default MusicApp_demo;


