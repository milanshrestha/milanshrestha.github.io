const { DateTime } = require("luxon");
const sass = require("sass");
const path = require("path");
const chokidar = require("chokidar");
const fs = require("fs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");
  eleventyConfig.addPassthroughCopy("src/robots.txt");


  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByGlob("src/posts/*.md");
  });

  eleventyConfig.addCollection("services", (collection) => {
    return collection.getFilteredByGlob("src/services/*.md");
  });


  // Nunjucks Date Filter
  eleventyConfig.addNunjucksFilter("date", function (dateObj, format) {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  eleventyConfig.addNunjucksFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  // Sass compilation
  eleventyConfig.addWatchTarget("./src/assets/css/**/*.scss");

  eleventyConfig.on("beforeBuild", () => {
    console.log("[11ty] Compiling Sass...");
    try {
      const result = sass.compile(path.resolve(__dirname, "src/assets/css/main.scss"), {
        style: "expanded",
      });

      fs.mkdirSync(path.resolve(__dirname, "dist/assets/css"), { recursive: true });
      fs.writeFileSync(path.resolve(__dirname, "dist/assets/css/main.css"), result.css);
      console.log("[11ty] Sass compiled successfully.");
    } catch (error) {
      console.error("[11ty] Sass compilation error:", error);
    }
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    },

    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
