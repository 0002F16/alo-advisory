/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.aloadvisorygroup.com",
  generateRobotsTxt: true,
  outDir: "public",
  additionalPaths: async () => {
    const paths = [
      "/",
      "/saudi",
      "/uae",
      "/services",
      "/talent",
      "/about",
      "/call",
      "/contact",
      "/case-studies/uk-wealth-advisory-saudi",
      "/case-studies/uk-fintech-uae",
      "/case-studies/cross-border-governance-uplift"
    ];
    return paths.map((loc) => ({ loc }));
  }
};
