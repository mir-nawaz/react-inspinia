(this["webpackJsonpReact-Inspinia"]=this["webpackJsonpReact-Inspinia"]||[]).push([[13],{234:function(e,a,t){"use strict";var l=t(10),c=t(11),r=t(13),n=t(12),m=t(14),s=t(0),i=t.n(s),o=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(n.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"wrapper wrapper-content animated fadeIn"},this.props.children)}}]),a}(s.Component);a.a=o},245:function(e,a,t){"use strict";var l=t(235).default,c=t(236).default,r=t(237).default,n=t(238).default,m=t(239).default,s=t(231).default;Object.defineProperty(a,"__esModule",{value:!0});var i=s(t(0)),o=s(t(233)),d=function(e){function a(){n(this,a),l(Object.getPrototypeOf(a.prototype),"constructor",this).apply(this,arguments)}return c(a,e),r(a,[{key:"getValue",value:function(){return this.refs.enhancedSwitch.getValue()}},{key:"setChecked",value:function(e){this.refs.enhancedSwitch.setSwitched(e)}},{key:"isChecked",value:function(){return this.refs.enhancedSwitch.isSwitched()}},{key:"render",value:function(){return i.default.createElement(o.default,m({},this.props,{ref:"enhancedSwitch",inputType:"radio"}))}}]),a}(i.default.Component);a.default=d,e.exports=a.default},256:function(e,a,t){"use strict";var l=t(231).default;Object.defineProperty(a,"__esModule",{value:!0});var c=l(t(265)),r=l(t(245)),n=l(t(266));a.default={Checkbox:c.default,Radio:r.default,RadioGroup:n.default},e.exports=a.default},265:function(e,a,t){"use strict";var l=t(235).default,c=t(236).default,r=t(237).default,n=t(238).default,m=t(239).default,s=t(231).default;Object.defineProperty(a,"__esModule",{value:!0});var i=s(t(0)),o=s(t(233)),d=function(e){function a(e){n(this,a),l(Object.getPrototypeOf(a.prototype),"constructor",this).call(this,e),this.state={}}return c(a,e),r(a,[{key:"getValue",value:function(){return this.refs.enhancedSwitch.getValue()}},{key:"setChecked",value:function(e){this.refs.enhancedSwitch.setChecked(e)}},{key:"isChecked",value:function(){return this.refs.enhancedSwitch.isChecked()}},{key:"render",value:function(){return i.default.createElement(o.default,m({ref:"enhancedSwitch"},this.props,{inputType:"checkbox"}))}}]),a}(i.default.Component);a.default=d,e.exports=a.default},266:function(e,a,t){"use strict";var l=t(235).default,c=t(236).default,r=t(237).default,n=t(238).default,m=t(284).default,s=t(239).default,i=t(231).default;Object.defineProperty(a,"__esModule",{value:!0});var o=i(t(0)),d=i(t(4)),h=i(t(245)),u=function(e){function a(e){n(this,a),l(Object.getPrototypeOf(a.prototype),"constructor",this).call(this,e),this.state={numberCheckedRadioButtons:0,value:this.props.value||this.props.defaultValue||""}}return c(a,e),r(a,null,[{key:"propTypes",value:{name:d.default.string.isRequired,defaultValue:d.default.string,value:d.default.string,onChange:d.default.func,children:d.default.node,className:d.default.string},enumerable:!0}]),r(a,[{key:"componentWillMount",value:function(){var e=this,a=0;o.default.Children.forEach(this.props.children,(function(t){e.hasCheckAttribute(t)&&a++}),this),this.setState({numberCheckedRadioButtons:a})}},{key:"componentWillReceiveProps",value:function(e){e.hasOwnProperty("value")&&this.setState({value:e.value})}},{key:"getValue",value:function(){return this.state.value}},{key:"setValue",value:function(e){this.updateRadioButtons(e)}},{key:"clearValue",value:function(){this.setValue("")}},{key:"hasCheckAttribute",value:function(e){return e.props.hasOwnProperty("checked")&&e.props.checked}},{key:"updateRadioButtons",value:function(e){if(0===this.state.numberCheckedRadioButtons)this.setState({value:e});else;}},{key:"handleChange",value:function(e){var a=e.target.value;this.updateRadioButtons(a),0===this.state.numberCheckedRadioButtons&&this.props.onChange&&this.props.onChange(e,a)}},{key:"render",value:function(){var e=this,a=o.default.Children.map(this.props.children,(function(a){var t=a.props,l=(t.name,t.value,t.label,t.onChange,m(t,["name","value","label","onChange"]));return o.default.createElement(h.default,s({},l,{ref:a.props.value,name:e.props.name,key:a.props.value,value:a.props.value,label:a.props.label,onChange:e.handleChange.bind(e),checked:a.props.value===e.state.value}))}),this);return o.default.createElement("div",{className:this.props.className},a)}}]),a}(o.default.Component);a.default=u,e.exports=a.default},628:function(e,a,t){"use strict";t.r(a);var l=t(10),c=t(11),r=t(13),n=t(12),m=t(14),s=t(0),i=t.n(s),o=t(47),d=t(20),h=t(234),u=t(256),E=t(15),f=function(e){function a(){var e,t;Object(l.a)(this,a);for(var c=arguments.length,m=new Array(c),s=0;s<c;s++)m[s]=arguments[s];return(t=Object(r.a)(this,(e=Object(n.a)(a)).call.apply(e,[this].concat(m)))).handleChange=function(e,a){},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h.a,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-3"},i.a.createElement("div",{className:"ibox float-e-margins"},i.a.createElement("div",{className:"ibox-content mailbox-content"},i.a.createElement("div",{className:"file-manager"},i.a.createElement(E.b,{className:"btn btn-block btn-primary compose-mail",to:"/app/compose"},"Compose Mail"),i.a.createElement("div",{className:"space-25"}),i.a.createElement("h5",null,"Folders"),i.a.createElement("ul",{className:"folder-list m-b-md",style:{padding:"0"}},i.a.createElement("li",null,i.a.createElement(E.b,{to:"/app/inbox"}," ",i.a.createElement("i",{className:"fa fa-inbox "})," Inbox ",i.a.createElement("span",{className:"label label-warning pull-right"},"16")," ")),i.a.createElement("li",null,i.a.createElement(E.b,{to:"/app/compose"}," ",i.a.createElement("i",{className:"fa fa-envelope-o"})," Send Mail")),i.a.createElement("li",null,i.a.createElement(E.b,{to:"/app/inbox"}," ",i.a.createElement("i",{className:"fa fa-certificate"})," Important")),i.a.createElement("li",null,i.a.createElement(E.b,{to:"/app/inbox"}," ",i.a.createElement("i",{className:"fa fa-file-text-o"})," Drafts ",i.a.createElement("span",{className:"label label-danger pull-right"},"2"))),i.a.createElement("li",null,i.a.createElement(E.b,{to:"/app/inbox"}," ",i.a.createElement("i",{className:"fa fa-trash-o"})," Trash"))),i.a.createElement("h5",null,"Categories"),i.a.createElement("ul",{className:"category-list",style:{padding:"0"}},i.a.createElement("li",null,i.a.createElement("a",{href:"#"}," ",i.a.createElement("i",{className:"fa fa-circle text-navy"})," Work ")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"}," ",i.a.createElement("i",{className:"fa fa-circle text-danger"})," Documents")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"}," ",i.a.createElement("i",{className:"fa fa-circle text-primary"})," Social")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"}," ",i.a.createElement("i",{className:"fa fa-circle text-info"})," Advertising")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"}," ",i.a.createElement("i",{className:"fa fa-circle text-warning"})," Clients"))),i.a.createElement("h5",{className:"tag-title"},"Labels"),i.a.createElement("ul",{className:"tag-list",style:{padding:"0"}},i.a.createElement("li",null,i.a.createElement("a",{href:""},i.a.createElement("i",{className:"fa fa-tag"})," Family")),i.a.createElement("li",null,i.a.createElement("a",{href:""},i.a.createElement("i",{className:"fa fa-tag"})," Work")),i.a.createElement("li",null,i.a.createElement("a",{href:""},i.a.createElement("i",{className:"fa fa-tag"})," Home")),i.a.createElement("li",null,i.a.createElement("a",{href:""},i.a.createElement("i",{className:"fa fa-tag"})," Children")),i.a.createElement("li",null,i.a.createElement("a",{href:""},i.a.createElement("i",{className:"fa fa-tag"})," Holidays")),i.a.createElement("li",null,i.a.createElement("a",{href:""},i.a.createElement("i",{className:"fa fa-tag"})," Music")),i.a.createElement("li",null,i.a.createElement("a",{href:""},i.a.createElement("i",{className:"fa fa-tag"})," Photography")),i.a.createElement("li",null,i.a.createElement("a",{href:""},i.a.createElement("i",{className:"fa fa-tag"})," Film"))),i.a.createElement("div",{className:"clearfix"}))))),i.a.createElement("div",{className:"col-lg-9 animated fadeInRight"},i.a.createElement("div",{className:"mail-box-header"},i.a.createElement("form",{method:"get",action:"index.html",className:"pull-right mail-search"},i.a.createElement("div",{className:"input-group"},i.a.createElement("input",{type:"text",className:"form-control input-sm",name:"search",placeholder:"Search email"}),i.a.createElement("div",{className:"input-group-btn"},i.a.createElement("button",{type:"submit",className:"btn btn-sm btn-primary"},"Search")))),i.a.createElement("h2",null,"Inbox (16)"),i.a.createElement("div",{className:"mail-tools tooltip-demo m-t-md"},i.a.createElement("div",{className:"btn-group pull-right"},i.a.createElement("button",{className:"btn btn-white btn-sm"},i.a.createElement("i",{className:"fa fa-arrow-left"})),i.a.createElement("button",{className:"btn btn-white btn-sm"},i.a.createElement("i",{className:"fa fa-arrow-right"}))),i.a.createElement("button",{className:"btn btn-white btn-sm","data-toggle":"tooltip","data-placement":"left",title:"Refresh inbox"},i.a.createElement("i",{className:"fa fa-refresh"})," Refresh"),i.a.createElement("button",{className:"btn btn-white btn-sm","data-toggle":"tooltip","data-placement":"top",title:"Mark as read"},i.a.createElement("i",{className:"fa fa-eye"})),i.a.createElement("button",{className:"btn btn-white btn-sm","data-toggle":"tooltip","data-placement":"top",title:"Mark as important"},i.a.createElement("i",{className:"fa fa-exclamation"})),i.a.createElement("button",{className:"btn btn-white btn-sm","data-toggle":"tooltip","data-placement":"top",title:"Move to trash"},i.a.createElement("i",{className:"fa fa-trash-o"})))),i.a.createElement("div",{className:"mail-box"},i.a.createElement("table",{className:"table table-hover table-mail"},i.a.createElement("tbody",null,i.a.createElement("tr",{className:"unread"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!0,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Anna Smith")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"Lorem ipsum dolor noretek imit set.")),i.a.createElement("td",{className:""},i.a.createElement("i",{className:"fa fa-paperclip"})),i.a.createElement("td",{className:"text-right mail-date"},"6.10 AM")),i.a.createElement("tr",{className:"unread"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!0,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Jack Nowak")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"Aldus PageMaker including versions of Lorem Ipsum.")),i.a.createElement("td",{className:""}),i.a.createElement("td",{className:"text-right mail-date"},"8.22 PM")),i.a.createElement("tr",{className:"read"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!1,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Facebook")," ",i.a.createElement("span",{className:"label label-warning pull-right"},"Clients")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"Many desktop publishing packages and web page editors.")),i.a.createElement("td",{className:""}),i.a.createElement("td",{className:"text-right mail-date"},"Jan 16")),i.a.createElement("tr",{className:"read"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!1,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Mailchip")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"There are many variations of passages of Lorem Ipsum.")),i.a.createElement("td",{className:""}),i.a.createElement("td",{className:"text-right mail-date"},"Mar 22")),i.a.createElement("tr",{className:"read"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!1,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Alex T.")," ",i.a.createElement("span",{className:"label label-danger pull-right"},"Documents")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"Lorem ipsum dolor noretek imit set.")),i.a.createElement("td",{className:""},i.a.createElement("i",{className:"fa fa-paperclip"})),i.a.createElement("td",{className:"text-right mail-date"},"December 22")),i.a.createElement("tr",{className:"read"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!1,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Monica Ryther")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"The standard chunk of Lorem Ipsum used.")),i.a.createElement("td",{className:""}),i.a.createElement("td",{className:"text-right mail-date"},"Jun 12")),i.a.createElement("tr",{className:"read"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!1,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Sandra Derick")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"Contrary to popular belief.")),i.a.createElement("td",{className:""}),i.a.createElement("td",{className:"text-right mail-date"},"May 28")),i.a.createElement("tr",{className:"read"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!1,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Patrick Pertners")," ",i.a.createElement("span",{className:"label label-info pull-right"},"Adv")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"If you are going to use a passage of Lorem ")),i.a.createElement("td",{className:""}),i.a.createElement("td",{className:"text-right mail-date"},"May 28")),i.a.createElement("tr",{className:"read"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!1,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Michael Fox")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"Humour, or non-characteristic words etc.")),i.a.createElement("td",{className:""}),i.a.createElement("td",{className:"text-right mail-date"},"Dec 9")),i.a.createElement("tr",{className:"read"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!1,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Damien Ritz")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"Oor Lorem Ipsum is that it has a more-or-less normal.")),i.a.createElement("td",{className:""}),i.a.createElement("td",{className:"text-right mail-date"},"Jun 11")),i.a.createElement("tr",{className:"read"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!1,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Anna Smith")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"Lorem ipsum dolor noretek imit set.")),i.a.createElement("td",{className:""},i.a.createElement("i",{className:"fa fa-paperclip"})),i.a.createElement("td",{className:"text-right mail-date"},"6.10 AM")),i.a.createElement("tr",{className:"read"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!1,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Jack Nowak")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"Aldus PageMaker including versions of Lorem Ipsum.")),i.a.createElement("td",{className:""}),i.a.createElement("td",{className:"text-right mail-date"},"8.22 PM")),i.a.createElement("tr",{className:"read"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!1,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Mailchip")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"There are many variations of passages of Lorem Ipsum.")),i.a.createElement("td",{className:""}),i.a.createElement("td",{className:"text-right mail-date"},"Mar 22")),i.a.createElement("tr",{className:"read"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!1,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Alex T.")," ",i.a.createElement("span",{className:"label label-warning pull-right"},"Clients")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"Lorem ipsum dolor noretek imit set.")),i.a.createElement("td",{className:""},i.a.createElement("i",{className:"fa fa-paperclip"})),i.a.createElement("td",{className:"text-right mail-date"},"December 22")),i.a.createElement("tr",{className:"read"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!1,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Monica Ryther")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"The standard chunk of Lorem Ipsum used.")),i.a.createElement("td",{className:""}),i.a.createElement("td",{className:"text-right mail-date"},"Jun 12")),i.a.createElement("tr",{className:"read"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!1,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Sandra Derick")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"Contrary to popular belief.")),i.a.createElement("td",{className:""}),i.a.createElement("td",{className:"text-right mail-date"},"May 28")),i.a.createElement("tr",{className:"read"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!1,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Patrick Pertners")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"If you are going to use a passage of Lorem ")),i.a.createElement("td",{className:""}),i.a.createElement("td",{className:"text-right mail-date"},"May 28")),i.a.createElement("tr",{className:"read"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!1,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Michael Fox")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"Humour, or non-characteristic words etc.")),i.a.createElement("td",{className:""}),i.a.createElement("td",{className:"text-right mail-date"},"Dec 9")),i.a.createElement("tr",{className:"read"},i.a.createElement("td",{className:"check-mail"},i.a.createElement(u.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:!1,name:"checked",cursor:"pointer",label:""})),i.a.createElement("td",{className:"mail-ontact"},i.a.createElement("a",{href:"mail_detail.html"},"Damien Ritz")),i.a.createElement("td",{className:"mail-subject"},i.a.createElement("a",{href:"mail_detail.html"},"Oor Lorem Ipsum is that it has a more-or-less normal.")),i.a.createElement("td",{className:""}),i.a.createElement("td",{className:"text-right mail-date"},"Jun 11")))))))))}}]),a}(s.Component);a.default=Object(o.connect)((function(e){return{teste:e.teste}}),(function(e){return Object(d.b)({},e)}))(f)}}]);
//# sourceMappingURL=13.96f92c64.chunk.js.map