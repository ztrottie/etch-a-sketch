const container = document.querySelector(".container");
const pixelSize = 16;
let width = 16;
let height = 16;

function setupGrid() {
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++ ) {
			const pixel = document.createElement("div");
			pixel.classList.add("pixel");
			if (y === 0)
				pixel.classList.add("top");
			if (x === 0)
				pixel.classList.add("left");
			if (x === (width - 1))
				pixel.classList.add("right");
			if (y === (height - 1))
				pixel.classList.add("bot");
			container.appendChild(pixel);
		}
	}
	container.style.width = (width * pixelSize) + 6 + "px";
}


setupGrid();

container.addEventListener("mouseover", (event) => {
	if (event.target !== event.currentTarget) {
		event.target.style.backgroundColor = "blue";
	}
	event.stopPropagation();
})

const setter = document.querySelector(".setter");

setter.addEventListener("click", () => {
	width = +prompt("enter width");
	height = +prompt("enter height");
	if (width <= 100 && width >= 1 && height <= 100 && height >= 1) {
		while(container.firstElementChild) {
			container.removeChild(container.firstElementChild);
		}
		setupGrid();
	} else {
		alert("Wrong input!");
	}
})