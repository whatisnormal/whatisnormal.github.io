"use strict";(self.webpackChunkblog_whatisnormal=self.webpackChunkblog_whatisnormal||[]).push([[891],{4891:(lr,ye,a)=>{a.r(ye),a.d(ye,{SANDBOX_ROUTES:()=>sr});var b=a(6895),o=a(1571),xt=a(2076),ve=a(9751),Gt=a(4742),Bt=a(8421),It=a(3269),Pt=a(5403),Tt=a(3268),kt=a(1810);function Z(...n){const t=(0,It.jO)(n),{args:e,keys:r}=(0,Gt.D)(n),i=new ve.y(s=>{const{length:l}=e;if(!l)return void s.complete();const d=new Array(l);let y=l,A=l;for(let W=0;W<l;W++){let _e=!1;(0,Bt.Xf)(e[W]).subscribe((0,Pt.x)(s,ar=>{_e||(_e=!0,A--),d[W]=ar},()=>y--,void 0,()=>{(!y||!_e)&&(A||s.next(r?(0,kt.n)(r,d):d),s.complete())}))}});return t?i.pipe((0,Tt.Z)(t)):i}var Ce=a(4004);let Ve=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),m=(()=>{class n extends Ve{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),Ht={provide:h,useExisting:(0,o.Gpc)(()=>B),multi:!0},jt=new o.OlP("CompositionEventMode");let B=(()=>{class n extends Ve{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Rt(){const n=(0,b.q)()?(0,b.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(jt,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([Ht]),o.qOj]}),n})();const u=new o.OlP("NgValidators"),p=new o.OlP("NgAsyncValidators");function xe(n){return null!=n}function Ge(n){return(0,o.QGY)(n)?(0,xt.D)(n):n}function Be(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function Ie(n,t){return t.map(e=>e(n))}function Pe(n){return n.map(t=>function Yt(n){return!n.validate}(t)?t:e=>t.validate(e))}function J(n){return null!=n?function Te(n){if(!n)return null;const t=n.filter(xe);return 0==t.length?null:function(e){return Be(Ie(e,t))}}(Pe(n)):null}function X(n){return null!=n?function ke(n){if(!n)return null;const t=n.filter(xe);return 0==t.length?null:function(e){return Z(Ie(e,t).map(Ge)).pipe((0,Ce.U)(Be))}}(Pe(n)):null}function Ue(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function He(n){return n._rawValidators}function Re(n){return n._rawAsyncValidators}function Q(n){return n?Array.isArray(n)?n:[n]:[]}function P(n,t){return Array.isArray(n)?n.includes(t):n===t}function je(n,t){const e=Q(t);return Q(n).forEach(i=>{P(e,i)||e.push(i)}),e}function Le(n,t){return Q(t).filter(e=>!P(n,e))}class $e{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=J(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=X(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class c extends $e{get formDirective(){return null}get path(){return null}}class g extends $e{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Ye{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let qe=(()=>{class n extends Ye{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(g,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})(),ze=(()=>{class n extends Ye{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(c,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[o.qOj]}),n})();const D="VALID",k="INVALID",v="PENDING",M="DISABLED";function ne(n){return(U(n)?n.validators:n)||null}function re(n,t){return(U(t)?t.asyncValidators:n)||null}function U(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}function Ze(n,t,e){const r=n.controls;if(!(t?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[e])throw new o.vHH(1001,"")}function Je(n,t,e){n._forEachChild((r,i)=>{if(void 0===e[i])throw new o.vHH(1002,"")})}class H{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===D}get invalid(){return this.status===k}get pending(){return this.status==v}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(je(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(je(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Le(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Le(t,this._rawAsyncValidators))}hasValidator(t){return P(this._rawValidators,t)}hasAsyncValidator(t){return P(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=v,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=M,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=D,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===v)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator=!0;const e=Ge(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?k:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(k)?k:D}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){U(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function Qt(n){return Array.isArray(n)?J(n):n||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function Kt(n){return Array.isArray(n)?X(n):n||null}(this._rawAsyncValidators)}}class E extends H{constructor(t,e,r){super(ne(e),re(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){Je(this,0,t),Object.keys(t).forEach(r=>{Ze(this,!0,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{const i=this.controls[r];i&&i.patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[e,r]of Object.entries(this.controls))if(this.contains(e)&&t(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}class Xe extends E{}const C=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>R}),R="always";function F(n,t,e=R){oe(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||"always"===e)&&t.valueAccessor.setDisabledState?.(n.disabled),function tn(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Qe(n,t)})}(n,t),function rn(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function nn(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Qe(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function en(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function L(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),Y(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function $(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function oe(n,t){const e=He(n);null!==t.validator?n.setValidators(Ue(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=Re(n);null!==t.asyncValidator?n.setAsyncValidators(Ue(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();$(t._rawValidators,i),$(t._rawAsyncValidators,i)}function Y(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=He(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(l=>l!==t.validator);s.length!==i.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const i=Re(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(l=>l!==t.asyncValidator);s.length!==i.length&&(e=!0,n.setAsyncValidators(s))}}}const r=()=>{};return $(t._rawValidators,r),$(t._rawAsyncValidators,r),e}function Qe(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function tt(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function nt(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const N=class extends H{constructor(t=null,e,r){super(ne(e),re(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),U(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=nt(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){tt(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){tt(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){nt(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};let at=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),ut=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const ue=new o.OlP("NgModelWithFormControlWarning"),yn={provide:c,useExisting:(0,o.Gpc)(()=>q)};let q=(()=>{class n extends c{constructor(e,r,i){super(),this.callSetDisabledState=i,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Y(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return F(r,e,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){L(e.control||null,e,!1),function ln(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,function et(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(e),"dialog"===e?.target?.method}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,i=this.form.get(e.path);r!==i&&(L(r||null,e),(n=>n instanceof N)(i)&&(F(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);(function Ke(n,t){oe(n,t)})(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function on(n,t){return Y(n,t)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){oe(this.form,this),this._oldForm&&Y(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,10),o.Y36(p,10),o.Y36(C,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([yn]),o.qOj,o.TTD]}),n})();const Vn={provide:g,useExisting:(0,o.Gpc)(()=>he)};let he=(()=>{class n extends g{constructor(e,r,i,s,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function ae(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===B?e=s:function an(n){return Object.getPrototypeOf(n.constructor)===m}(s)?r=s:i=s}),i||r||e||null}(0,s)}set isDisabled(e){}ngOnChanges(e){this._added||this._setUpControl(),function se(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return function j(n,t){return[...t.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(o.Y36(c,13),o.Y36(u,10),o.Y36(p,10),o.Y36(h,10),o.Y36(ue,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([Vn]),o.qOj,o.TTD]}),n})(),Mt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[ut]}),n})(),Pn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:C,useValue:e.callSetDisabledState??R}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Mt]}),n})(),Et=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:ue,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:C,useValue:e.callSetDisabledState??R}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Mt]}),n})();class Ft extends H{constructor(t,e,r){super(ne(e),re(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){let r=this._adjustIndex(t);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){let i=this._adjustIndex(t);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){Je(this,0,t),t.forEach((r,i)=>{Ze(this,!1,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}}function wt(n){return!!n&&(void 0!==n.asyncValidators||void 0!==n.validators||void 0!==n.updateOn)}let Tn=(()=>{class n{constructor(){this.useNonNullable=!1}get nonNullable(){const e=new n;return e.useNonNullable=!0,e}group(e,r=null){const i=this._reduceControls(e);let s={};return wt(r)?s=r:null!==r&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new E(i,s)}record(e,r=null){const i=this._reduceControls(e);return new Xe(i,r)}control(e,r,i){let s={};return this.useNonNullable?(wt(r)?s=r:(s.validators=r,s.asyncValidators=i),new N(e,{...s,nonNullable:!0})):new N(e,r,i)}array(e,r,i){const s=e.map(l=>this._createControl(l));return new Ft(s,r,i)}_reduceControls(e){const r={};return Object.keys(e).forEach(i=>{r[i]=this._createControl(e[i])}),r}_createControl(e){return e instanceof N||e instanceof H?e:Array.isArray(e)?this.control(e[0],e.length>1?e[1]:null,e.length>2?e[2]:null):this.control(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:Et}),n})();class O{constructor(t){this.fb=t}ngOnInit(){this.profileForm=this.fb.group({firstName:"",lastName:""})}}O.\u0275fac=function(t){return new(t||O)(o.Y36(Tn))},O.\u0275cmp=o.Xpm({type:O,selectors:[["app-forms"]],standalone:!0,features:[o.jDz],decls:7,vars:1,consts:[[3,"formGroup"],["for","first-name"],["id","first-name","type","text","formControlName","firstName"],["for","last-name"],["id","last-name","type","text","formControlName","lastName"]],template:function(t,e){1&t&&(o.TgZ(0,"form",0)(1,"label",1),o._uU(2,"First Name: "),o.qZA(),o._UZ(3,"input",2),o.TgZ(4,"label",3),o._uU(5,"Last Name: "),o.qZA(),o._UZ(6,"input",4),o.qZA()),2&t&&o.Q6J("formGroup",e.profileForm)},dependencies:[b.ez,Et,at,B,qe,ze,q,he,Pn]});var kn=a(7579),Un=a(727);class Hn extends Un.w0{constructor(t,e){super()}schedule(t,e=0){return this}}const z={setInterval(n,t,...e){const{delegate:r}=z;return r?.setInterval?r.setInterval(n,t,...e):setInterval(n,t,...e)},clearInterval(n){const{delegate:t}=z;return(t?.clearInterval||clearInterval)(n)},delegate:void 0};var Rn=a(8737);const Nt={now:()=>(Nt.delegate||Date).now(),delegate:void 0};class S{constructor(t,e=S.now){this.schedulerActionCtor=t,this.now=e}schedule(t,e=0,r){return new this.schedulerActionCtor(this,t).schedule(r,e)}}S.now=Nt.now;const Ot=new class Ln extends S{constructor(t,e=S.now){super(t,e),this.actions=[],this._active=!1}flush(t){const{actions:e}=this;if(this._active)return void e.push(t);let r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,r){for(;t=e.shift();)t.unsubscribe();throw r}}}(class jn extends Hn{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){var r;if(this.closed)return this;this.state=t;const i=this.id,s=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(s,i,e)),this.pending=!0,this.delay=e,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(s,this.id,e),this}requestAsyncId(t,e,r=0){return z.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,e,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return e;null!=e&&z.clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(t,e);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let i,r=!1;try{this.work(t)}catch(s){r=!0,i=s||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){const{id:t,scheduler:e}=this,{actions:r}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,Rn.P)(r,this),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null,super.unsubscribe()}}}),$n=Ot;var Yn=a(3532);var Zn=a(5698),Jn=a(9841),Xn=a(3900),Qn=a(9646),Kn=a(5577),er=a(7359),St=a(4482);const nr=(n,t)=>(n.push(t),n);var or=a(7272),ir=a(6451),me=a(529);class V{constructor(t){this.http=t}getPostsByUserId$(t){return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${t}`)}}V.\u0275fac=function(t){return new(t||V)(o.LFG(me.eN))},V.\u0275prov=o.Yz7({token:V,factory:V.\u0275fac,providedIn:"root"});class x{constructor(t,e){this.http=t,this.mockDataService=e,this.entityEditedSubject=new kn.x,this.entityEdited$=this.entityEditedSubject.asObservable(),this.users$=this.http.get("https://jsonplaceholder.typicode.com/users"),this.posts$=this.http.get("https://jsonplaceholder.typicode.com/posts")}notifyEdit(t){this.entityEditedSubject.next(t)}ngOnInit(){this.callUserAndCorrespondentPosts()}callContinuousData(){const t=function Wn(n=0,t=Ot){return n<0&&(n=0),function zn(n=0,t,e=$n){let r=-1;return null!=t&&((0,Yn.K)(t)?e=t:r=t),new ve.y(i=>{let s=function qn(n){return n instanceof Date&&!isNaN(n)}(n)?+n-e.now():n;s<0&&(s=0);let l=0;return e.schedule(function(){i.closed||(i.next(l++),0<=r?this.schedule(void 0,r):i.complete())},s)})}(n,n,t)}(3e3).pipe((0,Zn.q)(10));(0,Jn.a)({users:this.users$,timerAlwaysEmmiting:t}).subscribe(this.loggingObserver("call when all streams emited at least once."))}callMultipleData(){Z({users:this.users$,posts:this.posts$}).subscribe(this.loggingObserver("call when all streams complete"))}callUserAndCorrespondentPosts(){this.users$.pipe((0,Xn.w)(t=>Z(this.converUsersToPostsObservables(t)))).subscribe(this.loggingObserver("callUserAndCorrespondentPosts"))}callAggregateIntoSingleArray(){(0,Qn.of)(1,2,3,4).pipe((0,Kn.z)(t=>this.mockDataService.getPostsByUserId$(t)),function rr(){return(0,St.e)((n,t)=>{(function tr(n,t){return(0,St.e)((0,er.U)(n,t,arguments.length>=2,!1,!0))})(nr,[])(n).subscribe(t)})}(),(0,Ce.U)(t=>t.flat())).subscribe(this.loggingObserver("callAggregateIntoSingleArray"))}sequentialStreams(){(0,or.z)(this.users$,this.posts$).subscribe(this.loggingObserver("one stream after another."))}mergeStreams(){(0,ir.T)(this.users$,this.posts$).subscribe(this.loggingObserver("merge:"))}converUsersToPostsObservables(t){return t.map(e=>this.mockDataService.getPostsByUserId$(e.id))}loggingObserver(t){return{next:e=>{console.log(`%c [${t}]`,"background: #222; color: #bada55"),console.dir(e,{depth:null,colors:!0}),this.data=JSON.stringify(e,null,"\t")},error:e=>{console.error(`[${t}]:`,e,"background: #222; color: #bada55")},complete:()=>{console.log(`%c [${t}]: observable stream completed`,"background: #222; color: #bada55")}}}}x.\u0275fac=function(t){return new(t||x)(o.Y36(me.eN),o.Y36(V))},x.\u0275cmp=o.Xpm({type:x,selectors:[["app-rxjs"]],standalone:!0,features:[o.jDz],decls:3,vars:1,consts:[[2,"width","100%"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0)(1,"pre"),o._uU(2),o.qZA()()),2&t&&(o.xp6(2),o.Oqu(e.data))},dependencies:[b.ez]});class G{constructor(t){this.http=t}ngOnInit(){}}G.\u0275fac=function(t){return new(t||G)(o.Y36(me.eN))},G.\u0275cmp=o.Xpm({type:G,selectors:[["app-sandbox"]],standalone:!0,features:[o.jDz],decls:2,vars:0,template:function(t,e){1&t&&(o.TgZ(0,"p"),o._uU(1,"sandbox works!"),o.qZA())},dependencies:[b.ez]});const sr=[{path:"",component:G},{path:"rxjs",component:x},{path:"forms",component:O}]}}]);