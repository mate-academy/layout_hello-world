module.exports = {
  extends: [
    "stylelint-config-recommended-scss",
    "@mate-academy/stylelint-config"
  ],
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "scss/at-if-no-null": null
  }
};
