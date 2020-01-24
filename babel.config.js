const cjsEnvConfig = {
    targets: {
        node: '8',
    },
};

const esmEnvConfig = {
    loose: false,
    modules: false,
    targets: {
        esmodules: true,
    },
    shippedProposals: true,
};

const presets = [
    ['@babel/preset-env', process.env.BABEL_ENV === 'esm' ? esmEnvConfig : cjsEnvConfig],
    '@babel/preset-flow',
];

const plugins = [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
    'babel-plugin-macros',
];

module.exports = {presets, plugins};
