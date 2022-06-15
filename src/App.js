import { useState } from "react";
import Column from "./Column";
import data from "./data.json";
function App() {
	const [max, setMax] = useState(
		data.reduce((a, b) => Math.max(a, b.amount), -Infinity)
	);
	console.log(data);
	return (
		<div className="App">
			<div className="container">
				<div className="balance-container">
					<div className="balance">
						<small>My balance</small>
						<br />
						<span>$921.48</span>
					</div>
					<img src="./logo.svg" alt="" />
				</div>
				<div className="datas">
					<span className="head">Spending - Last 7 days</span>
					<div className="chart-container">
						{data.map((day) => {
							return (
								<Column
									max={max}
									isMax={day.amount === max}
									currentValue={day}
								></Column>
							);
						})}
					</div>
					<hr />
					<div className="balance2-container">
						<div className="total">
							<small className="gray ">Total this month</small>
							<span
								style={{
									fontSize: "1.5em",
									fontWeight: "700",
									marginTop: "10px",
								}}
							>
								$478.33
							</span>
						</div>
						<div
							style={{
								display: "flex",
								alignItems: "flex-end",
								flexDirection: "column",
							}}
						>
							<span>+2.4%</span>
							<small className="gray" style={{ marginTop: "10px" }}>
								from last month
							</small>
						</div>
					</div>
				</div>
			</div>
			<div className="attribution">
				Challenge by
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by <a href="#">Viktor Zoltán Katona</a>.
			</div>
		</div>
	);
}

export default App;
