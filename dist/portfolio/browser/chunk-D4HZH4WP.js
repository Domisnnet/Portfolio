import{i as s}from"./chunk-Q6L6KQJL.js";import{Ha as m,Ya as c,ab as t,bb as o,cb as n,pb as e,qb as r,wa as a}from"./chunk-QVD25CY7.js";var p=class d{appComponentCode=`@Component({
  standalone: true,
  imports: [StackPillComponent, HeroLayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    <app-hero-layout>
      @for (tech of portfolioStack; track tech.name) {
        <app-stack-pill 
          [tag]="tech.name" 
          [category]="tech.category">
        </app-stack-pill>
      }
    </app-hero-layout>
  \`
  })
  export class AppComponent {
    portfolioStack = [
      {name: 'Angular', category: 'core'},
      {name: 'Firebase', category: 'backend'},
      {name: 'SCSS', category: 'style'}
    ];
  }`;stackPillComponentCode=`tag = input.required<string>();
  category = input.required<PillCategory>();
  isFlipped = signal(false);
  pillConfig = computed(() => {
    const config = TAG_CONFIG[this.tag()] ?? {
      label: this.tag(),
      iconPath: \`assets/icons/\${this.tag().toLowerCase()}.svg\`,
      category: 'frontend' as const
    };
    return config;
  });

  flipPill() {
    this.isFlipped.update(flipped => !flipped);
    // Animation trigger
  }`;static \u0275fac=function(i){return new(i||d)};static \u0275cmp=m({type:d,selectors:[["app-angular"]],decls:78,vars:3,consts:[[1,"footer-layout"],["role","article",1,"footer-card","footer-card--about","footer-card--glass-holographic"],[1,"footer-header"],[1,"about-pulse"],[1,"footer-body"],[1,"footer-block"],[1,"architecture-diagram"],[1,"lighthouse-metrics"],[1,"metric-card"],[1,"score"],[1,"score-card"],[1,"code-architecture"],[1,"terminal-header"],[1,"status-live"],[1,"language-ts"],[1,"deploy-pipeline"],[1,"pipeline-steps"],[1,"step","active"]],template:function(i,l){i&1&&(t(0,"section",0)(1,"article",1)(2,"header",2)(3,"span",3),e(4,"\u25CF"),o(),e(5," ANGULAR_18_ARCHITECTURE.log "),o(),t(6,"div",4)(7,"div",5)(8,"div",6),e(9," ``` mermaid graph TB A[Angular 18 Standalone] A --> B[StackPillsComponent"),n(10,"br"),e(11,"input() tag/category] A --> C[HeroLayoutComponent"),n(12,"br"),e(13,"PC\u2192Mobile Adaptive] A --> D[CosmicThemeService"),n(14,"br"),e(15,"SCSS Variables] B --> E[SVG Icons Dynamic"),n(16,"br"),e(17,"assets/icons/] C --> F[FirebaseHostingModule"),n(18,"br"),e(19,"CDN Global] D --> G[OnPush ChangeDetection"),n(20,"br"),e(21,"60fps Animations] ``` "),o()(),t(22,"div",5)(23,"div",7)(24,"div",8)(25,"div",9),e(26,"98"),o(),t(27,"div"),e(28,"Performance"),o(),t(29,"div"),e(30,"TTI: 1.2s | FCP: 0.8s"),o()(),t(31,"div",8)(32,"div",9),e(33,"100"),o(),t(34,"div"),e(35,"Accessibility"),o(),t(36,"div"),e(37,"ARIA Labels Complete"),o()(),t(38,"div",10)(39,"div",9),e(40,"95"),o(),t(41,"div"),e(42,"Best Practices"),o(),t(43,"div"),e(44,"0 Errors Lighthouse"),o()()()(),t(45,"div",5)(46,"div",11)(47,"div",12)(48,"span"),e(49,"app.component.ts"),o(),t(50,"span",13),e(51,"\u25CF LIVE"),o()(),t(52,"pre")(53,"code",14),e(54),o()(),t(55,"div",12)(56,"span"),e(57,"stack-pill.component.ts"),o(),t(58,"span",13),e(59,"\u25CF LIVE"),o()(),t(60,"pre")(61,"code",14),e(62),o()()()(),t(63,"div",5)(64,"div",15)(65,"h4"),e(66,"\u{1F680} CI/CD Pipeline (GitHub Actions)"),o(),t(67,"div",16)(68,"div",17),e(69,"git push main"),o(),t(70,"div",17),e(71,"ng build --prod"),o(),t(72,"div",17),e(73,"firebase deploy"),o(),t(74,"div",17),e(75,"CDN Live "),t(76,"span"),e(77,"portfolio-23948217-d156e.web.app"),o()()()()()()()()),i&2&&(a(),c("@cardEnter",void 0),a(53),r(l.appComponentCode),a(8),r(l.stackPillComponentCode))},dependencies:[s],styles:["[_nghost-%COMP%]{display:block;display:flex;flex-direction:column}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]{letter-spacing:1px;opacity:.9}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]   .about-pulse[_ngcontent-%COMP%]{color:var(--footer-accent-primary);animation:pulse 1.6s infinite}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{color:var(--footer-glass-text-primary)}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]   .footer-meta[_ngcontent-%COMP%]{color:var(--footer-glass-text-secondary)}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%]{padding:var(--space-md);border-bottom:2px solid var(--footer-glass-divider)}.footer-card--glass-holographic[_ngcontent-%COMP%]   .footer-header[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%]:last-child{border-bottom:none}"],changeDetection:0})};export{p as AngularComponent};
