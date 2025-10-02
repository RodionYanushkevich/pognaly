import gulp from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import cached from 'gulp-cached';
import fs from 'fs';

const compilePug = () => {
  const countriesData = JSON.parse(fs.readFileSync('source/json/countries.json', 'utf-8'));

  return gulp
      .src('source/pug/pages/*.pug')
      .pipe(plumber())
      .pipe(pug({
        pretty: true,
        locals: {
          countries: countriesData,
        },
      }))
      .pipe(cached('pug'))
      .pipe(gulp.dest('build'));
};

export default compilePug;
