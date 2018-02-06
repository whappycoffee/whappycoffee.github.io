// Barchart loaded
function BarChart(){
	var width = 400;
	var height = 400;
	
	// Add an SVG
  	d3.select("body")
		.append("svg")
		.attr("width",width)
		.attr("height",height)
		.style("stroke", "black")
		.style("display","block")
		.style("margin-top","50px")
		.style("margin-left","400px");  //ref:https://bl.ocks.org/mbostock/3019563	
	
	// Add a y-axix
	d3.select("svg")
		.append('line')
		.attr('x1',0)
		.attr('y1',50)
		.attr('x2',0)
		.attr('y2',350)
		.attr('stroke','black')
		.attr('fill','white');
		
	// Add a x-axix
	d3.select("svg")
		.append('line')
		.attr('x1',0)
		.attr('y1',350)
		.attr('x2',360)
		.attr('y2',350)
		.attr('stroke','black')
		.attr('fill','white');
	
	// generating 10 numbers
	var data = [0];
	for (var i = 0; i < 10; i++) 
	{
		var h = Math.ceil(d3.randomUniform(20, 280)());
		data.push(h);
	};
	// console.log(data);
	
	var Y=350;
	var rect_width=30;

	// add 10 rects in stack;
	for (var i=0; i<10; i++)
	{
		var height=data[i+1];
		d3.select("svg")
  			.append("rect")
  			.attr('x',30*(i+1))
			.attr('y',Y-height)
			.attr('width',rect_width)
			.attr('height',height)
			.attr('stroke','black')
			.attr('fill','white')
			.attr("class","bar")
  			.attr('id',i);
  		};
	
	// add a star marker	
	// generate 10 different init
	var arr = [];
	for(var i=0;i<10;i++){
        	getx(arr);
        }
	
	// 
	var s1=arr[1],
		s2=arr[2];
	console.log(s1);
	console.log(s2);	
	var X1= document.getElementById(s1).getAttribute("x"),
		tmp_Xh1 = document.getElementById(s1).getAttribute("width"),
		centerX1 = Number(X1) + Number(tmp_Xh1)/2,
		
		Y1= document.getElementById(s1).getAttribute("y"),
		tmp_h1 = document.getElementById(s1).getAttribute("height"),
		centerY1 = Number(Y1) + Number(tmp_h1)/2,
		
		X2= document.getElementById(s2).getAttribute("x"),
		tmp_Xh2 = document.getElementById(s2).getAttribute("width"),
		centerX2 = Number(X2) + Number(tmp_Xh2)/2,
		
		Y2= document.getElementById(s2).getAttribute("y"),
		tmp_h2 = document.getElementById(s2).getAttribute("height"),
		centerY2 = Number(Y2) + Number(tmp_h2)/2;
	
	// 1st marker		
	d3.select("svg")
  		.append("circle")
  		.attr("id", "star_1")
  		.attr("visibility", "visible")
  		.attr("cx", centerX1)
  		.attr("cy", centerY1)
  		.attr("r", 2)
  		.attr("fill", "black") 
  			 
	
	// 2nd marker
	d3.select("svg")
  		.append("circle")
  		.attr("id", "star_2")
  		.attr("visibility", "visible")
  		.attr("cx", centerX2)
  		.attr("cy", centerY2)
  		.attr("r", 2)
  		.attr("fill", "black") 
  		
  	// Calculate true percentage
	// function pt()
// 	{
		var a=Number(tmp_h1),
			b=Number(tmp_h2);
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
	

// generate different init
// ref: http://blog.csdn.net/new_codeer/article/details/52387530
function getx(arr){
        for(var i=0;i>-1;i++){
            var flag = true;
            var num = Math.floor(Math.random()*10); // init 0-9
            for(var i in arr){
                if(arr[i] == num){
                    flag= false;
                    break;
                    }
                }
                if(flag == true){
                    // console.log(num);
                    arr.push(num);
                    return;
                }
            }
        }	
	



