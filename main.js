(async () => {
  const data = await fetch("./data.json").then((r) => r.json());

  document.querySelector(".cont").innerHTML = data
    .map(
      ({ href, text }) => `

    <a class="button" href="${href}">${text}</a></br>

  `
    )
    .join("");
})();
