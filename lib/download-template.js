import dotenv from 'dotenv';
import mkdirp from 'mkdirp';
import got from 'got';
import path from 'path';
import tar from 'tar';
import stream from 'stream';
import { promisify } from 'util';
dotenv.config();

const pipeline = promisify(stream.pipeline);

const downloadTemplate = async (options) => {
  const { projectName, template } = options;
  const codeLoadUrl = `https://codeload.github.com/reflektor-digital-inc/${template}/tar.gz/main`;

  await mkdirp(`output/${projectName}`);
  await pipeline(
    got.stream(
      codeLoadUrl,
      {
        headers: {
          'Authorization' : `token ${process.env.GITHUB_OAUTH_TOKEN}`
        }
      }
    ),
    tar.extract({
      cwd : path.resolve('output')
    })
  );
};

export default downloadTemplate;
