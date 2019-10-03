module.exports = {
  name: 'movie-critic',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/movie-critic',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
