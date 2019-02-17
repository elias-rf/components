module.exports = {
    source: { include: 'src' },
    opts: {
        recurse: true,
        verbose: true,
        template: './node_modules/ink-docstrap/template',
        encoding: 'utf8',
        destination: './doc/',
        readme: 'README.md',
    },
    templates: {
        systemName: 'erLib',
        navType: 'inline',
        collapseSymbols: false,
        theme: 'cerulean',
    },
};
