import React from 'react';
import { ethers } from 'ethers';
import './App.css';

export default function App() {
	const wave = () => {};

	return (
		<div className='mainContainer'>
			<div className='dataContainer'>
				<div className='header'>Hello, there!</div>

				<div className='bio'>
					Aqui vai sua descrição e pq vc deve receber um tchauzinho. Ou uma
					música. Ou qualquer coisa que vc queira receber
				</div>

				<button className='waveButton' onClick={wave}>
					Mandar Tchauzinho 👋
				</button>
			</div>
		</div>
	);
}
