import { IncomingMessage } from 'http';
import https from 'https';
import { Config } from './jsonconfig';
import { ConfigParam, PathConfig, ResponseObj } from './schema';
import querystring from 'querystring';
import { Util } from './util';

export function ReturnObject<T>(
  status: boolean,
  message: string | any,
  code: string | any,
  data: T
): ResponseObj<T> {
  return { status, message, code, data };
}

export async function buildRequestOptions<T>(
  config: ConfigParam,
  path: PathConfig<T>,
  datas?: T
) {
  let options: any = {
    hostname: Config.HOST_URL,
    port: Config.PORT,
    method: path.method,
  };
  console.info('Config: ', config);
  const params = Util.isObject(path.queryparams)
    ? querystring.stringify(path.queryparams)
    : undefined;
  const data = datas ? JSON.stringify(datas) : undefined;
  const pathURL = params ? `${path.path}?${params}` : `${path.path}`;
  if (data) options.headers['Content-Length'] = data?.length;
  if (pathURL) options['path'] = pathURL;
  return options;
}

export function JsonRest<T>(
  config: ConfigParam,
  path: PathConfig<T>,
  data?: T | any
): Promise<ResponseObj<T>> {
  return new Promise<ResponseObj<T>>(async (resolve, reject) => {
    const build: any = await buildRequestOptions(config, path, data);
    const req = https.request(build, (res: IncomingMessage) => {
      let body: any = [];
      res.on('data', (chunk: any) => {
        body.push(chunk);
      });
      res.on('end', () => {
        try {
          body = Buffer.concat(body);
          body = body.toString();
          //Attempt to parse
          body = JSON.parse(body);
        } catch (error) {
          if (config.log) {
            console.log(error);
          }
          reject(error);
        }
        //Create return object
        resolve(
          ReturnObject<T>(
            !(
              (res && res.statusCode ? res.statusCode < 200 : false) ||
              (res && res.statusCode ? res.statusCode >= 300 : false)
            ),
            res.statusMessage,
            res.statusCode,
            body
          )
        );
      });
    });

    req.on('error', (error: Error) => {
      reject(error);
    });
    // On timeout, reject the Promise
    req.on('timeout', () => {
      reject(new Error(`JSON Placeholder API request timed out`));
    });
    req.end();
  });
}
