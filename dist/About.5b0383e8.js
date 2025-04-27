function e(e,t,n,s){Object.defineProperty(e,t,{get:n,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireb6fc,s=n.register;s("3yXQA",function(t,s){Object.defineProperty(t.exports,"__esModule",{value:!0,configurable:!0}),e(t.exports,"default",function(){return c});var o=n("5aRSq");n("8oB3s");var a=n("6njns"),l=n("4Iuzv");n("fmRNI");class r extends l.Component{constructor(e){super(e);// console.log(  "Calling parent constructor")
}componentDidMount(){// console.log("Component did mount parent called")
}render(){// console.log("Caliling a parent render")
return/*#__PURE__*/(0,o.jsx)("div",{className:"flex justify-center items-center py-4",children:/*#__PURE__*/(0,o.jsx)(a.default,{name:"first",location:"Gorakhpur"})})}}var c/*  

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

*/=r}),s("8oB3s",function(e,t){n("5aRSq")}),s("6njns",function(s,o){e(s.exports,"default",function(){return i});var a=n("5aRSq"),l=n("4Iuzv"),r=n("gLC8N");//class component
class c extends /*@__PURE__*/t(l).Component{constructor(e){super(e),this.state={userInfo:{name:"Dummy name",location:"Default Location"}}}async componentDidMount(){let e=await fetch("https://api.github.com/users/Sarvesh2120"),t=await e.json();console.log(t),this.setState({userInfo:t})}componentDidUpdate(){console.log("component did update")}componentWillUnmount(){console.log("it calls when we leave the page")}render(){// console.log("child render")
let{name:e,location:t,avatar_url:n,WebName:s,followers:o}=this.state.userInfo;return/*#__PURE__*/(0,a.jsxs)("div",{className:"max-w-sm m-2 overflow-hidden rounded shadow-lg items-center justify-center text-center pb-2",children:[/*#__PURE__*/(0,a.jsxs)("div",{className:"user-card",children:[/*#__PURE__*/(0,a.jsx)("img",{className:"w-full",src:"https://static.displate.com/280x392/displate/2022-11-26/418f2ea00ab3707b5d78c5cb371ffccc_bf11e1878a760a6558e805bb5c0f9f3b.jpg",alt:"img"}),/*#__PURE__*/(0,a.jsxs)("div",{className:"px-6 py-4 mb-2 text-xl font-bold",children:[/*#__PURE__*/(0,a.jsxs)("h2",{className:"text-base text-gray-700",children:["Name:",e]}),/*#__PURE__*/(0,a.jsxs)("h3",{className:"text-base text-gray-700",children:["Location: ",t]}),/*#__PURE__*/(0,a.jsxs)("h4",{className:"text-base text-gray-700",children:["Followers: ",o]})]})]}),/*#__PURE__*/(0,a.jsx)("div",{className:"",children:/*#__PURE__*/(0,a.jsx)(r.Link,{to:"/",children:/*#__PURE__*/(0,a.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ",children:"Contact for food"})})})]})}}var i=c});//# sourceMappingURL=About.5b0383e8.js.map

//# sourceMappingURL=About.5b0383e8.js.map
