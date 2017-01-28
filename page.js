$(document).ready(function() {
	/* game logic */

	/*
	 * If the 'X' or 'O' lies vertically, then winner is decided. 
	 * X- for user or human and O- for computer
	 * O is genereated randomly, but user can select the desired place
	 */
	var field1;
	var field2;
	var field3;
	var field4;
	var field5;
	var field6;
	var field7;
	var field8;
	var field9;

	count = 0;

	/* handling click for human or user */
	$('#field1').click(function() {
		if (field1 != "X" && field1 != "O") {
			$(this).css({
				'background-image': 'url(https://image.freepik.com/free-icon/multiply-mathematical-sign_318-59590.jpg)',
				'background-size': '100% 100%',
				'background-repeat': 'none'
			});
			field1 = "X";
			count++;
			checkVictory();
			randomize();
		}
	});
	$('#field2').click(function() {
		if (field2 != "X" && field2 != "O") {
			$(this).css({
				'background-image': 'url(https://image.freepik.com/free-icon/multiply-mathematical-sign_318-59590.jpg)',
				'background-size': '100% 100%',
				'background-repeat': 'none'
			});
			field2 = "X";
			count++;
			checkVictory();
			randomize();
		}
	});
	$('#field3').click(function() {
		if (field3 != "X" && field3 != "O") {
			$(this).css({
				'background-image': 'url(https://image.freepik.com/free-icon/multiply-mathematical-sign_318-59590.jpg)',
				'background-size': '100% 100%',
				'background-repeat': 'none'
			});
			field3 = "X";
			count++;
			checkVictory();
			randomize();
		}
	});
	$('#field4').click(function() {
		if (field4 != "X" && field4 != "O") {
			$(this).css({
				'background-image': 'url(https://image.freepik.com/free-icon/multiply-mathematical-sign_318-59590.jpg)',
				'background-size': '100% 100%',
				'background-repeat': 'none'
			});
			field4 = "X";
			count++;
			checkVictory();
			randomize();
		}
	});
	$('#field5').click(function() {
		if (field5 != "X" && field5 != "O") {
			$(this).css({
				'background-image': 'url(https://image.freepik.com/free-icon/multiply-mathematical-sign_318-59590.jpg)',
				'background-size': '100% 100%',
				'background-repeat': 'none'
			});
			field5 = "X";
			count++;
			checkVictory();
			randomize();
		}
	});
	$('#field6').click(function() {
		if (field6 != "X" && field6 != "O") {
			$(this).css({
				'background-image': 'url(https://image.freepik.com/free-icon/multiply-mathematical-sign_318-59590.jpg)',
				'background-size': '100% 100%',
				'background-repeat': 'none'
			});
			field6 = "X";
			count++;
			checkVictory();
			randomize();
		}
	});
	$('#field7').click(function() {
		if (field7 != "X" && field7 != "O") {
			$(this).css({
				'background-image': 'url(https://image.freepik.com/free-icon/multiply-mathematical-sign_318-59590.jpg)',
				'background-size': '100% 100%',
				'background-repeat': 'none'
			});
			field7 = "X";
			count++;
			checkVictory();
			randomize();
		}
	});
	$('#field8').click(function() {
		if (field8 != "X" && field8 != "O") {
			$(this).css({
				'background-image': 'url(https://image.freepik.com/free-icon/multiply-mathematical-sign_318-59590.jpg)',
				'background-size': '100% 100%',
				'background-repeat': 'none'
			});
			field8 = "X";
			count++;
			checkVictory();
			randomize();
		}
	});
	$('#field9').click(function() {
		if (field9 != "X" && field9 != "O") {
			$(this).css({
				'background-image': 'url(https://image.freepik.com/free-icon/multiply-mathematical-sign_318-59590.jpg)',
				'background-size': '100% 100%',
				'background-repeat': 'none'
			});
			field9 = "X";
			count++;
			checkVictory();
			randomize();
		}
	});

	/* generating random for computer */
	function randomize() {

		var Found = false; // check if found the place to put value O
		while (Found != true) {
			var Random = Math.floor(Math.random() * 9) + 1; // generate random number 1-9
			if (Random == 1 && field1 != "X" && field1 != "O") {
				field1 = "O";
				$('#field1').css({
					'background-image': 'url(http://www.gloryshouse.com/images/large/letters029.jpg)',
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				count++;
				checkVictory();
				Found = true;
			}
			if (Random == 2 && field2 != "X" && field2 != "O") {
				field2 = "O";
				$('#field2').css({
					'background-image': 'url(http://www.gloryshouse.com/images/large/letters029.jpg)',
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				count++;
				checkVictory();
				Found = true;
			}
			if (Random == 3 && field3 != "X" && field3 != "O") {
				$('#field3').css({
					'background-image': 'url(http://www.gloryshouse.com/images/large/letters029.jpg)',
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				field3 = "O";
				count++;
				checkVictory();
				Found = true;
			}
			if (Random == 4 && field4 != "X" && field4 != "O") {
				field4 = "O";
				$('#field4').css({
					'background-image': 'url(http://www.gloryshouse.com/images/large/letters029.jpg)',
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				count++;
				checkVictory();
				Found = true;
			}
			if (Random == 5 && field5 != "X" && field5 != "O") {
				field5 = "O";
				$('#field5').css({
					'background-image': 'url(http://www.gloryshouse.com/images/large/letters029.jpg)',
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				count++;
				checkVictory();
				Found = true;
			}
			if (Random == 6 && field6 != "X" && field6 != "O") {
				field6 = "O";
				$('#field6').css({
					'background-image': 'url(http://www.gloryshouse.com/images/large/letters029.jpg)',
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				count++;
				checkVictory();
				Found = true;
			}
			if (Random == 7 && field7 != "X" && field7 != "O") {
				field7 = "O";
				$('#field7').css({
					'background-image': 'url(http://www.gloryshouse.com/images/large/letters029.jpg)',
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				count++;
				checkVictory();
				Found = true;
			}
			if (Random == 8 && field8 != "X" && field8 != "O") {
				field8 = "O";
				$('#field8').css({
					'background-image': 'url(http://www.gloryshouse.com/images/large/letters029.jpg)',
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				count++;
				checkVictory();
				Found = true;
			}
			if (Random == 9 && field9 != "X" && field9 != "O") {
				field9 = "O";
				$('#field9').css({
					'background-image': 'url(http://www.gloryshouse.com/images/large/letters029.jpg)',
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				count++;
				checkVictory();
				Found = true;
			}
		}
		Found = false; // not found
	} /* end of randomize function */

	/* check victory for both computer and human */
	function checkVictory() {
		/* checked based on position */

		if (field1 == "X" && field2 == "X" && field3 == "X") {
			victory();
		}
		if (field1 == "X" && field5 == "X" && field9 == "X") {
			victory();
		}
		if (field3 == "X" && field5 == "X" && field7 == "X") {
			victory();
		}
		if (field4 == "X" && field5 == "X" && field6 == "X") {
			victory();
		}
		if (field7 == "X" && field8 == "X" && field9 == "X") {
			victory();
		}
		if (field1 == "X" && field4 == "X" && field7 == "X") {
			victory();
		}
		if (field2 == "X" && field5 == "X" && field8 == "X") {
			victory();
		}
		if (field3 == "X" && field6 == "X" && field9 == "X") {
			victory();
		}
		if (field1 == "O" && field2 == "O" && field3 == "O") {
			defeat();
		}
		if (field1 == "O" && field5 == "O" && field9 == "O") {
			defeat();
		}
		if (field3 == "O" && field5 == "O" && field7 == "O") {
			defeat();
		}
		if (field4 == "O" && field5 == "O" && field6 == "O") {
			defeat();
		}
		if (field7 == "O" && field8 == "O" && field9 == "O") {
			defeat();
		}
		if (field1 == "O" && field4 == "O" && field7 == "O") {
			defeat();
		}
		if (field2 == "O" && field5 == "O" && field8 == "O") {
			defeat();
		}
		if (field3 == "O" && field6 == "O" && field9 == "O") {
			defeat();
		}
		if (count == 9) {
			draw();

		}
	} /* function check victory ends here*/

	/* reset game */
	function reset() {

		field1 = 0;
		field2 = 0;
		field3 = 0;
		field4 = 0;
		field5 = 0;
		field6 = 0;
		field7 = 0;
		field8 = 0;
		field9 = 0;
		$('#field1').css('background-image','');
		$('#field2').css('background-image','');
		$('#field3').css('background-image','');
		$('#field4').css('background-image','');
		$('#field5').css('background-image','');
		$('#field6').css('background-image','');
		$('#field7').css('background-image','');
		$('#field8').css('background-image','');
		$('#field9').css('background-image','');
		count = 0;
	}

	/* When it is draw */
	function draw() {
		alert('It is Draw! Try again');
		reset();

	}
	/* when human or you win */
	function victory() {
		alert('Cheers! You win!');
		reset();
		
	}
	/* when computer wins */
	function defeat() {
		alert("You lost! Try Again");
		reset();
		
	}
	function playAgain(){
		
	}


});