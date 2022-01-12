import fs from 'fs';
import chalk from 'chalk';
import mkdirp from 'mkdirp';

export const checkProjectDirIsEmpty = (projectDir) => {
  let isEmpty = fs.readdirSync(projectDir).length === 0;
  if (!isEmpty) {
    console.log(
      chalk.red(`${projectDir} is not empty. Please try again with a different directory.`)
    );
    process.exit(-1);
  }
};

export const checkProjectDirExists = async (projectDir) => {
  const projectDirExists = fs.existsSync(projectDir);
  if (!projectDirExists) {
    console.log(
      chalk.blue(`🚜 ${projectDir} does not exist. Creating directory...`)
    );
    await mkdirp(projectDir);
  }
};
