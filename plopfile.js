/*
 * @Author: Rainy
 * @Date: 2020-03-04 17:43:25
 * @LastEditors: Rainy
 * @LastEditTime: 2020-03-04 17:43:32
 */

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
        name: 'path',
        message: 'generator model path (etc: docs/zh/model) ?',
        default: 'docs/zh'
      }
    ],
    actions: answer => {
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
