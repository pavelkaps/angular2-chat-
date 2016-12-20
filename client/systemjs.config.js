var isPublic = typeof window != "undefined";

(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   (isPublic)? '@angular' : 'node_modules/@angular',
    'rxjs':                       (isPublic)? 'rxjs' : 'node_modules/rxjs',
    'socket.io-client':           (isPublic)? 'socket.io-client':'node_modules/socket.io-client',
    'ui-router-ng2':              (isPublic)? 'ui-router-ng2':'node_modules/ui-router-ng2'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'upgrade'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  packages['@angular/material'] = { main: 'material.umd.js', defaultExtension: 'js' };
  packages['socket.io-client'] = {  main: '/dist/socket.io.js', defaultExtension: 'js' };
  packages['ui-router-ng2'] = {  main: '/_bundles/ui-router-ng2.js', defaultExtension: 'js' };

  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);