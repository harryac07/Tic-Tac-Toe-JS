$(document).ready(function() {
	/* game logic */

	/*
	 * If the 'X' or 'O' lies vertically, then winner is decided. 
	 * X- for user or human and O- for computer
	 * O is genereated randomly, but user can select the desired place
	 */


	/* modal handling using jquery */
	setTimeout(function() { // display modal asap
		$('#myModal').modal('show');
	}, 900);

	var selected = ""; // user selected either X or O 
	var comp_selected = "";

	/* background image */
	var cross_image = 'url(https://image.freepik.com/free-icon/multiply-mathematical-sign_318-59590.jpg)'; // X image
	var circle_image = 'url(http://www.gloryshouse.com/images/large/letters029.jpg)'; // O image
	var user_image = "";
	var comp_image = "";

	/* fields to select */
	var field1;
	var field2;
	var field3;
	var field4;
	var field5;
	var field6;
	var field7;
	var field8;
	var field9;
	var gameOver = false;
	var win = 0;
	var loss = 0;
	var draw = 0;
	/* set win,loss and draw to 0 in beginning ; */
	$("#loss, #win, #draw").html('0');
	var count = 0; // for counting result status

	/* close modal */
	$('#close_modal').click(function() {

		$('#status').html('Select X or O to start game');
		$("#status").addClass('alert-info');
		$('#modal_restart_game').css('display', 'inline');
		setInterval(function() {
			$("#status").css('color','blue');
			$('#status').html('Click Play Again to start....');
			setTimeout(function(){
				$("#status").css('color','black');
				$('#status').html('Select X or O to start game');

			},1500);
		}, 3000);

	});

	/* select X or O and handle accordingly  */
	$('#select-cross-cirlce p').click(function(e) {

		selected = $(this).text();
		$('#myModal').modal('hide');

		/* if user selcts X computer takes O and vice-versa */
		if (selected == 'X') {
			comp_selected = 'O';
			user_image = cross_image; // user is X
			comp_image = circle_image;


			console.log('comp select ' + comp_selected);
		} else {
			comp_selected = 'X';
			user_image = circle_image; // user is O
			comp_image = cross_image;
		}


		/* handling click for human or user */

		// field1 click event
		var clickField1 = function(event) {
			if (count % 2 === 1) { // if count is odd, stop and wait for rival's turn
				event.stopPropagation();
				return;
			}
			if (field1 != "X" && field1 != "O") {
				count++;
				$(this).css({
					'background-image': user_image,
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				field1 = selected;
				console.log(field1);
				console.log(selected);
				console.log(comp_selected);
				checkVictory();
				randomize();
			}
			event.stopPropagation();
			// execute a bunch of action to preform
		}
		$('#field1').click(clickField1);

		// field2 click
		var clickField2 = function(event) {
			if (count % 2 === 1) {
				event.stopPropagation();
				return;
			}
			if (field2 != "X" && field2 != "O") {
				$(this).css({
					'background-image': user_image,
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				field2 = selected;
				count++;
				checkVictory();
				randomize();
			}
			event.stopPropagation();
			// execute a bunch of action to preform
		}

		$('#field2').click(clickField2);

		// field3 click
		var clickField3 = function(event) {
			if (count % 2 === 1) {
				event.stopPropagation();
				return;
			}
			if (field3 != "X" && field3 != "O") {
				$(this).css({
					'background-image': user_image,
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				field3 = selected;
				count++;
				checkVictory();
				randomize();
			}
			event.stopPropagation();
			// execute a bunch of action to preform
		}

		$('#field3').click(clickField3);

		// field4 click
		var clickField4 = function(event) {
			if (count % 2 === 1) {
				event.stopPropagation();
				return;
			}
			if (field4 != "X" && field4 != "O") {
				$(this).css({
					'background-image': user_image,
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				field4 = selected;
				count++;
				checkVictory();
				randomize();
			}
			event.stopPropagation();
			// execute a bunch of action to preform
		}
		$('#field4').click(clickField4);

		// field5 click
		var clickField5 = function(event) {
			if (count % 2 === 1) {
				event.stopPropagation();
				return;
			}
			if (field5 != "X" && field5 != "O") {
				$(this).css({
					'background-image': user_image,
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				field5 = selected;
				count++;
				checkVictory();
				randomize();
			}
			event.stopPropagation();
			// execute a bunch of action to preform
		}

		$('#field5').click(clickField5);

		//field6 click
		var clickField6 = function(event) {
			if (count % 2 === 1) {
				event.stopPropagation();
				return;
			}
			if (field6 != "X" && field6 != "O") {
				$(this).css({
					'background-image': user_image,
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				field6 = selected;
				count++;
				checkVictory();
				randomize();
			}
			event.stopPropagation();
			// execute a bunch of action to preform
		}
		$('#field6').click(clickField6);

		//field7 click
		var clickField7 = function(event) {
			if (count % 2 === 1) {
				event.stopPropagation();
				return;
			}
			if (field7 != "X" && field7 != "O") {
				$(this).css({
					'background-image': user_image,
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				field7 = selected;
				count++;
				checkVictory();
				randomize();
			}
			event.stopPropagation();
			// execute a bunch of action to preform
		}
		$('#field7').click(clickField7);

		//field 8
		var clickField8 = function(event) {
			if (count % 2 === 1) {
				event.stopPropagation();
				return;
			}
			if (field8 != "X" && field8 != "O") {
				$(this).css({
					'background-image': user_image,
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				field8 = selected;
				count++;
				checkVictory();
				randomize();
			}
			event.stopPropagation();
			// execute a bunch of action to preform
		}
		$('#field8').click(clickField8);

		//field9 click 
		var clickField9 = function(event) {
			if (count % 2 === 1) { // if count is odd, stop and wait for rivals
				event.stopPropagation();
				return;
			}
			if (field9 != "X" && field9 != "O") {
				$(this).css({
					'background-image': user_image,
					'background-size': '100% 100%',
					'background-repeat': 'none'
				});
				field9 = selected;
				count++;
				checkVictory();
				randomize();
			}
			event.stopPropagation();
			// execute a bunch of action to preform
		}
		$('#field9').click(clickField9);


		/* generating random for computer */
		
		var Random;
		function randomize() {

			/* computer's turn delayed for a second */
			setTimeout(function() {
				var Found = false; // check if found the place to put value O
				while (Found != true && gameOver != true) {
					Random = Math.floor(Math.random() * 9) + 1; // generate random number 1-9

					if (Random == 1 && field1 != "X" && field1 != "O") {
						field1 = comp_selected;
						$('#field1').css({
							'background-image': comp_image,
							'background-size': '100% 100%',
							'background-repeat': 'none'
						});
						count++;
						checkVictory();
						Found = true;
					}
					if (Random == 2 && field2 != "X" && field2 != "O") {
						field2 = comp_selected;
						$('#field2').css({
							'background-image': comp_image,
							'background-size': '100% 100%',
							'background-repeat': 'none'
						});
						count++;
						checkVictory();
						Found = true;
					}
					if (Random == 3 && field3 != "X" && field3 != "O") {
						$('#field3').css({
							'background-image': comp_image,
							'background-size': '100% 100%',
							'background-repeat': 'none'
						});
						field3 = comp_selected;
						count++;
						checkVictory();
						Found = true;
					}
					if (Random == 4 && field4 != "X" && field4 != "O") {
						field4 = comp_selected;
						$('#field4').css({
							'background-image': comp_image,
							'background-size': '100% 100%',
							'background-repeat': 'none'
						});
						count++;
						checkVictory();
						Found = true;
					}
					if (Random == 5 && field5 != "X" && field5 != "O") {
						field5 = comp_selected;
						$('#field5').css({
							'background-image': comp_image,
							'background-size': '100% 100%',
							'background-repeat': 'none'
						});
						count++;
						checkVictory();
						Found = true;
					}
					if (Random == 6 && field6 != "X" && field6 != "O") {
						field6 = comp_selected;
						$('#field6').css({
							'background-image': comp_image,
							'background-size': '100% 100%',
							'background-repeat': 'none'
						});
						count++;
						checkVictory();
						Found = true;
					}
					if (Random == 7 && field7 != "X" && field7 != "O") {
						field7 = comp_selected;
						$('#field7').css({
							'background-image': comp_image,
							'background-size': '100% 100%',
							'background-repeat': 'none'
						});
						count++;
						checkVictory();
						Found = true;
					}
					if (Random == 8 && field8 != "X" && field8 != "O") {
						field8 = comp_selected;
						$('#field8').css({
							'background-image': comp_image,
							'background-size': '100% 100%',
							'background-repeat': 'none'
						});
						count++;
						checkVictory();
						Found = true;
					}
					if (Random == 9 && field9 != "X" && field9 != "O") {
						field9 = comp_selected;
						$('#field9').css({
							'background-image': comp_image,
							'background-size': '100% 100%',
							'background-repeat': 'none'
						});
						count++;
						checkVictory();
						Found = true;

					}
				}
				Found = false; // not found
			}, 1000);
		} /* end of randomize function */



		/* check victory for both computer and human */
		function checkVictory() {
			/* checked based on position */

			if (field1 == selected && field2 == selected && field3 == selected) {
				victory();
			}
			if (field1 == selected && field5 == selected && field9 == selected) {
				victory();
			}
			if (field3 == selected && field5 == selected && field7 == selected) {
				victory();
			}
			if (field4 == selected && field5 == selected && field6 == selected) {
				victory();
			}
			if (field7 == selected && field8 == selected && field9 == selected) {
				victory();
			}
			if (field1 == selected && field4 == selected && field7 == selected) {
				victory();
			}
			if (field2 == selected && field5 == selected && field8 == selected) {
				victory();
			}
			if (field3 == selected && field6 == selected && field9 == selected) {
				victory();
			}
			if (field1 == comp_selected && field2 == comp_selected && field3 == comp_selected) {
				defeat();
			}
			if (field1 == comp_selected && field5 == comp_selected && field9 == comp_selected) {
				defeat();
			}
			if (field3 == comp_selected && field5 == comp_selected && field7 == comp_selected) {
				defeat();
			}
			if (field4 == comp_selected && field5 == comp_selected && field6 == comp_selected) {
				defeat();
			}
			if (field7 == comp_selected && field8 == comp_selected && field9 == comp_selected) {
				defeat();
			}
			if (field1 == comp_selected && field4 == comp_selected && field7 == comp_selected) {
				defeat();
			}
			if (field2 == comp_selected && field5 == comp_selected && field8 == comp_selected) {
				defeat();
			}
			if (field3 == comp_selected && field6 == comp_selected && field9 == comp_selected) {
				defeat();
			}
			if (count == 9) {
				drawGame();

			}
		} /* function check victory ends here*/

	}); // end of selected click event

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
		$('#field1').css('background-image', '');
		$('#field2').css('background-image', '');
		$('#field3').css('background-image', '');
		$('#field4').css('background-image', '');
		$('#field5').css('background-image', '');
		$('#field6').css('background-image', '');
		$('#field7').css('background-image', '');
		$('#field8').css('background-image', '');
		$('#field9').css('background-image', '');
		count = 0;

		/* remove game status and some classes on it after 2 sec */
		setTimeout(function() {
			$("#status").html('');
			$("#status").removeClass('alert-success alert-info alert-warning');
		}, 2000);

	}

	/* When it is draw */
	function drawGame() {
		// alert('It is Draw! Try again');
		$("#status").addClass('alert-info');
		$("#status").html('It is Draw! Try again');
		reset();
		draw++;
		$("#draw").html(draw);
		gameOver = true;
		setTimeout(function() {
			gameOver = false;
		}, 1200);

	}
	/* when human or you win */
	function victory() {
		// alert('Cheers! You win!');
		$("#status").addClass('alert-success');
		$("#status").html('Cheers! You win!');
		reset();
		win++;

		$("#win").html(win);
		gameOver = true;
		setTimeout(function() {
			gameOver = false;
		}, 1200);

	}
	/* when computer wins */
	function defeat() {
		// alert("You lost! Try Again");
		$("#status").addClass('alert-warning');
		$("#status").html('You lost! Try Again');
		reset();
		loss++;
		$("#loss").html(loss);

	}

	/* reset game after gave finished : automatic , game result remains */
	function playAgain() {

		win = 0;
		loss = 0;
		draw = 0;
		count = 0;
		$("#loss, #win, #draw").html('0');
		reset();
		location.reload();
	}

	/* reset game manually , game result get deleted */
	$("#reset").click(function() {
		playAgain();

	});



});