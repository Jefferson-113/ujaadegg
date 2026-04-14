# Implementação de Modo Escuro e Menu em Baixo

## Mudanças Realizadas

### 1. **Modo Escuro (Dark Mode)**

- Adicionado suporte completo a modo escuro em todas as páginas
- Toggle button no topo para alternar entre modo claro e escuro
- Preferências salvas no localStorage (persiste mesmo após fechar o navegador)
- Respeita a preferência de sistema do usuário se nenhuma preferência foi definida
- Transições suaves entre temas com animações CSS

### 2. **Menu de Navegação em Baixo (Bottom Navigation)**

- Removido menu topo (navbar tradicional)
- Adicionado menu de navegação fixo na base da tela
- Menu com ícones SVG intuitivos para cada seção:
  - 🏠 Início
  - 🎵 Ensaios
  - 📅 Programação
  - 🎤 Solista
- Menu responsivo que funciona em mobile e desktop
- Estilos hover para melhor UX

### 3. **Arquivos Modificados**

#### **HTML Files Atualizados:**

- ✅ `index.html` - Página principal
- ✅ `ensaio.html` - Página de ensaios
- ✅ `programacao.html` - Página de programação
- ✅ `hinosfuturos.html` - Página de hinos
- ✅ `youthregistration.html` - Formulário de cadastro
- ✅ `photo.html` - Galeria de fotos

#### **CSS Atualizado:**

- ✅ `style.css` - Adicionados estilos para:
  - Dark mode (html.dark selector)
  - Cores e transições suaves
  - Padding bottom para acomodar menu fixo
  - Media queries para mobile

#### **JavaScript Atualizado:**

- ✅ `script.js` - Novo script para:
  - Toggle de dark mode
  - Verificação de preferência do sistema
  - Armazenamento de preferência do usuário (localStorage)
  - Sincronização com mudanças de preferência de sistema
  - Menu funcionando em todas as páginas

### 4. **Funcionalidades Adicionadas**

1. **Dark Mode Toggle:**

   ```javascript
   - Ícone de luar/sol que muda conforme o modo
   - Armazenamento de preferência em localStorage
   - Transições suaves entre temas
   ```

2. **Bottom Navigation:**

   ```
   - Menu fixo na base com 4 opções principais
   - Ativa automaticamente em todas as páginas
   - Feedback visual ao passar o mouse (hover)
   ```

3. **Cores Dark Mode:**
   ```
   - Background: #111827 → #1f2937
   - Text: #e5e7eb
   - Cards/Sections: #1f2937 → #111827
   - Borders: #374151 (com transparência)
   ```

### 5. **Responsividade**

- ✅ Funciona perfeitamente em mobile
- ✅ Funciona em tablet
- ✅ Funciona em desktop
- ✅ Menu adapta-se a diferentes tamanhos de tela
- ✅ Padding automático no bottom para não cobrir conteúdo

## Como Usar

### Alternar Modo Escuro:

1. Clique no ícone de luar/sol no topo da página
2. A preferência será salva automaticamente

### Navegação:

1. Use o menu em baixo para navegar entre seções
2. Os ícones são auto-explicativos
3. Hover nos ícones mostra o efeito visual

## Estilos Adicionados ao CSS

```css
/* Variáveis de cores dark mode */
html.dark {
  color-scheme: dark;
  background-color: #111827;
  color: #e5e7eb;
}

html.dark header,
html.dark section {
  background-color: #1f2937;
}

/* Transições suaves */
body {
  transition: background-color 0.3s duration;
}
```

## Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Próximas Melhorias (Sugeridas)

1. Adicionar animações ao trocar de tema
2. Customizar paleta de cores do dark mode
3. Implementar tema de cores (tema azul, rosa, etc)
4. Adicionar som ao toggle de dark mode (opcional)
5. Analytics para rastrear preferência de usuários

---

**Desenvolvido para:** Congresso Jovens UJAADEGG 2026  
**Data:** Abril 2026
