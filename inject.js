(function() {
  // Floating info box UI
  function showInfoBox(message, duration = 0) {
    document.getElementById('__element-capture-infobox')?.remove();
    const box = document.createElement('div');
    box.id = '__element-capture-infobox';
    box.style.position = 'fixed';
    box.style.top = '20px';
    box.style.right = '20px';
    box.style.zIndex = 999999;
    box.style.background = '#222';
    box.style.color = '#fff';
    box.style.padding = '16px 24px';
    box.style.borderRadius = '8px';
    box.style.boxShadow = '0 2px 12px rgba(0,0,0,0.2)';
    box.style.fontSize = '16px';
    box.style.display = 'flex';
    box.style.alignItems = 'center';
    box.style.gap = '12px';
    box.innerHTML = `
      <span style="font-size:22px;">📸</span>
      <span>${message}</span>
      <button style="margin-left:16px;background:#444;color:#fff;border:none;padding:4px 10px;border-radius:4px;cursor:pointer;">OK</button>
    `;
    box.querySelector('button').onclick = () => box.remove();
    document.body.appendChild(box);
    if (duration > 0) {
      setTimeout(() => box.remove(), duration);
    }
  }

  // Add style for highlight
  const style = document.createElement('style');
  style.textContent = `
    .__element-capture-highlight {
      outline: 2px solid #00bfff !important;
      cursor: crosshair !important;
      background: rgba(0,191,255,0.05) !important;
    }
  `;
  document.head.appendChild(style);

  let last;
  function onMouseOver(e) {
    if (last) last.classList.remove('__element-capture-highlight');
    e.target.classList.add('__element-capture-highlight');
    last = e.target;
  }
  function onMouseOut(e) {
    e.target.classList.remove('__element-capture-highlight');
  }

  function onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    document.removeEventListener('mouseover', onMouseOver, true);
    document.removeEventListener('mouseout', onMouseOut, true);
    document.removeEventListener('click', onClick, true);
    if (last) last.classList.remove('__element-capture-highlight');
    style.remove();
    showInfoBox("⏳ Capturing image...");

    html2canvas(e.target, {scale: 2, useCORS: true}).then(canvas => {
      canvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'element-capture.png';
        link.href = url;
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }, 100);
        showInfoBox("✅ Image saved! Check your downloads.", 2000);
      });
    }).catch(() => {
      showInfoBox("❌ Failed to capture image.", 2000);
    });
  }

  showInfoBox("Click on any element to capture it as an image!");

  document.addEventListener('mouseover', onMouseOver, true);
  document.addEventListener('mouseout', onMouseOut, true);
  document.addEventListener('click', onClick, true);
})();