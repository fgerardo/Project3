/**
 * Icon in markers
 */
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
google.maps.event.addDomListener(window, 'load', 
function(){
	var directionsRerenderOptions = {
			markerOptions:{
			icon: new google.maps.MarkerImage("img/Oil-Barrel-icon.png")
	
			}};
	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setOptions(directionsRerenderOptions);
	map=new google.maps.Map(document.getElementById('div_map'),{
		zoom:6,
		center: new google.maps.LatLng(19.430, -99.100),
		mapTypeId:google.maps.MapTypeId.ROADMAP
	});
	directionsDisplay.setMap(map);
	/*dibuja linea
	var lineSymbol = {
			path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
			scale: 5,
			strokeColor: '#393'
		};
		
		var polyOptions = {
			icons: [{
				icon: lineSymbol,
				offset: '0%'
			}],
			strokeColor: '#000000',
			strokeOpacity: 1.0,
			strokeWeight: 3
		}
		poly = new google.maps.Polyline(polyOptions);
		
		poly.setMap(map); */
		
		/**/
	var info1=new google.maps.InfoWindow;
	var clickMarker1= function(){
		var marker= this;
		var latLng= marker.getPosition();
		info1.setContent('<h3>Monterrey</h3><img src="img/gas2.PNG"/>'+"latitude "+latLng+
				"<a href='http://www.linkbus.com.mx/'>Link of site Monterrey</a>");
		info1.open(map, marker);
	};
	
	google.maps.event.addListener(map, 'mouseout',function(){
			info1.close();
	});
	
	//var iconMarker=new google.maps.MarkerImage("img/Oil-Barrel-icon.png");
		
	var marker1=new google.maps.Marker({
		map:map,//elemento
		position:new google.maps.LatLng(25.6667, -100.3167),//coordenadas 
	//	icon:iconMarker
	});
	google.maps.event.addListener(marker1,'mouseover',clickMarker1);

	
/*agreue la segunda VERACRUZ*/
var info2=new google.maps.InfoWindow;
var clickMarker2= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info2.setContent('<h3>Veracruz </h3><img src="img/gas2.PNG"/> <img src="img/Oil-Barrel-icon.png"/>'
			+"latitude "+latLng+
			"<a href='http://veracruz.gob.mx/'>Link of site Veracruz</a>");
	info2.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info2.close();
});


	
var marker2=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(19.1738,  -96.1342),
	//icon:iconMarker
});
google.maps.event.addListener(marker2,'mouseover',clickMarker2);


/*SE AGREGA TAMPICO*/

var info3=new google.maps.InfoWindow;
var clickMarker3= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info3.setContent('<h3>Tampico</h3><img src="img/Oil-Barrel-icon.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href='http://www.webcamsdemexico.com/'>Link of site Tampico</a>");
	info3.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info3.close();
});

var marker3=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(22.1667, -97.6333),
	
});
google.maps.event.addListener(marker3,'mouseover',clickMarker3);



/*agergando tamaulipas*/

var info4=new google.maps.InfoWindow;
var clickMarker4= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info4.setContent('<h3>TAMAULIPAS </h3><img src="img/Oil-Barrel-icon.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href='http://tamaulipas.gob.mx//'>Link of site TAMAULIAS</a>");
	info4.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info4.close();
});

//var iconMarker=new google.maps.MarkerImage("img/Oil-Barrel-icon.png");
	
var marker4=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(23.3557 , -99.1845),
	//icon:iconMarker
});
google.maps.event.addListener(marker4,'mouseover',clickMarker4);

/*agergando CAMPECHE*/

var info5=new google.maps.InfoWindow;
var clickMarker5= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info5.setContent('<h3>CAMPECHE </h3><img src="img/Oil-Barrel-icon.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href='http://campeche.gob.mx//'>Link of site Campeche</a>");
	info5.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info5.close();
});

var marker5=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(18.6514,-90.791),
	
});
google.maps.event.addListener(marker5,'mouseover',clickMarker5);
/*guadalajara*/
var info6=new google.maps.InfoWindow;
var clickMarker6= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info6.setContent('<h3>Guadalajara</h3><img src="img/Oil-Barrel-icon.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href='http://guadalajara.gob.mx//'>Link of site Guadalajara</a>");
	info6.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info6.close();
});

var marker6=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(20.6736, -103.344),
	
});
google.maps.event.addListener(marker6,'mouseover',clickMarker6);

/*Aguascalientes*/
var info7=new google.maps.InfoWindow;
var clickMarker7= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info7.setContent('<h3>Aguascalientes</h3><img src="img/Oil-Barrel-icon.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href=''>Link of site Aguascalientes</a>");
	info7.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info7.close();
});

var marker7=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(21.8833,  -102.283),
	
});
google.maps.event.addListener(marker7,'mouseover',clickMarker7);



/*Puebla*/

var info9=new google.maps.InfoWindow;
var clickMarker9= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info9.setContent('<h3>Puebla</h3><img src="img/Oil-Barrel-icon.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href='http://www.puebla.gob.mx/'>Link of site Puebla</a>");
	info9.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info9.close();
});

