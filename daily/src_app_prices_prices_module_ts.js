"use strict";(self.webpackChunkDaily=self.webpackChunkDaily||[]).push([["src_app_prices_prices_module_ts"],{8736:(N,b,n)=>{n.r(b),n.d(b,{PricesModule:()=>Q});var d=n(6362),a=n(2263),u=n(9423),s=n(9597),p=n(1915),g=n(4953),e=n(3184),m=n(3337),y=n(6458),X=n(5583),Z=n(8271),I=n(4633),x=n(266),A=n(1122);function B(o,c){if(1&o&&e._UZ(0,"button",16),2&o){const t=e.oxw();e.Q6J("disabled",!t.pgGroupForm.valid)}}function F(o,c){if(1&o&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&o){const t=c.$implicit;e.xp6(1),e.Oqu(t.priceGroup)}}let G=(()=>{class o{constructor(t,i,r,l){this.pricesService=t,this.route=i,this.router=r,this.footprintService=l,this.sourceList=[],this.targetList=[],this.pageMode="Add",this.urlRoute=g.X.ROUTES.DAILY+"/"+g.X.ROUTES.PRICES+"/"+g.X.ROUTES.PGGROUPS}ngOnInit(){this.getPricesGroups(),this.route.snapshot.params.id&&(this.pgGroupId=this.route.snapshot.params.id,this.viewMode="view"===this.route.snapshot.url[0].path,this.pageMode=this.viewMode?"View ":"Edit"),this.initForm(),"Edit"==this.pageMode&&this.getPgGroupByID()}getPricesGroups(){this.getpricesSubscription=this.pricesService.getAll("prices").subscribe(t=>{this.sourceList=t.payload.priceGroupModel.filter(i=>(null===i.pgGroupKey&&(this.priceGroup={priceGroupKey:i.priceGroupKey,priceGroup:i.priceGroup,priceGroupCode:i.priceGroupCode,pgGroupKey:i.pgGroupKey}),this.priceGroup)),console.log("unassigned priceGroup",this.sourceList)})}getPgGroupByID(){this.getSubscription=this.pricesService.getPgGroupById(this.pgGroupId).subscribe(t=>{console.log("pg",t.payload);let i=t.payload.pgGroupModel,r=t.payload.pgGroupModel;delete r.pgGroupKey;let l=JSON.parse(JSON.stringify(Object.assign(Object.assign({},r),{priceGroupModels:t.payload.priceGroupModelList})));this.footprintService.objectIdentifier=this.pgGroupId,this.footprintService.handleOldValue(l),this.targetList=t.payload.priceGroupModelList?t.payload.priceGroupModelList:[],this.pgGroupForm.patchValue({pgGroup:i.pgGroup,description:i.description,showFlag:i.showFlag,pgGroupKey:i.pgGroupKey}),this.viewMode&&this.pgGroupForm.disable()})}initForm(){this.pgGroupForm=new p.cw({pgGroup:new p.NI(null,p.kI.required),description:new p.NI(null),showFlag:new p.NI,pgGroupKey:new p.NI})}onSubmit(){let t={pgGroup:this.pgGroupForm.value.pgGroup,description:this.pgGroupForm.value.description,showFlag:this.pgGroupForm.value.showFlag},i=Object.assign(Object.assign({},t),{priceGroupModels:this.targetList});if(this.footprintService.handleNewValue(i),"Edit"==this.pageMode){t.pgGroupKey=+this.pgGroupId;let r={pgGroupModel:t,priceGroupModels:this.targetList};console.log("body",r),this.pricesService.managePgGroup(r,!0).subscribe(l=>{console.log("add profile response",l),l.statusCode==g.X.RESPONSE_STATUS.SUCCESS&&this.router.navigateByUrl(this.urlRoute)})}else this.pricesService.managePgGroup({pgGroupModel:t,priceGroupModels:this.targetList}).subscribe(l=>{console.log("add profile response",l),l.statusCode==g.X.RESPONSE_STATUS.SUCCESS&&this.router.navigateByUrl(this.urlRoute)})}ngOnDestroy(){var t,i;null===(t=this.getSubscription)||void 0===t||t.unsubscribe(),null===(i=this.getpricesSubscription)||void 0===i||i.unsubscribe()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.g),e.Y36(a.gz),e.Y36(a.F0),e.Y36(y.x))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-create-pg-groups"]],decls:25,vars:13,consts:[[1,"add-container"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"pgGroup-form","flex","justify-content-between","wrapper"],[1,"p-float-label"],["id","float-input","type","text","pInputText","","formControlName","pgGroup"],["for","float-input"],[1,"required"],["id","float-input","type","text","pInputText","","formControlName","description","maxlength","50"],[1,"check"],["formControlName","showFlag",3,"binary","trueValue","falseValue"],[1,"check-label"],["pButton","","class","btn btn-basic","type","submit","label","submit",3,"disabled",4,"ngIf"],[1,"picklist-content"],[1,"pickList-title"],["sourceHeader","Unassigned","targetHeader","Assigned","filterBy","name","sourceFilterPlaceholder","Search by name","targetFilterPlaceholder","Search by name",3,"source","target","responsive","dragdrop","showSourceControls","showTargetControls","disabled"],["pTemplate","item"],["pButton","","type","submit","label","submit",1,"btn","btn-basic",3,"disabled"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2),e.qZA(),e.TgZ(3,"form",1),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(4,"div",2)(5,"span",3),e._UZ(6,"input",4),e.TgZ(7,"label",5),e._uU(8,"PG Group "),e.TgZ(9,"span",6),e._uU(10,"*"),e.qZA()()(),e.TgZ(11,"span",3),e._UZ(12,"input",7),e.TgZ(13,"label",5),e._uU(14,"Description "),e.qZA()(),e.TgZ(15,"span",8),e._UZ(16,"p-checkbox",9),e.TgZ(17,"label",10),e._uU(18," show Flag"),e.qZA()(),e.YNc(19,B,1,1,"button",11),e.qZA(),e.TgZ(20,"div",12)(21,"span",13),e._uU(22," Assign Price Groups:"),e.qZA(),e.TgZ(23,"p-pickList",14),e.YNc(24,F,2,1,"ng-template",15),e.qZA()()()()),2&t&&(e.xp6(2),e.hij("",i.pageMode," PG Group"),e.xp6(1),e.Q6J("formGroup",i.pgGroupForm),e.xp6(13),e.Q6J("binary",!0)("trueValue",1)("falseValue",0),e.xp6(3),e.Q6J("ngIf",!i.viewMode),e.xp6(4),e.Q6J("source",i.sourceList)("target",i.targetList)("responsive",!0)("dragdrop",!0)("showSourceControls",!1)("showTargetControls",!1)("disabled",i.viewMode))},directives:[p._Y,p.JL,p.sg,p.Fj,X.o,p.JJ,p.u,p.nD,Z.XZ,d.O5,I.Hq,x.G,A.jx],styles:[".add-container[_ngcontent-%COMP%] {\n  padding: 0px 40px 40px 40px;\n}\n.add-container[_ngcontent-%COMP%]   .pgGroup-form[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.add-container[_ngcontent-%COMP%]   .pgGroup-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.add-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-color: #dfdfdf;\n  margin-top: 17px;\n  padding: 20px;\n  border-radius: 12px;\n}\n.add-container[_ngcontent-%COMP%]   .picklist-content[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.add-container[_ngcontent-%COMP%]   .picklist-content[_ngcontent-%COMP%]   .pickList-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--primaryColor);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wZy1ncm91cHMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGFpbHklMjBBcHBcXERhaWx5XFxzcmNcXGFwcFxccHJpY2VzXFxjb21wb25lbnRzXFxjcmVhdGUtcGctZ3JvdXBzXFxjcmVhdGUtcGctZ3JvdXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7QUNDRjtBREFFO0VBQ0Usb0JBQUE7QUNFSjtBRERJO0VBQ0UsaUJBQUE7QUNHTjtBREFFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRUo7QURBRTtFQUNFLGdCQUFBO0FDRUo7QURESTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUNHTiIsImZpbGUiOiJjcmVhdGUtcGctZ3JvdXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDBweCA0MHB4IDQwcHggNDBweDtcclxuICAucGdHcm91cC1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC53cmFwcGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGZkZmRmO1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIH1cclxuICAucGlja2xpc3QtY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgLnBpY2tMaXN0LXRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5hZGQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4IDQwcHggNDBweCA0MHB4O1xufVxuLmFkZC1jb250YWluZXIgLnBnR3JvdXAtZm9ybSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLmFkZC1jb250YWluZXIgLnBnR3JvdXAtZm9ybSBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbi5hZGQtY29udGFpbmVyIC53cmFwcGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2RmZGZkZjtcbiAgbWFyZ2luLXRvcDogMTdweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5hZGQtY29udGFpbmVyIC5waWNrbGlzdC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5hZGQtY29udGFpbmVyIC5waWNrbGlzdC1jb250ZW50IC5waWNrTGlzdC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xufSJdfQ== */"]}),o})();var C=n(111),h=n(2517),v=n(365);function U(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",3)(1,"button",4),e.NdJ("click",function(){return e.CHM(t),e.oxw().addPgGroup()}),e.qZA()()}}let P=(()=>{class o{constructor(t,i){this.router=t,this.privilegesService=i,this.inputs=[{label:"PG Group",controlName:"pgGroup",type:"text"},{label:"Description",controlName:"description",type:"text"},{label:"Show Flag",controlName:"showFlag",type:"checkbox"}]}ngOnInit(){this.enableAdd=this.privilegesService.checkPrivileges(s.$.PG_GROUP.ADD),this.enableUpdate=this.privilegesService.checkPrivileges(s.$.PG_GROUP.UPDATE),this.viewDetails=this.privilegesService.checkPrivileges(s.$.PG_GROUP.GET_BY_ID),this.enableDelete=this.privilegesService.checkPrivileges(s.$.PG_GROUP.DELETE)}addPgGroup(){this.router.navigateByUrl("daily/prices/add")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.F0),e.Y36(C.y))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-prices-group"]],decls:3,vars:9,consts:[[3,"source","inputs","isInline"],["class","row align pt-3 pb-3",4,"ngIf"],[3,"source","inputs","enableUpdate","enableDelete","viewDetails"],[1,"row","align","pt-3","pb-3"],["pButton","","type","button","label","Add PG Group",1,"btn","btn-basic","right-0",3,"click"]],template:function(t,i){1&t&&(e._UZ(0,"app-service-form",0),e.YNc(1,U,2,0,"div",1),e._UZ(2,"app-services-list",2)),2&t&&(e.Q6J("source","pgGroups")("inputs",i.inputs)("isInline",!0),e.xp6(1),e.Q6J("ngIf",i.enableAdd),e.xp6(1),e.Q6J("source","pgGroups")("inputs",i.inputs)("enableUpdate",i.enableUpdate)("enableDelete",i.enableDelete)("viewDetails",i.viewDetails))},directives:[h.I,d.O5,I.Hq,v.Q],styles:[".align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaWNlcy1ncm91cC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxEYWlseSUyMEFwcFxcRGFpbHlcXHNyY1xcYXBwXFxwcmljZXNcXGNvbXBvbmVudHNcXHByaWNlcy1ncm91cFxccHJpY2VzLWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJwcmljZXMtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfSIsIi5hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */"]}),o})(),f=(()=>{class o{constructor(t,i){this.pricesService=t,this.privilegesService=i,this.inputs=[{label:"Price Group",controlName:"priceGroup",type:"text"},{label:"PG Group",controlName:"pgGroup",type:"text"}]}ngOnInit(){this.enableUpdate=this.privilegesService.checkPrivileges(s.$.PRICE_GROUP.UPDATE),this.pgSubcription=this.pricesService.getAll("pgPrices").subscribe(t=>{console.log("get All pgPrices For dropdown",t.payload.allPriceGroupGroupsResponses),this.listInputs=[{label:"Price Group",controlName:"priceGroup",type:"text"},{label:"PG Group",controlName:"pgGroup",type:"text"},{label:"PG Group Key",controlName:"pgKey",type:"dropDown",options:t.payload.allPriceGroupGroupsResponses.map(i=>({id:i.pgGroup,value:i.pgGroupKey}))}]})}ngOnDestroy(){var t;null===(t=this.pgSubcription)||void 0===t||t.unsubscribe()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.g),e.Y36(C.y))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-prices-list"]],decls:2,vars:6,consts:[[3,"source","inputs","isInline"],[3,"source","inputs","enableUpdate"]],template:function(t,i){1&t&&e._UZ(0,"app-service-form",0)(1,"app-services-list",1),2&t&&(e.Q6J("source","prices")("inputs",i.inputs)("isInline",!0),e.xp6(1),e.Q6J("source","prices")("inputs",i.listInputs)("enableUpdate",i.enableUpdate))},directives:[h.I,v.Q],styles:["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"]}),o})();var L=n(1227);const O=[{path:"",component:(()=>{class o{constructor(){}ngOnInit(){this.items=[{label:"Prices Groups",routerLink:["groups"],routerLinkActiveOptions:"{ exact: true }"},{label:"PG Groups",routerLink:["pgGroups"],routerLinkActiveOptions:"{ exact: true }"}]}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-prices-layout"]],decls:8,vars:1,consts:[[1,"services-container","layout-margin"],[1,"page-title"],[1,"icon-rateplan","head-icon"],[1,"head-font"],[1,"tab-sec"],[3,"model"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"span",2),e.TgZ(3,"span",3),e._uU(4,"Manage Prices Groups "),e.qZA()(),e.TgZ(5,"div",4),e._UZ(6,"p-tabMenu",5),e.qZA(),e._UZ(7,"router-outlet"),e.qZA()),2&t&&(e.xp6(6),e.Q6J("model",i.items))},directives:[L.d,a.lC],styles:[".services-container[_ngcontent-%COMP%] {\n  padding: 0 9px;\n}\n.services-container[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .icon-rateplan[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.services-container[_ngcontent-%COMP%]   .tab-sec[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n}\n.services-container[_ngcontent-%COMP%]   .tab-sec[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  line-height: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaWNlcy1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGFpbHklMjBBcHBcXERhaWx5XFxzcmNcXGFwcFxccHJpY2VzXFxsYXlvdXRcXHByaWNlcy1sYXlvdXRcXHByaWNlcy1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7QURDUTtFQUNJLGVBQUE7QUNDWjtBREVJO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0FDQVI7QURDUTtFQUNJLGdCQUFBO0FDQ1oiLCJmaWxlIjoicHJpY2VzLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2aWNlcy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMCA5cHg7XHJcbiAgICAucGFnZS10aXRsZSB7XHJcbiAgICAgICAgLmljb24tcmF0ZXBsYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRhYi1zZWMge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLnNlcnZpY2VzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgOXB4O1xufVxuLnNlcnZpY2VzLWNvbnRhaW5lciAucGFnZS10aXRsZSAuaWNvbi1yYXRlcGxhbiB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cbi5zZXJ2aWNlcy1jb250YWluZXIgLnRhYi1zZWMge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VydmljZXMtY29udGFpbmVyIC50YWItc2VjIGg0IHtcbiAgbGluZS1oZWlnaHQ6IDAuNTtcbn0iXX0= */"]}),o})(),children:[{path:"",redirectTo:"groups",pathMatch:"full"},{path:"groups",component:f,canActivate:[u.C],data:{privilege:s.$.PRICE_GROUP.GET_ALL}},{path:"pgGroups",component:P,canActivate:[u.C],data:{privilege:s.$.PG_GROUP.GET_ALL}},{path:"add",component:G,canActivate:[u.C],data:{privilege:s.$.PG_GROUP.ADD}},{path:"edit/:id",component:G,canActivate:[u.C],data:{privilege:s.$.PG_GROUP.UPDATE}},{path:"view/:id",component:G,canActivate:[u.C],data:{privilege:s.$.PG_GROUP.GET_BY_ID}}]}];let M=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[a.Bz.forChild(O)],a.Bz]}),o})();var J=n(4466);let Q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.ez,M,J.m]]}),o})()}}]);
//# sourceMappingURL=src_app_prices_prices_module_ts.js.map