# Problem importing socket.io into Stencil app

Neither socket.io nor socket.io-client can be imported into Stencil.

## socket.io

Rollup error ->

```terminal
   at /Users/matthias/Documents/Projekte/Temp/_Stencil/stencil-socketio-problem/node_modules/rollup/dist/rollup.js:19445:20
    at <anonymous>
  code: 'PARSE_ERROR',
  pos: 42,
  loc:
   { file: '/Users/matthias/Documents/Projekte/Temp/_Stencil/stencil-socketio-problem/node_modules/mime-db/db.json',
     line: 2,
     column: 40 },
  frame: '1: {\n2:   "application/1d-interleaved-parityfec": {\n                                           ^\n3:     "source": "iana"\n4:   },' }

[ ERROR ]  bundling: node_modules/mime-db/db.json, line: 2
           Unexpected token

      L2:    "application/1d-interleaved-parityfec": {
      L3:      "source": "iana"

[ ERROR ]  rollup died at
           /Users/matthias/Documents/Projekte/Temp/_Stencil/stencil-socketio-problem/node_modules/@stencil/core/dist/compiler/index.js:3512:19
           at Generator.throw (<anonymous>) at rejected
           (/Users/matthias/Documents/Projekte/Temp/_Stencil/stencil-socketio-problem/node_modules/@stencil/core/dist/compiler/index.js:3472:65)
           at <anonymous>

[06:26.5]  build failed, watching for changes... in 3.87 s
```

## socket.io-client

Error in browser / bundle (socket not included) ->

```terminal
app.core.js:1670 ReferenceError: socketIo is not defined
    at app-home.js:24511
```

## Switch between both

You can try both module by switching between them with npm install / uninstall. The imports are commented out in the file socket.ts.
