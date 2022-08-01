// const isCi = process.env.CI !== undefined
// if (!isCi) {
//   require('husky').install()
// }

import {
  spawn
} from 'child_process'
import chalk from 'chalk'


const child = spawn('npm', ['run', 'tsc']);

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);

child.on('exit', async code => {
  if (code) {
    console.log(chalk.red('> 💥 Failed! Seems some tsx demo not pass tsc...'));
  } else {
    // await fs.remove(tmpFolder);
    console.log(chalk.green('> 🤪 All tsx demo passed. Congratulations!'));
  }

  process.exit(code);
});