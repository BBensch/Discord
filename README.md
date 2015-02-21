# Project-X
Super Secret Fun Time

To Run:

* Pull repository
* Install Node
* npm install in repo
* In Windows: node .\bin\www

## Public / Private Development
If you are working in a public environment, just typing `npm start` will launch
the 'public' server.  If you are in a private environment, setting the
`IN_PRIVATE` environment variable from your shell will launch the 'private'
server.  On a \*nix shell, this is done by `IN_PRIVATE=asdf npm start`

If working in a windows environment, open a new cmd.exe prompt and run set `in_private=asdf` then run `npm start`. To revert to public, a new cmd.exe must be started.
