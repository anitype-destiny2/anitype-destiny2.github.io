function showOne()
{
  document.getElementById("content-box").style.height="10em";
}

function showTwo()
{
  document.getElementById("content-box").style.height="20em";
}

function showThree()
{
  document.getElementById("content-box").style.height="30em";
}

function showFour()
{
  document.getElementById("content-box").style.gridTemplateColumns="2fr 1fr";
}

function showFive()
{
  document.getElementById("content-box").style.gridTemplateColumns="1fr 2fr";
}

document.getElementById("btn-lw").onclick = showOne;
document.getElementById("btn-gos").onclick = showTwo;
document.getElementById("btn-dsc").onclick = showThree;
document.getElementById("btn-throne").onclick = showFour;
document.getElementById("btn-pit").onclick = showFive;