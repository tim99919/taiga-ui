function _templateObject9(){var e=_taggedTemplateLiteral([":\u241f331439c9b8ee5b975fc037bbc742a75012cb302f\u241f5059560669993049040:Import into component and use:"]);return _templateObject9=function(){return e},e}function _templateObject8(){var e=_taggedTemplateLiteral([":\u241f3788fc82353479c593b85fecef9b30b97b44c431\u241f2743889011977351178:Clamps a value between two inclusive limits"]);return _templateObject8=function(){return e},e}function _templateObject7(){var e=_taggedTemplateLiteral([":\u241f1fa93f4bf5540e71f14d1c49c60f0aa77cccd7d9\u241f7695262008739590886:Rounds a number to the closest value in a fixed discrete series"]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241f5756cf697456ca17c1bfcfce7ab2da2a2976bbcb\u241f6385777968328902844:Normalizes any number to an integer within inclusive range"]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f5fcae35432bf500967c987df7ee13cfd897f95ca\u241f984110598713888465:Checks if the value is in range"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f49e3fcef24f18647990d6a9fa1ba78c9f3b862ff\u241f3234087131078550251:round, floor and ceil with fixed common problems of the native implementation"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241fdd7f17d22638f1551ac688f17563777ddf34163b\u241f5211598598885509667:A set of utils to calculate math"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fff3774138bffaf62a4b812046dfbb9939c42657e\u241f6492831808763156510:Setup"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241feef2307cf678cdf74d7144079256b7fc344c4950\u241f5686247209877234159:Math utils"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{S1s2:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleMathModule",(function(){return P}));var r,a,o,m,i,l,u=n("2kYt"),p=n("nIj0"),c=n("sEIs"),s=n("SVIu"),d=n("dvRg"),f=n("EM62"),v=n("OZlg"),g=n("e0eB"),b=n("iyc4"),C=n("l4xa"),x=n("YjIA"),h=((i=function(){function e(){_classCallCheck(this,e),this.parametersForm=new p.FormGroup({value:new p.FormControl(1.005),precision:new p.FormControl(2)})}return _createClass(e,[{key:"rounded",get:function(){var e=this.parametersForm.value,t=e.value,n=e.precision;return Object(C.round)(t,n)}},{key:"floored",get:function(){var e=this.parametersForm.value,t=e.value,n=e.precision;return Object(C.floor)(t,n)}},{key:"ceiled",get:function(){var e=this.parametersForm.value,t=e.value,n=e.precision;return Object(C.ceil)(t,n)}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f["\u0275\u0275defineComponent"]({type:i,selectors:[["tui-math-example-1"]],decls:12,vars:5,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2",3,"precision"],["formControlName","precision",1,"tui-space_top-2"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"p"),f["\u0275\u0275text"](1),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](2,"p"),f["\u0275\u0275text"](3),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](4,"p"),f["\u0275\u0275text"](5),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](6,"form",0),f["\u0275\u0275elementStart"](7,"div",1),f["\u0275\u0275elementStart"](8,"tui-input-number",2),f["\u0275\u0275text"](9," value "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](10,"tui-input-number",3),f["\u0275\u0275text"](11," precision "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e&&(f["\u0275\u0275advance"](1),f["\u0275\u0275textInterpolate1"]("",t.rounded," = round(value, precision);"),f["\u0275\u0275advance"](2),f["\u0275\u0275textInterpolate1"]("",t.floored," = floor(value, precision);"),f["\u0275\u0275advance"](2),f["\u0275\u0275textInterpolate1"]("",t.ceiled," = ceil(value, precision);"),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("formGroup",t.parametersForm),f["\u0275\u0275advance"](2),f["\u0275\u0275property"]("precision",3))},directives:[p["\u0275angular_packages_forms_forms_y"],p.NgControlStatusGroup,p.FormGroupDirective,x.a,p.NgControlStatus,p.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),i),_=((m=function(){function e(){_classCallCheck(this,e),this.parametersForm=new p.FormGroup({value:new p.FormControl(13),fromInclude:new p.FormControl(5),toExclude:new p.FormControl(42)})}return _createClass(e,[{key:"ranged",get:function(){var e=this.parametersForm.value,t=e.value,n=e.fromInclude,r=e.toExclude;return Object(C.inRange)(t,n,r)}}]),e}()).\u0275fac=function(e){return new(e||m)},m.\u0275cmp=f["\u0275\u0275defineComponent"]({type:m,selectors:[["tui-math-example-2"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","fromInclude",1,"tui-space_top-2"],["formControlName","toExclude",1,"tui-space_top-2"]],template:function(e,t){1&e&&(f["\u0275\u0275text"](0),f["\u0275\u0275elementStart"](1,"form",0),f["\u0275\u0275elementStart"](2,"div",1),f["\u0275\u0275elementStart"](3,"tui-input-number",2),f["\u0275\u0275text"](4," value "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](5,"tui-input-number",3),f["\u0275\u0275text"](6," fromInclude "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](7,"tui-input-number",4),f["\u0275\u0275text"](8," toExclude "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e&&(f["\u0275\u0275textInterpolate1"]("",t.ranged," = inRange(value, fromInclude, toExclude); "),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[p["\u0275angular_packages_forms_forms_y"],p.NgControlStatusGroup,p.FormGroupDirective,x.a,p.NgControlStatus,p.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),m),F=((o=function(){function e(){_classCallCheck(this,e),this.parametersForm=new p.FormGroup({value:new p.FormControl(0),min:new p.FormControl(5),max:new p.FormControl(42)})}return _createClass(e,[{key:"normalized",get:function(){var e=this.parametersForm.value,t=e.value,n=e.min,r=e.max;return Object(C.normalizeToIntNumber)(t,n,r)}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=f["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-math-example-3"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","min",1,"tui-space_top-2"],["formControlName","max",1,"tui-space_top-2"]],template:function(e,t){1&e&&(f["\u0275\u0275text"](0),f["\u0275\u0275elementStart"](1,"form",0),f["\u0275\u0275elementStart"](2,"div",1),f["\u0275\u0275elementStart"](3,"tui-input-number",2),f["\u0275\u0275text"](4," value "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](5,"tui-input-number",3),f["\u0275\u0275text"](6," min "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](7,"tui-input-number",4),f["\u0275\u0275text"](8," max "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e&&(f["\u0275\u0275textInterpolate1"]("",t.normalized," = normalizeToIntNumber(value, min, max); "),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[p["\u0275angular_packages_forms_forms_y"],p.NgControlStatusGroup,p.FormGroupDirective,x.a,p.NgControlStatus,p.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),o),w=((a=function(){function e(){_classCallCheck(this,e),this.parametersForm=new p.FormGroup({value:new p.FormControl(3),quantum:new p.FormControl(2)})}return _createClass(e,[{key:"quantized",get:function(){var e=this.parametersForm.value,t=e.value,n=e.quantum;return Object(C.quantize)(t,n)}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=f["\u0275\u0275defineComponent"]({type:a,selectors:[["tui-math-example-4"]],decls:7,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","quantum",1,"tui-space_top-2"]],template:function(e,t){1&e&&(f["\u0275\u0275text"](0),f["\u0275\u0275elementStart"](1,"form",0),f["\u0275\u0275elementStart"](2,"div",1),f["\u0275\u0275elementStart"](3,"tui-input-number",2),f["\u0275\u0275text"](4," value "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](5,"tui-input-number",3),f["\u0275\u0275text"](6," quantum "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e&&(f["\u0275\u0275textInterpolate1"]("",t.quantized," = quantize(value, quantum); "),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[p["\u0275angular_packages_forms_forms_y"],p.NgControlStatusGroup,p.FormGroupDirective,x.a,p.NgControlStatus,p.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),a),S=((r=function(){function e(){_classCallCheck(this,e),this.parametersForm=new p.FormGroup({value:new p.FormControl(0),min:new p.FormControl(5),max:new p.FormControl(42)})}return _createClass(e,[{key:"clamped",get:function(){var e=this.parametersForm.value,t=e.value,n=e.min,r=e.max;return Object(C.clamp)(t,n,r)}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=f["\u0275\u0275defineComponent"]({type:r,selectors:[["tui-math-example-5"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","min",1,"tui-space_top-2"],["formControlName","max",1,"tui-space_top-2"]],template:function(e,t){1&e&&(f["\u0275\u0275text"](0),f["\u0275\u0275elementStart"](1,"form",0),f["\u0275\u0275elementStart"](2,"div",1),f["\u0275\u0275elementStart"](3,"tui-input-number",2),f["\u0275\u0275text"](4," value "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](5,"tui-input-number",3),f["\u0275\u0275text"](6," min "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](7,"tui-input-number",4),f["\u0275\u0275text"](8," max "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e&&(f["\u0275\u0275textInterpolate1"]("",t.clamped," = clamp(value, min, max); "),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[p["\u0275angular_packages_forms_forms_y"],p.NgControlStatusGroup,p.FormGroupDirective,x.a,p.NgControlStatus,p.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),r),E=n("u8jZ"),y=["header",$localize(_templateObject())],N=["pageTab",$localize(_templateObject2())];l=$localize(_templateObject3());var O,j=["description",$localize(_templateObject4())],G=["description",$localize(_templateObject5())],T=["description",$localize(_templateObject6())],z=["description",$localize(_templateObject7())],k=["description",$localize(_templateObject8())];function I(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"p"),f["\u0275\u0275i18n"](1,l),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](2,"tui-doc-example",3),f["\u0275\u0275i18nAttributes"](3,j),f["\u0275\u0275element"](4,"tui-math-example-1"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](5,"tui-doc-example",4),f["\u0275\u0275i18nAttributes"](6,G),f["\u0275\u0275element"](7,"tui-math-example-2"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](8,"tui-doc-example",5),f["\u0275\u0275i18nAttributes"](9,T),f["\u0275\u0275element"](10,"tui-math-example-3"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](11,"tui-doc-example",6),f["\u0275\u0275i18nAttributes"](12,z),f["\u0275\u0275element"](13,"tui-math-example-4"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](14,"tui-doc-example",7),f["\u0275\u0275i18nAttributes"](15,k),f["\u0275\u0275element"](16,"tui-math-example-5"),f["\u0275\u0275elementEnd"]()),2&e){var n=f["\u0275\u0275nextContext"]();f["\u0275\u0275advance"](2),f["\u0275\u0275property"]("content",n.example1),f["\u0275\u0275advance"](3),f["\u0275\u0275property"]("content",n.example2),f["\u0275\u0275advance"](3),f["\u0275\u0275property"]("content",n.example3),f["\u0275\u0275advance"](3),f["\u0275\u0275property"]("content",n.example4),f["\u0275\u0275advance"](3),f["\u0275\u0275property"]("content",n.example5)}}function M(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"ol",8),f["\u0275\u0275elementStart"](1,"li"),f["\u0275\u0275elementStart"](2,"p"),f["\u0275\u0275i18n"](3,O),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](4,"tui-doc-code",9),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e){var n=f["\u0275\u0275nextContext"]();f["\u0275\u0275advance"](4),f["\u0275\u0275property"]("code",n.importComponentExample)}}O=$localize(_templateObject9());var q,D,L=((D=function e(){_classCallCheck(this,e),this.importComponentExample="import {clamp} from '@taiga-ui/cdk';\n\n...\n    clamped = clamp(value, min, max)\n...\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {ceil, floor, round} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample1 {\n    parametersForm = new FormGroup({\n        value: new FormControl(1.005),\n        precision: new FormControl(2),\n    });\n\n    get rounded(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return round(value, precision);\n    }\n\n    get floored(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return floor(value, precision);\n    }\n\n    get ceiled(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return ceil(value, precision);\n    }\n}\n",HTML:'<p>{{ rounded }} = round(value, precision);</p>\n<p>{{ floored }} = floor(value, precision);</p>\n<p>{{ ceiled }} = ceil(value, precision);</p>\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number\n            formControlName="value"\n            class="tui-space_top-2"\n            [precision]="3"\n        >\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="precision" class="tui-space_top-2">\n            precision\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {inRange} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample2 {\n    parametersForm = new FormGroup({\n        value: new FormControl(13),\n        fromInclude: new FormControl(5),\n        toExclude: new FormControl(42),\n    });\n\n    get ranged(): boolean {\n        const {value, fromInclude, toExclude} = this.parametersForm.value;\n\n        return inRange(value, fromInclude, toExclude);\n    }\n}\n",HTML:'{{ ranged }} = inRange(value, fromInclude, toExclude);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="fromInclude" class="tui-space_top-2">\n            fromInclude\n        </tui-input-number>\n        <tui-input-number formControlName="toExclude" class="tui-space_top-2">\n            toExclude\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {normalizeToIntNumber} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample3 {\n    parametersForm = new FormGroup({\n        value: new FormControl(0),\n        min: new FormControl(5),\n        max: new FormControl(42),\n    });\n\n    get normalized(): number {\n        const {value, min, max} = this.parametersForm.value;\n\n        return normalizeToIntNumber(value, min, max);\n    }\n}\n",HTML:'{{ normalized }} = normalizeToIntNumber(value, min, max);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="min" class="tui-space_top-2">\n            min\n        </tui-input-number>\n        <tui-input-number formControlName="max" class="tui-space_top-2">\n            max\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {quantize} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample4 {\n    parametersForm = new FormGroup({\n        value: new FormControl(3),\n        quantum: new FormControl(2),\n    });\n\n    get quantized(): number {\n        const {value, quantum} = this.parametersForm.value;\n\n        return quantize(value, quantum);\n    }\n}\n",HTML:'{{ quantized }} = quantize(value, quantum);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="quantum" class="tui-space_top-2">\n            quantum\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"},this.example5={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {clamp} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample5 {\n    parametersForm = new FormGroup({\n        value: new FormControl(0),\n        min: new FormControl(5),\n        max: new FormControl(42),\n    });\n\n    get clamped(): number {\n        const {value, min, max} = this.parametersForm.value;\n\n        return clamp(value, min, max);\n    }\n}\n",HTML:'{{ clamped }} = clamp(value, min, max);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="min" class="tui-space_top-2">\n            min\n        </tui-input-number>\n        <tui-input-number formControlName="max" class="tui-space_top-2">\n            max\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"}}).\u0275fac=function(e){return new(e||D)},D.\u0275cmp=f["\u0275\u0275defineComponent"]({type:D,selectors:[["example-math"]],decls:5,vars:0,consts:[["package","CDK","path","cdk/utils/math",6,"header"],["pageTab",""],[6,"pageTab"],["id","round","heading","round",3,"content",6,"description"],["id","inRange","heading","inRange",3,"content",6,"description"],["id","normalizeToIntNumber","heading","normalizeToIntNumber",3,"content",6,"description"],["id","quantize","heading","quantize",3,"content",6,"description"],["id","clamp","heading","clamp",3,"content",6,"description"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"tui-doc-page",0),f["\u0275\u0275i18nAttributes"](1,y),f["\u0275\u0275template"](2,I,17,5,"ng-template",1),f["\u0275\u0275template"](3,M,5,1,"ng-template",2),f["\u0275\u0275i18nAttributes"](4,N),f["\u0275\u0275elementEnd"]())},directives:[v.a,g.a,b.a,h,_,F,w,S,E.a],encapsulation:2,changeDetection:0}),D),P=((q=function e(){_classCallCheck(this,e)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:q}),q.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||q)},imports:[[u.c,d.TuiInputNumberModule,p.FormsModule,p.ReactiveFormsModule,s.h,c.f.forChild(Object(s.o)(L))]]}),q)}}]);