import{j as d}from"./chunk-DZANU77T.js";import{Ca as a,Oa as s,db as i,hb as o,ib as t,wb as e,zb as c}from"./chunk-SFRYRNXD.js";var l=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=s({type:r,selectors:[["app-github-stats"]],decls:29,vars:3,consts:[[1,"footer-layout"],["role","article",1,"footer-card","footer-card--about","footer-card--glass-holographic"],[1,"footer-header"],[1,"about-pulse"],[1,"footer-body"],[1,"footer-block"],[1,"stats-diagram"],[1,"stats-code"],[1,"terminal-frame"],[1,"terminal-header"],[1,"status-green"],[1,"language-python"],[1,"footer-actions"],["href","https://github-stats-68157678-42e04.web.app/","target","_blank",1,"footer-btn"],[1,"footer-meta","executing"]],template:function(n,p){n&1&&(o(0,"section",0)(1,"article",1)(2,"header",2)(3,"span",3),e(4,"\u25CF"),t(),e(5," GITHUB_STATS_PIPELINE.log "),t(),o(6,"div",4)(7,"div",5)(8,"div",6)(9,"pre")(10,"code"),e(11,`

            \`\`\`
            mermaid
              sequenceDiagram
              User->>Frontend: /generate?user=Domisnnet
              Frontend->>CloudFunction: POST /stats
              CloudFunction->>GitHubAPI: GET /users/Domisnnet
              GitHubAPI->>CloudFunction: JSON Data
              CloudFunction->>PythonMatplotlib: Generate SVG
              PythonMatplotlib->>CloudFunction: stats.svg
              CloudFunction->>Firestore: Cache 1h
              CloudFunction->>Frontend: SVG Response
              Frontend->>User: Display`),t(),e(12," \n            \n            ```\n          "),t()(),o(13,"div",7)(14,"div",8)(15,"div",9)(16,"span"),e(17,"cloud-functions/stats.py"),t(),o(18,"span",10),e(19,"\u25CF PRODUCTION"),t()(),o(20,"pre")(21,"code",11),e(22),t(),e(23,`
            `),t()()()(),o(24,"footer",12)(25,"a",13),e(26," \u{1F534} LIVE DEMO "),t(),o(27,"span",14),e(28," Executing: PIPELINE.bin "),t()()()()()),n&2&&(a(),i("@cardEnter",void 0),a(21),c(`# SEU GITHUB STATS REAL
              def generate_stats(request):
              user = request.args.get('username')
              # GitHub API
              repos = requests.get(f"https://api.github.com/users/`,"{","user","}",`/repos")
              data = repos.json()
              # Matplotlib SVG
              fig, ax = plt.subplots(figsize=(10, 6))
              languages = get_top_languages(data)
              ax.pie(languages.values(), labels=languages.keys())
              # Cache Firestore
              cache_stats(user, fig)
              return send_svg(fig)`))},dependencies:[d],styles:["[_nghost-%COMP%]{display:block;display:flex;flex-direction:column}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]{letter-spacing:1px;opacity:.9}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]   .about-pulse[_ngcontent-%COMP%]{color:var(--footer-accent-primary);animation:pulse 1.6s infinite}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{color:var(--footer-glass-text-primary)}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-meta[_ngcontent-%COMP%]{color:var(--footer-text-primary)}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%]{padding:var(--space-md);border-bottom:2px solid var(--footer-glass-divider)}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%]:last-child{border-bottom:none}.footer-card--glass-holographic[_ngcontent-%COMP%]   .executing[_ngcontent-%COMP%]{color:var(--footer-accent-secondary);font-style:italic;font-weight:var(--font-bolder);padding-left:15px}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-btn[_ngcontent-%COMP%]{background:var(--footer-glass-btn-bg);border:3px solid var(--footer-glass-btn-border);color:var(--footer-glass-btn-text);border-radius:var(--radius-pill);margin-top:var(--space-md);padding:var(--space-sm) var(--space-md);cursor:pointer;text-decoration:none}"],changeDetection:0})};export{l as GithubStatsComponent};
