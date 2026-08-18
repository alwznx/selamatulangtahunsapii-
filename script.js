// CONFIG
const PHOTOS = [
    'assets/photo1.jpg',
    'assets/photo2.jpg',
    'assets/photo3.jpg',
    'assets/photo4.jpg',
    'assets/photo5.jpg',
    'assets/photo6.jpg',
    'assets/photo7.jpg',
    'assets/photo8.jpg',
    'assets/photo9.jpg',
    'assets/photo10.jpg',
    'assets/photo11.jpg',
    'assets/photo12.jpg'
  ];
  const MUSIC_SRC = 'music_src/UlangTahun.mp3';
  
  // Typed effect
  const phrases = [
    'Semoga hari ini penuh kebahagiaan dan kejutan manis...',
    'Hari ini tentangmu, semoga hidupmu selalu penuh senyuman.',
    'Panjang umur, sehat selalu, dan tercapai semua impianmu.'
  ];
  let tIndex = 0, char = 0, forward = true;
  const typedEl = document.getElementById('typedText');
  function tick() {
    const text = phrases[tIndex];
    if (forward) {
      char++;
      if (char > text.length) { forward = false; setTimeout(tick, 1400); return }
    } else {
      char--;
      if (char < 0) { forward = true; tIndex = (tIndex + 1) % phrases.length }
    }
    typedEl.textContent = text.slice(0, char);
    setTimeout(tick, forward ? 60 : 30);
  }
  tick();
  
  // Music
  const music = document.getElementById('bgMusic');
  music.src = MUSIC_SRC;
  const playBtn = document.getElementById('playBtn');
  let isPlaying = false;
  playBtn.addEventListener('click', () => {
    if (!isPlaying) {
      music.play().catch(() => {
        alert('Browser mungkin memblokir autoplay. Tekan OK lalu tekan Play lagi.');
      });
      playBtn.textContent = '⏸️ Pause Musik'; isPlaying = true; startConfetti(150);
    } else { music.pause(); playBtn.textContent = '▶️ Putar Musik'; isPlaying = false; stopConfetti(); }
  });
  
  // Photo carousel
  const hero = document.getElementById('heroPhoto');
  let curPhoto = 0;
  function showPhoto(i) { curPhoto = (i + PHOTOS.length) % PHOTOS.length; hero.src = PHOTOS[curPhoto]; }
  document.getElementById('prevPhoto').addEventListener('click', () => showPhoto(curPhoto - 1));
  document.getElementById('nextPhoto').addEventListener('click', () => showPhoto(curPhoto + 1));
  
  // Modal
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  document.getElementById('closeModal').addEventListener('click', () => modal.classList.remove('show'));
  
  // Gallery
  const gallery = document.getElementById('gallery');
  gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      const src = e.target.src;
      modalBody.innerHTML = `<img src="${src}" style="width:100%;border-radius:8px;max-height:60vh;object-fit:contain">`;
      document.getElementById('modalTitle').textContent = 'Foto Kenangan';
      modal.classList.add('show');
    }
  });
  
  // Ucapan khusus
  document.getElementById('openMessages').addEventListener('click', () => {
    modalBody.innerHTML = `
      <div class="card" style="margin-top:12px; text-align:center;">
        <h2 style="margin-bottom:10px;">💌 Ucapan Dariku</h2>
        <p class="fade-text" style="font-size:16px; color:#ffd5d5; margin:0;">
          [Tulis ucapan panjangmu di sini...]<br><br>
          [Ceritakan momen spesial bersama, hal yang kamu suka dari dia, atau doa tulus untuknya.]<br><br>
          [Paragraf ketiga bisa berisi harapan dan semangat untuknya di usia yang baru.]<br><br>
          [Tutup dengan pesan hangat dan tulus dari hatimu.]
        </p>
      </div>
    `;
    document.getElementById('modalTitle').textContent = 'Selamat Bertambah Usia!';
    modal.classList.add('show');
  });
  
  // Surprise
  document.getElementById('surpriseBtn').addEventListener('click', () => {
    modalBody.innerHTML = `<div style="text-align:center"><h2>🎉 SELAMAT ULANG TAHUN [NAMA PASANGAN]! 🎉</h2><p style="font-size:16px">Semoga setiap harimu dipenuhi kehangatan cinta, senyum tawa, dan langkah-langkah penuh keberhasilan.</p></div>`;
    document.getElementById('modalTitle').textContent = 'Kejutan!';
    modal.classList.add('show');
    startConfetti(300);
    setTimeout(() => stopConfetti(), 5000);
  });
  
  // Confetti
  const confettiCanvas = document.getElementById('confettiCanvas');
  const ctx = confettiCanvas.getContext('2d');
  let confettiPieces = []; let confettiRunning = false; let confettiAnimId = null;
  function resizeCanvas() { confettiCanvas.width = window.innerWidth; confettiCanvas.height = window.innerHeight }
  window.addEventListener('resize', resizeCanvas); resizeCanvas();
  function startConfetti(count = 200) { confettiPieces = []; for (let i = 0; i < count; i++)confettiPieces.push(createPiece()); confettiRunning = true; runConfetti(); }
  function stopConfetti() { confettiRunning = false; if (confettiAnimId) cancelAnimationFrame(confettiAnimId); ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height) }
  function createPiece() {
    return {
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * -confettiCanvas.height,
        size: 6 + Math.random() * 10,
        speed: 1 + Math.random() * 3,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8,
        color: `hsl(${Math.floor(Math.random() * 360)},80%,60%)`
    };
  }
  function runConfetti() {
    if (!confettiRunning) return;
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiPieces.forEach(p => {
      p.y += p.speed;
      p.rotation += p.rotSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
      if (p.y > confettiCanvas.height) { p.y = -10; p.x = Math.random() * confettiCanvas.width; }
    });
    confettiAnimId = requestAnimationFrame(runConfetti);
  }
