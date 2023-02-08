"use strict";(self.webpackChunkDaily=self.webpackChunkDaily||[]).push([["src_app_home-page_home-page_module_ts"],{1526:(v,m,a)=>{a.r(m),a.d(m,{HomePageModule:()=>pt});var r=a(6362),s=a(4466),u=a(2263),d=a(4953),b=a(9597),t=a(3184),p=a(3514),I=a(111),l=a(253);let g=(()=>{class e{constructor(){this.config={theme:"lara-light-blue",dark:!1,inputStyle:"outlined",ripple:!0},this.configUpdate=new l.x,this.configUpdate$=this.configUpdate.asObservable()}updateConfig(n){this.config=n,this.configUpdate.next(n)}getConfig(){return this.config}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var X=a(9185);function Q(e,c){if(1&e&&(t.TgZ(0,"div")(1,"p"),t._uU(2),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.hij("",n.float(n.data.opening,n.variance)," M")}}const f=function(e){return{height:e}};function O(e,c){if(1&e&&(t.TgZ(0,"div")(1,"p"),t._uU(2),t.qZA()()),2&e){const n=t.oxw();t.Akn(t.VKq(3,f,n.recalc(n.data.opening,0))),t.xp6(2),t.hij("",n.float(n.data.opening,0)," M")}}function N(e,c){if(1&e&&(t.TgZ(0,"b"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Oqu(t.xi3(2,1,n.data.opening,"2."))}}function U(e,c){1&e&&(t.TgZ(0,"b"),t._uU(1,"0"),t.qZA())}function y(e,c){if(1&e&&(t.TgZ(0,"b"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Oqu(t.xi3(2,1,n.data.closing,"2."))}}function A(e,c){1&e&&(t.TgZ(0,"b"),t._uU(1,"0"),t.qZA())}function F(e,c){if(1&e&&(t.TgZ(0,"b"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Oqu(t.xi3(2,1,n.data.variance,"2."))}}function T(e,c){1&e&&(t.TgZ(0,"b"),t._uU(1,"0"),t.qZA())}function _(e,c){if(1&e&&(t.TgZ(0,"div")(1,"div"),t._UZ(2,"i",17),t.TgZ(3,"span"),t._uU(4,"Opening "),t.YNc(5,N,3,4,"b",4),t.YNc(6,U,2,0,"b",4),t.qZA()(),t.TgZ(7,"div"),t._UZ(8,"i",18),t.TgZ(9,"span"),t._uU(10,"Closing \xa0"),t.YNc(11,y,3,4,"b",4),t.YNc(12,A,2,0,"b",4),t.qZA()(),t.TgZ(13,"div",19),t._UZ(14,"i",20),t.TgZ(15,"span"),t._uU(16,"Variance "),t.YNc(17,F,3,4,"b",4),t.YNc(18,T,2,0,"b",4),t.qZA()()()),2&e){const n=t.oxw();t.xp6(5),t.Q6J("ngIf",n.data.opening),t.xp6(1),t.Q6J("ngIf",!n.data.opening),t.xp6(5),t.Q6J("ngIf",n.data.closing),t.xp6(1),t.Q6J("ngIf",!n.data.closing),t.xp6(5),t.Q6J("ngIf",n.data.variance),t.xp6(1),t.Q6J("ngIf",!n.data.variance)}}let Y=(()=>{class e{constructor(n,i,o){this.configService=n,this.validationService=i,this.headerService=o,this.stackedOptions={tooltips:{mode:"index",intersect:!1},responsive:!0,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}},this.variance=0}ngOnInit(){let n=localStorage.getItem("date");this.getBalance(Number(n)),this.DateSubscriber=this.headerService.DateSubject.subscribe(i=>{this.getBalance(i)}),this.config=this.configService.config,this.updateChartOptions(),this.subscription=this.configService.configUpdate$.subscribe(i=>{this.config=i,this.updateChartOptions()})}getBalance(n){this.validationService.retrieveBalance(n).subscribe(i=>{this.data=i.payload,this.variance=Math.abs(this.data.variance),console.log(this.variance),this.stackedData={labels:["Opening","Closing"],datasets:[{type:"bar",label:"Opening",backgroundColor:"#36ACFF",data:[this.data.opening,0]},{type:"bar",label:"Closing",backgroundColor:"#69D0D0",data:[0,this.data.closing]},{type:"bar",label:"Variance",backgroundColor:"#E60000",data:[Math.abs(this.data.variance),0]}]}})}updateChartOptions(){this.config.dark?this.applyDarkTheme():this.applyLightTheme()}applyLightTheme(){this.stackedOptions={plugins:{tooltips:{mode:"index",intersect:!1},legend:{labels:{color:"#495057"}}},scales:{x:{stacked:!0,ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{stacked:!0,ticks:{color:"#495057"},grid:{color:"#ebedef"}}}}}applyDarkTheme(){this.stackedOptions={plugins:{legend:{labels:{color:"#ebedef"}},tooltips:{mode:"index",intersect:!1}},scales:{x:{stacked:!0,ticks:{color:"#ebedef"},grid:{color:"rgba(255,255,255,0.2)"}},y:{stacked:!0,ticks:{color:"#ebedef"},grid:{color:"rgba(255,255,255,0.2)"}}}}}float(n,i){return((Number(n)+Number(i))/1e6).toFixed(2)}recalc(n,i){let o=((Number(n)+Number(i))/340824.3).toString();return console.log(o),o+"px"}ngOnDestroy(){this.subscription.unsubscribe(),this.DateSubscriber.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g),t.Y36(X.R),t.Y36(p.r))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-chart-bar"]],decls:30,vars:16,consts:[[1,"m-0"],[1,"flex","chart"],[1,"flex"],[1,"flex-column","align-items-end","align-content-end","justify-content-end","ll","pr-2"],[4,"ngIf"],[3,"style",4,"ngIf"],["id","stacked-example-3",1,"charts-css","column","hide-data","show-heading","show-labels","data-spacing-10","multiple","stacked"],[1,"tbody"],[1,"mt-5"],["scope","row",1,"text-center"],[1,"pl-3"],[1,"shadow",2,"--size","0"],["src","./assets/images/icons/Path_81.svg"],["scope","row"],[2,"--size","0"],[1,"radius","shadow"],[1,"h-100","w-15rem","bgColor","container"],[1,"icon-dot","blue"],[1,"icon-dot","green"],[1,"red"],[1,"icon-dot"]],template:function(n,i){1&n&&(t.TgZ(0,"h4",0),t._uU(1,"Variances Charts"),t.qZA(),t.TgZ(2,"div",1)(3,"div",2)(4,"div",3),t.YNc(5,Q,3,1,"div",4),t.YNc(6,O,3,5,"div",5),t.TgZ(7,"div")(8,"p"),t._uU(9,"0"),t.qZA()()(),t.TgZ(10,"table",6)(11,"tbody",7)(12,"tr",8)(13,"th",9)(14,"span",10),t._uU(15,"Opening"),t.qZA()(),t._UZ(16,"td"),t.TgZ(17,"td",11),t._UZ(18,"img",12),t.qZA(),t._UZ(19,"td"),t.qZA(),t.TgZ(20,"tr",8)(21,"th",13)(22,"span",10),t._uU(23,"Closing"),t.qZA()(),t._UZ(24,"td",14)(25,"td",15)(26,"td",14),t.qZA(),t._UZ(27,"tr"),t.qZA()()(),t.TgZ(28,"div",16),t.YNc(29,_,19,6,"div",4),t.qZA()()),2&n&&(t.xp6(5),t.Q6J("ngIf",(null==i.data?null:i.data.opening)+i.variance),t.xp6(1),t.Q6J("ngIf",null==i.data?null:i.data.opening),t.xp6(10),t.Jzz("--size: calc(",(null==i.data?null:i.data.opening)/89999," / 700)"),t.Tol(0==i.variance?"radius shadow":"shadow"),t.xp6(3),t.Jzz("--size: calc(",i.variance/89999,"/700)"),t.Tol(i.variance?"radius red-shadow":""),t.xp6(6),t.Jzz("--size: calc(",(null==i.data?null:i.data.closing)/89999," / 700)"),t.xp6(4),t.Q6J("ngIf",i.data))},directives:[r.O5],pipes:[r.JJ],styles:[".bgColor[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  border-left: 3px solid white;\n}\n\n.icon-dot[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding-right: 10px;\n}\n\n.blue[_ngcontent-%COMP%] {\n  color: #348ecd;\n}\n\n.green[_ngcontent-%COMP%] {\n  color: #69d0d0;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: #f54845;\n}\n\nb[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  letter-spacing: 0.85px;\n}\n\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n}\n\n.hr[_ngcontent-%COMP%] {\n  color: black !important;\n}\n\n#stacked-example-3[_ngcontent-%COMP%] {\n  height: 237px;\n  width: 300px !important;\n  background-color: #fafafa;\n  margin: 0 auto;\n  --color-1: #36acff;\n  --color-2: #69d0d0;\n  --color-3: #e60000;\n}\n\n#stacked-example-3[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.radius[_ngcontent-%COMP%] {\n  border-top-right-radius: 15px;\n  border-top-left-radius: 15px;\n}\n\n.red-shadow[_ngcontent-%COMP%] {\n  box-shadow: 5px 0 5px -2px #e123204d;\n  border-top: 10px solid transparent;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 5px 0 5px -2px #c9c9c9;\n}\n\n.tbody[_ngcontent-%COMP%] {\n  border-left: 1px solid #bfbfbf;\n  border-bottom: 1px solid #bfbfbf;\n}\n\ntr[_ngcontent-%COMP%] {\n  width: 20px !important;\n}\n\nth[_ngcontent-%COMP%] {\n  color: #5a667c;\n}\n\nimg[_ngcontent-%COMP%] {\n  margin-left: 120px;\n  z-index: 2;\n}\n\n.ll[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 65px;\n}\n\n.ll[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5a667c;\n  font-weight: bold;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LWJhci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxEYWlseSUyMEFwcFxcRGFpbHlcXHNyY1xcYXBwXFxob21lLXBhZ2VcXGNvbXBvbmVudHNcXGNoYXJ0LWJhclxcY2hhcnQtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0FDR0Y7O0FEREE7RUFDRSxjQUFBO0FDSUY7O0FERkE7RUFDRSxjQUFBO0FDS0Y7O0FESEE7RUFDRSxrQkFBQTtBQ01GOztBREpBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ09GOztBREpBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ09GOztBRExBO0VBQ0UsdUJBQUE7QUNRRjs7QUROQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1FGOztBRE5BO0VBQ0UsaUJBQUE7QUNTRjs7QURQQTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7QUNVRjs7QURSQTtFQUNFLG9DQUFBO0VBQ0Esa0NBQUE7QUNXRjs7QURUQTtFQUNFLGtDQUFBO0FDWUY7O0FEVkE7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0FDYUY7O0FEWEE7RUFDRSxzQkFBQTtBQ2NGOztBRFpBO0VBQ0UsY0FBQTtBQ2VGOztBRGJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDZ0JGOztBRGRBO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0FDaUJGOztBRGZFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ2lCSiIsImZpbGUiOiJjaGFydC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdDb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5pY29uLWRvdCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmJsdWUge1xyXG4gIGNvbG9yOiAjMzQ4ZWNkO1xyXG59XHJcbi5ncmVlbiB7XHJcbiAgY29sb3I6ICM2OWQwZDA7XHJcbn1cclxuLnJlZCB7XHJcbiAgY29sb3I6ICNmNTQ4NDU7XHJcbn1cclxuYiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMC44NXB4O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmhyIHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG4jc3RhY2tlZC1leGFtcGxlLTMge1xyXG4gIGhlaWdodDogMjM3cHg7XHJcbiAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAvLyAtLWhlYWRpbmctc2l6ZTogMi41cmVtO1xyXG4gIC0tY29sb3ItMTogIzM2YWNmZjtcclxuICAtLWNvbG9yLTI6ICM2OWQwZDA7XHJcbiAgLS1jb2xvci0zOiAjZTYwMDAwO1xyXG59XHJcbiNzdGFja2VkLWV4YW1wbGUtMyBjYXB0aW9uIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucmFkaXVzIHtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5yZWQtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiA1cHggMCA1cHggLTJweCAjZTEyMzIwNGQ7XHJcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4uc2hhZG93IHtcclxuICBib3gtc2hhZG93OiA1cHggMCA1cHggLTJweCByZ2IoMjAxLCAyMDEsIDIwMSk7XHJcbn1cclxuLnRib2R5IHtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiZmJmYmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJmYmY7XHJcbn1cclxudHIge1xyXG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxudGgge1xyXG4gIGNvbG9yOiAjNWE2NjdjO1xyXG59XHJcbmltZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmxsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogNjVweDtcclxuXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogIzVhNjY3YztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5iZ0NvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmljb24tZG90IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uYmx1ZSB7XG4gIGNvbG9yOiAjMzQ4ZWNkO1xufVxuXG4uZ3JlZW4ge1xuICBjb2xvcjogIzY5ZDBkMDtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjZjU0ODQ1O1xufVxuXG5iIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuODVweDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG59XG5cbi5ociB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4jc3RhY2tlZC1leGFtcGxlLTMge1xuICBoZWlnaHQ6IDIzN3B4O1xuICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tY29sb3ItMTogIzM2YWNmZjtcbiAgLS1jb2xvci0yOiAjNjlkMGQwO1xuICAtLWNvbG9yLTM6ICNlNjAwMDA7XG59XG5cbiNzdGFja2VkLWV4YW1wbGUtMyBjYXB0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yYWRpdXMge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbn1cblxuLnJlZC1zaGFkb3cge1xuICBib3gtc2hhZG93OiA1cHggMCA1cHggLTJweCAjZTEyMzIwNGQ7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5zaGFkb3cge1xuICBib3gtc2hhZG93OiA1cHggMCA1cHggLTJweCAjYzljOWM5O1xufVxuXG4udGJvZHkge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiZmJmYmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiZmJmO1xufVxuXG50ciB7XG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRoIHtcbiAgY29sb3I6ICM1YTY2N2M7XG59XG5cbmltZyB7XG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgei1pbmRleDogMjtcbn1cblxuLmxsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiA2NXB4O1xufVxuLmxsIHAge1xuICBjb2xvcjogIzVhNjY3YztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */"]}),e})();var B=a(1227),x=a(5795),h=a(1122);function w(e,c){}function L(e,c){1&e&&(t.TgZ(0,"sup"),t._uU(1,"st"),t.qZA())}function D(e,c){1&e&&(t.TgZ(0,"sup"),t._uU(1,"nd"),t.qZA())}function J(e,c){1&e&&(t.TgZ(0,"sup"),t._uU(1,"th"),t.qZA())}const W=function(e){return{color:e}},R=function(e){return{"background-color":e}},H=function(e,c){return{"icon-arrow-up":e,"icon-arrow-bottom":c}};function V(e,c){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"i",8),t.TgZ(3,"b",9),t._uU(4),t.YNc(5,L,2,0,"sup",10),t.YNc(6,D,2,0,"sup",10),t.YNc(7,J,2,0,"sup",10),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"p",11),t._uU(11,"Opening"),t.qZA(),t._uU(12),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"td")(15,"p",11),t._uU(16,"Closing"),t.qZA(),t._uU(17),t.ALo(18,"number"),t.qZA(),t.TgZ(19,"td")(20,"div",12),t._UZ(21,"i",13),t.TgZ(22,"b"),t._uU(23),t.ALo(24,"number"),t.qZA()()()()),2&e){const n=c.$implicit,i=c.rowIndex,o=t.oxw();t.xp6(2),t.Q6J("ngStyle",t.VKq(20,W,"Highest In-Subs"==o.activeItem.label?"#31D578":"#ee4b4b")),t.xp6(2),t.hij("",i+1," "),t.xp6(1),t.Q6J("ngIf",i+1==1),t.xp6(1),t.Q6J("ngIf",i+1==2),t.xp6(1),t.Q6J("ngIf",i+1==3),t.xp6(1),t.hij(" ",n.ratePlan," "),t.xp6(4),t.hij(" ",t.xi3(13,11,n.opening,"2.")," "),t.xp6(5),t.hij(" ",t.xi3(18,14,n.closing,"2.")," "),t.xp6(3),t.Q6J("ngStyle",t.VKq(22,R,"Highest In-Subs"==o.activeItem.label?"#31d57836":"rgb(238, 75, 75,.5)")),t.xp6(1),t.Q6J("ngClass",t.WLB(24,H,"Highest In-Subs"===o.activeItem.label,"Lowest In-Subs"===o.activeItem.label)),t.xp6(2),t.hij(" ",t.xi3(24,17,n.variance,"2."),"")}}function M(e,c){1&e&&(t.TgZ(0,"tr")(1,"td",14),t._uU(2,"No Data found."),t.qZA()())}let S=(()=>{class e{constructor(n,i){this.validationService=n,this.headerService=i}ngOnInit(){this.items=[{label:"Highest In-Subs",command:n=>{this.activeItem=this.items[0],this.onSubmit()}},{label:"Lowest In-Subs",command:n=>{this.activeItem=this.items[1],this.onSubmit()}}],this.activeItem=this.items[0],this.epochDate=Number(localStorage.getItem("date")),this.getData(),this.dateSubscription=this.headerService.DateSubject.subscribe(n=>{this.epochDate=n,this.getData()})}onSubmit(){"Highest In-Subs"===this.activeItem.label&&(console.log("hello Highest In-Subs "),this.data=this.maximumList),"Lowest In-Subs"===this.activeItem.label&&(console.log("hello Lowest In-Subs "),this.data=this.minimumList)}getData(){this.validationService.getMAxMinRatePlans(this.epochDate).subscribe(n=>{this.minimumList=n.payload.minimum,this.maximumList=n.payload.maximum,this.onSubmit()})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(X.R),t.Y36(p.r))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-rateplans-numbers"]],decls:9,vars:3,consts:[[1,"m-0"],[1,"services-container","dashboard-rateplans"],[1,"tab-sec"],[3,"model","activeItem"],["responsiveLayout","scroll",1,"table-font-style",3,"value"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"icon-dot",3,"ngStyle"],[1,"pr-2"],[4,"ngIf"],[1,"font-style"],[1,"box-style",3,"ngStyle"],[3,"ngClass"],["colspan","7",2,"text-align","center"]],template:function(n,i){1&n&&(t.TgZ(0,"h4",0),t._uU(1,"Rate Plans in Numbers"),t.qZA(),t.TgZ(2,"div",1)(3,"div",2),t._UZ(4,"p-tabMenu",3),t.qZA(),t.TgZ(5,"p-table",4),t.YNc(6,w,0,0,"ng-template",5),t.YNc(7,V,25,27,"ng-template",6),t.YNc(8,M,3,0,"ng-template",7),t.qZA()()),2&n&&(t.xp6(4),t.Q6J("model",i.items)("activeItem",i.activeItem),t.xp6(1),t.Q6J("value",i.data))},directives:[B.d,x.iA,h.jx,r.PC,r.O5,r.mk],pipes:[r.JJ],styles:[".box-style[_ngcontent-%COMP%] {\n  background: #31d57836 0% 0% no-repeat padding-box;\n  border-radius: 8px;\n  opacity: 1;\n  padding: 9px;\n  text-align: center !important;\n}\n\n.font-style[_ngcontent-%COMP%] {\n  color: #989898;\n  margin: 0px;\n}\n\n.icon-dot[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding-right: 10px;\n}\n\n.icon-arrow-up[_ngcontent-%COMP%] {\n  color: #21af5f;\n  padding-right: 5px;\n}\n\n.icon-arrow-bottom[_ngcontent-%COMP%] {\n  color: #e60000;\n}\n\n.services-container[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.tab-sec[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  justify-content: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGVwbGFucy1udW1iZXJzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERhaWx5JTIwQXBwXFxEYWlseVxcc3JjXFxhcHBcXGhvbWUtcGFnZVxcY29tcG9uZW50c1xccmF0ZXBsYW5zLW51bWJlcnNcXHJhdGVwbGFucy1udW1iZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaURBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UsY0FBQTtBQ0tGOztBREhBO0VBQ0UsdUJBQUE7QUNNRjs7QURKQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7QUNPRiIsImZpbGUiOiJyYXRlcGxhbnMtbnVtYmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtc3R5bGUge1xyXG4gIGJhY2tncm91bmQ6ICMzMWQ1NzgzNiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcGFkZGluZzogOXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbi5mb250LXN0eWxlIHtcclxuICBjb2xvcjogIzk4OTg5ODtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4uaWNvbi1kb3Qge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5pY29uLWFycm93LXVwIHtcclxuICBjb2xvcjogIzIxYWY1ZjtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmljb24tYXJyb3ctYm90dG9tIHtcclxuICBjb2xvcjogI2U2MDAwMDtcclxufVxyXG4uc2VydmljZXMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4udGFiLXNlYyB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcbiIsIi5ib3gtc3R5bGUge1xuICBiYWNrZ3JvdW5kOiAjMzFkNTc4MzYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5mb250LXN0eWxlIHtcbiAgY29sb3I6ICM5ODk4OTg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uaWNvbi1kb3Qge1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5pY29uLWFycm93LXVwIHtcbiAgY29sb3I6ICMyMWFmNWY7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmljb24tYXJyb3ctYm90dG9tIHtcbiAgY29sb3I6ICNlNjAwMDA7XG59XG5cbi5zZXJ2aWNlcy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRhYi1zZWMge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufSJdfQ== */"]}),e})();var C=a(4633);function j(e,c){}function E(e,c){if(1&e&&(t.TgZ(0,"tr")(1,"td",10),t._UZ(2,"i",11),t._uU(3),t.qZA(),t.TgZ(4,"td",12),t._uU(5),t.qZA()(),t._UZ(6,"p")),2&e){const n=c.$implicit;t.xp6(3),t.hij(" ",n.name," "),t.xp6(2),t.hij(" ",0==n.date?"Today":n.date+" Day Ago"," ")}}function z(e,c){1&e&&(t.TgZ(0,"tr")(1,"td",13),t._uU(2,"No Data found."),t.qZA()())}function k(e,c){1&e&&t._UZ(0,"button",14)}let P=(()=>{class e{constructor(){this.pageSize=3}ngOnInit(){}ngOnChanges(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-new-price-group"]],inputs:{priceGroups:"priceGroups"},features:[t.TTD],decls:11,vars:4,consts:[[1,"row","flex","header"],[1,"col-7","flex","pt-4"],[1,"icon-rateplan","head-icon"],[1,"text"],[1,"dashboard-pg",2,"margin-top","3rem"],["responsiveLayout","scroll",1,"table-font-style","dashboard-pg",3,"paginator","totalRecords","rows","value"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","paginatorright"],[1,"left-border"],[1,"icon-flag"],[1,"right-border",2,"text-align","right"],["colspan","7",2,"text-align","center"],["pButton","","type","button","label","See All","routerLink","/daily/prices/groups",1,"btn","btn-basic"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"i",2),t.TgZ(3,"span",3),t._uU(4,"New Price Group"),t.qZA()()(),t.TgZ(5,"div",4)(6,"p-table",5),t.YNc(7,j,0,0,"ng-template",6),t.YNc(8,E,7,2,"ng-template",7),t.YNc(9,z,3,0,"ng-template",8),t.YNc(10,k,1,0,"ng-template",9),t.qZA()()),2&n&&(t.xp6(6),t.Q6J("paginator",i.priceGroups&&i.priceGroups.length>0)("totalRecords",i.priceGroups.length)("rows",3)("value",i.priceGroups))},directives:[x.iA,h.jx,C.Hq,u.rH],styles:[".icon-flag[_ngcontent-%COMP%] {\n  color: #f54845;\n  font-size: 11px;\n  padding-right: 10px;\n}\n\n.head-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold !important;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wcmljZS1ncm91cC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxEYWlseSUyMEFwcFxcRGFpbHlcXHNyY1xcYXBwXFxob21lLXBhZ2VcXGNvbXBvbmVudHNcXG5ldy1wcmljZS1ncm91cFxcbmV3LXByaWNlLWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtBQ0dGIiwiZmlsZSI6Im5ldy1wcmljZS1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWZsYWcge1xyXG4gIGNvbG9yOiAjZjU0ODQ1O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5oZWFkLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiIsIi5pY29uLWZsYWcge1xuICBjb2xvcjogI2Y1NDg0NTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uaGVhZC1pY29uIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufVxuXG4udGV4dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"]}),e})();function q(e,c){1&e&&(t.TgZ(0,"div",9)(1,"div",10),t._UZ(2,"span",11),t.TgZ(3,"span",12),t._uU(4,"New Service Classes / Tariffs"),t.qZA()()())}function $(e,c){}function K(e,c){if(1&e&&(t.TgZ(0,"tr")(1,"td",13),t._UZ(2,"i",14),t._uU(3),t.qZA(),t.TgZ(4,"td",15),t._uU(5),t.qZA()(),t._UZ(6,"p")),2&e){const n=c.$implicit;t.xp6(3),t.hij(" ",n.name," "),t.xp6(2),t.hij(" ",0==n.date?"Today":n.date+" Day Ago"," ")}}function tt(e,c){1&e&&(t.TgZ(0,"tr")(1,"td",16),t._uU(2,"No Data found."),t.qZA()())}function et(e,c){if(1&e&&t._UZ(0,"button",17),2&e){const n=t.oxw();t.Q6J("routerLink","Service Classes"==n.activeItem.label?"/daily/services/classes":"/daily/services/tariffs")}}let nt=(()=>{class e{constructor(n){this.privilegesService=n,this.data=[],this.pageSize=3}ngOnInit(){this.viewClasses=this.privilegesService.checkPrivileges(b.$.SERVICES_CLASSES.GET_ALL),this.viewTariffs=this.privilegesService.checkPrivileges(b.$.SERVICES_TARIFFS.GET_ALL),this.items=[{label:"Service Classes",command:n=>{this.activeItem=this.items[0],this.onSubmit()},visible:this.viewClasses},{label:"Tariffs",command:n=>{this.activeItem=this.items[1],this.onSubmit()},visible:this.viewTariffs}],this.activeItem=this.items[0],this.onSubmit()}onSubmit(){"Service Classes"===this.activeItem.label&&this.viewClasses&&(this.data=this.serviceClasses),"Tariffs"===this.activeItem.label&&this.viewTariffs&&(this.data=this.tarrifsModels)}ngOnChanges(n){this.items=[{label:"Service Classes",command:i=>{this.activeItem=this.items[0],this.onSubmit()},visible:this.viewClasses},{label:"Tariffs",command:i=>{this.activeItem=this.items[1],this.onSubmit()},visible:this.viewTariffs}],this.activeItem=this.items[0],this.onSubmit()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(I.y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-new-services"]],inputs:{tarrifsModels:"tarrifsModels",serviceClasses:"serviceClasses"},features:[t.TTD],decls:9,vars:7,consts:[["class","row flex header",4,"ngIf"],[1,"services-container"],[1,"tab-sec"],[3,"model","activeItem"],["responsiveLayout","scroll",1,"table-font-style","dashboard-pg",3,"paginator","totalRecords","rows","value"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","paginatorright"],[1,"row","flex","header"],[1,"col-7","flex","pt-4"],[1,"icon-services","head-icon"],[1,"text"],[1,"left-border"],[1,"icon-flag"],[1,"right-border",2,"text-align","right"],["colspan","7",2,"text-align","center"],["pButton","","type","button","label","See All",1,"btn","btn-basic",3,"routerLink"]],template:function(n,i){1&n&&(t.YNc(0,q,5,0,"div",0),t.TgZ(1,"div",1)(2,"div",2),t._UZ(3,"p-tabMenu",3),t.qZA(),t.TgZ(4,"p-table",4),t.YNc(5,$,0,0,"ng-template",5),t.YNc(6,K,7,2,"ng-template",6),t.YNc(7,tt,3,0,"ng-template",7),t.YNc(8,et,1,1,"ng-template",8),t.qZA()()),2&n&&(t.Q6J("ngIf",i.viewClasses||i.viewTariffs),t.xp6(3),t.Q6J("model",i.items)("activeItem",i.activeItem),t.xp6(1),t.Q6J("paginator",i.data&&i.data.length>0)("totalRecords",i.data.length)("rows",i.pageSize)("value",i.data))},directives:[r.O5,B.d,x.iA,h.jx,C.Hq,u.rH],styles:[".icon-flag[_ngcontent-%COMP%] {\n  color: #f54845;\n  font-size: 11px;\n  padding-right: 10px;\n}\n\n.head-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: normal !important;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.tab-sec[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  justify-content: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxEYWlseSUyMEFwcFxcRGFpbHlcXHNyY1xcYXBwXFxob21lLXBhZ2VcXGNvbXBvbmVudHNcXG5ldy1zZXJ2aWNlc1xcbmV3LXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtBQ0lGIiwiZmlsZSI6Im5ldy1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWZsYWcge1xyXG4gIGNvbG9yOiAjZjU0ODQ1O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5oZWFkLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnRhYi1zZWMge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxufVxyXG4iLCIuaWNvbi1mbGFnIHtcbiAgY29sb3I6ICNmNTQ4NDU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmhlYWQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG4udGV4dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50YWItc2VjIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn0iXX0= */"]}),e})();function it(e,c){1&e&&(t.TgZ(0,"div",8),t._UZ(1,"app-chart-bar"),t.qZA())}function ct(e,c){1&e&&(t.TgZ(0,"div",8),t._UZ(1,"app-rateplans-numbers"),t.qZA())}function at(e,c){if(1&e&&(t.TgZ(0,"div",6),t.YNc(1,it,2,0,"div",7),t.YNc(2,ct,2,0,"div",7),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.viewBalnace),t.xp6(1),t.Q6J("ngIf",n.viewMaxMin)}}function ot(e,c){if(1&e&&(t.TgZ(0,"div",8),t._UZ(1,"app-new-price-group",10),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("priceGroups",n.priceGroups)}}function st(e,c){if(1&e&&t._UZ(0,"app-new-services",11),2&e){const n=t.oxw();t.Q6J("serviceClasses",n.serviceClasses)("tarrifsModels",n.tarrifsModels)}}const lt=[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:(()=>{class e{constructor(n,i){this.headerService=n,this.privilegesService=i,this.priceGroups=[],this.serviceClasses=[],this.tarrifsModels=[]}ngOnInit(){this.headerService.getNotifications().subscribe(n=>{this.headerService.notificationsSubject.next(n.payload)}),this.viewNotification=this.privilegesService.checkPrivileges(b.$.NOTIFICATIONS.GET_ALL),this.viewBalnace=this.privilegesService.checkPrivileges(b.$.VALIDATION.BALANCE),this.viewMaxMin=this.privilegesService.checkPrivileges(b.$.DASHBOARD.MAX_MIN_AGG_DATE),this.viewpriceGroup=this.privilegesService.checkPrivileges(b.$.PRICE_GROUP.GET_ALL),this.notificationsSubsc=this.headerService.notificationsSubject.subscribe(n=>{null==n||n.map(i=>{i.notificationType==d.X.NOTIFICATION_TYPE.PRICE_GROUP&&this.checkList(this.priceGroups,i),i.notificationType==d.X.NOTIFICATION_TYPE.SERVICE_CLASS&&this.checkList(this.serviceClasses,i),i.notificationType==d.X.NOTIFICATION_TYPE.TARRIF_MODEL&&this.checkList(this.tarrifsModels,i)})})}fillList(n,i){let o=i.creationDate.split("-"),Z=new Date(o[0],o[1]-1,o[2]),G=(new Date).getTime()-new Date(Z).getTime();G/=864e5,n.push({name:i.dataName,date:~~G,dataId:i.dataId})}checkList(n,i){let o;o=n.find(Z=>Z.dataId==i.dataId),o||this.fillList(n,i)}ngOnDestroy(){this.notificationsSubsc.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.r),t.Y36(I.y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home-layout"]],decls:11,vars:3,consts:[[1,"row","layout-margin"],[1,"row","flex","header"],[1,"col-7","flex","pt-4"],[1,"icon-chart","head-icon"],[1,"text"],["class","row flex",4,"ngIf"],[1,"row","flex"],["class","col-6",4,"ngIf"],[1,"col-6"],[3,"serviceClasses","tarrifsModels",4,"ngIf"],[3,"priceGroups"],[3,"serviceClasses","tarrifsModels"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"i",3),t.TgZ(4,"span",4),t._uU(5,"SUBS Variances Chart"),t.qZA()()(),t.YNc(6,at,3,2,"div",5),t.TgZ(7,"div",6),t.YNc(8,ot,2,1,"div",7),t.TgZ(9,"div",8),t.YNc(10,st,1,2,"app-new-services",9),t.qZA()()()),2&n&&(t.xp6(6),t.Q6J("ngIf",i.viewBalnace||i.viewMaxMin),t.xp6(2),t.Q6J("ngIf",i.viewNotification&&i.viewpriceGroup),t.xp6(2),t.Q6J("ngIf",i.viewNotification))},directives:[r.O5,Y,S,P,nt],styles:[".header[_ngcontent-%COMP%]   .icon-chart[_ngcontent-%COMP%] {\n  color: #142645b3;\n  padding-right: 10px;\n  font-size: 17px;\n  padding-top: 1px;\n  font-weight: bold;\n}\n.header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: var(--lightBlack);\n  font: normal normal normal bold 17px/17px Cairo;\n  letter-spacing: 1.25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERhaWx5JTIwQXBwXFxEYWlseVxcc3JjXFxhcHBcXGhvbWUtcGFnZVxcbGF5b3V0XFxob21lLWxheW91dFxcaG9tZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFOYTtFQU9iLGdCQUFBO0VBQ0EsaUJBQUE7QUNGSjtBREtFO0VBQ0Usd0JBQUE7RUFDQSwrQ0FaZTtFQWFmLHNCQUFBO0FDSEoiLCJmaWxlIjoiaG9tZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVhZGVyRm9udFNpemU6IDE3cHg7XHJcbiRoZWFkZXJGb250U3RyZWNoOiBub3JtYWwgbm9ybWFsIG5vcm1hbCBib2xkIDE3cHgvMTdweCBDYWlybztcclxuLmhlYWRlciB7XHJcbiAgLmljb24tY2hhcnQge1xyXG4gICAgY29sb3I6ICMxNDI2NDViMztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6ICRoZWFkZXJGb250U2l6ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1saWdodEJsYWNrKTtcclxuICAgIGZvbnQ6ICRoZWFkZXJGb250U3RyZWNoO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcclxuICB9XHJcbn1cclxuIiwiLmhlYWRlciAuaWNvbi1jaGFydCB7XG4gIGNvbG9yOiAjMTQyNjQ1YjM7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaGVhZGVyIC50ZXh0IHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0QmxhY2spO1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCBib2xkIDE3cHgvMTdweCBDYWlybztcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcbn0iXX0= */"]}),e})()}];let rt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.Bz.forChild(lt)],u.Bz]}),e})(),pt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[r.ez,s.m,rt]]}),e})()},9185:(v,m,a)=>{a.d(m,{R:()=>t});var r=a(253),s=a(4953),u=a(2340),d=a(3184),b=a(8784);let t=(()=>{class p{constructor(l){this.http=l,this.updateBalance=new r.x,this.pathUrl=u.N.url+s.X.VALIDATION_ENDPOINTS.REPORT_SERVICE+s.X.VALIDATION_ENDPOINTS.VALIDATION_ENGINE}getvalidationList(l){return this.http.post(this.pathUrl+s.X.VALIDATION_ENDPOINTS.AGGREGATION_DATA+s.X.CRUD.GET_ALL,{date:l})}retrieveBalance(l){return this.http.post(this.pathUrl+s.X.VALIDATION_ENDPOINTS.BALANCES+s.X.CRUD.GET_ALL,{date:l})}submitData(l){return this.http.post(this.pathUrl+s.X.CRUD.UPDATE,{aggregationLists:l})}retrieveTransactionTypes(){return this.http.get(this.pathUrl+s.X.VALIDATION_ENDPOINTS.TRANSACTION_TYPE+s.X.CRUD.GET_ALL,{})}getMAxMinRatePlans(l){return this.http.post(u.N.url+s.X.VALIDATION_ENDPOINTS.REPORT_SERVICE+s.X.VALIDATION_ENDPOINTS.DASH_BOARD+s.X.VALIDATION_ENDPOINTS.AGGREGATION_DATA+s.X.CRUD.GET,{date:l})}}return p.\u0275fac=function(l){return new(l||p)(d.LFG(b.eN))},p.\u0275prov=d.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);
//# sourceMappingURL=src_app_home-page_home-page_module_ts.js.map