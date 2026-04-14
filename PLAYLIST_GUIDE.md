# 📺 Guia: Como Adicionar Vídeos da Playlist

## Playlist Integrada
**URL da Playlist:** https://www.youtube.com/playlist?list=PLr-bRYOm8dagcRIXnIyvqGcZ7hdzldomi

A página `playlis.html` agora está integrada com um sistema de gerenciamento de vídeos da playlist.

## Como Adicionar Novos Vídeos

### Passo 1: Obter o ID do Vídeo
1. Acesse a URL do vídeo no YouTube
2. Copie o ID do vídeo (a parte após `?v=`)

**Exemplo:**
- URL: `https://www.youtube.com/watch?v=ABC123DEF45`
- ID do Vídeo: `ABC123DEF45`

### Passo 2: Abrir o Arquivo de Configuração
Abra o arquivo `playlist-config.js` localizado na raiz do projeto.

### Passo 3: Adicionar o Vídeo
Localize o array `videos:` e adicione um novo objeto com o formato:

```javascript
{
  videoId: 'ID_DO_VIDEO',
  title: 'Título do Vídeo'
}
```

### Exemplo Completo
```javascript
videos: [
  {
    videoId: 'PepoiL4gDeI',
    title: 'Primeira Música'
  },
  {
    videoId: 'ABC123DEF45',
    title: 'Segunda Música'
  },
  {
    videoId: 'XYZ789UVW12',
    title: 'Terceira Música'
  }
]
```

### Passo 4: Salvar e Visualizar
1. Salve o arquivo `playlist-config.js`
2. Atualize a página em seu navegador
3. Os novos vídeos aparecerão na seção "Mais Vídeos da Playlist"

## Recursos da Página

✅ **Carrossel de Imagens** - 5 imagens em rotação automática
✅ **Links de Plataformas** - YouTube, Spotify, YouTube Music, Deezer
✅ **Vídeos de Artistas** - Seção de vídeos populares
✅ **Playlist Integrada** - Seção dedicada aos vídeos da playlist
✅ **Tema Escuro/Claro** - Suporte a diferentes temas
✅ **Responsivo** - Funciona em mobile, tablet e desktop

## Informações Técnicas

- **Arquivo de Configuração:** `playlist-config.js`
- **Página Principal:** `playlis.html`
- **Ícones:** Font Awesome 6.4.0
- **Estilos:** Tailwind CSS + CSS Customizado

## Dúvidas?

Para adicionar vídeos manualmente ou com mais informações:
1. Acesse a playlist via link direto
2. Use o botão "Ver Toda a Playlist" na página
3. Copie os IDs dos vídeos que deseja adicionar

---

**Última atualização:** Abril de 2026
