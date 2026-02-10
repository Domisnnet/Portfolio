import{i as p}from"./chunk-CWOGUYHJ.js";import{Ha as r,ab as t,bb as i,cb as n,nb as e,ob as a,wa as m}from"./chunk-DVRMXTIM.js";var s=class d{appComponentCode=`@Component({
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
}`;static \u0275fac=function(o){return new(o||d)};static \u0275cmp=r({type:d,selectors:[["app-angular"]],decls:71,vars:2,consts:[[1,"wow-premium"],[1,"terminal-footer"],[1,"architecture-diagram"],[1,"lighthouse-metrics"],[1,"metric-card"],[1,"score"],[1,"score-card"],[1,"code-architecture"],[1,"terminal-frame"],[1,"terminal-header"],[1,"status-live"],[1,"language-ts"],[1,"deploy-pipeline"],[1,"pipeline-steps"],[1,"step","active"]],template:function(o,l){o&1&&(t(0,"section",0),n(1,"div",1),t(2,"div",2),e(3," ```mermaid graph TB A[Angular 18 Standalone] A --> B[StackPillsComponent"),n(4,"br"),e(5,"input() tag/category] A --> C[HeroLayoutComponent"),n(6,"br"),e(7,"PC\u2192Mobile Adaptive] A --> D[CosmicThemeService"),n(8,"br"),e(9,"SCSS Variables] B --> E[SVG Icons Dynamic"),n(10,"br"),e(11,"assets/icons/] C --> F[FirebaseHostingModule"),n(12,"br"),e(13,"CDN Global] D --> G[OnPush ChangeDetection"),n(14,"br"),e(15,"60fps Animations] ``` "),i(),t(16,"div",3)(17,"div",4)(18,"div",5),e(19,"98"),i(),t(20,"div"),e(21,"Performance"),i(),t(22,"div"),e(23,"TTI: 1.2s | FCP: 0.8s"),i()(),t(24,"div",4)(25,"div",5),e(26,"100"),i(),t(27,"div"),e(28,"Accessibility"),i(),t(29,"div"),e(30,"ARIA Labels Complete"),i()(),t(31,"div",6)(32,"div",5),e(33,"95"),i(),t(34,"div"),e(35,"Best Practices"),i(),t(36,"div"),e(37,"0 Errors Lighthouse"),i()()(),t(38,"div",7)(39,"div",8)(40,"div",9)(41,"span"),e(42,"app.component.ts"),i(),t(43,"span",10),e(44,"\u25CF LIVE"),i()(),t(45,"pre")(46,"code",11),e(47),i()()(),t(48,"div",8)(49,"div",9)(50,"span"),e(51,"stack-pill.component.ts"),i(),t(52,"span",10),e(53,"\u25CF LIVE"),i()(),t(54,"pre")(55,"code",11),e(56),i()()()(),t(57,"div",12)(58,"h4"),e(59,"\u{1F680} CI/CD Pipeline (GitHub Actions)"),i(),t(60,"div",13)(61,"div",14),e(62,"git push main"),i(),t(63,"div",14),e(64,"ng build --prod"),i(),t(65,"div",14),e(66,"firebase deploy"),i(),t(67,"div",14),e(68,"CDN Live "),t(69,"span"),e(70,"portfolio-23948217-d156e.web.app"),i()()()()()),o&2&&(m(47),a(l.appComponentCode),m(9),a(l.stackPillComponentCode))},dependencies:[p],encapsulation:2,changeDetection:0})};export{s as AngularComponent};
