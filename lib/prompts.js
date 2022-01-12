import path from 'path';
import { cwd } from 'process';
import prompts from 'prompts';

export const prompt = async (options) => {
  const { questions, projectDir } = options;

  const projectDirIsCurrent = projectDir === cwd();
  if (!projectDirIsCurrent) {
    const projectName = path.basename(projectDir);
    questions.projectName.initial = projectName;
  }

  const questionArray = Object.values(questions);

  const response = await prompts(questionArray);
  return response;
};
