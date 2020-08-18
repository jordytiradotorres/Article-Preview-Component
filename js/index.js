const socialButton = document.getElementById("social-button"),
	networks = document.getElementById("networks"),
	iconShare = document.getElementById("icon-share");

socialButton.addEventListener("click", (e) => {
	networks.classList.toggle("networks-visible");

	if (networks.classList.contains("networks-visible")) {
		socialButton.style.backgroundColor = "hsl(214, 17%, 51%)";
		iconShare.src = "../images/icon-share-white.svg";
	} else {
		socialButton.style.backgroundColor = "hsl(210, 46%, 95%)";
		iconShare.src = "../images/icon-share.svg";
	}
});
