import{i as c}from"./chunk-Q6L6KQJL.js";import{Ha as a,Ya as d,ab as o,bb as e,pb as t,wa as r}from"./chunk-QVD25CY7.js";var l=class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=a({type:i,selectors:[["app-architecture"]],decls:41,vars:1,consts:[[1,"footer-layout"],["role","article",1,"footer-card","footer-card--about","footer-card--glass-holographic"],[1,"footer-header"],[1,"about-pulse"],[1,"footer-body"],[1,"footer-block"],[1,"infra-diagram"],[1,"tech-specs-complete"],[1,"deploy-list"],[1,"spec-group"],[1,"metrics-list"],[1,"deploy-commands"],[1,"language-bash"]],template:function(n,s){n&1&&(o(0,"section",0)(1,"article",1)(2,"header",2)(3,"span",3),t(4,"\u25CF"),e(),t(5," INFRASTRUCTURE_ARCHITECTURE.log "),e(),o(6,"div",4)(7,"div",5)(8,"div",6)(9,"pre")(10,"code"),t(11,`
          
            \`\`\`
            mermaid
              graph TD
              A[DomisDev Frontend] --> B[Firebase Hosting CDN]
              A --> C[GitHub Actions CI/CD]
              C --> D[ng build --prod]
              D --> B
              E[GitHub API] --> F[Cloud Functions Python]
              F --> G[Firestore Cache]
              G --> A
              H[5 Live Projects] --> B`),e(),t(12,"\n\n            ```\n          "),e()()(),o(13,"div",5)(14,"div",7)(15,"h4"),t(16,"\u{1F525} Firebase Deployments"),e(),o(17,"div",8)(18,"code"),t(19,"portfolio-23948217-d156e.web.app"),e(),o(20,"code"),t(21,"github-stats-68157678-42e04.web.app"),e(),o(22,"code"),t(23,"drakonik-nexus-75177593-75741.web.app"),e(),o(24,"code"),t(25,"shadow-flip-oh-86570817-f8cc4.web.app"),e()(),o(26,"div",9)(27,"h4"),t(28,"\u26A1 Performance Metrics"),e(),o(29,"div",10)(30,"div"),t(31,"Portfolio: 98/100 Lighthouse"),e(),o(32,"div"),t(33,"TTI: 1.2s | FCP: 0.8s"),e(),o(34,"div"),t(35,"5 Projects 99.9% Uptime"),e()()()()(),o(36,"div",5)(37,"div",11)(38,"pre")(39,"code",12),t(40,`# DOMISDEV DEPLOY PIPELINE
          ng build --configuration production
          firebase deploy --only hosting:portfolio
          firebase deploy --only functions:stats-generator
          GitHub Actions Trigger
          git push origin main \u2192 LIVE`),e()()()()()()()),n&2&&(r(),d("@cardEnter",void 0))},dependencies:[c],styles:["[_nghost-%COMP%]{display:block;display:flex;flex-direction:column}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]{letter-spacing:1px;opacity:.9}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]   .about-pulse[_ngcontent-%COMP%]{color:var(--footer-accent-primary);animation:pulse 1.6s infinite}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{color:var(--footer-glass-text-primary)}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]   .footer-meta[_ngcontent-%COMP%]{color:var(--footer-glass-text-secondary)}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%]{padding:var(--space-md);border-bottom:2px solid var(--footer-glass-divider)}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%]:last-child{border-bottom:none}"],changeDetection:0})};export{l as ArchitectureComponent};
