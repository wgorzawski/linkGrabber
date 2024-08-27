let mix = require("laravel-mix");

mix
    .setPublicPath("./")
    .sass("src/scss/style.scss", "dist/css")
    .js("src/*.js", "dist/js")
    .vue()
    .copy("src/images/", "dist/images")
    .copy("src/manifest.json", "dist/manifest.json")
    .options({
        processCssUrls: false,
    });