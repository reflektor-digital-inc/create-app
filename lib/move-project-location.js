import path from 'path';
import mv from 'mv';

import { TEMPLATE_DOWNLOAD_DIR } from '#data/settings';

const moveProjectLocation = (options) => {
  const { projectDir } = options;

  return new Promise((resolve, reject) => {
    const outputProjectPath = path.join(projectDir);
    mv(
      TEMPLATE_DOWNLOAD_DIR,
      outputProjectPath,
      (err) => {
        if (err) reject(err);
        resolve();
      }
    );
  });
};

export default moveProjectLocation;
