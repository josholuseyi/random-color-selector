let color = "#";
    const colors = [0, 1, 2, 3, 4, 5, 6, "a", "b", "c", "d", "e", "f"];

    const btn = document.querySelector(".btn");
    console.log(btn);
    const bodyBackground = document.getElementById("body");
    const value = document.querySelector(".value");

    btn.addEventListener("click", getColor);

    function getColor() {
      let color = "#";
      for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * colors.length);
        console.log(random);
        color += colors[random];
        console.log(color);
      }

      bodyBackground.style.backgroundColor = color;
      value.innerHTML = color;
    }