var marker9=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(19.0133, -98.3933),
	
});
google.maps.event.addListener(marker9,'mouseover',clickMarker9);

/*Chiapas*/

var info10=new google.maps.InfoWindow;
var clickMarker10= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info10.setContent('<h3>San luis Potosi</h3><img src="img/Oil-Barrel-icon.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href='http://mx.jooble.org/'>Link of site Potosi</a>");
	info10.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info10.close();
});

var marker10=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(22.2021, -101.0542),
	
});
google.maps.event.addListener(marker10,'mouseover',clickMarker10);

//cancun


var info11=new google.maps.InfoWindow;
var clickMarker11= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info11.setContent('<h3>Cancun</h3><img src="img/Oil-Barrel-icon.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href='http://www.webcamsdemexico.com//'>Link of site Cancun</a>");
	info11.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info11.close();
});

var marker11=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(21.0833, -86.85),
	
});
google.maps.event.addListener(marker11,'mouseover',clickMarker11);

//Hermosillo


var info12=new google.maps.InfoWindow;
var clickMarker12= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info12.setContent('<h3>Hermosillo</h3><img src="img/gas2.PNG"/> <img src="img/Oil-Barrel-icon.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href='http://www.linkinternational.com.mx/'>Link of site Hermosillo</a>");
	info12.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info12.close();
});

var marker12=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(29.175, -111.3583),
	
});
google.maps.event.addListener(marker12,'mouseover',clickMarker12);



});/*CIERRE*/
var robot;
var totalr=0;



function handleDirectionsResponsefirst(start, Between, directionsResult){
	directionsDisplay.setDirections(directionsResult);
	var routes = directionsResult.routes;
	for(var i=0; i<routes.length; i++){
		var totalDistance = 0;
		var legs = routes[i].legs;
		for(j=0; j<legs.length; j++){
			totalDistance += legs[j].distance.value;
		}
		document.getElementById("distance").innerHTML= Math.round(totalDistance/1000);
		var mes=((totalDistance/1000)/730)/0.1;
		if ((totalDistance/1000) <=403.2 ){
			robot = 1;
			
			
		}if ((totalDistance/1000) >403.2 && (totalDistance/1000)<=806.4){
			robot = 2; 
			
			
		}if ((totalDistance/1000) >806.4 && (totalDistance/1000)<=1209.6){
			robot = 3;
			
		}if ((totalDistance/1000) >1209.6 && (totalDistance/1000)<=1612.8){
			robot = 4;
			
		}if ((totalDistance/1000) >1612.8 && (totalDistance/1000)<=2016){
			robot = 5;
			
		}
		
		
		document.getElementById("robot").innerHTML= robot;
		document.getElementById("distance").innerHTML=Math.round(totalDistance/1000);
		document.getElementById("meses").innerHTML= mes.toFixed(2)/robot;
		
		
	}
}



var robots;
var totalr=0;



function handleDirectionsResponse(Between, end, directionsResult){
	directionsDisplay.setDirections(directionsResult);
	var routes = directionsResult.routes;
	for(var i=0; i<routes.length; i++){
		var totalDistance = 0;
		var legs = routes[i].legs;
		for(j=0; j<legs.length; j++){
			totalDistance += legs[j].distance.value;
		}
		document.getElementById("distance2").innerHTML= Math.round(totalDistance/1000);
		var mes=((totalDistance/1000)/730)/0.1;


		if ((totalDistance/1000) <=403.2 ){
			robots = 1;
			
			
		}if ((totalDistance/1000) >403.2 && (totalDistance/1000)<=806.4){
			robots = 2; 
			
			
		}if ((totalDistance/1000) >806.4 && (totalDistance/1000)<=1209.6){
			robots = 3;
			
		}if ((totalDistance/1000) >1209.6 && (totalDistance/1000)<=1612.8){
			robots = 4;
			
		}if ((totalDistance/1000) >1612.8 && (totalDistance/1000)<=2016){
			robots = 5;
			
		}
		
		
		document.getElementById("robots").innerHTML= robots;
		document.getElementById("distance2").innerHTML=Math.round(totalDistance/1000);
		document.getElementById("meses2").innerHTML= mes.toFixed(2)/robots;
		
	}
}



function calcRoute(){
	var start = document.getElementById("start").value;
	
	var Between = document.getElementById("Between").value;

	var request = { origin: start, destination: Between,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
	};
	directionsService.route(request, function(directionsResult, status){
		if(status==google.maps.DirectionsStatus.OK){
			handleDirectionsResponsefirst(
					start,  Between,  directionsResult);
		}
	});
	
}



///Second


function calcRoute1(){
	var Between= document.getElementById("Between").value;
	
	var end = document.getElementById("end").value;

	var request = { origin: Between, destination: end,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
	};
	directionsService.route(request, function(directionsResult, status){
		if(status==google.maps.DirectionsStatus.OK){
			handleDirectionsResponse(
					Between, end,  directionsResult);
		}
	});
	
}
