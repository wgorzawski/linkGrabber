const mix = require("laravel-mix");

mix
    .setPublicPath("./")
    .sass("src/scss/style.scss", "dist/css")
    .js("src/popup.js", "dist")
    .js("src/background.js", "dist")
    .vue()
    .copy("src/images/", "dist/images")
    .copy(["src/manifest.json", "src/popup.html"], "dist")
    .options({
        processCssUrls: false,
    });