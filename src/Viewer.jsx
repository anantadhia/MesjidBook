import HTMLFlipBook from "react-pageflip";

export default function MyBook(props) {
	const images = [
		"buku (1).webp",
		"buku (2).webp",
		"buku (3).webp",
		"buku (4).webp",
		"buku (5).webp",
		"buku (6).webp",
		"buku (7).webp",
		"buku (8).webp",
		"buku (9).webp",
		"buku (10).webp",
		"buku (11).webp",
		"buku (12).webp",
		"buku (13).webp",
		"buku (14).webp",
		"buku (15).webp",
		"buku (16).webp",
		"buku (17).webp",
	];

	return (
		<HTMLFlipBook width={300} height={500}>
			{images.map((image, index) => (
				<div key={index} className="demoPage">
					<img src={image} alt={`Page ${index + 1}`} width={300} height={500} />
				</div>
			))}
		</HTMLFlipBook>
	);
}
