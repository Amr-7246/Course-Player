module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    // Custom rules go here (e.g., turn off a rule or configure it)
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  ignorePatterns: ["node_modules/", ".next/", "out/"],
};
