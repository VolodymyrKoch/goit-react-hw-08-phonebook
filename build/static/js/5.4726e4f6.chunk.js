(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{118:function(e,t,n){},154:function(e,t,n){e.exports={errorMassage:"ErrorMassage_errorMassage__1wW2n",enter:"ErrorMassage_enter__3hRmf",enterActive:"ErrorMassage_enterActive__hs6kd",exit:"ErrorMassage_exit__oVsIO",exitActive:"ErrorMassage_exitActive__1pfN7"}},263:function(e,t,n){e.exports={tilie:"ContactForm_tilie__1_eLa",contactFormConteiner:"ContactForm_contactFormConteiner__1tDTv",lableName:"ContactForm_lableName__306oY",contactForm:"ContactForm_contactForm__1aHnb"}},264:function(e,t,n){e.exports={title:"Filter_title__1wuNt"}},265:function(e,t,n){},266:function(e,t,n){e.exports={conteiner:"App_conteiner__1VhCf"}},267:function(e,t,n){},273:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n(23),c=n(24),o=n(25),i=n(1),s=n(0),l=n(6),u=n(9),b=n(263),m=n.n(b),j=n(274),h=n(18),d=(n(118),n(19)),p=n(154),O=n.n(p);var f=function(){return Object(i.jsx)("div",{className:O.a.errorMassage,children:"Is already in contacts."})},g=n(29),x=function(e){return e.auth.items},v=function(e){return e.auth.filter},_={getContact:x,getFilteredItems:Object(g.a)([x,v],(function(e,t){return console.log(e),e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),getVisibleFilter:function(e){return e.auth.items.length>1},getFilter:v},C={name:"",number:"",erroMasage:!1},F=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state=Object(u.a)({},C),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(l.a)({},a,r))},e.handleSubmit=function(t){if(t.preventDefault(),console.log(e.props.contacts),e.props.contacts.find((function(t){return t.name===e.state.name})))e.setState({erroMasage:!0}),setTimeout((function(){e.setState({erroMasage:!1})}),1500);else{var n=e.state,a=n.name,r=n.number;e.props.addContact({name:a,number:r})}e.setState({name:"",number:""})},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j.a,{in:!0,classNames:"logo",timeout:500,appear:!0,unmountOnExit:!0,children:Object(i.jsx)("h2",{className:m.a.tilie,children:"Phonebook"})}),Object(i.jsx)("div",{className:m.a.contactFormConteiner,children:Object(i.jsxs)("form",{action:"submit",className:m.a.contactForm,onSubmit:this.handleSubmit,children:[Object(i.jsxs)("div",{className:m.a.lableName,children:[Object(i.jsx)("label",{htmlFor:"name",children:"Name"}),Object(i.jsx)("input",{type:"text",name:"name",placeholder:"enter name",value:this.state.name,onChange:this.handleChange})]}),Object(i.jsxs)("div",{className:m.a.lableName,children:[Object(i.jsx)("label",{htmlFor:"number",children:"Number"}),Object(i.jsx)("input",{type:"text",name:"number",placeholder:"enter number",value:this.state.number,onChange:this.handleChange})]}),Object(i.jsx)("button",{type:"submit",children:"Add contacts"})]})}),Object(i.jsx)(j.a,{in:this.state.erroMasage,timeout:250,appear:!0,classNames:Object(u.a)({},O.a),unmountOnExit:!0,children:Object(i.jsx)(f,{})})]})}}]),n}(s.Component),N={addContact:d.a},y=Object(h.b)((function(e,t){return{contacts:_.getContact(e)}}),N)(F),M=n(264),k=n.n(M);var w={filterRender:n(2).d},E=Object(h.b)((function(e){return{filter:_.getFilter(e),visibleFilter:_.getVisibleFilter(e)}}),w)((function(e){var t=e.filter,n=e.filterRender,a=e.visibleFilter;return Object(i.jsx)(j.a,{in:a,timeout:250,appear:!0,classNames:"logo",unmountOnExit:!0,children:Object(i.jsxs)("label",{children:[Object(i.jsx)("h2",{className:k.a.title,children:"Filter"}),Object(i.jsx)("input",{type:"text",name:"filter",placeholder:"Finder",value:t,onChange:function(e){return n(e.target.value)}})]})})})),A=(n(265),n(275)),S=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getCurrentUser,n=e.getContacts;t(),n()}},{key:"render",value:function(){var e=this.props,t=e.array,n=e.removeContact;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(A.a,{component:"ul",className:"contactList",children:t.map((function(e){return Object(i.jsx)(j.a,{timeout:250,classNames:"item",children:Object(i.jsxs)("li",{children:[e.name,": ",e.number,Object(i.jsx)("button",{type:"button",onClick:function(){return n(e.id)},children:"Delete"})]},e.id)},e.id)}))})})}}]),n}(s.Component),D={getCurrentUser:d.c,getContacts:d.b,removeContact:d.g},I=Object(h.b)((function(e){return{array:_.getFilteredItems(e)}}),D)(S),L=n(266),V=n.n(L),R=(n(267),function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.getContacts()}},{key:"render",value:function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:V.a.conteiner,children:[Object(i.jsx)(y,{}),Object(i.jsx)(E,{}),Object(i.jsx)(I,{})]})})}}]),n}(s.Component));t.default=Object(h.b)(null,{getContacts:d.b})(R)}}]);
//# sourceMappingURL=5.4726e4f6.chunk.js.map