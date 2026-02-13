import{i as l}from"./chunk-Q6L6KQJL.js";import{Ha as i,Ya as d,ab as t,bb as o,pb as e,qb as c,wa as r}from"./chunk-QVD25CY7.js";var s=class a{firebaseConfig=`{
    "hosting": [{
      "target": "portfolio",
      "public": "dist/portfolio",
      "ignore": [
        "firebase.json",
        "/**/.*",
        "/**/node_modules/**"
      ],
      "headers": [{
        "source": "/**.@",
        "headers": [{
          "key": "Cache-Control",
          "value": "max-age=31536000"
        }]
      }]
    }]
  }`;static \u0275fac=function(n){return new(n||a)};static \u0275cmp=i({type:a,selectors:[["app-producao"]],decls:40,vars:2,consts:[[1,"footer-layout"],["role","article",1,"footer-card","footer-card--about","footer-card--glass-holographic"],[1,"footer-header"],[1,"about-pulse"],[1,"footer-body"],[1,"footer-block"],[1,"pipeline-diagram"],[1,"production-metrics"],[1,"metric-group"],[1,"deploy-status-grid"],[1,"deploy-status"],[1,"status-live"],[1,"terminal-frame"],[1,"terminal-header"],[1,"status-green"],[1,"language-json"]],template:function(n,p){n&1&&(t(0,"section",0)(1,"article",1)(2,"header",2)(3,"span",3),e(4,"\u25CF"),o(),e(5," PRODUCTION_PIPELINE.log "),o(),t(6,"div",4)(7,"div",5)(8,"div",6)(9,"pre")(10,"code"),e(11,`

            \`\`\`
            mermaid
              graph LR
              A[Code Push] --> B[GitHub Actions]
              B --> C[ng build --prod]
              C --> D[Firebase Hosting]
              D --> E[CDN Global Edge]
              E --> F[5 Live Projects]
              G[Monitoring] --> D`),o(),e(12,"\n              \n            ```\n          "),o()()(),t(13,"div",5)(14,"div",7)(15,"div",8)(16,"h3"),e(17,"\u{1F3ED} Production Deployments"),o(),t(18,"div",9)(19,"div",10)(20,"span",11),e(21,"\u25CF"),o(),e(22," Portfolio "),t(23,"code"),e(24,"portfolio-23948217-d156e.web.app"),o()(),t(25,"div",10)(26,"span",11),e(27,"\u25CF"),o(),e(28," GitHub Stats "),t(29,"code"),e(30,"github-stats-68157678-42e04.web.app"),o()()()(),t(31,"div",12)(32,"div",13)(33,"span"),e(34,"firebase.json (Produ\xE7\xE3o)"),o(),t(35,"span",14),e(36,"\u25CF LIVE"),o()(),t(37,"pre")(38,"code",15),e(39),o()()()()()()()()),n&2&&(r(),d("@cardEnter",void 0),r(38),c(p.firebaseConfig))},dependencies:[l],styles:["[_nghost-%COMP%]{display:block;display:flex;flex-direction:column}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]{letter-spacing:1px;opacity:.9}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]   .about-pulse[_ngcontent-%COMP%]{color:var(--footer-accent-primary);animation:pulse 1.6s infinite}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{color:var(--footer-glass-text-primary)}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]   .footer-meta[_ngcontent-%COMP%]{color:var(--footer-glass-text-secondary)}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%]{padding:var(--space-md);border-bottom:2px solid var(--footer-glass-divider)}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%]:last-child{border-bottom:none}"],changeDetection:0})};export{s as ProducaoComponent};
