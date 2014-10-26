Package.describe({
  name: 'hieudang:autolinker-wrapper',
  summary: ' wrap autolinker library ',
  version: '1.0.0',
  git: ' git@github.com:golden-illusion/autolinker-wrapper.git '
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('Autolinker.min.js');
});
