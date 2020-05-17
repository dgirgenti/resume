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
            // Kept from airbnb-base@13, that switched to 'always' in 14
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
        // 4 space indent
        'indent': [ 'error', 4 ],
        // Don't enforce newlines on function parens
        'function-paren-newline': 'off',
        // Max length 0f 80 characters in source code
        'max-len': ['error', {
            code: 100,
            ignoreUrls: true
        }],
        // Don't allow console.*, force logger usage
        'no-console': 'error',
        // Allow unary ++ and -- operators
        'no-plusplus': 'off',
        // Allow up to 8 props, but mostly rely on max line length to limit this
        'object-curly-newline': ['error', {
            ObjectExpression: { minProperties: 8, multiline: true, consistent: true },
            ObjectPattern: { minProperties: 8, multiline: true, consistent: true },
            ImportDeclaration: { minProperties: 8, multiline: true, consistent: true },
            ExportDeclaration: { minProperties: 8, multiline: true, consistent: true },
        }],
        // Put operators at the end of the line (?, :, &&, ||)
        'operator-linebreak': ['error', 'after'],
        // Don't enforce a blank line or not at the beginning of a block
        'padded-blocks': 'off',
        // Don't enforce promises being rejected with Error objects
        'prefer-promise-reject-errors': 'off',
        // Use 4 space indents in templates
        'vue/html-indent': ['error', 4],
        // Allow max 2 attributes on a single line element, but once the
        // element is spread across multiple, require one attribute per line
        'vue/max-attributes-per-line': ['error', {
            'singleline': 3,
            'multiline': {
                'max': 1,
                'allowFirstLine': true
            }
        }],
        // Max cyclomatic complexity per function
        complexity: ['error', 8],

        // Don't enforce this since we may define small view model classes together
        // in the same file
        'max-classes-per-file': 'off',

        // Max depth that blocks can be nested
        'max-depth': ['error', { max: 3 }],

        // Max lines per file
        'max-lines': ['error', {
            max: 500,
            skipBlankLines: false,
            skipComments: true,
        }],

        // Max lines per function
        'max-lines-per-function': ['error', 75],

        // Max number of nested callbacks allowed
        'max-nested-callbacks': ['error', { max: 3 }],

        // Max number of params allowed for a function
        'max-params': ['error', { max: 5 }],

        // Set this to warn now until we are compliant
        'prefer-object-spread': 'warn',

        // Require dynamic import names using alphanumeric kebab-case
        'import/dynamic-import-chunkname': ['error', {
            webpackChunknameFormat: '[a-z0-9-]+',
        }],

        // Ensure js files are not imported with trailing .js.  This doesn't seem to
        // work if we want to require .vue extensions, but I think it's because our
        // use of ~ as the alias.  We should look into the vue enforcement via webpack.
        'import/extensions': ['error', 'ignorePackages', { js: 'never', ts: 'never' }],

        // Lower to warn for now util we can resolve the existing issues
        'import/no-cycle': ['warn', { maxDepth: Infinity }],

        // This exists in vue-ssr-build but we re-declare this here so we can
        // ignore resourceQueries for inline SVG's
        'import/no-unresolved': ['error', {
            commonjs: true,
            ignore: ['^~', '\\.svg\\?inline$'],
        }],

        // Use our own custom rule instead of the base rule since our aliases conflict with
        // npm scoped packages
        'import/order': 'off',
        'urbn-import-order/order': ['error', { 'newlines-between': 'always' }],

        // Do not allow hyphenated prop attributes for custom components
        'vue/attribute-hyphenation': ['error', 'never'],

        // This rule is added in 5.0 and should already be strongly recommended,
        // so this can likely be deleted but keeping here just in case
        // 'vue/component-name-in-template-casing': ['error', 'PascalCase' ],

        // Allow max 3 attributes on a single line element, but once the
        // element is spread across multiple, require one attribute per line
        // starting on a new line
        'vue/max-attributes-per-line': ['error', {
            singleline: 3,
            multiline: {
                max: 1,
                allowFirstLine: false,
            },
        }],

        // Turn off - we prefer 2 newlines and that can't be configured
        'vue/multiline-html-element-content-newline': 'off',
        'vue/singleline-html-element-content-newline': 'error',

        // Always put closing brackets on the same line
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never',
        }],

        // Require a space before self-closing tags - <input />
        'vue/html-closing-bracket-spacing': ['error', {
            startTag: 'never',
            endTag: 'never',
            selfClosingTag: 'always',
        }],

        // Upgrade from warning to error, but keep the default configuration
        'vue/attributes-order': 'error',
        'vue/order-in-components': 'error',
    }
}
