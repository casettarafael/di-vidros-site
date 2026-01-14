# 🪟 Di-vidros - Vidraçaria Especializada

> 🔨 **Website de vidraçaria e esquadrias de alumínio. Apresenta portfólio, dicas técnicas e orçamentos via WhatsApp. Foco na segurança e normas NBR.**

---

## 📄 Sobre o Projeto

Este repositório contém o código-fonte do website oficial da **Di-vidros**, uma empresa especializada em soluções de vidros, boxes, espelhos e esquadrias de alumínio. O site serve como uma vitrine de serviços, destacando a atuação em **São Paulo e Grande ABC**, e enfatiza a qualidade, segurança e conformidade com as normas técnicas do setor.

## 💡 Recursos de Destaque

* **Conformidade e Segurança (Diferencial):** Seção dedicada à importância das normas técnicas (**NBR 7199 e NBR 16259**), transmitindo confiança e profissionalismo ao cliente.
* **Portfólio Dinâmico:** Utiliza o **Swiper.js** para apresentar os projetos realizados (Envidraçamento de Sacadas, Guarda Corpo, etc.) em um carrossel responsivo e com *autoplay*.
* **Engajamento de Conteúdo:** Seção "Dicas Di-vidros" que utiliza **modais em JavaScript** (Lightboxes) para fornecer tutoriais rápidos sobre limpeza, manutenção e segurança do vidro temperado.
* **Orçamento Instantâneo:** Fortes botões de *Call-to-Action* (CTAs) para o **WhatsApp** em pontos estratégicos do site, garantindo o contato rápido e direto com a equipe.
* **UX/Animação:** Animações sutis ativadas pelo `Intersection Observer` para uma experiência de rolagem moderna.

## 🛠️ Stack Tecnológica

O projeto é estático, leve e utiliza bibliotecas padrão para aprimorar a interface.

| Categoria | Tecnologia | Uso no Projeto |
| :--- | :--- | :--- |
| **Estrutura** | HTML5, CSS3, JavaScript (Puro) | Website institucional estático, leve e responsivo. |
| **Componentes Visuais** | Swiper.js | Implementação do carrossel para a seção **Portfólio**. |
| **UX/Animação** | `Intersection Observer` | Efeito *fade-in* e *slide-up* nas seções ao rolar a página. |
| **Estilos/Tipografia** | Google Fonts (Montserrat, Poppins) | Estilos modernos e profissionais. |

## 💻 Detalhamento do JavaScript (`script.js`)

O JavaScript nativo implementa as seguintes interações:

1.  **Modais de Dicas:** Implementa as funções `abrirModal` e `fecharModal` que gerenciam a exibição dos Lightboxes na seção "Dicas". O script também **trava a rolagem do corpo** da página quando o modal está aberto, focando a atenção do usuário.
2.  **Carrossel de Portfólio:** Inicializa o **Swiper** (`myPortfolioSwiper`) com configurações responsivas para exibir de 1 a 3 itens por slide, além de `loop` e `autoplay`.
3.  **Menu Mobile:** Adiciona a funcionalidade de alternância de classe (`.active`) para abrir e fechar o menu de navegação em dispositivos móveis.
4.  **Animação de Scroll:** Usa o `IntersectionObserver` para aplicar a animação de entrada (*fade-in* e *slide-up*) aos elementos quando estes entram na área de visualização.

## ⚙️ Configuração e Implantação

1.  **Clonagem:**
    ```bash
    git clone [https://github.com/casettarafael/di-vidros-site.git](https://github.com/casettarafael/di-vidros-site.git)
    cd di-vidros-site
    ```
2.  **Dependências:**
    Não são necessárias instalações de pacotes Node.js (npm). As dependências (Swiper.js, Font Awesome) são carregadas via CDN.
3.  **Execução:**
    O projeto é estático. Basta abrir o arquivo principal (`index.html`) em seu navegador.

---
Desenvolvido por **casettarafael**
