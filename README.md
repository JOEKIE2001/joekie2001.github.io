# Qinze Song (Monty) — personal website

Live at **https://joekie2001.github.io**. Built with the [Academic Pages](https://github.com/academicpages/academicpages.github.io) template (MIT license); every push to `master` rebuilds the site automatically.

## Where things live

| What | File / folder |
|---|---|
| Name, sidebar bio, email, social links | `_config.yml` (the `author:` section) |
| Profile photo | `images/profile.png` |
| Top menu | `_data/navigation.yml` |
| Home page text | `_pages/about.md` |
| Education | `_pages/education.md` |
| Research topics | `_pages/publications.html` |
| Papers (one file per paper) | `_publications/` |
| Singing covers | mp3s in `files/music/`, list in `_data/music.yml` |
| Photos | images in `images/photos/`, list in `_data/photos.yml` |

## Preview locally (optional)

```bash
bundle install
bundle exec jekyll serve -l -H localhost
```

Then open http://localhost:4000.
