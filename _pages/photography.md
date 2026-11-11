---
layout: archive
title: "Photography"
permalink: /photography/
author_profile: true
redirect_from:
  - /pics/
  - /photos/
---

{% include base_path %}

A glimpse of my life and travels. Click a photo to see it full size.

{% if site.data.photos.size > 0 %}
<div class="photo-grid">
{% for photo in site.data.photos %}
  <figure class="photo-grid__item">
    <a href="{{ base_path }}/images/photos/{{ photo.file }}" target="_blank" rel="noopener">
      <img src="{{ base_path }}/images/photos/{{ photo.file }}" alt="{{ photo.caption | default: 'Photo' }}">
    </a>
    {% if photo.caption %}<figcaption>{{ photo.caption }}{% if photo.date %} · {{ photo.date }}{% endif %}</figcaption>{% endif %}
  </figure>
{% endfor %}
</div>
<script>
  (function () {
    var grid = document.querySelector('.photo-grid');
    if (!grid) return;
    function layout() {
      var row = parseFloat(getComputedStyle(grid).gridAutoRows);
      grid.querySelectorAll('.photo-grid__item').forEach(function (item) {
        item.style.gridRowEnd = 'auto';
        item.style.gridRowEnd = 'span ' + Math.ceil(item.getBoundingClientRect().height / row);
      });
    }
    grid.querySelectorAll('img').forEach(function (img) {
      if (!img.complete) img.addEventListener('load', layout);
    });
    window.addEventListener('resize', layout);
    window.addEventListener('load', layout);
    layout();
  })();
</script>
{% else %}
<p><em>Photos coming soon 📷</em></p>
{% endif %}
