document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-button");
    const resetButton = document.querySelector(".reset-button");
    const cardItems = document.querySelectorAll(".card-item");

    // Função para mostrar todos os itens novamente
    function showAllItems() {
      cardItems.forEach((cardItem) => {
        cardItem.style.display = "block";
      });
    }

    // Event listener para o botão de pesquisa
    searchButton.addEventListener("click", function () {
      const searchTerm = searchInput.value.toLowerCase();

      cardItems.forEach((cardItem) => {
        const cardTitle = cardItem.querySelector("h3").textContent.toLowerCase();
        const cardText = cardItem.querySelector("p").textContent.toLowerCase();

        if (cardTitle.includes(searchTerm) || cardText.includes(searchTerm)) {
          cardItem.style.display = "block";
        } else {
          cardItem.style.display = "none";
        }
      });
    });

 

    // Event listener para o botão de redefinição
    resetButton.addEventListener("click", function () {
      searchInput.value = ""; // Limpa o campo de pesquisa
      showAllItems(); // Mostra todos os itens novamente

    
    });
  });