function drawBar() {

	d3.json(`/2015/${country}`).then(data =>{
		let country = data.Country,
			dystopida = roundNumber(data.DystopiaResidual),
			economy = roundNumber(data.Economy),
			family = roundNumber(data.Family),
			freedom = roundNumber(data.Freedom),
			generosity = roundNumber(data.Generosity),
			score = roundNumber(data.Score),
			health = roundNumber(data.Health),
			trust = roundNumber(data.Trust);
		y1 = [score,economy,family,health,freedom,trust,generosity,dystopida];

		d3.json(`/2016/${country}`).then(data =>{
			let country = data.Country,
				dystopida = roundNumber(data.DystopiaResidual),
				economy = roundNumber(data.Economy),
				family = roundNumber(data.Family),
				freedom = roundNumber(data.Freedom),
				generosity = roundNumber(data.Generosity),
				score = roundNumber(data.Score),
				health = roundNumber(data.Health),
				trust = roundNumber(data.Trust);
			y2 =[score,economy,family,health,freedom,trust,generosity,dystopida];

			d3.json(`/2017/${country}`).then(data =>{
				let country = data.Country,
					dystopida = roundNumber(data.DystopiaResidual),
					economy = roundNumber(data.Economy),
					family = roundNumber(data.Family),
					freedom = roundNumber(data.Freedom),
					generosity = roundNumber(data.Generosity),
					score = roundNumber(data.Score),
					health = roundNumber(data.Health),
					trust = roundNumber(data.Trust);
				 y3 =[score,economy,family,health,freedom,trust,generosity,dystopida];

				let x =['Happiness Score', 
			    	'Economy ','Family',
			    	'Health','Freedom',
			    	'Trust','Generosity','Dystopia Residual']


				var trace1 = {
					x:x,
					y:y1,
					type:"bar",
					name:"2015",
					marker:{
						color:'rgb(255, 102, 255)',
					},
				};
				var trace2 = {
					x:x,
					y:y2,
					type:"bar",
					name:"2016",
					marker:{
						color:'rgb(153, 0, 153)',
					},
				};
				var trace3 = {
					x:x,
					y:y3,
					type:"bar",
					name:"2017",
					marker:{
						color:'rgb(51, 0, 51)',
					},
				};
				var data = [trace1,trace2,trace3];
				var layout = {
					title:`<b>${country}</b>`,
					xaxis: {
						tickangle: 0,
					},
					barmode:"group",
					bargap: 0.15,
					bargroupgap: 0.1,
					plot_bgcolor: 'rgba(0, 0, 0, 0)',
					paper_bgcolor: 'rgba(0, 0, 0, 0)',
				};
				
				Plotly.newPlot('bar',data,layout,{responsive: true});
			});
		});
	});

}