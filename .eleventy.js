const { EleventyI18nPlugin } = require("@11ty/eleventy");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: "fr"
    });

    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addPassthroughCopy('./src/css');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};