import "../styles.css";

(function(){
    const projects = document.querySelectorAll("section.card");
    const colors = ["#F54927", "#E8BC4A", "#6DC7B9", "#A06DC7", "#C76D9E"];

    const randomColors = () => {
        projects.forEach((card) => {
            const randomNumber = Math.floor(Math.random() * colors.length);
            card.style.backgroundColor = colors[randomNumber];
        });
    };

    randomColors();
})();