webpackJsonp([1,4],{301:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(t){this.text=t}return t}()},344:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=344},345:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(433),r=n(0),a=n(457),c=n(454);a.a.production&&n.i(r.a)(),n.i(o.a)().bootstrapModule(c.a)},453:function(t,e,n){"use strict";var o=n(0),r=n(301);n.d(e,"a",function(){return i});var a=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,c=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(a<3?r(c):a>3?r(e,n,c):r(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){this.arr=[]}return t.prototype.ngOnInit=function(){this.arr.push(new r.a("Task number"))},t.prototype.add=function(){this.arr.push(new r.a("Task number"))},t.prototype.remove=function(){this.arr.pop()},t.prototype.clear=function(){this.arr=[]},t=a([n.i(o.U)({selector:"app-root",template:n(613),styles:[n(610)]}),c("design:paramtypes",[])],t)}()},454:function(t,e,n){"use strict";var o=n(193),r=n(0),a=n(423),c=n(429),i=n(453),f=n(456),u=n(455);n.d(e,"a",function(){return l});var s=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,c=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(a<3?r(c):a>3?r(e,n,c):r(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},p=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(){}return t=s([n.i(r.b)({declarations:[i.a,f.a,u.a],imports:[o.a,a.a,c.a],providers:[],bootstrap:[i.a]}),p("design:paramtypes",[])],t)}()},455:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,c=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(a<3?r(c):a>3?r(e,n,c):r(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){}return t.prototype.ngOnInit=function(){},t=r([n.i(o.U)({selector:"app-task-add",template:n(614),styles:[n(611)]}),a("design:paramtypes",[])],t)}()},456:function(t,e,n){"use strict";var o=n(0),r=n(301);n.d(e,"a",function(){return i});var a=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,c=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(a<3?r(c):a>3?r(e,n,c):r(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.ngOnInit=function(){},a([n.i(o.w)(),c("design:type","function"==typeof(e=void 0!==r.a&&r.a)&&e||Object)],t.prototype,"task",void 0),a([n.i(o.w)(),c("design:type",Number)],t.prototype,"nr",void 0),t=a([n.i(o.U)({selector:"app-task",template:n(615),styles:[n(612)]}),c("design:paramtypes",[])],t);var e}()},457:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},610:function(t,e){t.exports="button{color:brown}"},611:function(t,e){t.exports=""},612:function(t,e){t.exports=""},613:function(t,e){t.exports='<button (click) = "add()">Add</button>\n<button (click) = "remove()">Remove</button>\n<button (click) = "clear()">Clear</button>\n<app-task *ngFor="let task of arr; let i = index" [task] = "task" [nr] = "i + 1"></app-task>\n\n'},614:function(t,e){t.exports="<p>\n  task-add works!\n</p>\n"},615:function(t,e){t.exports="<h1>{{task.text}} {{nr}}</h1>\n"},629:function(t,e,n){t.exports=n(345)}},[629]);