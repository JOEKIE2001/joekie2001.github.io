---
layout: archive
title: "Music"
permalink: /music/
author_profile: true
---

{% include base_path %}

I sing for fun and sometimes compose my own pieces. Tap a cover to play, tap again to pause. Drag the line under it to skip around.

<h2>Covers</h2>
{% if site.data.music.covers.size > 0 %}
<div class="music-grid">
{% for song in site.data.music.covers %}{% include music-tile.html song=song %}{% endfor %}
</div>
{% else %}
<p><em>Coming soon 🎤</em></p>
{% endif %}

<h2>Originals</h2>
{% if site.data.music.originals.size > 0 %}
<div class="music-grid">
{% for song in site.data.music.originals %}{% include music-tile.html song=song %}{% endfor %}
</div>
{% else %}
<p><em>Coming soon 🎼</em></p>
{% endif %}

<script>
  (function () {
    function fmt(s) {
      if (!isFinite(s)) return '';
      var m = Math.floor(s / 60), r = Math.floor(s % 60);
      return m + ':' + (r < 10 ? '0' : '') + r;
    }
    var tiles = Array.prototype.slice.call(document.querySelectorAll('.music-tile'));
    tiles.forEach(function (tile) {
      var audio = tile.querySelector('audio');
      var btn = tile.querySelector('.music-tile__cover');
      var bar = tile.querySelector('.music-tile__bar');
      var fill = tile.querySelector('.music-tile__fill');
      var cur = tile.querySelector('.music-tile__current');
      var dur = tile.querySelector('.music-tile__duration');

      btn.addEventListener('click', function () {
        if (audio.paused) {
          tiles.forEach(function (t) { if (t !== tile) t.querySelector('audio').pause(); });
          audio.play();
        } else {
          audio.pause();
        }
      });
      audio.addEventListener('play', function () { tile.classList.add('is-playing'); btn.setAttribute('aria-label', 'Pause'); });
      audio.addEventListener('pause', function () { tile.classList.remove('is-playing'); btn.setAttribute('aria-label', 'Play'); });
      audio.addEventListener('loadedmetadata', function () { dur.textContent = fmt(audio.duration); });
      audio.addEventListener('timeupdate', function () {
        fill.style.width = (audio.duration ? audio.currentTime / audio.duration * 100 : 0) + '%';
        cur.textContent = fmt(audio.currentTime);
      });
      audio.addEventListener('ended', function () { audio.currentTime = 0; });
      /* Tap or drag the progress line to jump within the song */
      function seek(e) {
        if (!audio.duration) return;
        var r = bar.getBoundingClientRect();
        var x = Math.min(Math.max(e.clientX - r.left, 0), r.width);
        audio.currentTime = x / r.width * audio.duration;
      }
      var dragging = false;
      bar.addEventListener('pointerdown', function (e) {
        dragging = true;
        if (bar.setPointerCapture) bar.setPointerCapture(e.pointerId);
        seek(e);
      });
      bar.addEventListener('pointermove', function (e) { if (dragging) seek(e); });
      bar.addEventListener('pointerup', function () { dragging = false; });
      bar.addEventListener('pointercancel', function () { dragging = false; });
    });
  })();
</script>
