module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css"); // Copy CSS directly

    return {
        dir: {
            input: ".", // Root directory (not src)
            output: "_site"
        }
    };
};
