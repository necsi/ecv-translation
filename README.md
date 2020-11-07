<a href="https://hosted.weblate.org/engage/endcoronavirus-org/en/">
<img src="https://hosted.weblate.org/widgets/endcoronavirus-org/en/endcoronavirus-website/svg-badge.svg" alt="Translation status" />
</a>

## ecv-translation

Translation of [endcoronavirus.org](http://endcoronavirus.org) website

### Current status

<a href="https://hosted.weblate.org/engage/endcoronavirus-org/en/">
<img src="https://hosted.weblate.org/widgets/endcoronavirus-org/en/endcoronavirus-website/multi-auto.svg" alt="Translation status" />
</a>

### How to translate

- Go to [Weblate project](https://hosted.weblate.org/projects/endcoronavirus-org/endcoronavirus-website/)
- Register there and start translating
- Make sure not to add / remove any whitespaces around translated strings
- Weblate administrators: commit changes to GitHub using Manage -> Commit
- Merge pull request created by Weblate to main branch
- Translations on [endcoronavirus.org](http://endcoronavirus.org) will be automatically updated

### How to add new language

- Create a new country code directory with a `dict.json` file containig translation from English to chosen language

### How it works

- Repository has GitHub pages enabled
- There is a custom script injected in the squarespace settings (header section), which is using [squarelate](https://github.com/kbobrowski/squarelate) to translate website:

```html
<script src="https://unpkg.com/@kbobrowski/squarelate@v1.1.2/dist/squarelate.min.js"></script>
<script>
var squarelate = Squarelate.defaultBuilder("https://necsi.github.io/ecv-translation", 'en');
squarelate.init();
</script>
```

- Languages are added in squarespace `Pages`, as links which point to e.g. `?lang=pl`, where `pl` is a country code.
Note that after saving link settings and opening link settings again there will be nothing in the `link` field, but
this seems like a squarespace bug.

