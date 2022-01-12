import prompts from 'prompts';

export const prompt = async (options) => {
  const { projectName, template, questions } = options;
  let filteredQuestions = {...questions};

  if (projectName) delete filteredQuestions.projectName;
  if (template) delete filteredQuestions.template;

  const questionArray = Object.values(filteredQuestions);
  const response = await prompts(questionArray);
  return response;
};
