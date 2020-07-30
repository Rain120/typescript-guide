/*
 * @Author: Rainy
 * @Date: 2020-03-04 17:43:25
 * @LastEditors: Rainy
 * @LastEditTime: 2020-07-29 19:49:51
 */

const path = require('path');
const fs = require('fs');

const aliasPath = path.resolve('docs/.vuepress/utils/alias.json')
const last = ['tips', 'faqs'];

/**
 *
 * @param {string} key modal name
 * @param {string} value modal alias
 */
function addAlias(key, value) {
	const data = fs.readFileSync(aliasPath, 'utf-8');
	const content = JSON.parse(data);
	if (!value) {
		value = key;
	}
	if (!content[key]) {
		content[key] = value;
	} else {
		throw new Error('The key is exist');
	}

	const alias = {};
	Object.keys(content).forEach(key => {
		if (!last.includes(key)) {
			alias[key] = content[key];
		}
	});

	last.forEach(key => {
		alias[key] = content[key];
	});

	const file = JSON.stringify(alias, null, 2);

	fs.writeFileSync(aliasPath, new Buffer(file))
}

module.exports = plop => {
  plop.setGenerator('docs', {
    description: 'Create zh docs',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'please input the docs model name: ',
        default: 'model'
      },
      {
        type: 'input',
        name: 'alias',
        message: 'please input the docs model alias name (default same as model name)?'
      },
      {
        type: 'input',
        name: 'path',
        message: 'generator model path (etc: docs/zh/model) ?',
        default: 'docs/zh'
      }
    ],
    actions: answer => {
      addAlias(answer.name, answer.alias);
      return [
        {
          type: 'add',
          path: '{{path}}/{{name}}/README.md',
          templateFile: 'plop-templates//README.md.hbs'
        }
      ];
    }
  });
};
