webpackJsonp([5],{1174:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__(9),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__=__webpack_require__(27),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__=__webpack_require__(10),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__=__webpack_require__(5),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__),__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__=__webpack_require__(6),__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__),__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__=__webpack_require__(7),__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__),__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__=__webpack_require__(8),__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__),__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_objectWithoutProperties__=__webpack_require__(45),__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_objectWithoutProperties___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_objectWithoutProperties__),__WEBPACK_IMPORTED_MODULE_8_react__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_8_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__),__WEBPACK_IMPORTED_MODULE_9_react_router_dom__=__webpack_require__(137),__WEBPACK_IMPORTED_MODULE_10_react_intl__=__webpack_require__(82),__WEBPACK_IMPORTED_MODULE_11__components_core_Block__=__webpack_require__(730),__WEBPACK_IMPORTED_MODULE_12__components_search_QuickSearchBlock__=__webpack_require__(2232),__WEBPACK_IMPORTED_MODULE_13__components_form_Button__=__webpack_require__(209),__WEBPACK_IMPORTED_MODULE_14_react_redux__=__webpack_require__(44),__WEBPACK_IMPORTED_MODULE_15__modules_info__=__webpack_require__(156),__WEBPACK_IMPORTED_MODULE_16__modules_chat__=__webpack_require__(83),__WEBPACK_IMPORTED_MODULE_17__components_ui_AvatarHeads__=__webpack_require__(1176),__WEBPACK_IMPORTED_MODULE_18__components_ui_Header__=__webpack_require__(2222),transMessages_startChatTitle={id:"blocks.start_chat.title",defaultMessage:"Chat with us"},transMessages_startChatDescription={id:"blocks.start_chat.description",defaultMessage:"Need help? Just reply to start a live conversation with one of our team"},transMessages_startChatLink={id:"blocks.start_chat.link",defaultMessage:"Start Chat"},transMessages_continueChatTitle={id:"blocks.continue_chat.title",defaultMessage:"Continue existing chat"},transMessages_continueChatLink={id:"blocks.continue_chat.link",defaultMessage:"Continue"},transMessages_ticketsTitle={id:"blocks.tickets.title",defaultMessage:"Your Tickets"},transMessages_ticketsViewAllLink={id:"blocks.tickets.view_all_link",defaultMessage:"view all"},blocksMapping={StartChatBlock:Object(__WEBPACK_IMPORTED_MODULE_10_react_intl__.d)(function(_ref){var to=_ref.to,intl=_ref.intl,linkText=_ref.linkText,activeChat=_ref.activeChat,props=__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_objectWithoutProperties___default()(_ref,["to","intl","linkText","activeChat"]),title="",link="",description="";return activeChat?(link=intl.formatMessage(transMessages_continueChatLink,props),title=description=intl.formatMessage(transMessages_continueChatTitle,props)):(link=linkText||intl.formatMessage(transMessages_startChatLink,props),title=props.title||intl.formatMessage(transMessages_startChatTitle),description=props.description||intl.formatMessage(transMessages_startChatDescription)),__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_core_Block__.a,{title:title},props.showAgentPhotos&&!activeChat?__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__components_ui_AvatarHeads__.a,{agentsAvailable:props.agentsAvailable}):null,!activeChat&&__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div",{className:"dpmsg-BlockText"},description),__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_form_Button__.a,{to:"/screens/"+to,width:"full",color:"primary"},link))}),QuickSearchBlock:Object(__WEBPACK_IMPORTED_MODULE_10_react_intl__.d)(function(_ref2){_ref2.intl;return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_search_QuickSearchBlock__.a,{title:"Knowledgebase"})}),TicketsBlock:Object(__WEBPACK_IMPORTED_MODULE_10_react_intl__.d)(function(_ref3){var intl=_ref3.intl;__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_objectWithoutProperties___default()(_ref3,["intl"]);return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_core_Block__.a,{title:intl.formatMessage(transMessages_ticketsTitle)},__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_router_dom__.a,{title:"Browse your tickets",to:"/screens/tickets"},intl.formatMessage(transMessages_ticketsViewAllLink)))}),ScreenLink:Object(__WEBPACK_IMPORTED_MODULE_10_react_intl__.d)(function(_ref4){var to=_ref4.to,label=(_ref4.intl,_ref4.label),blockTitle=_ref4.blockTitle,props=__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_objectWithoutProperties___default()(_ref4,["to","intl","label","blockTitle"]);return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_core_Block__.a,{title:blockTitle},__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_router_dom__.a,{title:props.description||"",to:"/screens/"+to,className:"dpmsg-Button Button-FullWidth Button--primary"},label))}),ButtonLink:Object(__WEBPACK_IMPORTED_MODULE_10_react_intl__.d)(function(_ref5){var to=_ref5.to,label=(_ref5.intl,_ref5.label),blockTitle=_ref5.blockTitle,description=_ref5.description,props=__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_objectWithoutProperties___default()(_ref5,["to","intl","label","blockTitle","description"]);return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_core_Block__.a,{title:blockTitle},description&&__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div",{className:"dpmsg-BlockText"},description),__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_form_Button__.a,{title:props.description||"",to:"/screens/"+to,width:"full",color:"primary"},label))})},Blocks=function(_React$PureComponent){function Blocks(){return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this,Blocks),__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this,(Blocks.__proto__||__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Blocks)).apply(this,arguments))}return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Blocks,_React$PureComponent),__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Blocks,[{key:"render",value:function render(){var _props=this.props,blocks=_props.blocks,agentsAvailable=_props.agentsAvailable,activeChat=_props.activeChat,chatData=_props.chatData,chatAvailable=_props.chatAvailable;return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react__.Fragment,null,__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__components_ui_Header__.a,null),blocks.sort(function(blockA,blockB){return blockA.order-blockB.order}).map(function(_ref6,index){var blockType=_ref6.blockType,props=__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_objectWithoutProperties___default()(_ref6,["blockType"]);if("StartChatBlock"===blockType){if(!__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(agentsAvailable).length||!chatAvailable)return null;activeChat&&chatData&&"ended"!==chatData.status&&(props.to="active-chat/"+activeChat,props.activeChat=activeChat),props.agentsAvailable=agentsAvailable}var Component=blocksMapping[blockType];return Component?__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(Component,__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({key:blockType+index},props)):null}))}}]),Blocks}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.PureComponent);__webpack_exports__.default=Object(__WEBPACK_IMPORTED_MODULE_14_react_redux__.b)(function mapStateToProps(state){return{agentsAvailable:Object(__WEBPACK_IMPORTED_MODULE_15__modules_info__.d)(state),activeChat:Object(__WEBPACK_IMPORTED_MODULE_16__modules_chat__.j)(state),chatData:Object(__WEBPACK_IMPORTED_MODULE_16__modules_chat__.l)(state),chatAvailable:Object(__WEBPACK_IMPORTED_MODULE_15__modules_info__.b)(state)}})(Blocks),Blocks.__docgenInfo={description:"",displayName:"Blocks"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/Blocks.jsx"]={name:"Blocks",docgenInfo:Blocks.__docgenInfo,path:"src/screens/Blocks.jsx"})},2222:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__=__webpack_require__(10),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__=__webpack_require__(5),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__=__webpack_require__(6),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__=__webpack_require__(7),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__),__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__=__webpack_require__(8),__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__),__WEBPACK_IMPORTED_MODULE_5_react__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_5_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__),__WEBPACK_IMPORTED_MODULE_6__utils_asset__=__webpack_require__(135),__WEBPACK_IMPORTED_MODULE_7_react_inlinesvg__=__webpack_require__(363),__WEBPACK_IMPORTED_MODULE_7_react_inlinesvg___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_inlinesvg__),__WEBPACK_IMPORTED_MODULE_8__core_ConfigContext__=__webpack_require__(136),Header=function(_PureComponent){function Header(){return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this,Header),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this,(Header.__proto__||__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Header)).apply(this,arguments))}return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Header,_PureComponent),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Header,[{key:"render",value:function render(){var greetingTitle=this.props.widget.greetingTitle;return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"dpmsg-ScreenHeader"},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"dpmsg-ScreenHeaderLogo"},"svg"==="img/dp-logo-white.svg".substr(-3)?__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_inlinesvg___default.a,{src:Object(__WEBPACK_IMPORTED_MODULE_6__utils_asset__.a)("img/dp-logo-white.svg"),alt:""}):__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img",{src:Object(__WEBPACK_IMPORTED_MODULE_6__utils_asset__.a)("img/dp-logo-white.svg"),alt:""})),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span",{className:"dpmsg-ScreenHeaderTitle"},greetingTitle))}}]),Header}(__WEBPACK_IMPORTED_MODULE_5_react__.PureComponent);__webpack_exports__.a=Object(__WEBPACK_IMPORTED_MODULE_8__core_ConfigContext__.d)(Header),Header.__docgenInfo={description:"",displayName:"Header"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Header.jsx"]={name:"Header",docgenInfo:Header.__docgenInfo,path:"src/components/ui/Header.jsx"})},2225:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__=__webpack_require__(10),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__=__webpack_require__(5),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__=__webpack_require__(6),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__=__webpack_require__(7),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__),__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__=__webpack_require__(8),__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__),__WEBPACK_IMPORTED_MODULE_5_react__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_5_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__),__WEBPACK_IMPORTED_MODULE_6_prop_types__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_6_prop_types___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__),__WEBPACK_IMPORTED_MODULE_7_classnames__=__webpack_require__(46),__WEBPACK_IMPORTED_MODULE_7_classnames___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__),__WEBPACK_IMPORTED_MODULE_8_react_router_dom__=__webpack_require__(137),__WEBPACK_IMPORTED_MODULE_9_react_inlinesvg__=__webpack_require__(363),__WEBPACK_IMPORTED_MODULE_9_react_inlinesvg___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_inlinesvg__),__WEBPACK_IMPORTED_MODULE_10__utils_asset__=__webpack_require__(135),SearchBlock=function(_React$Component){function SearchBlock(props){__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this,SearchBlock);var _this=__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this,(SearchBlock.__proto__||__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(SearchBlock)).call(this,props));return _this.onChange=function(e){var value=e.target.value;_this.setState({query:value},function(){return _this.props.search(value)})},_this.onClear=function(e){e.preventDefault(),e.stopPropagation(),_this.setState({query:""},function(){return _this.props.search("")})},_this.state={query:props.query,focused:!1},_this}return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(SearchBlock,_React$Component),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(SearchBlock,[{key:"componentDidMount",value:function componentDidMount(){this.props.search(this.state.query)}},{key:"getResults",value:function getResults(){return this.props.results.slice(0,3)}},{key:"getSeeMore",value:function getSeeMore(){return this.props.results.length>3&&__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_router_dom__.a,{to:"/screens/search",className:"dpmsg-QuickSearchFooter"},"See more results")}},{key:"render",value:function render(){var _this2=this,_props=this.props,title=_props.title,className=_props.className;return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:__WEBPACK_IMPORTED_MODULE_7_classnames___default()("dpmsg-Block",className)},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"dpmsg-BlockWrapper"},!!title&&__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"dpmsg-BlockHeader"},title),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"dpmsg-QuickSearchControl"},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:__WEBPACK_IMPORTED_MODULE_7_classnames___default()("dpmsg-QuickSearchControl--wrapper",{focused:this.state.focused})},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input",{className:"dpmsg-QuickSearchControl--input",id:"quickSearchInput",onChange:this.onChange,onFocus:function onFocus(){return _this2.setState({focused:!0})},onBlur:function onBlur(){return _this2.setState({focused:!1})},value:this.state.query}),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("label",{className:"dpmsg-QuickSearchControl--label",htmlFor:"quickSearchInput"},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_inlinesvg___default.a,{src:Object(__WEBPACK_IMPORTED_MODULE_10__utils_asset__.a)("img/search.svg")}),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span",{"aria-hidden":!0},"Search")),this.state.query.length>0&&__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i",{className:"dpmsg-Icon dpmsg-IconSearchClear",onClick:this.onClear}))),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"dpmsg-QuickSearchResults"},this.state.query.length>=3&&this.getResults().map(function(r,i){return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"dpmsg-QuickSearchEntry",key:"search_entry_"+i},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h4",{className:"dpmsg-QuickSearchEntryHeaderLink"},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a",{rel:"noreferrer noopener",target:"_blank",href:r.link},r.title)),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"dpmsg-QuickSearchExcerpt"},r.excerpt),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"dpmsg-QuickSearchEntry--divider"}))}),this.getSeeMore())))}}]),SearchBlock}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);SearchBlock.propTypes={title:__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,search:__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,results:__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object),query:__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string},SearchBlock.defaultProps={results:[],query:""},__webpack_exports__.a=SearchBlock,SearchBlock.__docgenInfo={description:"",displayName:"SearchBlock",props:{title:{type:{name:"string"},required:!1,description:""},search:{type:{name:"func"},required:!0,description:""},results:{type:{name:"arrayOf",value:{name:"object"}},required:!1,description:"",defaultValue:{value:"[]",computed:!1}},query:{type:{name:"string"},required:!1,description:"",defaultValue:{value:"''",computed:!1}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/SearchBlock.jsx"]={name:"SearchBlock",docgenInfo:SearchBlock.__docgenInfo,path:"src/components/common/SearchBlock.jsx"})},2232:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__=__webpack_require__(10),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__=__webpack_require__(5),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__=__webpack_require__(7),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__=__webpack_require__(8),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__),__WEBPACK_IMPORTED_MODULE_4_react_redux__=__webpack_require__(44),__WEBPACK_IMPORTED_MODULE_5__modules_search__=__webpack_require__(1175),QuickSearchBlock=function(_SearchBlock){function QuickSearchBlock(){return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this,QuickSearchBlock),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this,(QuickSearchBlock.__proto__||__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(QuickSearchBlock)).apply(this,arguments))}return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(QuickSearchBlock,_SearchBlock),QuickSearchBlock}(__webpack_require__(2225).a);__webpack_exports__.a=Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__.b)(function(state){return{results:Object(__WEBPACK_IMPORTED_MODULE_5__modules_search__.c)(state),query:Object(__WEBPACK_IMPORTED_MODULE_5__modules_search__.b)(state)}},{search:__WEBPACK_IMPORTED_MODULE_5__modules_search__.d})(QuickSearchBlock)}});