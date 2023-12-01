var path = require('path');

const mode = 'development';

module.exports = {
  // mode: 'production',
  // p5i NODE_ENV pak pustim
  //NODE_ENV=development npm run build
  mode: mode,
  entry:'./src/app.ts',
  output : {
      filename:'bundle.js',
      path : path.resolve(__dirname,'./dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  //devtool: false,
  devtool:'source-map',

  devServer :{
    port:3000,
    //je nutn0 m9t ten radek na zacatku var path = require('path');
    //takhle je to aboslutni cesta
    //mohu pouzit i static:./dist ...oboje je pak v prohlizeci root pro server localhost:3000

    //ta ecsta jeste zalezi na output property, kdyz je nakonfigurovana pro module

    static:path.resolve(__dirname,'./dist')
}

};
