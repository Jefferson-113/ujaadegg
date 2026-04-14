/**
 * Configuração de Vídeos da Playlist
 * Playlist: https://www.youtube.com/playlist?list=PLr-bRYOm8dagcRIXnIyvqGcZ7hdzldomi
 * 
 * Para adicionar novos vídeos:
 * 1. Copie o ID do vídeo da URL do YouTube (ex: https://www.youtube.com/watch?v=PepoiL4gDeI -> PepoiL4gDeI)
 * 2. Adicione um novo objeto com videoId e title no array playlistVideos abaixo
 * 3. Salve o arquivo
 * 4. Atualize a página playlis.html
 */

const playlistConfig = {
  playlistId: 'PLr-bRYOm8dagcRIXnIyvqGcZ7hdzldomi',
  playlistUrl: 'https://www.youtube.com/playlist?list=PLr-bRYOm8dagcRIXnIyvqGcZ7hdzldomi',
  
  // Array de vídeos da playlist
  videos: [
    {
      videoId: 'PepoiL4gDeI',
      title: 'Vídeo 1 - Primeira Música'
    },
    // Adicione mais vídeos aqui seguindo este formato:
    // {
    //   videoId: 'ID_DO_VIDEO',
    //   title: 'Título do Vídeo'
    // },
  ]
};

// Função para carregar os vídeos no playlis.html
function loadPlaylistVideos() {
  const playlistVideosGrid = document.getElementById('playlistVideosGrid');
  
  if (!playlistVideosGrid) return;
  
  // Limpar elementos anteriores (exceto se houver algo importante)
  const existingVideos = playlistVideosGrid.querySelectorAll('.video-card');
  
  // Adicionar vídeos da configuração
  playlistConfig.videos.forEach(video => {
    const videoCard = document.createElement('a');
    videoCard.href = `https://www.youtube.com/watch?v=${video.videoId}`;
    videoCard.target = '_blank';
    videoCard.rel = 'noopener noreferrer';
    videoCard.className = 'video-card';
    videoCard.title = `Assista ${video.title}`;
    
    videoCard.innerHTML = `
      <span class="video-icon"><i class="fab fa-youtube"></i></span>
      <span class="video-title">${video.title}</span>
    `;
    
    playlistVideosGrid.appendChild(videoCard);
  });
  
  // Remover mensagem de placeholder se houver vídeos
  const placeholderText = playlistVideosGrid.querySelector('p');
  if (playlistConfig.videos.length > 0 && placeholderText) {
    placeholderText.style.display = 'none';
  }
}

// Carregar vídeos quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadPlaylistVideos);
} else {
  loadPlaylistVideos();
}
