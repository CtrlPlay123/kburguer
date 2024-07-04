  document.querySelector('.btn_comprar').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const lancheName = document.getElementById('lancheName').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    const mensagem = `Pedido de compra:%0A
      Nome do cliente: ${name}%0A
      Lanche escolhido: ${lancheName}%0A
      Endereço de entrega: ${address}%0A
      Forma de pagamento: ${payment}`;
	  
	

    const whatsappLink = `https://api.whatsapp.com/send?phone=+551239523334&text=${mensagem}`;
    window.open(whatsappLink, '_blank');
  });
