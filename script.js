var box = document.getElementsByClassName("title");
var i;

for (i = 0; i < box.length; i++) {
  box[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
}

        
