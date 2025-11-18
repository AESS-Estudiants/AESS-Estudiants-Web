fetch("/components/footer.html")
  .then(resp => resp.text())
  .then(html => {
    document.getElementById("footer").innerHTML = html;
  });