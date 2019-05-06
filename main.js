; (function () {
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)

  var container = document.querySelector('.video-wrapper');
  var socials = document.querySelector('.socials-block');

  var videos = [
    { id: 330601259, title: "Flood Rnd", description:  'Simulation<br>Render', autoplay: 1 },
    { id: 330601274, title: "Explosion", description:  'Simulation<br>Render', autoplay: 1 },
    { id: 330601286, title: "Fire", description:  'Model<br>Fire,Cloth Sim<br>Render', autoplay: 1 },
    { id: 330601435, title: "Saber", description:  'Scan<br>Render,Comp', autoplay: 1 },
    { id: 330601478, title: "Ghoul", description:  'Scan<br>Render,Comp', autoplay: 1 },
    { id: 330601674, title: "Samurai", description:  'Scan<br>Track<br>Render,Comp', autoplay: 1 },
    { id: 330601647, title: "Gunner", description:  'Scan<br>Track<br>Render,Comp', autoplay: 1 },
    { id: 330601463, title: "Forest", description:  'Scans<br>Render', autoplay: 1 },
    { id: 330601181, title: "Future", description:  'Hologramm Fx<br>Render <br><br>Env,Char modelling: Evgen M.<br>Lighting: Evgen M.', autoplay: 1 },
    { id: 330601497, title: "Titan", description:  'Scan<br>Ocean Simulation<br>Render,Comp', autoplay: 1 },
    { id: 330601696, title: "The Wall", description:  'Track<br>Cloth Simulation<br>Render,Comp', autoplay: 1 },
    { id: 330601713, title: "Leak", description:  'Track<br>Liquid Simulation<br>Render,Comp', autoplay: 1 },
    { id: 330601750, title: "Scull Face", description:  'Track,MatchMove<br>Scull Fx,Smoke Sim<br>Render,Comp', autoplay: 1 },
    { id: 330601873, title: "Snow Collapse", description:'Track<br>Snow Sim<br>Render,Comp<br><br>Footage: Mike K.', autoplay: 1 },
    { id: 330601901, title: "Building Destruction", description:'Track<br>Rbd Sim<br>Smoke Sim<br>Render,Comp<br><br>Footage: Mike K.', autoplay: 1 },
    { id: 330601932, title: "Building Crack", description:'Track<br>Rbd Sim<br>Smoke Sim<br>Render,Comp<br><br>Footage: Mike K.', autoplay: 1 },
    { id: 330601969, title: "Wall Shots", description:'Track<br>Impact Fx Sim<br>Render,Comp<br><br>Footage: Mike K.', autoplay: 1 },
    { id: 330602000, title: "Explosions", description:'Track<br>Explosion Sims<br>Render,Comp<br><br>Footage: Mike K.', autoplay: 1 },
    { id: 330602272, title: "Stylized Fx 01", description:  'FX,Render', autoplay: 1 },
    { id: 330602296, title: "Stylized Fx 02", description:  'FX,Render', autoplay: 1 },
    { id: 330602319, title: "Stylized Fx 03", description:  'FX,Render', autoplay: 1 },
    { id: 330602355, title: "Winter Walk", description:  'Track,Fx<br>Render,Comp<br><br>Footage: Mike K.', autoplay: 1 },
    { id: 330602375, title: "Magic Particles", description:  'Track,MatchMove<br>Magic Dust Simulation<br>Render',autoplay: 1 },
    { id: 330602580, title: "Hallway Smoke", description:  'Track<br>Smoke Sim<br>Render,Comp',autoplay: 1 },
    { id: 330602614, title: "Hallway Ghost", description:  'Track<br>Cloth Simulation<br>Chain Sim<br>Render,Comp',autoplay: 1 },
    { id: 330602640, title: "Robo Arena", description:  'Track<br>Robot Rig/Animation<br>set modelling,lighting<br>Render,Comp<br><br><br>Footage: Mike K.<br>Robot Model: Evgen M.',autoplay: 1 },
    { id: 330602669, title: "Tornadoes", description:  'Track<br>Tornado Simulation<br>Render,Comp',autoplay: 1 },
    { id: 330602506, title: "Building Black Hole", description:  'RBD Simulation<br>Smoke Simulation',autoplay: 1 },
    { id: 330602550, title: "Transformations", description:  'All Simulations<br>Render,Comp',autoplay: 1 },
    { id: 330602408, title: "Pink Explosion", description: 'Track<br>Simulation<br>Render,Comp', autoplay: 1 },
    { id: 330602436, title: "Underground Flood", description: 'Track<br>Fluid Simulation<br>Render,Comp', autoplay: 1 },
    { id: 332748105, title: "Dust", description: 'Camera Match<br>Dissolve FX<br>Render', autoplay: 1 },
    { id: 332748122, title: "Water", description: 'Model<br>Water Simulation<br>Render', autoplay: 1 },
    { id: 331835610, title: "Lego 2", description: 'Shoot,Track<br>Procedural Lego Converter Asset<br>Render,Comp', autoplay: 1 },
    { id: 331835648, title: "Lego 1", description: 'Shoot,Track<br>Procedural Lego Converter Asset<br>Render,Comp', autoplay: 1 },
    { id: 332442095, title: "Dance: Smoke", description: 'Match Move<br>Smoke Sim<br>Render,Comp<br><br><a href="https://youtu.be/JB7YIrhPefQ" target="_blank">Source Footage</a>', autoplay: 1 },
    { id: 332442056, title: "Dance: Sparks", description: 'Match Move<br>Magic Dust Fx<br>Render,Comp<br><br><a href="https://youtu.be/JB7YIrhPefQ" target="_blank">Source Footage</a>', autoplay: 1 },
    { id: 334486129, title: "Pink Crack", description: 'Rbd Simulation', autoplay: 1 },
    { id: 334486149, title: "Geo to Hair", description: 'Procedural geometry to hair conversion asset<br>watch in 1080p to see the difference', autoplay: 1 },
	
  ].reverse();

  videos.forEach(video => {
    var videoBox = document.createElement('div');
    videoBox.classList.add(isMobile ? 'video-block_main' : 'video-block_thin');
    videoBox.innerHTML = `
    <div class="video-desc">
      <h2 class="video-title">${video.title}</h2>
      <p>${video.description}</p>
    </div>
    <div class="iframe-wrapper">
      <iframe src="https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0&sidedock=0&loop=1&autoplay=${isMobile ? 0 : video.autoplay}&autopause=0&muted=1" frameborder="0" allow=autoplay webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
  `;

    container.insertBefore(videoBox, socials);
  });
})();

// https://www.w3schools.com/tags/att_a_target.asp

