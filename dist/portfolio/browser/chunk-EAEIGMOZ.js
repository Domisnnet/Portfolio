import{i as s}from"./chunk-Q6L6KQJL.js";import{Ha as r,Ya as p,ab as t,bb as i,cb as o,pb as e,qb as m,wa as a}from"./chunk-QVD25CY7.js";var c=class d{appComponentCode=`@Component({
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
  }`;static \u0275fac=function(n){return new(n||d)};static \u0275cmp=r({type:d,selectors:[["app-angular"]],decls:76,vars:3,consts:[["data-footer-theme","angular",1,"footer-layout"],["role","article",1,"footer-card","footer-card--angular"],[1,"footer-header"],[1,"footer-body"],[1,"footer-block"],[1,"architecture-diagram"],[1,"lighthouse-metrics"],[1,"metric-card"],[1,"score"],[1,"score-card"],[1,"code-architecture"],[1,"terminal-header"],[1,"status-live"],[1,"language-ts"],[1,"deploy-pipeline"],[1,"pipeline-steps"],[1,"step","active"]],template:function(n,l){n&1&&(t(0,"section",0)(1,"article",1)(2,"header",2),e(3," ANGULAR_18_ARCHITECTURE.log "),i(),t(4,"div",3)(5,"div",4)(6,"div",5),e(7," ```mermaid graph TB A[Angular 18 Standalone] A --> B[StackPillsComponent"),o(8,"br"),e(9,"input() tag/category] A --> C[HeroLayoutComponent"),o(10,"br"),e(11,"PC\u2192Mobile Adaptive] A --> D[CosmicThemeService"),o(12,"br"),e(13,"SCSS Variables] B --> E[SVG Icons Dynamic"),o(14,"br"),e(15,"assets/icons/] C --> F[FirebaseHostingModule"),o(16,"br"),e(17,"CDN Global] D --> G[OnPush ChangeDetection"),o(18,"br"),e(19,"60fps Animations] ``` "),i()(),t(20,"div",4)(21,"div",6)(22,"div",7)(23,"div",8),e(24,"98"),i(),t(25,"div"),e(26,"Performance"),i(),t(27,"div"),e(28,"TTI: 1.2s | FCP: 0.8s"),i()(),t(29,"div",7)(30,"div",8),e(31,"100"),i(),t(32,"div"),e(33,"Accessibility"),i(),t(34,"div"),e(35,"ARIA Labels Complete"),i()(),t(36,"div",9)(37,"div",8),e(38,"95"),i(),t(39,"div"),e(40,"Best Practices"),i(),t(41,"div"),e(42,"0 Errors Lighthouse"),i()()()(),t(43,"div",4)(44,"div",10)(45,"div",11)(46,"span"),e(47,"app.component.ts"),i(),t(48,"span",12),e(49,"\u25CF LIVE"),i()(),t(50,"pre")(51,"code",13),e(52),i()(),t(53,"div",11)(54,"span"),e(55,"stack-pill.component.ts"),i(),t(56,"span",12),e(57,"\u25CF LIVE"),i()(),t(58,"pre")(59,"code",13),e(60),i()()()(),t(61,"div",4)(62,"div",14)(63,"h4"),e(64,"\u{1F680} CI/CD Pipeline (GitHub Actions)"),i(),t(65,"div",15)(66,"div",16),e(67,"git push main"),i(),t(68,"div",16),e(69,"ng build --prod"),i(),t(70,"div",16),e(71,"firebase deploy"),i(),t(72,"div",16),e(73,"CDN Live "),t(74,"span"),e(75,"portfolio-23948217-d156e.web.app"),i()()()()()()()()),n&2&&(a(),p("@cardEnter",void 0),a(51),m(l.appComponentCode),a(8),m(l.stackPillComponentCode))},dependencies:[s],encapsulation:2,changeDetection:0})};export{c as AngularComponent};
