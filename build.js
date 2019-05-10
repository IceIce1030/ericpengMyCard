'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               彭俊彬'),
  handle: chalk.cyan('EricPeng  🙌 🙌'),
  work: chalk.white('前端工程師 Front-end engineer'),
  opensource: chalk.white('myCard 測試😀'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~ericpeng'),
  github: chalk.gray('https://github.com/') + chalk.green('IceIce1030'),
  cakeresume: chalk.gray('https://www.cakeresume.com/resumes/') + chalk.cyan('elric-peng/'),
  facebook: chalk.gray('https://www.facebook.com/profile.php') + chalk.cyan('?id=100000365605891&ref=bookmarks'),
  web: chalk.cyan('http://www.ericpen.com/#/video/page=1'),
  npx: chalk.red('npx') + ' ' + chalk.white('ericpengcard'),
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelWeb: chalk.white.bold('        web(vue-project practice):'),
  labelCard: chalk.white.bold('       Card:'),
  labelCakeresume: chalk.white.bold('       Cakeresume:'),
  labelFacebook: chalk.white.bold('       Facebook:'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const cakeresume = `${data.labelCakeresume}  ${data.cakeresume}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`
const facebook = `${data.labelFacebook}  ${data.facebook}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
  newline + newline + // Add one whole blank line
  working + newline + // data.labelWork + data.work
  opensourcing + newline + newline + // data.labelOpenSource + data.opensource
  cakeresume + newline + // data.labelCakeresume + data.cakeresume
  facebook + newline + // data.labelFacebook + data.facebook
  githubing + newline + // data.labelGitHub + data.github
  webing + newline + newline + // data.labelWeb + data.web
  carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))