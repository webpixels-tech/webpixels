function myFunction() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "block";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "block";
  }
}

function myFnGuidelines() {
  const dotsG = document.getElementById("dotsg");
  const moreTextG = document.getElementById("moreGuidlines");
  const btnTextG = document.getElementById("myBtnGuidelines");

  if (dotsG.style.display === "none") {
    dotsG.style.display = "block";
    btnTextG.innerHTML = "Read more";
    moreTextG.style.display = "none";
  } else {
    dotsG.style.display = "none";
    btnTextG.innerHTML = "Read less";
    moreTextG.style.display = "block";
  }
}

function myFnAddGuidelines() {
  const dotsAG = document.getElementById("dotsag");
  const moreTextAG = document.getElementById("moreAddGuidlines");
  const btnTextAG = document.getElementById("myBtnAddGuidelines");

  if (dotsAG.style.display === "none") {
    dotsAG.style.display = "block";
    btnTextAG.innerHTML = "Read more";
    moreTextAG.style.display = "none";
  } else {
    dotsAG.style.display = "none";
    btnTextAG.innerHTML = "Read less";
    moreTextAG.style.display = "block";
  }
}
