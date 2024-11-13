module.exports = {
	env: {
		node: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "simple-import-sort"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		"arrow-parens": "off",
		"function-paren-newline": "off",
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
				ignoredNodes: ["ConditionalExpression"],
			},
		],
		"linebreak-style": [2, "unix"],
		"no-console": [
			"error",
			{
				allow: ["info", "warn", "error", "time", "timeEnd"],
			},
		],
		"no-duplicate-imports": "error",
		"no-extra-parens": "error",
		"no-return-await": "error",
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		semi: ["error", "always"],
		"no-multiple-empty-lines": ["error", { max: 1 }],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				args: "all",
				argsIgnorePattern: "^_",
				caughtErrors: "all",
				caughtErrorsIgnorePattern: "^_",
				destructuredArrayIgnorePattern: "^_",
				varsIgnorePattern: "^_",
				ignoreRestSiblings: true,
			},
		],
	},
};
