#! /usr/bin/env node
import chalk from 'chalk';

import downloadTemplate from '#lib/download-template';
import { prompt } from '#lib/prompts';
import renameProject from '#lib/rename-project';
import questions from '#data/questions';

let projectName = process.argv[2];
let template = process.argv[3];

const reborn = async () => {
  const response = await prompt({ questions, projectName, template });

  const templateName = template ?
   `reflektor-boilerplate-${template}` :
   `reflektor-boilerplate-${response.template}`;

  await downloadTemplate({
    projectName,
    template : templateName
  });
  await renameProject({
    projectName : projectName ? projectName : response.projectName,
    template : templateName,
  });

  // eslint-disable-next-line
  console.log(chalk.blue(`🚀 ${projectName ? projectName : response.projectName} created under output/`))
};

reborn();
