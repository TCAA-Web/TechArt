import { sites } from "./sites.js";

let mainContainer = document.getElementById("mainContainer");
let detailsContainer = document.getElementById("detailsContainer");

function createNav() {
  let nav = document.createElement("nav");
  nav.id = "nav";

  // create all site links
  sites.forEach((item, index) => {
    let link = document.createElement("a");
    link.href = "details.html#" + index;
    link.innerText = item.name;
    nav.append(link);
  });

  // append navigation
  if (mainContainer) {
    mainContainer.append(nav);
  } else {
    detailsContainer.append(nav);
  }
}

function createDetails() {
  if (location.href.includes("details")) {
    let i = location.href.split("#")[1];

    // Insert title
    let detailTitle = document.getElementById("title");
    detailTitle.innerText = sites[i].name;
    detailsContainer.append(nav);

    // Insert script
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "../scripts/art/" + sites[i].js_file_name;
    script.defer = true;
    document.head.appendChild(script);

    // Set title of page
    document.title = sites[i].name;

    // Create switch image listener
    let switchElement = document.getElementById("switch");
    switchElement.addEventListener("click", () => {
      let canvas = document.querySelector(".p5Canvas");
      let img = document.querySelector("#og_img");
      img.src = "../assets/" + sites[i].og_img_file_name;
      if (canvas.style.display == "block") {
        canvas.style.display = "none";
        img.style.display = "block";
        switchElement.innerText = "Se nyfortolkning";
      } else {
        canvas.style.display = "block";
        img.style.display = "none";
        switchElement.innerText = "Se original";
      }
    });

    // Set text content inside p tag
    let textContainer = document.getElementById("textContainer");
    let children = textContainer.childNodes;
    children[1].childNodes[1].innerText = sites[i].text;
  }
}

function createGallery() {
  let galleryContainer = document.getElementById("gallery");

  // Insert images into gallery
  sites.forEach((item, index) => {
    if (item.mod_img_file_name) {
      let img = document.createElement("img");
      let a = document.createElement("a");
      a.href = "details.html#" + index;

      img.src = "../assets/" + item.mod_img_file_name;
      img.alt = item.name;
      a.append(img);
      galleryContainer.append(a);
    }
  });
}

createNav();
createDetails();

// if frontpage - create gallery
if (location.href.includes("index")) {
  createGallery();
}
