import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyBook from "./Viewer";
import ZoomButtons from "./Zoombutton";

function App() {
	return (
		<>
			<div>
				<ZoomButtons />
				<MyBook />
			</div>
			<div>
				<p className=" mt-10 bg-slate-700 rounded-xl max-w-xl p-5 text-white">Silahkan digeser atau diklik pojokan kanan kiri untuk mengganti halaman</p>
			</div>
		</>
	);
}

export default App;
