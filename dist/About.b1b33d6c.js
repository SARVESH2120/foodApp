!function(){function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireb6fc,n=t.register;n("8fAyO",function(n,a){Object.defineProperty(n.exports,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",function(){return f});var o=t("bB0zn"),r=t("6QEWP"),s=t("5dLwP"),l=t("lMNAp"),c=t("cc6u1");t("hSzwb");var i=t("36iKA"),u=t("fIwXP");t("16T2v");var f/*  

-Mounting Cycle

constructor(dummy)
Render(dummy)
    <HTML Dummy>
Component Did Mount
    <API Call>
    <this.setState> -- state variable is updated





----UPDATE cycle

    render(API data)
    <HTML (new API data)>
    Component did update

*/=/*#__PURE__*/function(e){(0,s._)(n,e);var t=(0,l._)(n);function n(e){return(0,o._)(this,n),t.call(this,e)}return(0,r._)(n,[{key:"componentDidMount",value:function(){// console.log("Component did mount parent called")
}},{key:"render",value:function(){// console.log("Caliling a parent render")
return/*#__PURE__*/(0,c.jsx)("div",{className:"flex justify-center items-center py-4",children:/*#__PURE__*/(0,c.jsx)(i.default,{name:"first",location:"Gorakhpur"})})}}]),n}(u.Component)}),n("hSzwb",function(e,n){t("cc6u1")}),n("36iKA",function(n,a){e(n.exports,"default",function(){return b});var o=t("7k5I8"),r=t("bB0zn"),s=t("6QEWP"),l=t("5dLwP"),c=t("lMNAp"),i=t("lFlDF"),u=t("cc6u1"),f=t("fIwXP"),d=t("abvdI"),b=/*#__PURE__*/function(e){(0,l._)(n,e);var t=(0,c._)(n);function n(e){var a;return(0,r._)(this,n),(a=t.call(this,e)).state={userInfo:{name:"Dummy name",location:"Default Location"}},a}return(0,s._)(n,[{key:"componentDidMount",value:function(){var e=this;return(0,o._)(function(){var t;return(0,i.__generator)(this,function(n){switch(n.label){case 0:return[4,fetch("https://api.github.com/users/Sarvesh2120")];case 1:return[4,n.sent().json()];case 2:return console.log(t=n.sent()),e.setState({userInfo:t}),[2]}})})()}},{key:"componentDidUpdate",value:function(){console.log("component did update")}},{key:"componentWillUnmount",value:function(){console.log("it calls when we leave the page")}},{key:"render",value:function(){// console.log("child render")
var e=this.state.userInfo,t=e.name,n=e.location,a=(e.avatar_url,e.WebName,e.followers);return/*#__PURE__*/(0,u.jsxs)("div",{className:"max-w-sm m-2 overflow-hidden rounded shadow-lg items-center justify-center text-center pb-2",children:[/*#__PURE__*/(0,u.jsxs)("div",{className:"user-card",children:[/*#__PURE__*/(0,u.jsx)("img",{className:"w-full",src:"https://static.displate.com/280x392/displate/2022-11-26/418f2ea00ab3707b5d78c5cb371ffccc_bf11e1878a760a6558e805bb5c0f9f3b.jpg",alt:"img"}),/*#__PURE__*/(0,u.jsxs)("div",{className:"px-6 py-4 mb-2 text-xl font-bold",children:[/*#__PURE__*/(0,u.jsxs)("h2",{className:"text-base text-gray-700",children:["Name:",t]}),/*#__PURE__*/(0,u.jsxs)("h3",{className:"text-base text-gray-700",children:["Location: ",n]}),/*#__PURE__*/(0,u.jsxs)("h4",{className:"text-base text-gray-700",children:["Followers: ",a]})]})]}),/*#__PURE__*/(0,u.jsx)("div",{className:"",children:/*#__PURE__*/(0,u.jsx)(d.Link,{to:"/",children:/*#__PURE__*/(0,u.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ",children:"Contact for food"})})})]})}}]),n}((f&&f.__esModule?f.default:f).Component)})}();//# sourceMappingURL=About.b1b33d6c.js.map

//# sourceMappingURL=About.b1b33d6c.js.map
