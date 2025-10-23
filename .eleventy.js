import { env } from 'process';

import { minify } from 'html-minifier-terser';

export default function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy('public');

  // In dev mode, don't minify
  if (env.NODE_ENV === 'production') {
    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
      if (outputPath?.endsWith('.html')) {
        const minified = minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: {
            safari10: false,
            ecma: undefined,
            output: { comments: false },
          },
        });
        return minified;
      }
      return content;
    });
  }

  return {
    dir: {
      input: 'src-11ty',
      output: 'dist',
    },
  };
}
