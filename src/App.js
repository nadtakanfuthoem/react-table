import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createTable } from '../src/util/helper';
import './App.css';

function App() {

	// init golbal variables
	const [rn, setRn] = useState(
		localStorage.getItem('rn') || 0
	);
	const [rx, setRx] = useState( 
		localStorage.getItem('rx') || 0
	);
	const [rm, setRm] = useState( 
		localStorage.getItem('rm') || 0
	);
	const [rw, setRw] = useState(
		localStorage.getItem('rw') || 0
	);
	const [rd, setRd] = useState(
		localStorage.getItem('rd') || 'LTR-UP'); // set default LTR-UP
	const [showRedDiv, setShowRedDiv] = useState(true);

	// green
	const [gn, setGn] = useState(
		localStorage.getItem('gn') || 0
	);
	const [gx, setGx] = useState( 
		localStorage.getItem('gx') || 0
	);
	const [gm, setGm] = useState( 
		localStorage.getItem('gm') || 0
	);
	const [gw, setGw] = useState(
		localStorage.getItem('gw') || 0
	);
	const [gd, setGd] = useState(
		localStorage.getItem('gd') || 'LTR-UP'); // set default LTR-UP

	// blue
	const [bn, setBn] = useState(
		localStorage.getItem('bn') || 0
	);
	const [bx, setBx] = useState( 
		localStorage.getItem('bx') || 0
	);
	const [bm, setBm] = useState( 
		localStorage.getItem('bm') || 0
	);
	const [bw, setBw] = useState(
		localStorage.getItem('bw') || 0
	);
	const [bd, setBd] = useState(
		localStorage.getItem('bd') || 'LTR-UP'); // set default LTR-UP
	
	// reload variable when changes has been made.
	useEffect(() => {
		async function onload() {
			// red
			localStorage.setItem('rn', rn);
			localStorage.setItem('rx', rx);
			localStorage.setItem('rm', rm);
			localStorage.setItem('rw', rw);
			localStorage.setItem('rd', rd);

			// green
			localStorage.setItem('gn', gn);
			localStorage.setItem('gx', gx);
			localStorage.setItem('gm', gm);
			localStorage.setItem('gw', gw);
			localStorage.setItem('gd', gd);

			// blue
			localStorage.setItem('bn', bn);
			localStorage.setItem('bx', bx);
			localStorage.setItem('bm', bm);
			localStorage.setItem('bw', bw);
			localStorage.setItem('bd', bd);

			let redTb = await createTable(rn, rx, rm, rw, rd);
			ReactDOM.render(
				<table>
					{redTb}
				</table>
				,
				document.getElementById('tb-red')
			);

			let greenTb = await createTable(gn, gx, gm, gw, gd);
			ReactDOM.render(
				<table>
					{greenTb}
				</table>
				,
				document.getElementById('tb-green')
			);

			let blueTb = await createTable(bn, bx, bm, bw, bd);
			ReactDOM.render(
				<table>
					{blueTb}
				</table>
				,
				document.getElementById('tb-blue')
			);
		}

		onload();
	}, [rn, rx, rm, rw, rd, gn, gx, gm, gw, gd, bn, bx, bm, bw, bd]);

	// rendering red table
	async function renderRed(event) {
		event.preventDefault();
		
		let table = await createTable(rn, rx, rm, rd);
		
		ReactDOM.render(
			<table>
				{table}
			</table>
			,
			document.getElementById('tb-red')
		);

	}

	// rendering green table
	async function renderGreen(event) {
		event.preventDefault();
		
		let table = await createTable(gn, gx, gm, gd);
		
		ReactDOM.render(
			<table>
				{table}
			</table>
			,
			document.getElementById('tb-green')
		);
	}

	// rendering blue table
	async function renderBlue(event) {
		event.preventDefault();
		
		let table = await createTable(bn, bx, bm, bd);
		
		ReactDOM.render(
			<table>
				{table}
			</table>
			,
			document.getElementById('tb-blue')
		);
	}

  return (
    <div className="App">
			<div id="box-red" className="left">

				<div id="tb-red"></div>
					<table id="config-red">
					<tbody>
						<tr>
							<td colSpan="5" align="left">
								<button type="button">Configure</button>
							</td>
							<td align="right">0%</td>
						</tr>
					</tbody>
				</table>

				<table id="configtb-red">
					<tbody>
						<tr>
							<td>Table: </td>
							<td colSpan="4" align="left"><font color="red">RED</font></td>
						</tr>
						<tr>
							<td>N = </td>
							<td colSpan="4" align="left">
								<input type="number" value={rn} onChange={event => setRn(event.target.value)}></input>
							</td>
						</tr>
						<tr>
							<td>X = </td>
							<td colSpan="4" align="left">
								<input type="number" value={rx} onChange={event => setRx(event.target.value)}></input>
							</td>
						</tr>
						<tr>
							<td>M = </td>
							<td colSpan="4" align="left">
								<input type="number" value={rm} onChange={event => setRm(event.target.value)}></input>
							</td>
						</tr>
						<tr>
							<td>W = </td>
							<td colSpan="4" align="left">
								<input type="number" value={rw} onChange={event => setRw(event.target.value)}></input>
							%</td>
						</tr>
						<tr>
							<td>D = </td>
							<td colSpan="4" align="left">
								<select value={rd} onChange={event => setRd(event.target.value)}>
									<option value="LTR-UP">LTR-UP</option>
									<option value="RTL-UP">RTL-UP</option>
								</select>
							</td>
						</tr>
						<tr>
							<td colSpan="5">
								<button onClick={renderRed}>OK</button>
								<button >CANCEL</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div id="box-green" className="left">
				<div id="tb-green"></div>
					<table id="config-green">
					<tbody>
						<tr>
							<td colSpan="5" align="left">
								<button type="button">Configure</button>
							</td>
							<td align="right">0%</td>
						</tr>
					</tbody>
				</table>
				<table id="configtb-green">
					<tbody>
						<tr>
							<td>Table: </td>
							<td colSpan="4" align="left"><font color="green">GREEN</font></td>
						</tr>
						<tr>
							<td>N = </td>
							<td colSpan="4" align="left">
								<input type="number" value={gn} onChange={event => setGn(event.target.value)}></input>
							</td>
						</tr>
						<tr>
							<td>X = </td>
							<td colSpan="4" align="left">
								<input type="number" value={gx} onChange={event => setGx(event.target.value)}></input>
							</td>
						</tr>
						<tr>
							<td>M = </td>
							<td colSpan="4" align="left">
								<input type="number" value={gm} onChange={event => setGm(event.target.value)}></input>
							</td>
						</tr>
						<tr>
							<td>W = </td>
							<td colSpan="4" align="left">
								<input type="number" value={gw} onChange={event => setGw(event.target.value)}></input>
							%</td>
						</tr>
						<tr>
							<td>D = </td>
							<td colSpan="4" align="left">
								<select value={gd} onChange={event => setGd(event.target.value)}>
									<option value="LTR-UP">LTR-UP</option>
									<option value="RTL-UP">RTL-UP</option>
								</select>
							</td>
						</tr>
						<tr>
							<td colSpan="5">
								<button onClick={renderGreen}>OK</button>
								<button >CANCEL</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div id="box-blue" className="left">
				<div id="tb-blue"></div>
					<table id="config-blue">
					<tbody>
						<tr>
							<td colSpan="5" align="left">
								<button type="button">Configure</button>
							</td>
							<td align="right">0%</td>
						</tr>
					</tbody>
				</table>
				<table id="configtb-blue">
					<tbody>
						<tr>
							<td>Table: </td>
							<td colSpan="4" align="left"><font color="blue">BLUE</font></td>
						</tr>
						<tr>
							<td>N = </td>
							<td colSpan="4" align="left">
								<input type="number" value={bn} onChange={event => setBn(event.target.value)}></input>
							</td>
						</tr>
						<tr>
							<td>X = </td>
							<td colSpan="4" align="left">
								<input type="number" value={bx} onChange={event => setBx(event.target.value)}></input>
							</td>
						</tr>
						<tr>
							<td>M = </td>
							<td colSpan="4" align="left">
								<input type="number" value={bm} onChange={event => setBm(event.target.value)}></input>
							</td>
						</tr>
						<tr>
							<td>W = </td>
							<td colSpan="4" align="left">
								<input type="number" value={bw} onChange={event => setBw(event.target.value)}></input>
							%</td>
						</tr>
						<tr>
							<td>D = </td>
							<td colSpan="4" align="left">
								<select value={bd} onChange={event => setBd(event.target.value)}>
									<option value="LTR-UP">LTR-UP</option>
									<option value="RTL-UP">RTL-UP</option>
								</select>
							</td>
						</tr>
						<tr>
							<td colSpan="5">
								<button onClick={renderBlue}>OK</button>
								<button >CANCEL</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
    </div>
  );
}

export default App;
