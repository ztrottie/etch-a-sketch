const container = document.querySelector(".container");
const CONTAINER_SIZE = 500;
let pixelPerSide = 16;

function setupGrid() {
	for (let y = 0; y < pixelPerSide; y++) {
		for (let x = 0; x < pixelPerSide; x++ ) {
			let pixelHeight = 0;
			let pixelWidth = 0;
			const pixel = document.createElement("div");
			pixel.classList.add("pixel");
			if (y === 0) {
				pixel.classList.add("top");
				pixelHeight += 2;
			}
			if (x === 0) {
				pixel.classList.add("left");
				pixelWidth += 2;
			}
			if (x === (pixelPerSide - 1)) {
				pixel.classList.add("right");
				pixelWidth += 2;
			}
			if (y === (pixelPerSide - 1)) {
				pixel.classList.add("bot");
				pixelHeight += 2;
			}
			pixel.style.width = ((CONTAINER_SIZE / pixelPerSide) + pixelWidth) + "px";
			pixel.style.height = ((CONTAINER_SIZE / pixelPerSide) + pixelHeight) + "px"
			container.appendChild(pixel);
		}
	}
}


setupGrid();

let mousedown = false;
let deletePixel = false;

document.addEventListener("keydown", (event) => {
	if (event.key === "Shift") {
		deletePixel = true;
		console.log(event.key);
	}
})

document.addEventListener("keyup", (event) => {
	if (event.key === "Shift") {
		deletePixel = false;
		console.log("shift up");
	}
})

document.addEventListener("mouseover", (event) => {
	if (event.target !== event.currentTarget && mousedown) {
		if (deletePixel) {
			event.target.style.backgroundColor = "white";
		} else {
			event.target.style.backgroundColor = "blue";
		}
	}
	event.stopPropagation();
})

container.addEventListener("mousedown", (event) => {
	event.preventDefault();
	mousedown = true;
	if (event.target !== event.currentTarget && mousedown) {
		if (deletePixel) {
			event.target.style.backgroundColor = "white";
		} else {
			event.target.style.backgroundColor = "blue";
		}
	}
	event.stopPropagation();
})

container.addEventListener("mouseup", (e) => {
	mousedown = false;
	e.preventDefault();
})

const setter = document.querySelector(".setter");

setter.addEventListener("click", () => {
	pixelPerSide = +prompt("Number of pixel per side");
	if (pixelPerSide <= 100 && pixelPerSide >= 1) {
		while(container.firstElementChild) {
			container.removeChild(container.firstElementChild);
		}
		setupGrid();
	} else {
		alert("Wrong input!");
	}
})