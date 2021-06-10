const path = require("path");
module.exports = {
    externals: [nodeExternals(), 'pg', 'sqlite3', 'tedious', 'pg-hstore', 'pg'],
    plugins: [
        new webpack.ContextReplacementPlugin(
        /Sequelize(\\|\/)/,
        path.resolve(__dirname, './src'),
        ),
    ],
    target: 'node',
    node: {
      __dirname: false,
    },
}; 