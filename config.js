module.exports = {
  platform: "github",
  token: process.env.TOKEN,

  repositories: [
    "lmilbaum/renovate-poc"
  ],

  onboarding: false,

  extends: [
    "config:recommended"
  ],

  "gitAuthor": "Renovate Bot <renovate@poc.local>"
};
