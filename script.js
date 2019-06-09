var carsBought = 0; 

function invoice() { //invoice function, will take values from the input fields, and print them
	var name = document.getElementById('name').value; 
	var email = document.getElementById('email').value;
	var number = document.getElementById('phone').value; 
	var days = document.getElementById('days').value; 
	var model = document.getElementById('select').value;
	var amount; //calculating the cost, depending on whether the selected car is economy or luxury
	if (model == "Honda" || model == "Toyota" || model == "Nissan" || model == "Chevrolet" || model == "Ford")
	{
		amount = 29.99*days; 
	}
	else 
	{
		amount = 49.99*days; 
	}
	//printing the invoice
	var string = " <br> <br> Thank you for renting a car, " + name + ". Your invoice is printed below. <h1> Invoice </h1> <h2> Billed to: </h2> Name: " + name + "<br> Email: " + email + "<br> Phone Number: " + number + "<br> <h2> Details </h2>  Days Rented: " + days + " days <br> " + "Model: " + model + "<br> Total amount due: $" + amount; 
	document.getElementById('output').innerHTML = string; 
	var dropdown = document.getElementById('select'); 
	dropdown.remove(dropdown.selectedIndex);
	carsBought= carsBought + 1; 	//incrementing the carsBought
	removeCar(); //calling the remove car function to remove the car from the canvas
}		
function showCar() { //drawing the cars in the canvas
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var img = document.getElementById("car1"); //the silver cars (five of these)
	var img2 = document.getElementById("car6"); //the blue cars (five of these)
	for (i=1; i< 6; i++) //drawing 5 silver cars through a for loop 
	{ 
		ctx.drawImage(img, i*49-10, 75);
	}
	for (i=1; i< 6; i++) //drawing 5 blue cars through a for loop 
	{
		ctx.drawImage(img2, i*49-10, 170);
	}
}
function removeCar() { //removing the animated cars from the canvas 
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var img = document.getElementById("car1");
	var img2 = document.getElementById("car6");
	var carNumber = carsBought;
	var yPos = 75; //y position of the silver cars 
	var yPos2 = 170; //y position of the blue cars 
	function draw() //drawing the blue cars 
	{
		if (yPos == 100) //returning from the function once the cars have reached the end of the parking lot 
		{
			clearInterval(); 
			return; 
		}
		var xPos = (carNumber*49)-10; //finding the x position of the car 
		ctx.clearRect(xPos,yPos,32,62); //clearing rectangle in which that car is located
		yPos = yPos - 1; //changing the y position to make the car back out 
		ctx.drawImage(img, xPos, yPos); //drawing a new car in the different y position
		
	}
	function draw2() //drawing the silver cars
	{
		newCarNumber = carNumber - 5; 
		if (yPos2 == 300)//returning from the function once the cars have reached the end of the parking lot 
		{
			clearInterval(); 
			return; 
		}
		var xPos = (newCarNumber*49)-10; //finding the x position of the car 
		ctx.clearRect(xPos,yPos2,32,62); //clearing rectangle in which that car is located
		yPos2 = yPos2 + 1; //changing the y position to make the car back out 
		ctx.drawImage(img2, xPos, yPos2); //drawing a new car in the different y position
	}
	if (carNumber < 6) //if the car is one of the silver cars 
	{
		setInterval(draw,10);  //make it back out by decreasing the y position
	}
	else //if the car is one of the blue cars 
	{
		setInterval(draw2,10);	//make it back out by increasing the y position
	}
}
// Modal Image Gallery taken from w3schools.com
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}