const fs = require("fs");
const path = require("path");
const MarkdownIt = require("markdown-it");

const md = new MarkdownIt({ html: true });

// Resolve path relative to project root (where .eleventy.js lives)
const projectRoot = __dirname;
const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || "";

module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("pathPrefix", pathPrefix);
  // Pull content from existing markdown files; imageBase prefixes relative img/ links for correct URLs
  eleventyConfig.addShortcode("contentFromMarkdown", function (sourcePath, imageBase = "") {
    const fullPath = path.join(projectRoot, sourcePath);
    if (!fs.existsSync(fullPath)) return `<p>Content not found: ${sourcePath}</p>`;
    let raw = fs.readFileSync(fullPath, "utf-8");

    // Rewrite internal doc links to website paths (include pathPrefix for GitHub Pages subpath)
    const p = pathPrefix;
    raw = raw.replace(/\]\(7_inch_pyramid_drone\/STIFFNESS_COMPARISON\.md\)/g, `](${p}/stiffness/)`);
    raw = raw.replace(/\]\(\/7_inch_pyramid_drone\)/g, `](${p}/7-inch/)`);
    raw = raw.replace(/\]\(\/5_inch_pyramid_drone\)/g, `](${p}/5-inch/)`);
    raw = raw.replace(/\]\(5_inch_pyramid_drone\/README\.md\)/g, `](${p}/5-inch/)`);
    raw = raw.replace(/\]\(\/5_inch_hd_pyramid_drone\)/g, `](${p}/5-inch-hd/)`);
    raw = raw.replace(/\]\(5_inch_hd_pyramid_drone\/README\.md\)/g, `](${p}/5-inch-hd/)`);
    raw = raw.replace(/\]\(STIFFNESS_COMPARISON\.md\)/g, `](${p}/stiffness/)`);

    let html = md.render(raw);

    // Rewrite relative image/video src to use pathPrefix + imageBase so they resolve on the site
    if (imageBase && imageBase !== "/") {
      const base = pathPrefix + imageBase.replace(/\/$/, "");
      html = html.replace(/src="((img|video)\/[^"]+)"/g, `src="${base}/$1"`);
    }

    // Prepend pathPrefix to absolute src paths (e.g. /5_inch_pyramid_drone/video/...)
    if (p) {
      html = html.replace(/src="(\/(?!\/)[^"]+)"/g, `src="${p}$1"`);
    }

    return html;
  });

  // Passthrough: copy images so they're available at same relative paths
  eleventyConfig.addPassthroughCopy("9_5_inch_angle_grass_1.jpg");
  eleventyConfig.addPassthroughCopy("5_inch_pyramid_drone/img");
  eleventyConfig.addPassthroughCopy("5_inch_pyramid_drone/video");
  eleventyConfig.addPassthroughCopy("5_inch_hd_pyramid_drone/img");
  eleventyConfig.addPassthroughCopy("7_inch_pyramid_drone/img");
  eleventyConfig.addPassthroughCopy("website/assets");

  return {
    dir: {
      input: "website",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
