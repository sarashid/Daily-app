"use strict";(self.webpackChunkDaily=self.webpackChunkDaily||[]).push([["src_app_manual-adjustment_manual-adjustment_module_ts"],{584:(C,u,n)=>{n.r(u),n.d(u,{ManualAdjustmentModule:()=>x});var c=n(6362),o=n(2263),d=n(267),r=n(9597),e=n(3184),h=n(3514),m=n(9185),b=n(1081),p=n(111),g=n(6709);const v=[{path:"",redirectTo:"adjustment",pathMatch:"full"},{path:"adjustment",component:(()=>{class a{constructor(t,l,i,y){this.headerService=t,this.validationService=l,this.adjustmentService=i,this.privilegesService=y,this.title="Manual Adjustment",this.adjustmentTable=new d.G,this.headers=[{fieldId:"ratePlan",title:"Rate Plan"},{fieldId:"opening",title:"Opening",classStyle:"green tab-style"},{fieldId:"closing",title:"Closing",classStyle:"blue tab-style"},{fieldId:"variance",title:"Variance",classStyle:"red tab-style"}],this.extraCols=[{fieldId:"numberOfSubs",label:"Num Of Subs",title:"Export as Excel",show:!0,type:"input",inputType:"number"},{fieldId:"trxTypeKey",title:"search",type:"dropdown",data:[],optionLabel:"",show:!0,placeholder:"Transaction Type"}]}ngOnInit(){this.enableUpdatePatch=this.privilegesService.checkPrivileges(r.$.MANUAL_ADJUSTMENT.UPDATE),this.validationService.retrieveTransactionTypes().subscribe(t=>{this.extraCols[0].data=t.payload.transactionModelList,this.extraCols[0].optionLabel=this.extraCols[1].optionLabel="trxTypeName",this.extraCols[1].data=t.payload.transactionModelList}),this.epochDate=localStorage.getItem("date"),this.getData(),this.dateSubscription=this.headerService.DateSubject.subscribe(t=>{this.epochDate=t,this.getData()})}fillTable(t){this.originalData=JSON.parse(JSON.stringify(t)),this.adjustmentTable.cols=this.headers,this.adjustmentTable.extracols=this.extraCols,this.adjustmentTable.pagination=!0,this.adjustmentTable.name="manualAdjustment",this.adjustmentTable.data=t,this.adjustmentTable.lockFlag=!1,this.adjustmentTable.editFlag=!1,this.adjustmentTable.deleteFlag=!1,this.adjustmentTable.hasSubmit=!0,this.adjustmentTable.globalFilterFields=["ratePlan","opening","closing","variance"]}getData(){this.manualSubscr=this.adjustmentService.getManualAdjustment(this.epochDate).subscribe(t=>{var l;this.tableData=t.payload,null===(l=this.tableData)||void 0===l||l.map(i=>{i.numberOfSubs=-i.variance}),this.fillTable(this.tableData)})}ngOnDestroy(){this.manualSubscr.unsubscribe(),this.dateSubscription.unsubscribe()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(h.r),e.Y36(m.R),e.Y36(b.G),e.Y36(p.y))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-manual-adjustment"]],decls:7,vars:3,consts:[[1,"layout-margin"],[1,"row","flex","header"],[1,"col-7","flex","pt-4"],[1,"icon-manual"],[1,"text"],[3,"table","enableUpdatePatch","originalData"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"i",3),e.TgZ(4,"span",4),e._uU(5,"Manual Adjustment"),e.qZA()()(),e._UZ(6,"app-table",5),e.qZA()),2&t&&(e.xp6(6),e.Q6J("table",l.adjustmentTable)("enableUpdatePatch",l.enableUpdatePatch)("originalData",l.originalData))},directives:[g.a],styles:[".header[_ngcontent-%COMP%]   .icon-manual[_ngcontent-%COMP%] {\n  color: #142645b3;\n  padding-right: 5px;\n  font-size: 17px;\n}\n.header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: var(--lightBlack);\n  font: normal normal normal bold 17px/17px Cairo;\n  letter-spacing: 1.25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbnVhbC1hZGp1c3RtZW50LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERhaWx5JTIwQXBwXFxEYWlseVxcc3JjXFxhcHBcXG1hbnVhbC1hZGp1c3RtZW50XFxsYXlvdXRcXG1hbnVhbC1hZGp1c3RtZW50XFxtYW51YWwtYWRqdXN0bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQU5hO0FDSWpCO0FES0U7RUFDRSx3QkFBQTtFQUNBLCtDQVZlO0VBV2Ysc0JBQUE7QUNISiIsImZpbGUiOiJtYW51YWwtYWRqdXN0bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRoZWFkZXJGb250U2l6ZTogMTdweDtcclxuJGhlYWRlckZvbnRTdHJlY2g6IG5vcm1hbCBub3JtYWwgbm9ybWFsIGJvbGQgMTdweC8xN3B4IENhaXJvO1xyXG4uaGVhZGVyIHtcclxuICAuaWNvbi1tYW51YWwge1xyXG4gICAgY29sb3I6ICMxNDI2NDViMztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogJGhlYWRlckZvbnRTaXplO1xyXG4gIH1cclxuXHJcbiAgLnRleHQge1xyXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0QmxhY2spO1xyXG4gICAgZm9udDogJGhlYWRlckZvbnRTdHJlY2g7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xyXG4gIH1cclxufVxyXG4iLCIuaGVhZGVyIC5pY29uLW1hbnVhbCB7XG4gIGNvbG9yOiAjMTQyNjQ1YjM7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLmhlYWRlciAudGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1saWdodEJsYWNrKTtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgYm9sZCAxN3B4LzE3cHggQ2Fpcm87XG4gIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XG59Il19 */"]}),a})()}];let I=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[o.Bz.forChild(v)],o.Bz]}),a})();var j=n(4466);let x=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[c.ez,I,j.m]]}),a})()}}]);
//# sourceMappingURL=src_app_manual-adjustment_manual-adjustment_module_ts.js.map