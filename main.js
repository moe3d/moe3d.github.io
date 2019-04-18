; (function () {
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)

  var container = document.querySelector('.video-wrapper');
  var socials = document.querySelector('.socials-block');

  var videos = [
    { id: 330601259, title: null, description: null, autoplay: 1 },
    { id: 330601274, title: null, description: null, autoplay: 1 },
    { id: 330601286, title: null, description: null, autoplay: 1 },
    { id: 330601435, title: null, description: null, autoplay: 1 },
    { id: 330601478, title: null, description: null, autoplay: 1 },
    { id: 330601674, title: null, description: null, autoplay: 1 },
    { id: 330601647, title: null, description: null, autoplay: 1 },
    { id: 330601463, title: null, description: null, autoplay: 1 },
    { id: 330601181, title: null, description: null, autoplay: 1 },
    { id: 330601497, title: null, description: null, autoplay: 1 },
    { id: 330601696, title: null, description: null, autoplay: 1 },
    { id: 330601713, title: null, description: null, autoplay: 1 },
    { id: 330601750, title: null, description: null, autoplay: 1 },
    { id: 330601873, title: null, description: null, autoplay: 1 },
    { id: 330601901, title: null, description: null, autoplay: 1 },
    { id: 330601932, title: null, description: null, autoplay: 1 },
    { id: 330601969, title: null, description: null, autoplay: 1 },
    { id: 330602000, title: null, description: null, autoplay: 1 },
    { id: 330602272, title: null, description: null, autoplay: 1 },
    { id: 330602296, title: null, description: null, autoplay: 1 },
    { id: 330602319, title: null, description: null, autoplay: 1 },
    { id: 330602355, title: null, description: null, autoplay: 1 },
    { id: 330602375, title: null, description: null, autoplay: 1 },
    { id: 330602580, title: null, description: null, autoplay: 1 },
    { id: 330602614, title: null, description: null, autoplay: 1 },
    { id: 330602640, title: null, description: null, autoplay: 1 },
    { id: 330602669, title: null, description: null, autoplay: 1 },
    { id: 330602506, title: null, description: null, autoplay: 1 },
    { id: 330602550, title: null, description: null, autoplay: 1 },
    { id: 330602408, title: null, description: null, autoplay: 1 },
    { id: 330602436, title: null, description: null, autoplay: 1 }
  ].reverse();

  videos.forEach(video => {
    var videoBox = document.createElement('div');
    videoBox.classList.add(isMobile ? 'video-block_main' : 'video-block_thin' );
    videoBox.innerHTML = `
    <div class="iframe-wrapper">
      <iframe src="https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0&sidedock=0&loop=1&autoplay=${isMobile ? 0 : video.autoplay}&autopause=0&muted=1" frameborder="0" allow=autoplay webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
  `;
    
	container.insertBefore(videoBox,socials);
  });
})();

