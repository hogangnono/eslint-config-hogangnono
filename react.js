module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        './rules/react',
        './rules/base'
    ].map(require.resolve)
};
