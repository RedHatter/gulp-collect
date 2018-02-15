const PluginError = require('plugin-error')
const replace = require('gulp-replace')
const fs = require('fs')

function appendReplacer (file, capture, ...match) {
  fs.appendFile(file, match[capture || 0],
    err => { if (err) throw err })

  return ''
}

const PLUGIN_NAME = 'gulp-collect';

function extract (options) {
  if (!options) throw new PluginError(PLUGIN_NAME, 'Missing required options')
  if (!options.file) throw new PluginError(PLUGIN_NAME, 'Missing file option')
  if (!options.regex) throw new PluginError(PLUGIN_NAME, 'Missing regex option')

  try { fs.unlinkSync(options.file) }
  catch (e) {
    if (e.code != 'ENOENT') throw e
  }

  let replacer = appendReplacer.bind(this, options.file, options.capture)
  return replace(options.regex, replacer)
}


module.exports = extract
