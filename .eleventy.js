module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("scroll-reveal.js");

  eleventyConfig.addCollection("planets", function(collectionApi) {
      return collectionApi.getFilteredByTag("planets");
  });

  return {
      dir: {
          input: ".",
          includes: "_includes",
          output: "_site"
      }
  };
};
