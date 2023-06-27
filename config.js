import mainConfig from './config.json';

let localConfig = {};
try {
  localConfig = require('./config.json');
} catch (err) {
  localConfig = {};
}
const config = { ...mainConfig, ...localConfig };

export default config;

