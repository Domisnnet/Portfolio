import{i as u}from"./chunk-Q6L6KQJL.js";import{Ha as i,Ya as r,ab as t,bb as e,cb as d,pb as n,sb as m,wa as a}from"./chunk-QVD25CY7.js";var l=class s{static \u0275fac=function(o){return new(o||s)};static \u0275cmp=i({type:s,selectors:[["app-github-stats"]],decls:23,vars:3,consts:[["data-footer-theme","github-stats",1,"footer-layout"],["role","article",1,"footer-card","footer-card--github-stats"],[1,"footer-header"],[1,"footer-body"],[1,"footer-block"],[1,"stats-diagram"],[1,"stats-code"],[1,"terminal-frame"],[1,"terminal-header"],[1,"status-green"],[1,"language-python"],[1,"footer-actions"],["href","https://github-stats-68157678-42e04.web.app/","target","_blank",1,"footer-btn"]],template:function(o,p){o&1&&(t(0,"section",0)(1,"article",1)(2,"header",2),n(3," GITHUB_STATS_PIPELINE.log "),e(),t(4,"div",3)(5,"div",4)(6,"div",5),n(7," ```mermaid sequenceDiagram User->>Frontend: /generate?user=Domisnnet Frontend->>CloudFunction: POST /stats CloudFunction->>GitHubAPI: GET /users/Domisnnet GitHubAPI->>CloudFunction: JSON Data CloudFunction->>PythonMatplotlib: Generate SVG PythonMatplotlib->>CloudFunction: stats.svg CloudFunction->>Firestore: Cache 1h CloudFunction->>Frontend: SVG Response Frontend->>User: Display Stats ``` "),e(),t(8,"div",6)(9,"div",7)(10,"div",8)(11,"span"),n(12,"cloud-functions/stats.py"),e(),t(13,"span",9),n(14,"\u25CF PRODUCTION"),e()(),t(15,"pre")(16,"code",10),n(17),e()()()()(),t(18,"div",4),d(19,"div",6),e(),t(20,"footer",11)(21,"a",12),n(22," \u{1F534} LIVE DEMO "),e()()()()()),o&2&&(a(),r("@cardEnter",void 0),a(16),m(`# SEU GITHUB STATS REAL
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
    return send_svg(fig)`))},dependencies:[u],encapsulation:2,changeDetection:0})};export{l as GithubStatsComponent};
