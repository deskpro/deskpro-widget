webpackJsonp([1],{1038:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__(6),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__=__webpack_require__(43),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__),__WEBPACK_IMPORTED_MODULE_2_react__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_2_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__),__WEBPACK_IMPORTED_MODULE_3_react_router_dom__=__webpack_require__(148),__WEBPACK_IMPORTED_MODULE_4_react_intl__=__webpack_require__(98),__WEBPACK_IMPORTED_MODULE_5__components_core_Block__=__webpack_require__(1037),__WEBPACK_IMPORTED_MODULE_6__components_search_QuickSearchBlock__=__webpack_require__(2093),__WEBPACK_IMPORTED_MODULE_7__components_form_Button__=__webpack_require__(230),__WEBPACK_IMPORTED_MODULE_8_react_redux__=__webpack_require__(106),__WEBPACK_IMPORTED_MODULE_9__modules_info__=__webpack_require__(228),__WEBPACK_IMPORTED_MODULE_10__modules_chat__=__webpack_require__(314),transMessages={startChatTitle:{id:"blocks.start_chat.title",defaultMessage:"Conversations"},startChatLink:{id:"blocks.start_chat.link",defaultMessage:"Start Chat"},continueChatTitle:{id:"blocks.continue_chat.title",defaultMessage:"Continue existing chat"},continueChatLink:{id:"blocks.continue_chat.link",defaultMessage:"Continue"},ticketsTitle:{id:"blocks.tickets.title",defaultMessage:"Your Tickets"},ticketsViewAllLink:{id:"blocks.tickets.view_all_link",defaultMessage:"view all"}},blocksMapping={StartChatBlock:Object(__WEBPACK_IMPORTED_MODULE_4_react_intl__.d)(function(_ref){var to=_ref.to,intl=_ref.intl,linkText=_ref.linkText,activeChat=_ref.activeChat,props=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref,["to","intl","linkText","activeChat"]),title="",link="",description="";return activeChat?(link=intl.formatMessage(transMessages.continueChatLink,props),title=description=intl.formatMessage(transMessages.continueChatTitle,props)):(link=intl.formatMessage(linkText?{id:linkText,defaultMessage:linkText}:transMessages.startChatLink,props),title=props.title||intl.formatMessage(transMessages.startChatTitle),description=props.description||intl.formatMessage(transMessages.startChatTitle)),__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_core_Block__.a,{title:title},__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_form_Button__.a,{title:description,to:"/screens/"+to,width:"full",color:"primary"},link))}),QuickSearchBlock:Object(__WEBPACK_IMPORTED_MODULE_4_react_intl__.d)(function(_ref2){_ref2.intl;return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_search_QuickSearchBlock__.a,{title:"Quick Search"})}),TicketsBlock:Object(__WEBPACK_IMPORTED_MODULE_4_react_intl__.d)(function(_ref3){var intl=_ref3.intl;__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref3,["intl"]);return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_core_Block__.a,{title:intl.formatMessage(transMessages.ticketsTitle)},__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__.a,{title:"Browse your tickets",to:"/screens/tickets"},intl.formatMessage(transMessages.ticketsViewAllLink)))}),ScreenLink:Object(__WEBPACK_IMPORTED_MODULE_4_react_intl__.d)(function(_ref4){var to=_ref4.to,intl=_ref4.intl,label=_ref4.label,blockTitle=_ref4.blockTitle,props=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref4,["to","intl","label","blockTitle"]);return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_core_Block__.a,{title:intl.formatMessage({id:blockTitle,defaultMessage:blockTitle})},__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__.a,{title:props.description||"",to:"/screens/"+to,className:"dpmsg-Button Button-FullWidth Button--primary"},intl.formatMessage({id:label,defaultMessage:label})))}),ButtonLink:Object(__WEBPACK_IMPORTED_MODULE_4_react_intl__.d)(function(_ref5){var to=_ref5.to,intl=_ref5.intl,label=_ref5.label,blockTitle=_ref5.blockTitle,props=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref5,["to","intl","label","blockTitle"]);return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_core_Block__.a,{title:intl.formatMessage({id:blockTitle,defaultMessage:blockTitle})},__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_form_Button__.a,{title:props.description||"",to:"/screens/"+to,width:"full",color:"primary"},intl.formatMessage({id:label,defaultMessage:label})))})},Blocks=function Blocks(_ref6){var blocks=_ref6.blocks,agentsAvailable=_ref6.agentsAvailable,activeChat=_ref6.activeChat;return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react__.Fragment,null,blocks.sort(function(blockA,blockB){return blockA.order-blockB.order}).map(function(_ref7,index){var blockType=_ref7.blockType,props=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref7,["blockType"]);if("StartChatBlock"===blockType&&!agentsAvailable)return null;"StartChatBlock"===blockType&&activeChat&&(props.to="active-chat/"+activeChat,props.activeChat=activeChat);var Component=blocksMapping[blockType];return Component?__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component,__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({key:blockType+index},props)):null}))};__webpack_exports__.default=Object(__WEBPACK_IMPORTED_MODULE_8_react_redux__.b)(function(state){return{agentsAvailable:Object(__WEBPACK_IMPORTED_MODULE_9__modules_info__.f)(state),activeChat:Object(__WEBPACK_IMPORTED_MODULE_10__modules_chat__.h)(state)}})(Blocks),Blocks.__docgenInfo={description:"",displayName:"Blocks"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/Blocks.jsx"]={name:"Blocks",docgenInfo:Blocks.__docgenInfo,path:"src/screens/Blocks.jsx"})},2093:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__=__webpack_require__(9),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__=__webpack_require__(4),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__=__webpack_require__(5),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__=__webpack_require__(7),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__),__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__=__webpack_require__(8),__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__),__WEBPACK_IMPORTED_MODULE_5_react__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_5_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__),__WEBPACK_IMPORTED_MODULE_6_prop_types__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_6_prop_types___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__),__WEBPACK_IMPORTED_MODULE_7_classnames__=__webpack_require__(78),__WEBPACK_IMPORTED_MODULE_7_classnames___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__),__WEBPACK_IMPORTED_MODULE_8_react_redux__=__webpack_require__(106),__WEBPACK_IMPORTED_MODULE_9__modules_search__=__webpack_require__(1039),QuickSearchBlock=function(_React$Component){function QuickSearchBlock(){var _ref,_temp,_this,_ret;__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this,QuickSearchBlock);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _temp=_this=__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this,(_ref=QuickSearchBlock.__proto__||__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(QuickSearchBlock)).call.apply(_ref,[this].concat(args))),_this.state={query:""},_this.onChange=function(e){var value=e.target.value;_this.setState({query:value},function(){return _this.props.quickSearch(value)})},_this.getLabel=function(type){var label="";switch(type){case"article":label="Knowledgebase";break;default:label="Unknown"}return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span",{className:"dpmsg-QuickSearchExcerptLabel"},label)},_ret=_temp,__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this,_ret)}return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(QuickSearchBlock,_React$Component),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(QuickSearchBlock,[{key:"render",value:function render(){var _this2=this,_props=this.props,title=_props.title,className=_props.className;return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:__WEBPACK_IMPORTED_MODULE_7_classnames___default()("dpmsg-Block",className)},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"dpmsg-BlockWrapper"},!!title&&__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"dpmsg-BlockHeader"},title),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"dpmsg-QuickSearchControl"},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input",{className:"dpmsg-QuickSearchControl--input",id:"quickSearchInput",onChange:this.onChange,value:this.state.query}),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("label",{className:"dpmsg-QuickSearchControl--label",htmlFor:"quickSearchInput"},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i",{className:"fa fa-search"}),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span",{"aria-hidden":!0},"Search"))),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"dpmsg-QuickSearchControl--hint"},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span",null,this.state.query.length>=3?(this.props.results.length?"Search results":"No results")+' for "'+this.state.query+'"':null))),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"dpmsg-QuickSearchResults"},this.state.query.length>=3&&this.props.results.map(function(r){return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"dpmsg-QuickSearchEntry"},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h4",null,__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a",{rel:"noreferrer noopener",target:"_blank",href:r.link},r.title)),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"dpmsg-QuickSearchExcerpt"},_this2.getLabel(r.type),r.excerpt),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"dpmsg-QuickSearchEntry--divider"}))}))))}}]),QuickSearchBlock}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);QuickSearchBlock.propTypes={title:__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,quickSearch:__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,results:__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object)},QuickSearchBlock.defaultProps={results:[]},__webpack_exports__.a=Object(__WEBPACK_IMPORTED_MODULE_8_react_redux__.b)(function(state){return{results:Object(__WEBPACK_IMPORTED_MODULE_9__modules_search__.b)(state)}},{quickSearch:__WEBPACK_IMPORTED_MODULE_9__modules_search__.c})(QuickSearchBlock),QuickSearchBlock.__docgenInfo={description:"",displayName:"QuickSearchBlock",props:{title:{type:{name:"string"},required:!1,description:""},quickSearch:{type:{name:"func"},required:!0,description:""},results:{type:{name:"arrayOf",value:{name:"object"}},required:!1,description:"",defaultValue:{value:"[]",computed:!1}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/search/QuickSearchBlock.jsx"]={name:"QuickSearchBlock",docgenInfo:QuickSearchBlock.__docgenInfo,path:"src/components/search/QuickSearchBlock.jsx"})}});