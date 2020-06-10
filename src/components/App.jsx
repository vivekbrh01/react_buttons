import React from "react";
import Button from "./Button.jsx";

function App() {
	return (
		<section>
			<h2>Button Types</h2>
			<div className="container">
				<Button type="solid" text="Solid" />
				{/* <Button type="outlined" text="Outlined" /> */}
				<Button type="outlined" size="lg" text="Outlined" />
				<Button type="flat" text="Flat" />
			</div>
			<h2>Button Sizes</h2>
			<div className="container">
				<Button size="lg" text="Large" />
				<Button size="md" text="Medium" />
				<Button size="sm" text="Small" />
				{/* <Button type="solid" size="md" text="Solid Medium" /> */}
				{/* <Button type="flat" size="lg" text="Flat Large" /> */}
				<Button type="flat" size="md" text="Flat Small" />
				<Button type="outlined" size="sm" text="Outlined Small" />
			</div>

			<h2>Button With Icon</h2>
			<div className="container">
				<Button type="flat" size="md" text="Sample" icon />
				<Button type="button_solid" size="lg" text="Sample" icon />
				<Button type="button_solid" size="md" text="Sample" icon />
				<Button type="outlined" size="md" text="Sample" icon />
			</div>
		</section>
	);
}
export default App;
