// /next.config.js
module.exports = {
    /* Outras configurações do Next.js */
  
    // Permitir a renderização de HTML personalizado
    webpack(config) {
      config.module.rules.push({
        test: /\.html$/,
        use: 'raw-loader',
      });
      return config;
    },
  };
  