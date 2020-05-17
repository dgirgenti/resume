module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    'airbnb-base',
    'plugin:nuxt/recommended'
  ],
  plugins: [
      'vue',
  ],
  // add your custom rules here
  rules: {
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
        'indent': [ 'error', 4 ],
        'function-paren-newline': 'off',
        'max-len': ['error', {
            code: 100,
            ignoreUrls: true
        }],
        'no-console': 'error',
        'no-plusplus': 'off',
        'object-curly-newline': ['error', {
            ObjectExpression: { minProperties: 8, multiline: true, consistent: true },
            ObjectPattern: { minProperties: 8, multiline: true, consistent: true },
            ImportDeclaration: { minProperties: 8, multiline: true, consistent: true },
            ExportDeclaration: { minProperties: 8, multiline: true, consistent: true },
        }],
        'padded-blocks': 'off',
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': ['error', {
            'singleline': 3,
            'multiline': {
                'max': 1,
                'allowFirstLine': true
            }
        }],
        complexity: ['error', 8],
        'import/extensions': ['error', 'always'],
        'import/no-cycle': ['warn', { maxDepth: Infinity }],
        'import/order': 'off',
        'vue/attribute-hyphenation': ['error', 'never'],
        'vue/max-attributes-per-line': ['error', {
            singleline: 3,
            multiline: {
                max: 1,
                allowFirstLine: false,
            },
        }],
        'vue/multiline-html-element-content-newline': 'off',
        'vue/singleline-html-element-content-newline': 'error',
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never',
        }],
        'vue/html-closing-bracket-spacing': ['error', {
            startTag: 'never',
            endTag: 'never',
            selfClosingTag: 'always',
        }],
        'vue/attributes-order': 'error',
        'vue/order-in-components': 'error',
    }
}
