# gulp-collect-pattern

Extract text by regular expression and collect it in a file with gulp.

## Usage

### Options

  Name  | Required | Default |                       Description
--------|----------|---------|---------------------------------------------------------
file    | Yes      | N/A     | Collect the extracted text in this file.
regex   | Yes      | N/A     | Extract text matching this regular expression.
capture | No       |`0`      | Collect text from capture group instead of entire match.

### Example

We could, for example, extract all inline style tags and collect the contents into an external css file.

    var collect = require("gulp-collect-pattern")
    var gulp = require("gulp")

    gulp.task("html", function () {
      return gulp.src("*.html")
        .pipe(collect({
          file: "./dist/styles.css",
          regex: /<style>([\s\S]+?)<\/style>/g,
          capture: 1
        }))
        .pipe(gulp.dest("dist"))
    })
