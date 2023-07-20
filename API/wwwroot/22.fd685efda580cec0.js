"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[22],{2022:(w,m,i)=>{i.r(m),i.d(m,{AccountModule:()=>J});var u=i(6814),o=i(95),t=i(9468),p=i(6448),l=i(8642),c=i(9947);let g=(()=>{class e{constructor(n,r,a){this.accountService=n,this.router=r,this.activatedRoute=a}ngOnInit(){this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop",this.createLoginForm()}createLoginForm(){this.loginForm=new o.cw({email:new o.NI("",[o.kI.required,o.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),password:new o.NI("",o.kI.required)})}onSubmit(){this.accountService.login(this.loginForm.value).subscribe(()=>{this.router.navigateByUrl(this.returnUrl)},n=>{console.log(n)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.B),t.Y36(l.F0),t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:12,vars:5,consts:[[1,"d-flex","justify-content-center","mt-5"],[3,"formGroup","ngSubmit"],[1,"h3","mb-3","fw-normal"],["formControlName","email",3,"label"],["formControlName","password",3,"type","label"],[1,"checkbox","mb-3"],["type","checkbox","value","remember-me"],["type","submit",1,"w-100","btn","btn-lg","btn-primary",3,"disabled"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(2,"h1",2),t._uU(3,"Please sign in"),t.qZA(),t._UZ(4,"app-text-input",3)(5,"app-text-input",4),t.TgZ(6,"div",5)(7,"label"),t._UZ(8,"input",6),t._uU(9," Remember me "),t.qZA()(),t.TgZ(10,"button",7),t._uU(11,"Sign in"),t.qZA()()()),2&n&&(t.xp6(1),t.Q6J("formGroup",r.loginForm),t.xp6(3),t.Q6J("label","Email Address"),t.xp6(1),t.Q6J("type","password")("label","Password"),t.xp6(5),t.Q6J("disabled",r.loginForm.invalid))},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,c.t]}),e})();var d=i(4825),f=i(4664),h=i(2096),b=i(7398);function v(e,s){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const n=s.$implicit;t.xp6(1),t.hij(" ",n," ")}}function y(e,s){if(1&e&&(t.TgZ(0,"ul",8),t.YNc(1,v,2,1,"li",9),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.errors)}}const x=[{path:"login",component:g},{path:"register",component:(()=>{class e{constructor(n,r,a){this.fb=n,this.accountService=r,this.router=a,this.createRegisterForm()}ngOnInit(){}createRegisterForm(){this.registerForm=this.fb.group({displayName:[null,[o.kI.required]],email:[null,[o.kI.required,o.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],[this.validateEmailNotTaken()]],password:[null,[o.kI.required]]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe(n=>{this.router.navigateByUrl("/shop")},n=>{console.log(n),this.errors=n.errors})}validateEmailNotTaken(){return n=>(0,d.H)(500).pipe((0,f.w)(()=>n.value?this.accountService.checkEmailExists(n.value).pipe((0,b.U)(r=>r?{emailExist:!0}:null)):(0,h.of)(null)))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(o.qu),t.Y36(p.B),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:10,vars:7,consts:[[1,"d-flex","justify-content-center","mt-5"],[3,"formGroup","ngSubmit"],[1,"h3","mb-3","fw-normal"],["formControlName","displayName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"type","label"],["class","text-danger list-unstyled",4,"ngIf"],["type","submit",1,"w-100","btn","btn-lg","btn-primary",3,"disabled"],[1,"text-danger","list-unstyled"],[4,"ngFor","ngForOf"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(2,"h1",2),t._uU(3,"Register"),t.qZA(),t._UZ(4,"app-text-input",3)(5,"app-text-input",4)(6,"app-text-input",5),t.YNc(7,y,2,1,"ul",6),t.TgZ(8,"button",7),t._uU(9,"Register"),t.qZA()()()),2&n&&(t.xp6(1),t.Q6J("formGroup",r.registerForm),t.xp6(3),t.Q6J("label","Display Name"),t.xp6(1),t.Q6J("label","Email Address"),t.xp6(1),t.Q6J("type","password")("label","Password"),t.xp6(1),t.Q6J("ngIf",r.errors),t.xp6(1),t.Q6J("disabled",r.registerForm.invalid))},dependencies:[u.sg,u.O5,o._Y,o.JJ,o.JL,o.sg,o.u,c.t]}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,l.Bz.forChild(x),l.Bz]}),e})();var F=i(6208);let J=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,C,F.m]}),e})()}}]);