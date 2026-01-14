const shareBtn = document.getElementById("shareBtn");
const footer = document.querySelector(".preview-footer");
const shareMenu = document.getElementById("shareMenu");

// Toggle share menu on button click
shareBtn.addEventListener("click", (e) => {
	e.stopPropagation();
	shareBtn.classList.toggle("active");
	footer.classList.toggle("active");
	shareMenu.classList.toggle("active");
});

// Close share menu when clicking outside
document.addEventListener("click", (e) => {
	if (!shareMenu.contains(e.target) && !shareBtn.contains(e.target)) {
		shareBtn.classList.remove("active");
		footer.classList.remove("active");
		shareMenu.classList.remove("active");
	}
});

// Prevent share menu clicks from closing it
shareMenu.addEventListener("click", (e) => {
	e.stopPropagation();
});