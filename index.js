var sass = require('node-sass');

exports.handler = function (event, context) {
  var style = sass.renderSync({data: 'a { color: blue; }'}).css.toString();
  context.succeed('<a style="' + style + '">Hello world!</a>');
};
