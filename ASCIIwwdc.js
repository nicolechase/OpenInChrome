// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: file-alt; share-sheet-inputs: url;
// Takes a URL to a WWDC session as
// input and searches asciiwwdc.com
// for the transcript. Works great
// when run from the share sheet in
// the official WWDC app.
if (args.urls.length == 0) {
  log("Run the script from the share sheet when sharing a URL from the WWDC app.")
  return
}
let url = args.urls[0]
let yearRegex = /wwdc(\d+)/
let yearMatch = url.match(yearRegex)
let year = "20" + yearMatch[1]
let sessionRegex = /\d+$/
let sessionMatch = url.match(sessionRegex)
let session = sessionMatch[0]
let asciiURL = "https://"
  + "asciiwwdc.com/" + year
  + "/sessions/" + session
Safari.open(asciiURL)