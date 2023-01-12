const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
const search = () => {
  const searchbox = document.getElementById("search-items").value.toUpperCase();
  const storeitems = document.getElementById("daftarKategori");
  const product = document.querySelectorAll(".item");
  const pname = storeitems.getElementsByTagName("h1");
  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h1")[0];
    if (match) {
      let textvalue = match.textContent || match.innerHTML;
      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
