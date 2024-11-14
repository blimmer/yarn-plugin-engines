/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-engines",
factory: function (require) {
var plugin=(()=>{var m=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var N=Object.getOwnPropertyNames;var P=Object.prototype.hasOwnProperty;var c=(o=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(o,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):o)(function(o){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+o+'" is not supported')});var k=(o,r)=>{for(var t in r)m(o,t,{get:r[t],enumerable:!0})},b=(o,r,t,e)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of N(r))!P.call(o,n)&&n!==t&&m(o,n,{get:()=>r[n],enumerable:!(e=C(r,n))||e.enumerable});return o};var j=o=>b(m({},"__esModule",{value:!0}),o);var O={};k(O,{default:()=>F});var i=c("@yarnpkg/core");var p=class{constructor(r){this.throwWrongEngineError=(r,t)=>{let e=this.formatErrorMessage(r,t);this.throwError(e)};this.throwError=r=>{switch(this.errorReporter){case"Yarn":this.reportYarnError(r);break;case"Console":default:this.reportConsoleError(r);break}};this.reportYarnError=r=>{throw new i.ReportError(i.MessageName.UNNAMED,r)};this.reportConsoleError=r=>{console.error(r),process.exit(1)};this.formatErrorMessage=(r,t)=>{let{configuration:e}=this.project,n=i.formatUtils.applyStyle(e,i.formatUtils.pretty(e,this.engine,"green"),2),g=i.formatUtils.pretty(e,r,"cyan"),s=i.formatUtils.pretty(e,t,"cyan"),d=`The current ${n} version ${g} does not satisfy the required version ${s}.`;return i.formatUtils.pretty(e,d,"red")};this.project=r.project,this.errorReporter=r.errorReporter}};var E=c("fs"),u=c("path"),f=c("semver"),y=c("@yarnpkg/fslib"),a=c("@yarnpkg/core");var V=".nvmrc",T=".node-version",l=class extends p{constructor(){super(...arguments);this.resolveNodeFromFileRequiredVersion=t=>{let{configuration:e,cwd:n}=this.project,g=(0,u.resolve)(y.npath.fromPortablePath(n),t),s=a.formatUtils.applyStyle(e,a.formatUtils.pretty(e,this.engine,"green"),2);if(!(0,E.existsSync)(g)){this.throwError(a.formatUtils.pretty(e,`Unable to verify the ${s} version. The ${t} file does not exist.`,"red"));return}let d=(0,E.readFileSync)(g,"utf-8").trim();if((0,f.validRange)(d))return d;let w=a.formatUtils.pretty(e,t,"yellow");this.throwError(a.formatUtils.pretty(e,`Unable to verify the ${s} version. The ${w} file contains an invalid semver range.`,"red"))}}get engine(){return"Node"}verifyEngine(t){let e=t.node;e!=null&&([V,T].forEach(n=>{e===n&&(e=this.resolveNodeFromFileRequiredVersion(n))}),(0,f.satisfies)(process.version,e,{includePrerelease:!0})||this.throwWrongEngineError(process.version.replace(/^v/i,""),e.replace(/^v/i,"")))}};var R=c("semver"),v=c("@yarnpkg/core");var h=class extends p{get engine(){return"Yarn"}verifyEngine(r){let t=r.yarn;t!=null&&((0,R.satisfies)(v.YarnVersion,t,{includePrerelease:!0})||this.throwWrongEngineError(v.YarnVersion,t))}};var x=o=>r=>{if(process.env.PLUGIN_YARN_ENGINES_DISABLE!=null||Object.keys(process.env).some(s=>s.includes("DEPENDABOT")))return;let{engines:e={}}=r.getWorkspaceByCwd(r.cwd).manifest.raw,n={project:r,errorReporter:o};[new l(n),new h(n)].forEach(s=>s.verifyEngine(e))},Y={hooks:{validateProject:x("Yarn"),setupScriptEnvironment:x("Console")}},F=Y;return j(O);})();
return plugin;
}
};
