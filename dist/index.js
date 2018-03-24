!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=7)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9);t.Form=n.default;var o=r(5);t.Label=o.default;var i=r(17);t.FormInput=i.default,t.FormInputDecorator=i.FormInputDecorator,function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(20))},function(e,t,r){var n,o;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(r.apply(null,n));else if("object"===o)for(var u in n)i.call(n,u)&&n[u]&&e.push(u)}}return e.join(" ")}var i={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=r:(n=[],void 0!==(o=function(){return r}.apply(t,n))&&(e.exports=o))}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(11),o=function(e,t){if(e)return n.isArray(e)?e.concat(t):void 0},i=function(){function e(){this.inputs=new Map}return e.prototype.registerInput=function(e){this.inputs.set(e.id,e)},e.prototype.updateInput=function(e){this.inputs.set(e.id,e)},e.prototype.unregisterInputById=function(e){this.inputs.delete(e)},e.prototype.getInputs=function(){return this.inputs},e.prototype.validateInputs=function(){var e=this,t=!0;return this.inputs.forEach(function(r){e.getErrorsFromInput(r).length&&(t=!1)}),t},e.prototype.getErrorsFromInput=function(e){var t=e.label,r=e.name,n=e.value,o=e.required,i=e.requiredMessage,u=void 0===i?null:i,a=e.validators,s=void 0===a?[]:a,p=[];return o&&!n&&(p=[u||"Input "+(t||r)+" is required"]),s.forEach(function(e){e.validate(n,{})||(p=p.concat([e.errorMessage]))}),p},e.prototype.getErrors=function(){var e=this,t={};return this.inputs.forEach(function(r){var n=e.getErrorsFromInput(r);if(n.length>0){var o=r.name;try{o=e.getInputRootName(r.name)}catch(e){}t[o]=n}}),t},e.prototype.getValuesFromInputs=function(){var e=this,t={};return this.inputs.forEach(function(r){t=n.mergeWith(t,e.getInputValue(r),o)}),t},e.prototype.getInputValue=function(e){var t=/\[(.*?)\]/g,r=e.name.match(t);if(!r||0===r.length)return o={},o[e.name]=e.value,o;var n=this.getInputRootName(e.name);return i={},i[n]=this.getValueByMatch(r,e,r.length-1,null),i;var o,i},e.prototype.getInputRootName=function(e){var t=/^(.+?)\[/,r=t.exec(e);if(!r)throw new Error("Input name needs a key in front of array or object");return r[1]},e.prototype.getValueByMatch=function(e,t,r,n){if(r<0)return n;var o=/\[(.*?)\]/,i=e[r],u=e.length-1===r,a=o.exec(i),s=a&&a[1]||null,p=r-1;return u&&s?this.getValueByMatch(e,t,p,(c={},c[s]=t.value,c)):u&&!s?this.getValueByMatch(e,t,p,[t.value]):s?this.getValueByMatch(e,t,p,(l={},l[s]=n,l)):this.getValueByMatch(e,t,p,[n]);var c,l},e}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(13),o=function(){function e(e){var t=(void 0===e?{}:e).maxListeners,r=void 0===t?100:t;this.emitter=new n,this.emitter.setMaxListeners(r)}return e.prototype.addSubmitListener=function(t){this.emitter.addListener(e.submitEvent,t)},e.prototype.removeSubmitListener=function(t){this.emitter.removeListener(e.submitEvent,t)},e.prototype.addUpdateListener=function(t){this.emitter.addListener(e.updateEvent,t)},e.prototype.removeUpdateListener=function(t){this.emitter.removeListener(e.updateEvent,t)},e.prototype.triggerUpdate=function(){this.emitter.emit(e.updateEvent)},e.prototype.triggerSubmit=function(){this.emitter.emit(e.submitEvent)},e.submitEvent="submit",e.updateEvent="update",e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(15);t.default=n.default},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var u=r(0),a=r(2),s=r(18),p=r(5),c=r(19),l=function(e){function t(t){var r=e.call(this,t)||this;return r.state={value:r.props.value,hasErrors:!1,errors:[]},r.id=t.id||s(),r.onInputChange=r.onInputChange.bind(r),r.onFormSubmit=r.onFormSubmit.bind(r),r}return n(t,e),t.prototype.componentWillReceiveProps=function(e){void 0!==e.value&&this.props.value!==e.value&&this.setState({value:e.value})},t.prototype.getDescriptorFromProps=function(e){return{value:e,id:this.id,label:this.props.label,name:this.props.name,required:this.props.required,requiredMessage:this.props.requiredMessage,validators:this.props.validators}},t.prototype.componentDidMount=function(){this.props.formService.registerInput(this.getDescriptorFromProps(this.state.value)),this.props.formEventEmitter.addSubmitListener(this.onFormSubmit)},t.prototype.componentWillUnmount=function(){this.props.formService.unregisterInputById(this.id),this.props.formEventEmitter.removeSubmitListener(this.onFormSubmit)},t.prototype.onFormSubmit=function(){this.validate(this.getDescriptorFromProps(this.state.value))},t.prototype.validate=function(e){var t=this.props.formService.getErrorsFromInput(e),r=!!t.length;return this.setState({errors:t,hasErrors:r,value:e.value}),!r},t.prototype.onInputChange=function(e){var t=this.getDescriptorFromProps(e);this.props.formService.updateInput(t),this.props.formEventEmitter.triggerUpdate(),this.validate(t),this.props.onChange&&this.props.onChange(e)},t.prototype.renderErrors=function(e){return u.createElement("div",{className:c.errors},e.map(function(e,t){return u.createElement("div",{title:e,key:t,className:c.error},u.createElement("span",null,e))}))},t.prototype.render=function(){var e=this.props,t=e.id,r=e.containerClass,n=(e.formService,e.formEventEmitter,e.className),s=e.placeholder,l=e.name,f=(e.value,e.disabled),d=(e.validators,e.required),v=(e.requiredMessage,e.label),m=(e.onChange,e.children,i(e,["id","containerClass","formService","formEventEmitter","className","placeholder","name","value","disabled","validators","required","requiredMessage","label","onChange","children"]));return u.createElement("div",{className:a(c.container,r)},u.createElement("div",{className:c.inputContainer},v&&u.createElement(p.default,{htmlFor:t,className:c.label,required:d},v),u.createElement("div",{className:c.inputWrapper},this.renderErrors(this.state.errors),this.props.children(o({id:t,name:l,disabled:f,placeholder:s,className:a(n,c.input,(h={},h[c.hasErrors]=this.state.hasErrors,h)),value:this.state.value,onChange:this.onInputChange},m)))));var h},t.defaultProps={value:"",validators:[]},t}(u.Component);t.FormInput=l,t.FormInputDecorator=function(e){return function(t){return u.createElement(l,o({},t),function(t){return u.createElement(e,o({},t))})}},t.default=l},function(e,t,r){e.exports=r(8)},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(1)),n(r(30)),n(r(31))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(10);t.default=n.default},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=r(2),u=r(3),a=r(4),s=r(14),p=function(e){function t(t){var r=e.call(this,t)||this;return r.formEventEmitter=t.formEventEmitter?t.formEventEmitter:new a.default,r.formService=t.formService?t.formService:new u.default,r.renderProps={inputProps:{containerClass:s.input,formService:r.formService,formEventEmitter:r.formEventEmitter},submit:r.formEventEmitter.triggerSubmit.bind(r.formEventEmitter)},r.onFormSubmit=r.onFormSubmit.bind(r),r.onSubmitEvent=r.onSubmitEvent.bind(r),r.formEventEmitter.addSubmitListener(r.onSubmitEvent),r}return n(t,e),t.prototype.componentWillUnmount=function(){this.formEventEmitter.removeSubmitListener(this.onSubmitEvent)},t.prototype.submit=function(){var e=this.formService.getValuesFromInputs();if(!this.formService.validateInputs()){var t=this.formService.getErrors();return void(this.props.onError&&this.props.onError(t))}this.props.onSubmit(e)},t.prototype.onSubmitEvent=function(){this.submit()},t.prototype.onFormSubmit=function(e){e.preventDefault(),e.stopPropagation()},t.prototype.render=function(){return o.createElement("form",{onSubmit:this.onFormSubmit,className:i(s.container,this.props.className)},this.props.children(this.renderProps))},t}(o.Component);t.default=p},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(12);t.mergeWith=n.mergeWith,t.isArray=n.isArray,t.isObject=n.isObject},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("events")},function(e,t){e.exports={container:"Form__container___2HdoZ",input:"Form__input___1Gcer"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(2),i=r(16),u=function(e){var t=e.className,r=e.htmlFor,u=e.required,a=void 0!==u&&u,s=e.children;return n.createElement("label",{className:o(i.container,t,(p={},p[i.isRequired]=a,p)),htmlFor:r},s);var p};t.default=u},function(e,t){e.exports={container:"Label__container___17ngH",isRequired:"Label__isRequired___3UvHi"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(6);t.default=n.default,function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(6))},function(e,t){e.exports=require("uuid/v4")},function(e,t){e.exports={errors:"FormInput__errors___3rzp-",error:"FormInput__error___J8Z5G",container:"FormInput__container___1Mxjs",inputContainer:"FormInput__inputContainer___ek65X",inputWrapper:"FormInput__inputWrapper___2EtKH",input:"FormInput__input___eComQ",hasErrors:"FormInput__hasErrors___1z0sr",label:"FormInput__label___3uEO7"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(21);t.TextInput=n.default;var o=r(22);t.PasswordInput=o.default;var i=r(23);t.SelectInput=i.default;var u=r(26);t.TextAreaInput=u.default;var a=r(27);t.RadioInput=a.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(1);t.TextInput=function(e){var t=e.id,r=e.className,o=e.name,i=e.placeholder,u=e.onChange,a=e.value,s=void 0===a?void 0:a;return n.createElement("input",{id:t,onChange:function(e){return u(e.target.value)},className:r,name:o,type:"text",value:s,placeholder:i})},t.default=o.FormInputDecorator(t.TextInput)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(1);t.PasswordInput=function(e){var t=e.id,r=e.className,o=e.name,i=e.placeholder,u=e.onChange,a=e.value,s=void 0===a?void 0:a;return n.createElement("input",{id:t,onChange:function(e){return u(e.target.value)},className:r,name:o,placeholder:i,type:"password",value:s})},t.default=o.FormInputDecorator(t.PasswordInput)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(24);t.default=n.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(2),i=r(1),u=r(25),a=function(e){var t=e.id,r=e.className,i=e.name,a=e.value,s=e.onChange,p=e.options,c=void 0===p?[]:p;return n.createElement("select",{id:t,name:i,className:o(r,u.input),value:a,onChange:function(e){return s(e.target.value)}},c.map(function(e){return n.createElement("option",{key:e.value,value:e.value},e.label)}))};t.default=i.FormInputDecorator(a)},function(e,t){e.exports={input:"SelectInput__input___1rkJ2"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(1);t.TextAreaInput=function(e){var t=e.id,r=e.className,o=e.name,i=e.onChange,u=e.value,a=void 0===u?void 0:u;return n.createElement("textarea",{id:t,onChange:function(e){return i(e.target.value)},className:r,name:o,value:a})},t.default=o.FormInputDecorator(t.TextAreaInput)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(28);t.default=n.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(1),i=r(29),u=function(e){var t=e.id,r=e.name,o=e.value,u=e.onChange,a=e.options;return n.createElement("div",null,a.map(function(e,a){var s=t+"_"+a,p=""+r,c=void 0!==o&&o===e.value;return n.createElement("div",{className:i.container,key:s},n.createElement("input",{id:s,disabled:e.disabled,type:"radio",className:i.input,name:p,value:e.value,checked:c,onClick:function(){return!e.disabled&&u(e.value)}}),n.createElement("label",{onClick:function(){return!e.disabled&&u(e.value)},htmlFor:s},e.label))}))};t.default=o.FormInputDecorator(u)},function(e,t){e.exports={container:"RadioInput__container___13O58",input:"RadioInput__input___3TDud"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4);t.FormEventEmitter=n.default;var o=r(3);t.FormService=o.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(32);t.emailValidator=n.default;var o=r(33);t.phoneNumberValidator=o.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return{errorMessage:e,validate:function(e){return!e||/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return{errorMessage:e,validate:function(e){return!e||/^(?:\+\d{1,3}|0\d{1,3}|00\d{1,2})?(?:\s?\(\d+\))?(?:[-\/\s.]|\d)+$/.test(e)}}};t.default=n}])});
//# sourceMappingURL=index.js.map