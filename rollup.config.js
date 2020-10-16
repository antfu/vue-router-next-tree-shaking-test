import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  external: ['vue'],
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [nodeResolve()]
};
