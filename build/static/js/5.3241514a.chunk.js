(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{118:function(e,t,n){},154:function(e,t,n){e.exports={errorMassage:"ErrorMassage_errorMassage__1wW2n",enter:"ErrorMassage_enter__3hRmf",enterActive:"ErrorMassage_enterActive__hs6kd",exit:"ErrorMassage_exit__oVsIO",exitActive:"ErrorMassage_exitActive__1pfN7"}},263:function(e,t,n){e.exports={tilie:"ContactForm_tilie__1_eLa",contactFormConteiner:"ContactForm_contactFormConteiner__1tDTv",lableName:"ContactForm_lableName__306oY",contactForm:"ContactForm_contactForm__1aHnb"}},264:function(e,t,n){e.exports={title:"Filter_title__1wuNt"}},265:function(e,t,n){},266:function(e,t,n){e.exports={conteiner:"App_conteiner__1VhCf"}},267:function(e,t,n){},273:function(e,t,n){"use strict";n.r(t);var a=n(21),r=n(22),c=n(23),i=n(24),o=n(1),s=n(0),l=n(6),u=n(9),m=n(263),b=n.n(m),j=n(274),h=n(18),d=(n(118),n(25)),f=n(154),p=n.n(f);var O=function(){return Object(o.jsx)("div",{className:p.a.errorMassage,children:"Is already in contacts."})},x=n(29),g=function(e){return e.auth.items},_=function(e){return e.auth.filter},v={getContact:g,getFilteredItems:Object(x.a)([g,_],(function(e,t){return console.log(e),e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),getVisibleFilter:function(e){return e.auth.items.length>1},getFilter:_},F={name:"",number:"",erroMasage:!1},C=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state=Object(u.a)({},F),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(l.a)({},a,r))},e.handleSubmit=function(t){if(t.preventDefault(),console.log(e.props.contacts),e.props.contacts.find((function(t){return t.name===e.state.name})))e.setState({erroMasage:!0}),setTimeout((function(){e.setState({erroMasage:!1})}),1500);else{var n=e.state,a=n.name,r=n.number;e.props.addContact({name:a,number:r})}e.setState({name:"",number:""})},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j.a,{in:!0,classNames:"logo",timeout:500,appear:!0,unmountOnExit:!0,children:Object(o.jsx)("h2",{className:b.a.tilie,children:"Phonebook"})}),Object(o.jsx)("div",{className:b.a.contactFormConteiner,children:Object(o.jsxs)("form",{action:"submit",className:b.a.contactForm,onSubmit:this.handleSubmit,children:[Object(o.jsxs)("div",{className:b.a.lableName,children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name"}),Object(o.jsx)("input",{type:"text",name:"name",placeholder:"enter name",value:this.state.name,onChange:this.handleChange})]}),Object(o.jsxs)("div",{className:b.a.lableName,children:[Object(o.jsx)("label",{htmlFor:"number",children:"Number"}),Object(o.jsx)("input",{type:"text",name:"number",placeholder:"enter number",value:this.state.number,onChange:this.handleChange})]}),Object(o.jsx)("button",{type:"submit",children:"Add contacts"})]})}),Object(o.jsx)(j.a,{in:this.state.erroMasage,timeout:250,appear:!0,classNames:Object(u.a)({},p.a),unmountOnExit:!0,children:Object(o.jsx)(O,{})})]})}}]),n}(s.Component),N={addContact:d.a},y=Object(h.b)((function(e,t){return{contacts:v.getContact(e)}}),N)(C),M=n(264),k=n.n(M);var w={filterRender:n(2).d},E=Object(h.b)((function(e){return{filter:v.getFilter(e),visibleFilter:v.getVisibleFilter(e)}}),w)((function(e){var t=e.filter,n=e.filterRender,a=e.visibleFilter;return Object(o.jsx)(j.a,{in:a,timeout:250,appear:!0,classNames:"logo",unmountOnExit:!0,children:Object(o.jsxs)("label",{children:[Object(o.jsx)("h2",{className:k.a.title,children:"Filter"}),Object(o.jsx)("input",{type:"text",name:"filter",placeholder:"Finder",value:t,onChange:function(e){return n(e.target.value)}})]})})})),A=(n(265),n(275)),S={deleteItem:d.g},I=Object(h.b)((function(e){return{array:v.getFilteredItems(e)}}),S)((function(e){var t=e.array,n=e.deleteItem;return console.log(t),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(A.a,{component:"ul",className:"contactList",children:t.map((function(e){return Object(o.jsx)(j.a,{timeout:250,classNames:"item",children:Object(o.jsxs)("li",{children:[e.name,": ",e.number,Object(o.jsx)("button",{type:"button",onClick:function(){return n(e.id)},children:"Delete"})]},e.id)},e.id)}))})})})),D=n(266),L=n.n(D),V=(n(267),function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetContact()}},{key:"render",value:function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:L.a.conteiner,children:[Object(o.jsx)(y,{}),Object(o.jsx)(E,{}),Object(o.jsx)(I,{})]})})}}]),n}(s.Component)),R={onGetContact:d.b};t.default=Object(h.b)(null,R)(V)}}]);
//# sourceMappingURL=5.3241514a.chunk.js.map