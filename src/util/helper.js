import React from 'react';

export function createTable(n, x, m, d){
	let table = [];
		// create array
		let newArr = [];
		let newArrVal = [];

		if(parseInt(n) > 0 && parseInt(x) > 0 && parseInt(m) > 0) {

			console.log(d);
			
			if(d === '0' ){
				d = 'LTR-UP';
			} else {
				d = 'RTL-UP';
			}
			
			console.log(typeof d);
			console.log(`d => ${d}`);
			
			for(let j = parseInt(n) ; j <= parseInt(m) ; ) {
				newArr.push(j);
				j = j + parseInt(x);
			}
	
			let index = 0;
			for(let i = 0 ; i < newArr.length ; i++){
				if(i%5 === 0){
					index = index + 5;
					if(d === 'LTR-UP'){
						if(i%2 === 0){
							newArrVal.push(newArr.slice(i,index));
						} else {
							newArrVal.push(newArr.slice(i,index).reverse());
						}
					} else {
						if(i%2 === 0){
							newArrVal.push(newArr.slice(i,index).reverse());
						} else {
							newArrVal.push(newArr.slice(i,index));
						}
					}
				}
			}
	
			// adding 0 to array length < 5
			for(let i = 0 ; i < newArrVal.length ; i++) {
				if(d === 'LTR-UP') {
					if(newArrVal[i].length < 5 && i%2 === 0) {
						for(let j = newArrVal[i].length ; j < 5 ; j++){
							newArrVal[i].push(0);
						}
					} else {
						for(let j = newArrVal[i].length ; j < 5 ; j++){
							newArrVal[i].unshift(0);
						}
					}
				} else {
					if(newArrVal[i].length < 5 && i%2 === 1) {
						for(let j = newArrVal[i].length ; j < 5 ; j++){
							newArrVal[i].push(0);
						}
					} else {
						for(let j = newArrVal[i].length ; j < 5 ; j++){
							newArrVal[i].unshift(0);
						}
					}
				}
			}
	
			// reverse array
			newArrVal.reverse();
			console.log(newArrVal);
	
			// adding 0 to array if length < 5
			for (let i = 0; i < newArrVal.length; i++) {
				let children = [];
				for(let j = 0; j < 5 ; j++){
					if(d === 'RTL-UP') {
						// RTL-UP
						if(newArrVal[i][j]) {
							children.push(<td>{newArrVal[i][j]}</td>);
						} else {
							children.push(<td bgcolor="#808080"></td>);
						}
					} else {
						// LTF-UP
						if(newArrVal[i][j]) {
							children.push(<td>{newArrVal[i][j]}</td>);
						} else {
							children.push(<td bgcolor="#808080"></td>);
						}
					}
					
				}
				table.push(<tr>{children}</tr>)
			}
			
			return table;	
		}
}