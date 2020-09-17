module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Personality-Test/'
    : '/',
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        // eslint-disable-next-line no-param-reassign
        args[0].title = '五大性格特質心理測驗';
        return args;
      });
  },
};
