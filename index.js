#! /usr/bin/env node
import path from 'path';
import { cwd } from 'process';
import chalk from 'chalk';

import { checkProjectDirIsEmpty, checkProjectDirExists } from '#lib/checks';
import downloadTemplate from '#lib/download-template';
import { prompt } from '#lib/prompts';
import moveProjectLocation from '#lib/move-project-location';
import updateProjectMetadata from '#lib/update-project-metadata';
import questions from '#data/questions';

const projectDirArg = process.argv[2] || '.';
const projectDir = projectDirArg === '.' ? cwd() : path.resolve(projectDirArg);

const createReflektorApp = async () => {
  try {
    await checkProjectDirExists(projectDir);
    checkProjectDirIsEmpty(projectDir);

    const response = await prompt({ questions, projectDir });
    const template = `boilerplate-${response.template}`;
    const projectName = response.projectName;

    await downloadTemplate({ projectName, template });
    updateProjectMetadata({ projectName });
    await moveProjectLocation({ projectDir });
  
    console.log(chalk.blue(`🚀 ${projectName} created at ${projectDir}`));
  } catch (err) {
    console.log(chalk.red(err));
    process.exit(-1);
  }
};

createReflektorApp();
