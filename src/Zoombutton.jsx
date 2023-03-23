import React, { useState } from "react";

export default function ZoomButtons() {
	const [scale, setScale] = useState(1);

	const handleZoomIn = () => {
		setScale(scale + 0.1);
		document.body.style.transform = `scale(${scale + 0.1})`;
	};

	const handleZoomOut = () => {
		setScale(scale - 0.1);
		document.body.style.transform = `scale(${scale - 0.1})`;
	};

	return (
		<div className=" z-20 fixed">
			<button className="bg-slate-700 m-2 p-1 font-bold  rounded-lg text-white opacity-80" onClick={handleZoomIn}>
				Perbesar
			</button>
			<button className="bg-slate-700 m-2 p-1 font-bold rounded-lg text-white opacity-80" onClick={handleZoomOut}>
				Perkecil
			</button>
		</div>
	);
}
