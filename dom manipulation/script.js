const link = document.querySelector("a");
link.href = "https://www.youtube.com";
link.innerText = "Youtube";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "lorem ipsum";
sect.appendChild(para);

const text = document.createTextNode(
  " — the premier source for web development knowledge."
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);
sect.appendChild(linkPara);

para.setAttribute("class", "paragraph");

para.style.color = "green";
