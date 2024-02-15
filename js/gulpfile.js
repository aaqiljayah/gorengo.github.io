// Default Gulp Task
exports.default = series(scssTask, jsTask, browserSyncServer, watchTask);

// Build Gulp Task
exports.build = series(scssTask, jsTask);