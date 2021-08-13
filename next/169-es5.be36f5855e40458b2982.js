function _templateObject8(){var e=_taggedTemplateLiteral([":\u241f831c70609f5320ba73bb112526ec9cb86c71367c\u241f4548722462586549001:Tokens"]);return _templateObject8=function(){return e},e}function _templateObject7(){var e=_taggedTemplateLiteral([":\u241faf8e0e8fe029b54fac3e70c9f338a6c05b0c9672\u241f7539417258157103198: A token with a factory. It takes USER_AGENT token and parses it with a complex Regex to detect users with mobile devices\n"]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241ff57d16773443de35b06009d27ce64696aef67765\u241f2614111316457999277: A token with a factory. It takes ",":START_LINK:TUI_IS_MOBILE",":CLOSE_LINK: and if it is true detects iOS devices with a regex\n"]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f2401a1fc4953d6ea36212c5785b27be0e480cd15\u241f1542562001829355423: A token with a factory. It takes ",":START_LINK:TUI_IS_MOBILE",":CLOSE_LINK: and ",":START_LINK_1:TUI_IS_IOS",":CLOSE_LINK:, returnstrue if the device is mobile but not iOS (technically includes Windows Phone, Blackberry etc.)\n"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f5a884c8ed330261c2913e8c3229292b6a2c58a96\u241f6417456326684374424: All Taiga UI components that can be focused provide this token so you can inject them into your directives that work with focus.\n"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241fc9c3023afb60b14498fe4d2cc8421748aadc569c\u241f4151089546493976005: You can create your own service extending ",":START_LINK:AbstractTuiDialogService",":CLOSE_LINK: to easily add modal dialogs to your application.\n"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f3735e1c2789e5eb1308b011e6862a55148f3a412\u241f5790686667387545292: A multi token of Observables of modal dialogs displayed by ",":START_LINK:TuiDialogHostComponent",":CLOSE_LINK:.\n"]);return _templateObject2=function(){return e},e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fb4dbfc932d95d55e9a26345b7dde1027082f26f3\u241f2067104080637114398: Inject this token if you need access to Renderer inside a singleton service.\n"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{xag9:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTokensModule",(function(){return B}));var a,o=n("2kYt"),i=n("sEIs"),c=n("SVIu"),r=n("Qq0t"),l=n("EM62"),s=n("OZlg"),p=n("e0eB"),m=n("iyc4"),u=n("ZPGh");a=$localize(_templateObject());var d,f,I,h=((d=function e(t){_classCallCheck(this,e),this.renderer=t,this.style=this.renderer.createElement("style")}).\u0275fac=function(e){return new(e||d)(l["\u0275\u0275directiveInject"](u.b))},d.\u0275cmp=l["\u0275\u0275defineComponent"]({type:d,selectors:[["tui-token-example-1"]],decls:2,vars:0,template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18n"](1,a),l["\u0275\u0275elementEnd"]())},encapsulation:2,changeDetection:0}),d),_=n("l4xa"),g=n("yZWP");f=$localize(_templateObject2(),"\ufffd#2\ufffd","\ufffd/#2\ufffd"),I=$localize(_templateObject3(),"\ufffd#5\ufffd","\ufffd/#5\ufffd");var k,T,b=((k=function e(t){_classCallCheck(this,e),this.dialogs=t}).\u0275fac=function(e){return new(e||k)(l["\u0275\u0275directiveInject"](_.TUI_DIALOGS,8))},k.\u0275cmp=l["\u0275\u0275defineComponent"]({type:k,selectors:[["tui-token-example-2"]],decls:6,vars:0,consts:[["tuiLink","","routerLink","/dialog"],["tuiLink","","routerLink","/services/dialog-service"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18nStart"](1,f),l["\u0275\u0275element"](2,"a",0),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"p"),l["\u0275\u0275i18nStart"](4,I),l["\u0275\u0275element"](5,"a",1),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"]())},directives:[g.a,i.e],encapsulation:2,changeDetection:0}),k);T=$localize(_templateObject4());var S,O,v=((S=function e(t){_classCallCheck(this,e),this.tuiFocusableComponent=t}).\u0275fac=function(e){return new(e||S)(l["\u0275\u0275directiveInject"](_.TUI_FOCUSABLE_ITEM_ACCESSOR,8))},S.\u0275cmp=l["\u0275\u0275defineComponent"]({type:S,selectors:[["tui-token-example-3"]],decls:2,vars:0,template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18n"](1,T),l["\u0275\u0275elementEnd"]())},encapsulation:2,changeDetection:0}),S);O=$localize(_templateObject5(),"\ufffd#2\ufffd","[\ufffd/#2\ufffd|\ufffd/#3\ufffd]","\ufffd#3\ufffd","[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"),O=l["\u0275\u0275i18nPostprocess"](O);var x,E,y=((x=function e(t){_classCallCheck(this,e),this.isAndroid=t}).\u0275fac=function(e){return new(e||x)(l["\u0275\u0275directiveInject"](_.TUI_IS_ANDROID))},x.\u0275cmp=l["\u0275\u0275defineComponent"]({type:x,selectors:[["tui-token-example-4"]],decls:4,vars:0,consts:[["tuiLink","","routerLink","/tokens/is-mobile"],["tuiLink","","routerLink","/tokens/is-ios"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18nStart"](1,O),l["\u0275\u0275element"](2,"a",0),l["\u0275\u0275element"](3,"a",1),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"]())},directives:[g.a,i.e],encapsulation:2,changeDetection:0}),x);E=$localize(_templateObject6(),"\ufffd#2\ufffd","\ufffd/#2\ufffd");var L,C,j=((L=function e(t){_classCallCheck(this,e),this.isIos=t}).\u0275fac=function(e){return new(e||L)(l["\u0275\u0275directiveInject"](u.g))},L.\u0275cmp=l["\u0275\u0275defineComponent"]({type:L,selectors:[["tui-token-example-5"]],decls:3,vars:0,consts:[["tuiLink","","routerLink","/tokens/is-mobile"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18nStart"](1,E),l["\u0275\u0275element"](2,"a",0),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"]())},directives:[g.a,i.e],encapsulation:2,changeDetection:0}),L);C=$localize(_templateObject7());var U,w=((U=function e(t){_classCallCheck(this,e),this.isMobile=t}).\u0275fac=function(e){return new(e||U)(l["\u0275\u0275directiveInject"](_.TUI_IS_MOBILE))},U.\u0275cmp=l["\u0275\u0275defineComponent"]({type:U,selectors:[["tui-token-example-6"]],decls:2,vars:0,template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18n"](1,C),l["\u0275\u0275elementEnd"]())},encapsulation:2,changeDetection:0}),U),D=["header",$localize(_templateObject8())];function A(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-example",2),l["\u0275\u0275element"](1,"tui-token-example-1"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"tui-doc-example",3),l["\u0275\u0275element"](3,"tui-token-example-2"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"tui-doc-example",4),l["\u0275\u0275element"](5,"tui-token-example-3"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"tui-doc-example",5),l["\u0275\u0275element"](7,"tui-token-example-4"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"tui-doc-example",6),l["\u0275\u0275element"](9,"tui-token-example-5"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"tui-doc-example",7),l["\u0275\u0275element"](11,"tui-token-example-6"),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("content",n.example1),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",n.example2),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",n.example3),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",n.example4),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",n.example5),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",n.example6)}}var R,M,N=((M=function e(){_classCallCheck(this,e),this.example1={TypeScript:"import {Component, Inject, Renderer2} from '@angular/core';\nimport {TUI_DEFAULT_RENDERER} from '@taiga-ui/cdk/tokens';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-token-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample1 {\n    constructor(@Inject(TUI_DEFAULT_RENDERER) private readonly renderer: Renderer2) {}\n\n    style = this.renderer.createElement('style');\n}\n",HTML:"<p i18n>\n    Inject this token if you need access to Renderer inside a singleton service.\n</p>\n"},this.example2={TypeScript:"import {Component, Inject, Optional} from '@angular/core';\nimport {TUI_DIALOGS} from '@taiga-ui/cdk';\nimport {Observable} from 'rxjs';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-token-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample2 {\n    constructor(\n        @Optional()\n        @Inject(TUI_DIALOGS)\n        readonly dialogs: readonly Observable<readonly unknown[]>[] | null,\n    ) {}\n}\n",HTML:'<p i18n>\n    A multi token of Observables of modal dialogs displayed by\n    <a tuiLink routerLink="/dialog">TuiDialogHostComponent</a>.\n</p>\n<p i18n>\n    You can create your own service extending\n    <a tuiLink routerLink="/services/dialog-service"\n        >AbstractTuiDialogService</a\n    >\n    to easily add modal dialogs to your application.\n</p>\n'},this.example3={TypeScript:"import {Component, Inject, Optional} from '@angular/core';\nimport {TUI_FOCUSABLE_ITEM_ACCESSOR, TuiFocusableElementAccessor} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-token-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample3 {\n    constructor(\n        @Optional()\n        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)\n        readonly tuiFocusableComponent: TuiFocusableElementAccessor | null,\n    ) {}\n}\n",HTML:"<p i18n>\n    All Taiga UI components that can be focused provide this token so you can\n    inject them into your directives that work with focus.\n</p>\n"},this.example4={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {TUI_IS_ANDROID} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-token-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample4 {\n    constructor(@Inject(TUI_IS_ANDROID) readonly isAndroid: boolean) {}\n}\n",HTML:'<p i18n>\n    A token with a factory. It takes\n    <a tuiLink routerLink="/tokens/is-mobile">TUI_IS_MOBILE</a>\n    and <a tuiLink routerLink="/tokens/is-ios">TUI_IS_IOS</a>, returnstrue if\n    the device is mobile but not iOS (technically includes Windows Phone,\n    Blackberry etc.)\n</p>\n'},this.example5={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-token-example-5',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample5 {\n    constructor(@Inject(TUI_IS_IOS) readonly isIos: boolean) {}\n}\n",HTML:'<p i18n>\n    A token with a factory. It takes\n    <a tuiLink routerLink="/tokens/is-mobile">TUI_IS_MOBILE</a>\n    and if it is true detects iOS devices with a regex\n</p>\n'},this.example6={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {TUI_IS_MOBILE} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-token-example-6',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample6 {\n    constructor(@Inject(TUI_IS_MOBILE) readonly isMobile: boolean) {}\n}\n",HTML:"<p i18n>\n    A token with a factory. It takes USER_AGENT token and parses it with a\n    complex Regex to detect users with mobile devices\n</p>\n"},this.example7={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {TUI_MONTHS} from '@taiga-ui/core';\nimport {Observable} from 'rxjs';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-token-example-7',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample7 {\n    constructor(@Inject(TUI_MONTHS) readonly months$: Observable<string[]>) {}\n}\n",HTML:"<p i18n>\n    Provide an array of 12 strings for localized names for months to be used in\n    TuiMonthPipe\n</p>\n"}}).\u0275fac=function(e){return new(e||M)},M.\u0275cmp=l["\u0275\u0275defineComponent"]({type:M,selectors:[["example-tokens"]],decls:3,vars:0,consts:[["package","CDK","path","cdk/tokens",6,"header"],["pageTab",""],["id","default-renderer","heading","TUI_DEFAULT_RENDERER",3,"content"],["id","dialog","heading","TUI_DIALOGS",3,"content"],["id","focusable-item-accessor","heading","TUI_FOCUSABLE_ITEM_ACCESSOR",3,"content"],["id","is-android","heading","TUI_IS_ANDROID",3,"content"],["id","is-ios","heading","TUI_IS_IOS",3,"content"],["id","is-mobile","heading","TUI_IS_MOBILE",3,"content"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275i18nAttributes"](1,D),l["\u0275\u0275template"](2,A,12,6,"ng-template",1),l["\u0275\u0275elementEnd"]())},directives:[s.a,p.a,m.a,h,b,v,y,j,w],encapsulation:2,changeDetection:0}),M),B=((R=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:R}),R.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||R)},imports:[[o.c,r.TuiLinkModule,c.h,i.f.forChild(Object(c.o)(N))]]}),R)}}]);