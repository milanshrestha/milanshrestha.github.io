[11ty] Eleventy Fatal Error (CLI):
[11ty] 1. Error in your Eleventy config file '.eleventy.js'. (via EleventyConfigError)
[11ty] 2. There was a problem importing '.eleventy.js' via import(cjs) (via EleventyImportError)
[11ty] 3. Unexpected token ':' (via SyntaxError)
[11ty] 
[11ty] Original error stack trace: /Users/milanshrestha/Projects/ms-web-v1/.eleventy.js:61
[11ty]         pathPrefix: "/",;
[11ty]                   ^
[11ty] 
[11ty] SyntaxError: Unexpected token ':'
[11ty]     at wrapSafe (node:internal/modules/cjs/loader:1692:18)
[11ty]     at Module._compile (node:internal/modules/cjs/loader:1735:20)
[11ty]     at Object..js (node:internal/modules/cjs/loader:1893:10)
[11ty]     at Module.load (node:internal/modules/cjs/loader:1481:32)
[11ty]     at Module._load (node:internal/modules/cjs/loader:1300:12)
[11ty]     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
[11ty]     at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)
[11ty]     at loadCJSModuleWithModuleLoad (node:internal/modules/esm/translators:336:3)
[11ty]     at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:239:7)
[11ty]     at ModuleJob.run (node:internal/modules/esm/module_job:377:25)