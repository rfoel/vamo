#!/usr/bin/env node

const detective = require('detective')
const fs = require('fs')
const { program } = require('commander')
const { spawnSync } = require('child_process')

const { description, version } = require('./package.json')

program.version(version).description(description).arguments('<filename>')
program.parse(process.argv)

try {
  const file = fs.readFileSync(process.argv[2])
  const dependencies = detective(file)

  if (dependencies.length) {
    fs.mkdirSync('node_modules', { recursive: true })
    spawnSync('npm', ['install', '-s', '--no-save', ...dependencies], {
      stdio: 'inherit',
    })
  }

  spawnSync(process.execPath, process.argv.slice(2), {
    stdio: 'inherit',
  })
} catch (error) {
  console.log(program.helpInformation())
}
