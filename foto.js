//funkcja przewijania zdjęć;

let number = Math.floor(Math.random()*5)+1;

			
			function changeSlide()
			{
				number++; if (number>7) number=1;
				
				let plik = "<img src=\"img/slide" + number + ".jpg\" />";
				
				document.getElementById("slider").innerHTML = plik;
				
				setTimeout("changeSlide()", 5000);
			
			}