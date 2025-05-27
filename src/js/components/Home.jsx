import React, {useState} from "react";

//create your first component
const Home = () => {
	const [activeLight, setActiveLight] = useState(null)

	return (
		<div className="container d-flex justify-content-center">
			<div className="row justify-content-center rounded-5 bg-dark col-3 mt-5">
				<div className="row justify-content-center m-2">
					{
						activeLight === "green" ? <button className="light rounded-circle bg-success light-glow-green"
						></button>
						: <button className="light rounded-circle bg-success bg-opacity-75"
						onClick={() => {
							setActiveLight ("green")
						}}></button>
					}
				</div>
				<div className="row justify-content-center m-2">
					{
						activeLight === "yellow" ? <button className="light rounded-circle bg-warning light-glow-yellow"
						></button>
						: <button className="light rounded-circle bg-warning bg-opacity-75"
						onClick={() => {
							setActiveLight ("yellow")
						}}></button>
					}
				</div>
				<div className="row justify-content-center m-2">
					{
						activeLight === "red" ? <button className="light rounded-circle bg-danger light-glow-red"
						></button>
						: <button className="light rounded-circle bg-danger bg-opacity-75"
						onClick={() => {
							setActiveLight ("red")
						}}></button>
					}
				</div>
			</div>
		</div>
	);
};

export default Home;