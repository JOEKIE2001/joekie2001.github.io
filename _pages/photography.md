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
      <img src="{{ base_path }}/images/photos/{{ photo.file }}" alt="{{ photo.caption | default: 'Photo' }}" loading="lazy">
    </a>
    {% if photo.caption %}<figcaption>{{ photo.caption }}{% if photo.date %} · {{ photo.date }}{% endif %}</figcaption>{% endif %}
  </figure>
{% endfor %}
</div>
{% else %}
<p><em>Photos coming soon 📷</em></p>
{% endif %}
