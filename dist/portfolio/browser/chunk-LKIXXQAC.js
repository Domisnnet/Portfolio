import{k as m}from"./chunk-CDSBP47I.js";import{Ka as i,db as t,eb as e,fb as r,ob as n,rb as u,xa as o}from"./chunk-6QLXZF2D.js";var d=class a{static \u0275fac=function(s){return new(s||a)};static \u0275cmp=i({type:a,selectors:[["app-github-stats"]],decls:17,vars:2,consts:[[1,"stats-wow","cosmic-section"],[1,"stars-overlay","stats-particles"],[1,"stats-diagram"],[1,"stats-code"],[1,"terminal-frame"],[1,"terminal-header"],[1,"status-green"],[1,"language-python"],[1,"live-stats"],["href","https://github-stats-68157678-42e04.web.app/","target","_blank",1,"stats-demo"]],template:function(s,p){s&1&&(t(0,"section",0),r(1,"div",1),t(2,"div",2),n(3," ```mermaid sequenceDiagram User->>Frontend: /generate?user=Domisnnet Frontend->>CloudFunction: POST /stats CloudFunction->>GitHubAPI: GET /users/Domisnnet GitHubAPI->>CloudFunction: JSON Data CloudFunction->>PythonMatplotlib: Generate SVG PythonMatplotlib->>CloudFunction: stats.svg CloudFunction->>Firestore: Cache 1h CloudFunction->>Frontend: SVG Response Frontend->>User: Display Stats ``` "),e(),t(4,"div",3)(5,"div",4)(6,"div",5)(7,"span"),n(8,"cloud-functions/stats.py"),e(),t(9,"span",6),n(10,"\u25CF PRODUCTION"),e()(),t(11,"pre")(12,"code",7),n(13),e()()()(),t(14,"div",8)(15,"a",9),n(16," \u{1F534} LIVE DEMO \u2192 github-stats-68157678-42e04.web.app "),e()()()),s&2&&(o(13),u(`# SEU GITHUB STATS REAL
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
    return send_svg(fig)`))},dependencies:[m],encapsulation:2,changeDetection:0})};export{d as GithubStatsComponent};
