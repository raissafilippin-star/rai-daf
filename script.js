document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Destaque do item ativo no Menu Lateral
    const menuItems = document.querySelectorAll('nav a');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Remove a classe ativo de todos os links
            menuItems.forEach(link => link.classList.remove('ativo'));
            // Adiciona a classe ativo ao link clicado
            item.classList.add('ativo');
        });
    });

    // 2. Campo de Busca em Tempo Real
    const campoBusca = document.querySelector('header input');
    const cardsAnime = document.querySelectorAll('.card-anime');

    if (campoBusca) {
        campoBusca.addEventListener('input', (e) => {
            const termoBusca = e.target.value.toLowerCase().trim();

            cardsAnime.forEach(card => {
                const tituloAnime = card.querySelector('span') ? card.querySelector('span').textContent.toLowerCase() : '';
                
                if (tituloAnime.includes(termoBusca)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // 3. Ação nos botões "Explorar agora" e "Assistir"
    const botoesAcao = document.querySelectorAll('.btn-destaque, .card-anime button');

    botoesAcao.forEach(botao => {
        botao.addEventListener('click', () => {
            const textoOriginal = botao.textContent;
            botao.textContent = 'Carregando...';
            botao.style.opacity = '0.7';

            setTimeout(() => {
                botao.textContent = textoOriginal;
                botao.style.opacity = '1';
                alert('Redirecionando para o player do anime...');
            }, 800);
        });
    });

});