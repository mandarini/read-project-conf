import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  readJson,
  readProjectConfiguration,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { MyGeneratorGeneratorSchema } from './schema';

export async function myGeneratorGenerator(
  tree: Tree,
  options: MyGeneratorGeneratorSchema
) {
  const projectRoot = `libs/${options.name}`;
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  const projConf = readProjectConfiguration(tree, 'mystand');
  const projJson = readJson(tree, 'project.json');
  console.log(JSON.stringify(projConf, null, 2));
  console.log(JSON.stringify(projJson, null, 2));
  await formatFiles(tree);
}

export default myGeneratorGenerator;
