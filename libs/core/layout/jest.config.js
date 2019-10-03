module.exports = {
  name: 'core-layout',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/core/layout',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
