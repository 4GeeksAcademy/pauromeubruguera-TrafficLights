import React from "react";
import { TrafficLights } from "./TrafficLights";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<TrafficLights/>
		</div>
	);
};

export default Home;
