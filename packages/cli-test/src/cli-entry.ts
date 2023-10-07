
import commander from 'commander';
import { promptOptions } from './options';
// import {} from 'chalk';
// import {} from 'fs-extra';
import chalk from 'chalk';
import ora from 'ora';

commander
  .command('abc')
  .option('-i, --id <id>', 'do a new create')
  .option('-r, --region <region>', 'do a new create')
  .action(async (options) => {
    console.log(options);
    // await promptOptions();
  });

commander.parse(process.argv);

console.log(chalk.green(process.cwd()));

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
  spinner.color = 'yellow';
  spinner.text = 'Loading rainbows';
}, 1000);

spawnSync('npm run start');
