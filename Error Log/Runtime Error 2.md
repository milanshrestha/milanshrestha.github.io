[11ty] Problem writing Eleventy templates:
[11ty] 1. Having trouble rendering liquid template ./src/pages/blog.md (via TemplateContentRenderError)
[11ty] 2. expected ":" after filter name, file:C:\Users\Milan Shrestha\Projects\ms-web\src\_includes\components\post-card.njk, line:4, col:46 (via TokenizationError)
[11ty]
[11ty] Original error stack trace: expected ":" after filter name, file:C:\Users\Milan Shrestha\Projects\ms-web\src\_includes\components\post-card.njk, line:4, col:46
[11ty]    2|   <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
[11ty]    3|   <p>{{ post.data.summary }}</p>
[11ty] >> 4|   <span class="post-date">{{ post.date | date("MMMM D, YYYY") }}</span>
[11ty]                                                    ^
[11ty]    5| </article>
[11ty] TokenizationError: expected ":" after filter name, file:C:\Users\Milan Shrestha\Projects\ms-web\src\_includes\components\post-card.njk, line:4, col:46
[11ty]     at Tokenizer.error (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:2005:16)
[11ty]     at Tokenizer.readFilter (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:1883:24)
[11ty]     at Tokenizer.readFilters (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:1854:33)
[11ty]     at Tokenizer.readFilteredValue (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:1848:30)
[11ty]     at new Output (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:2390:42)
[11ty]     at Parser.parseToken (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:2855:24)
[11ty]     at Parser.parseTokens (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:2834:37)
[11ty]     at Parser.parse (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:2826:21)
[11ty]     at Parser._parseFile (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:2890:21)
[11ty]     at _parseFile.next (<anonymous>)
[11ty] Copied 7 Wrote 0 files in 1.51 seconds (v3.1.2)
[11ty] Eleventy Fatal Error (CLI):
[11ty] 1. Having trouble rendering liquid template ./src/pages/blog.md (via TemplateContentRenderError)
[11ty] 2. expected ":" after filter name, file:C:\Users\Milan Shrestha\Projects\ms-web\src\_includes\components\post-card.njk, line:4, col:46 (via TokenizationError)
[11ty]
[11ty] Original error stack trace: expected ":" after filter name, file:C:\Users\Milan Shrestha\Projects\ms-web\src\_includes\components\post-card.njk, line:4, col:46
[11ty]    2|   <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
[11ty]    3|   <p>{{ post.data.summary }}</p>
[11ty] >> 4|   <span class="post-date">{{ post.date | date("MMMM D, YYYY") }}</span>
[11ty]                                                    ^
[11ty]    5| </article>
[11ty] TokenizationError: expected ":" after filter name, file:C:\Users\Milan Shrestha\Projects\ms-web\src\_includes\components\post-card.njk, line:4, col:46
[11ty]     at Tokenizer.error (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:2005:16)
[11ty]     at Tokenizer.readFilter (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:1883:24)
[11ty]     at Tokenizer.readFilters (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:1854:33)
[11ty]     at Tokenizer.readFilteredValue (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:1848:30)
[11ty]     at new Output (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:2390:42)
[11ty]     at Parser.parseToken (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:2855:24)
[11ty]     at Parser.parseTokens (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:2834:37)
[11ty]     at Parser.parse (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:2826:21)
[11ty]     at Parser._parseFile (C:\Users\Milan Shrestha\Projects\ms-web\node_modules\liquidjs\dist\liquid.node.js:2890:21)
[11ty]     at _parseFile.next (<anonymous>)