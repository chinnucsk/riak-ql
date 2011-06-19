## riak-ql

A small query language atop the excellent JSONSelect for Riak Map phases.

### Sample usage with riak-js

    var db = require('riak-js').getClient();

    db
      .add('users')
      .map('query', ':root where .admin && !.email:val("justin@gmail.com")')
      .run()

### Install

Copy `riak-ql.js` to your `js_source_dir`. This will make `query` available in the global scope.

### Query Language

It is basically composed by a main selector, and an array of selectors exclusively used for conditions.

The main selector (the value you want to get out) is separated from the condition selectors by a `where` clause.

Boolean operators `&&` and `!` can be used as expected. There is no `||` as JSONSelect already allows this by separating expressions with a comma (`,`) - use that.

Everything is optional, which means that even an empty query will also work, returning `:root`.

### More examples

    .email
    
    .email where !.expired
    
    :root where .name("Justin"), .name("Mark")
    
    where .admin

    :root where .admin && .email:val("justin@gmail.com") && !.expired


### Warning

It is a very quick hack, not a proper parser.

Using the `where ` or `&&` literals for other than the indeded use will cause trouble.

Not recommended for production use.

### License

MIT License. JSONSelect licensed under ISC.

Copyright (c) 2010 Francisco Treacy, <francisco.treacy@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.