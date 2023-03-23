// import HTMLFlipBook from "react-pageflip";
// import React from "react";
// export default function MyBook(props) {
// 	//
// 	const data = [
// 		{ page: 1, image: "buku (1).webp" },
// 		{ page: 2, image: "buku (2).webp" },
// 		{ page: 3, image: "buku (3).webp" },
// 		{ page: 4, image: "buku (4).webp" },]

// 	const Page = React.forwardRef((props, ref) => {
// 		return (
// 			<div className="demoPage" ref={ref}>
// 				{props.children}
// 				<p>Page number: {props.number}</p>
// 			</div>
// 		);
// 	});
// 	return (
// 		<HTMLFlipBook width={550} height={733} size="stretch" minWidth={315} maxWidth={1000} minHeight={400} maxHeight={1533}>
// 			{images.map((image, index) => (
// 				<Page number={page} key={index} className="demoPage">
// 					<img src={image} alt={`Page ${index + 1}`} className="w-auto h-auto" />
// 				</Page>
// 			))}
// 		</HTMLFlipBook>
// 	);
// }

import HTMLFlipBook from "react-pageflip";
import React from "react";

export default function MyBook(props) {
	const data = [
		{ page: 1, image: "buku (1).webp" },
		{ page: 2, image: "buku (2).webp" },
		{ page: 3, image: "buku (3).webp" },
		{ page: 4, image: "buku (4).webp" },
		{ page: 5, image: "buku (5).webp" },
		{ page: 6, image: "buku (6).webp" },
		{ page: 7, image: "buku (7).webp" },
		{ page: 8, image: "buku (8).webp" },
		{ page: 9, image: "buku (9).webp" },
		{ page: 10, image: "buku (10).webp" },
		{ page: 11, image: "buku (11).webp" },
		{ page: 12, image: "buku (12).webp" },
		{ page: 13, image: "buku (13).webp" },
		{ page: 14, image: "buku (14).webp" },
		{ page: 15, image: "buku (15).webp" },
		{ page: 16, image: "buku (16).webp" },
		{ page: 17, image: "buku (17).webp" },
	];

	const Page = React.forwardRef((props, ref) => {
		return (
			<div className="demoPage" ref={ref}>
				{props.children}
				<p className="bg-slate-500 text-white rounded-lg">Halaman: {props.number}</p>
			</div>
		);
	});

	return (
		<HTMLFlipBook width={550} height={733} size="stretch" minWidth={315} maxWidth={1000} minHeight={400} maxHeight={1533}>
			{data.map(({ page, image }, index) => (
				<Page number={page} key={index} className="demoPage">
					<img src={image} alt={`Page ${page}`} className="w-auto h-auto" />
				</Page>
			))}
		</HTMLFlipBook>
	);
}
