const { src, dest, watch, parallel, series } = require('gulp')
const scss = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const browserSync = require('browser-sync').create()
const uglify = require('gulp-uglify-es').default
const autoprefixer = require('gulp-autoprefixer')
const imagemin = require('gulp-imagemin')
const fonter = require('gulp-fonter')
const ttf2woff2 = require('gulp-ttf2woff2')
const del = require('del')

function styles() {
	return src('app/scss/style.scss')
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['last 10 version'],
				grid: true
			})
		)
		.pipe(concat('style.min.css'))
		.pipe(scss({ outputStyle: 'compressed' }))
		.pipe(dest('app/css'))
		.pipe(browserSync.stream())
}

function scripts() {
	return src([
		'node_modules/jquery/dist/jquery.js',
		'app/js/main.js'

		// 'app/js/*.js',
		// '!app/js/main.min.js'
	])
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(dest('app/js'))
		.pipe(browserSync.stream())
}

function images() {
	return src('app/images/**/*')
		.pipe(
			imagemin([
				imagemin.gifsicle({ interlaced: true }),
				imagemin.mozjpeg({ quality: 75, progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 }),
				imagemin.svgo({
					plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
				})
			])
		)
		.pipe(dest('app/images'))
}

function fonts() {
	return src('app/fonts/*.*')
		.pipe(fonter({ formats: ['woff', 'ttf'] }))
		.pipe(src('app/fonts/*.ttf'))
		.pipe(ttf2woff2())
		.pipe(dest('app/fonts'))
}

function cleanDist() {
	return del('dist')
}

function watching() {
	browserSync.init({
		server: {
			baseDir: 'app/'
		}
	})

	watch(['app/scss/**/*.scss'], styles)
	watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts)
	watch(['app/*.html']).on('change', browserSync.reload)
}

function build() {
	return src(
		[
			'app/css/style.min.css',
			'app/images/*.*',
			'app/fonts/*.*',
			'app/js/main.min.js',
			'app/**/*.html'
		],
		{ base: 'app' }
	).pipe(dest('dist'))
}

exports.styles = styles
exports.watching = watching
exports.scripts = scripts
exports.images = images
exports.fonts = fonts
exports.cleanDist = cleanDist

exports.build = series(cleanDist, images, fonts, build)
exports.default = parallel(styles, scripts, watching)
