import React, { useState } from "react";

//create your first component
const Home = () => {
	const [redBulb, setRedBulb] = useState("red-bulb-on");
	const [yellowBulb, setYellowBulb] = useState("yellow-bulb-off");
	const [greenBulb, setGreenBulb] = useState("green-bulb-off");
	let greenOn = () => {
		setRedBulb("red-bulb-off");
		setYellowBulb("yellow-bulb-off");
		setGreenBulb("green-bulb-on");
	};
	let redOn = () => {
		setRedBulb("red-bulb-on");
		setYellowBulb("yellow-bulb-off");
		setGreenBulb("green-bulb-off");
	};
	let yellowOn = () => {
		setRedBulb("red-bulb-off");
		setYellowBulb("yellow-bulb-on");
		setGreenBulb("green-bulb-off");
	};

	let counter = 0;
	let startCycle = () => {
		redOn();
		let interval = setInterval(lightCycle, 1000);
	};

	let lightCycle = () => {
		counter++;
		if (counter == 5) {
			greenOn();
		}
		if (counter == 10) {
			yellowOn();
		}
		if (counter == 12) {
			counter = 0;
			redOn();
		}
	};

	return (
		<div className="mx-auto">
			<div className="bg-primary mx-auto my-2" id="background">
				<div className="pole bg-dark mx-auto"></div>
				<div className="tl-body bg-dark mx-auto">
					<div className="red">
						<div
							className={`bulb mx-auto ${redBulb}`}
							onClick={redOn}></div>
						<div
							className={`bulb between-lights mx-auto ${yellowBulb}`}
							onClick={yellowOn}></div>
						<div
							className={`bulb between-lights mx-auto ${greenBulb}`}
							onClick={greenOn}></div>
					</div>
				</div>
				<div className="mx-auto text-center mt-4">
					<button
						className="btn btn-outline-dark"
						onClick={startCycle}>
						Go!
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
