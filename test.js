const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('planner.html', 'utf8');
const script = fs.readFileSync('script.js', 'utf8');

const dom = new JSDOM(html, { runScripts: "dangerously" });

// We need to polyfill localStorage for JSDOM
dom.window.localStorage = {
  getItem: function(key) { return null; },
  setItem: function(key, val) {},
  removeItem: function(key) {},
  clear: function() {}
};

try {
  dom.window.eval(script);
  console.log("No errors on load.");
  console.log("menuBody HTML length:", dom.window.document.getElementById('menuBody').innerHTML.length);
} catch (e) {
  console.error("Error executing script:", e);
}
