// initiate size chart
function SepCircleChart(){
	var width = 600;
	var height = 300;
	
	// Add an SVG
  	d3.select("body")
		.append("svg")
		.attr("width",width)
		.attr("height",height)
		.style("stroke", "black")
		.style("display","block")
		.style("margin-left","400px")
		.style("margin-top","50px");	

	
	// random data generated
	var data = [10];
	for (var i = 0; i < 10; i++) 
	{
		var r = Math.ceil(d3.randomUniform(10, 50)());
		data.push(r);
	};
	
	// ref:https://www.w3schools.com/jsref/jsref_push.asp
	// console.log(data);
	
	var cx=[100,200,300,400,500,100,200,300,400,500]
	var cy=[100,100,100,100,100,200,200,200,200,200]

	// add 10 rects in stack;
	for (var i=0; i<10; i++)
	{
		d3.select("svg")
  			.append("circle")
  			.attr('cx',cx[i])
			.attr('cy',cy[i])
			.attr('r',data[i])
			.attr('stroke','black')
			.attr('fill','white')
			.attr("class","SepCircle")
  			.attr('id',i);
  		};
	
	// add a marker	
	// generate 10 different init
	var posarray = [];
	for(var i=0;i<10;i++){
        	generateX(posarray);
        }
	// get the position information of the markers 
	var m1=posarray[1],
		m2=posarray[2];
	console.log(m1);
	console.log(m2);	
	var X1= document.getElementById(m1).getAttribute("cx"),
		R1= document.getElementById(m1).getAttribute("r"),
		centerX1 = Number(X1),
		
		Y1= document.getElementById(m1).getAttribute("cy"),
		centerY1 = Number(Y1),
		
		X2= document.getElementById(m2).getAttribute("cx"),
		R2= document.getElementById(m1).getAttribute("r"),
		centerX2 = Number(X2),
		
		Y2= document.getElementById(m2).getAttribute("cy"),
		centerY2 = Number(Y2);
	
	// add 1st marker		
	d3.select("svg")
  		.append("circle")
  		.attr("id", "marker_1")
  		.attr("visibility", "visible")
  		.attr("cx", centerX1)
  		.attr("cy", centerY1)	 
	  	.attr("r", 2)
  		.attr("fill", "black")
  		
	// add 2nd marker
	d3.select("svg")
  		.append("circle")
  		.attr("id", "marker_2")
  		.attr("visibility", "visible")
  		.attr("cx", centerX2)
  		.attr("cy", centerY2)
  		.attr("r", 2)
  		.attr("fill", "black")
  	// Calculate true percentage
	// function pt()
// 	{
		var a=Number(R1)*Number(R1),
			b=Number(R2)*Number(R2);
		if(a<=b)
		{
  			var percentage = a/b * 100
  			console.log(a);
  			console.log(b);
  			console.log(percentage);	
  		}
  		else
  		{
  			var percentage = b/a * 100
  			console.log(a);
  			console.log(b);
  			console.log(percentage);
		}
		return percentage;
// 	}
	
	}
	





// ref: http://blog.csdn.net/new_codeer/article/details/52387530
//	define several init for random marker.
function generateX(posarray){
        for(var i=0;i<4;i++){
            var num = Math.floor(Math.random()*10); // init 0-9
            posarray.push(num);
            

            }
        }	
	

	
	



