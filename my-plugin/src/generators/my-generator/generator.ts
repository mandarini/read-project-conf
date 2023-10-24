import { readJson, readProjectConfiguration, Tree } from '@nx/devkit';
import * as path from 'path';
import { MyGeneratorGeneratorSchema } from './schema';

export async function myGeneratorGenerator(
  tree: Tree,
  _options: MyGeneratorGeneratorSchema
) {
  const projConf = readProjectConfiguration(tree, 'mystand');
  const projJson = readJson(tree, 'project.json');
  console.log(JSON.stringify(projConf, null, 2));
  console.log(JSON.stringify(projJson, null, 2));
}

export default myGeneratorGenerator;
