import fs from 'fs';
import path from 'path';

import { TEMPLATE_DOWNLOAD_DIR } from '#data/settings';

const updateProjectMetadata = (options) => {
  const { projectName } = options;

  const packageJsonLocation = path.join(TEMPLATE_DOWNLOAD_DIR, 'package.json');
  const packageJson = JSON.parse(
    fs.readFileSync(packageJsonLocation, 'utf-8')
  );
  packageJson.name = projectName;
  packageJson.contributors = [];
  packageJson.repository = '';
  packageJson.homepage = '';
  packageJson.bugs = {};
  fs.writeFileSync(packageJsonLocation, JSON.stringify(packageJson, null, 2));
};

export default updateProjectMetadata;
