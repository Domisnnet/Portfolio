import{k as s}from"./chunk-CDSBP47I.js";import{Ka as a,db as t,eb as o,fb as m,ob as e,sb as r,xa as d}from"./chunk-6QLXZF2D.js";var l=class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=a({type:i,selectors:[["app-producao"]],decls:30,vars:8,consts:[[1,"production-wow","cosmic-section"],[1,"stars-overlay","production-lines"],[1,"pipeline-diagram"],[1,"production-metrics"],[1,"metric-group"],[1,"deploy-status-grid"],[1,"deploy-status"],[1,"status-live"],[1,"terminal-frame"],[1,"terminal-header"],[1,"status-green"],[1,"language-json"]],template:function(n,c){n&1&&(t(0,"section",0),m(1,"div",1),t(2,"div",2),e(3," ```mermaid graph LR A[Code Push] --> B[GitHub Actions] B --> C[ng build --prod] C --> D[Firebase Hosting] D --> E[CDN Global Edge] E --> F[5 Live Projects] G[Monitoring] --> D ``` "),o(),t(4,"div",3)(5,"div",4)(6,"h3"),e(7,"\u{1F3ED} Production Deployments"),o(),t(8,"div",5)(9,"div",6)(10,"span",7),e(11,"\u25CF"),o(),e(12," Portfolio "),t(13,"code"),e(14,"portfolio-23948217-d156e.web.app"),o()(),t(15,"div",6)(16,"span",7),e(17,"\u25CF"),o(),e(18," GitHub Stats "),t(19,"code"),e(20,"github-stats-68157678-42e04.web.app"),o()()()(),t(21,"div",8)(22,"div",9)(23,"span"),e(24,"firebase.json (Produ\xE7\xE3o)"),o(),t(25,"span",10),e(26,"\u25CF LIVE"),o()(),t(27,"pre")(28,"code",11),e(29),o()()()()()),n&2&&(d(29),r("","{",`
  "hosting": [`,"{",`
    "target": "portfolio",
    "public": "dist/portfolio",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "headers": [`,"{",`
      "source": "**/*.@(js|css)",
      "headers": [`,"{",`
        "key": "Cache-Control",
        "value": "max-age=31536000"
      `,"}",`]
    `,"}",`]
  `,"}",`]
`,"}"))},dependencies:[s],encapsulation:2,changeDetection:0})};export{l as ProducaoComponent};
