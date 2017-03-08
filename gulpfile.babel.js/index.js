import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';
runSequence.use(gulp)

/*
* タスクの読み込み
*/
requireDir('./tasks', { recurse: true });

/*
* dev用の一連のファイルコピー
* build:dev
* 画像とかコピー後、HTML,CSS,JSはUTF-8に変換する
*/
gulp.task('build:dev', (callback) => {return runSequence('ejs', 'scss', 'webpack', 'copy_dev', 'imageMin', callback)});

/*
* 作業用タスク（現状使用してない）
* ToDo: lintとか入れる
* Sassとか使うならその処理を追加
*/
gulp.task('default', () => {return runSequence('clean', 'build:dev', 'eslint', 'server', 'server2', 'watch')});
/*
*/
gulp.task('test', () => {return runSequence('karma')});

/*
* dist用の一連のファイルコピー（現状使用してない）
* build:dist
* 文字コード変換なし
*/
// gulp.task('build:dist', () => {return runSequence('copy:dist')});

/*
* 納品用タスク（現状使用してない）
* コピー後に何らかの処理を追加するならする
* lint, 最適化など
*/
// gulp.task('dist', () => {return runSequence('build:dist')});
