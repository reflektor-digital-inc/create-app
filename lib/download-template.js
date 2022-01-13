import mkdirp from 'mkdirp';
import got from 'got';
import path from 'path';
import tar from 'tar';
import stream from 'stream';
import { promisify } from 'util';

import { TEMPLATE_DOWNLOAD_DIR } from '#data/settings';

const pipeline = promisify(stream.pipeline);

const downloadTemplate = async (options) => {
  const { template } = options;
  const codeLoadUrl = `https://codeload.github.com/reflektor-digital-inc/${template}/tar.gz/main`;

  await mkdirp(TEMPLATE_DOWNLOAD_DIR);
  await pipeline(
    got.stream(codeLoadUrl),
    tar.extract({
      cwd : path.resolve(TEMPLATE_DOWNLOAD_DIR),
      strip: 1
    })
  );
};

export default downloadTemplate;
