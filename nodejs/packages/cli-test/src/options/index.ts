import inquirer from 'inquirer';
import fs from 'fs-extra';
// import * as fs from 'fs';
import chalk from 'chalk'
// fs 的加强版

export const promptOptions = async () => {
  const res = await inquirer.prompt([
    {
      type: 'list',
      name: '你想用什么 CSS 预处理器?',
      choices: [
        {
          name: 'less',
          value: 'less',
        },
        {
          name: 'scss',
          value: 'scss',
        },
      ],
    },
    {
      type: 'checkbox',
      name: 'do you nb?',
      choices: [
        {
          name: 'yes',
          value: 'yes',
        },
        {
          name: 'no',
          value: 'no',
        },
      ],
    },
  ]);
  console.log(res);
};
