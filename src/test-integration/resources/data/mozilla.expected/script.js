/* automatically generated by JSCoverage - do not edit */
try {
  Components.utils.import('resource://app/modules/jscoverage.jsm');
  dump('script.js: successfully imported jscoverage module\n');
}
catch (e) {
  _$jscoverage = {};
  dump('script.js: failed to import jscoverage module - coverage not available for this file\n');
}
if (! _$jscoverage['script.js']) {
  _$jscoverage['script.js'] = [];
  _$jscoverage['script.js'][1] = 0;
  _$jscoverage['script.js'][4] = 0;
  _$jscoverage['script.js'][5] = 0;
}
_$jscoverage['script.js'][1]++;
dump("hello");
_$jscoverage['script.js'][4]++;
if ((("a" < "b") && ("a" > "b"))) {
  _$jscoverage['script.js'][5]++;
  dump("?");
}
