fetch("images.json")
  .then(response => response.json())
  .then(images => {
    const container = document.getElementById("gallery");

    images.forEach(img => {
      const card = document.createElement("div");
      card.className = "image-card";

      card.innerHTML = `
        <img src="${img.file}" alt="${img.title}" />
        <p>${img.title}</p>
        <a href="${img.file}" download>下載</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("讀取圖片失敗", error);
  });
