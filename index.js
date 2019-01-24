var emulateState = false;
var lightsState = false;

/* Keyboard events */
var lastKey = null;
var turn = false;

var batmobile = new PoweredUp();

/* Connect to device */
document.getElementById('connect').addEventListener('click', function(e){
	var c = batmobile.connect()
    log("Connected? "+c);
});


/* Handle commands */
function executeCommand(value) {
	let turn = document.getElementById('turn').checked;

    switch (value) {
        case 'forward':
			if (batmobile.isConnected()) {
				batmobile.drive(
					126, -126
				);
			}

			break;

        case 'reverse':
        	updateCommand('reverse');

			if (batmobile.isConnected()) {
            	batmobile.drive(
					-126, 126
				);
			}

			break;

        case 'right':
        	updateCommand('right');

			if (batmobile.isConnected()) {
            	batmobile.drive(
					turn ? -126 : 30, -126
				);
			}

			break;

        case 'left':
        	updateCommand('left');

			if (batmobile.isConnected()) {
            	batmobile.drive(
					126, turn ? 126 : -30
				);
			}

			break;

        case 'stop':
        	updateCommand();

			if (batmobile.isConnected()) {
            	batmobile.stop();
            }

			break;

    }
}
