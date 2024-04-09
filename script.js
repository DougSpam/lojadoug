document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".comprar-card");

    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.stopPropagation();  // Impede a propagação do evento para o documento

            document.querySelectorAll(".quantity-input, .confirm-button").forEach(element => {
                element.remove();
            });


            const card = this.closest(".card, .card2, .card3");

            
            const addQuantityInput = () => {
                if (!card.querySelector(".quantity-input") && !card.querySelector(".confirm-button")) {
                    const quantityInput = document.createElement("input");
                    quantityInput.type = "number";
                    quantityInput.placeholder = "Digite a quantidade";
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

                        
                        if (!isNaN(quantity) && quantity > 0) {
                            const total = (quantity * precoOriginal).toFixed(2);

                            const productName = card.querySelector(".tituto-card").textContent;

                            const message = `Olá, quero comprar ${quantity} ${productName} por ${total}R$.`;
                            const whatsappLink = `https://wa.me/5511913322531?text=${encodeURIComponent(message)}`;
                            window.open(whatsappLink, '_blank');

                            quantityInput.remove();
                            confirmButton.remove();
                        } else {
                            quantityInput.placeholder = 'Quantidade Inválida!';
                        }
                    });
                }
            };

            
            addQuantityInput();

            
            document.addEventListener("click", function(event) {
                if (!event.target.closest(".quantity-input") && !event.target.closest(".confirm-button")) {
                    const existingQuantityInput = card.querySelector(".quantity-input");
                    const existingConfirmButton = card.querySelector(".confirm-button");

                    if (existingQuantityInput) existingQuantityInput.remove();
                    if (existingConfirmButton) existingConfirmButton.remove();
                }
            });
        });
    });
});
