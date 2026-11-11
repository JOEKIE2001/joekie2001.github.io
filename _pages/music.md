---
layout: archive
title: "Music"
permalink: /music/
author_profile: true
---

{% include base_path %}

I sing for fun (amateur level!) and sometimes write my own pieces. Here are a few covers — press play.

{% if site.data.music.size > 0 %}
<div class="music-list">
{% for song in site.data.music %}
  <div class="music-item">
    <h3 class="music-item__title">{{ song.title }}</h3>
    <p class="music-item__meta">{% if song.original %}Originally by {{ song.original }}{% endif %}{% if song.original and song.date %} · {% endif %}{% if song.date %}{{ song.date | date: "%B %Y" }}{% endif %}</p>
    <audio controls preload="none" src="{{ base_path }}/files/music/{{ song.file }}">Your browser does not support audio playback.</audio>
    {% if song.note %}<p class="music-item__note">{{ song.note }}</p>{% endif %}
  </div>
{% endfor %}
</div>
{% else %}
<p><em>Songs coming soon 🎤</em></p>
{% endif %}
