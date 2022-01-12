import mv from 'mv';

const renameProject = (options) => {
  const { projectName, template } = options;

  return new Promise((resolve, reject) => {
    mv(
      `output/${template}-main`,
      `output/${projectName}`,
      (err) => {
        if (err) reject(err);
        resolve();
      }
    );
  });
};

export default renameProject;
