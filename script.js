
    document.addEventListener("DOMContentLoaded", function() {
        const buttons = document.querySelectorAll(".comprar-card");

        buttons.forEach(button => {
            button.addEventListener("click", function() {
                const card = this.closest(".card, .card2, .card3");
                const quantityInput = document.createElement("input");
                quantityInput.type = "number";
                quantityInput.placeholder = "Quantidade";
                quantityInput.classList.add("quantity-input");

                const confirmButton = document.createElement("button");
                confirmButton.textContent = "Confirmar";
                confirmButton.classList.add("confirm-button");

                const precoCard = card.querySelector(".preco-card");
                const precoOriginal = parseFloat(precoCard.textContent.replace('R$', '').replace(',', '.'));

                card.appendChild(quantityInput);
                card.appendChild(confirmButton);

                confirmButton.addEventListener("click", function() {
                    const quantity = parseInt(quantityInput.value);
                    const total = (quantity * precoOriginal).toFixed(2);

                    precoCard.textContent = `${total}R$`;

                    const productName = card.querySelector(".tituto-card").textContent;

                    // Redirecionar para o WhatsApp com a quantidade, nome do produto e preço total
                    const message = `Olá, quero comprar ${quantity} ${productName} por ${total}R$.`;
                    const whatsappLink = `https://wa.me/5511913322531?text=${encodeURIComponent(message)}`;
                    window.open(whatsappLink, '_blank');

                    // Remover o input de quantidade e o botão de confirmação
                    quantityInput.remove();
                    confirmButton.remove();
                });
            });
        });
    });

