module.exports = {
  name: 'core-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/core/shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
