(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,a,t){e.exports=t.p+"static/media/heart.aa7b03b3.svg"},34:function(e,a,t){e.exports=t.p+"static/media/like.d654ce19.svg"},40:function(e,a,t){e.exports=t(72)},45:function(e,a,t){},46:function(e,a,t){},49:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(29),r=t.n(c),s=t(9),i=(t(45),t(30)),o=t(31),m=t(38),u=t(32),d=t(39),E=t(6);function p(){return l.a.createElement("div",{className:"text-center mb-5"},l.a.createElement("h1",{className:"text-primary"},"Bank Search App"))}t(46);function h(){return l.a.createElement("div",{className:"spinner__container"},l.a.createElement("div",{className:"spinner"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)))}var f=t(7),g=t(11),v=t.n(g);function b(e){for(var a=Object(n.useState)(0),t=Object(f.a)(a,2),c=t[0],r=t[1],s=[],i=e.totalItems,o=e.itemsPerPage,m=1;m<=Math.ceil(i/o);m++)s.push(m);return l.a.createElement("nav",null,l.a.createElement("ul",{className:"pagination justify-content-center mt-5"},l.a.createElement("li",{className:"page-item"},l.a.createElement("a",{className:"page-link",href:"#",onClick:function(e){return function(e){e.preventDefault();var a=c-5;-1!=Math.sign(a)&&r(a)}(e)}},l.a.createElement("span",{"aria-hidden":"true"},"\xab"),l.a.createElement("span",{className:"sr-only"},"Previous"))),s.slice(c,c+5).map(function(a){return l.a.createElement("li",{className:"page-item",key:v.a.v4()},l.a.createElement("a",{className:a===e.currentPage?"page-link bg-primary text-white":"page-link",href:"#",onClick:function(t){return e.changePageHandler(t,a)}},a))}),l.a.createElement("li",{className:"page-item"},l.a.createElement("a",{className:"page-link",href:"",onClick:function(e){return function(e){e.preventDefault();var a=c+5;a>s.length||r(a)}(e)}},l.a.createElement("span",{"aria-hidden":"true"},"\xbb"),l.a.createElement("span",{className:"sr-only"},"Next")))))}var k=t(33),N=t.n(k),y=t(34),S=t.n(y);t(49);function w(e){var a=Object(n.useState)(JSON.parse(localStorage.getItem("likes"))||[]),t=Object(f.a)(a,2),c=t[0],r=t[1],i=c.slice(),o=function(e){e.preventDefault();var a=e.target.parentNode.parentNode.parentNode.dataset.id;"true"!==e.target.dataset.like&&(i.push(a),r(i),localStorage.setItem("likes",JSON.stringify(i)))},m=l.a.createElement("td",{className:"error__message"},"Sorry No Data found!");return e.banks.length>0&&(m=e.banks.slice(0,10).map(function(e){return l.a.createElement("tr",{key:v.a.v4(),"data-id":e.ifsc},l.a.createElement("th",{scope:"row"},e.bank_id),l.a.createElement("td",null,l.a.createElement(s.b,{to:{pathname:"/bank/".concat(e.ifsc.toLowerCase()),state:e}},e.bank_name)),l.a.createElement("td",null,e.branch),l.a.createElement("td",null,e.city),l.a.createElement("td",{className:"text-center"},l.a.createElement("a",{href:"#"},i.join("").includes(e.ifsc)?l.a.createElement("img",{style:{width:"20px"},src:S.a,alt:"",onClick:function(e){return o(e)},"data-like":"true"}):l.a.createElement("img",{style:{width:"20px"},onClick:function(e){return o(e)},"data-like":"false",src:N.a}))))})),l.a.createElement("table",{className:"table table-striped mt-5"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"# ID"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Branch"),l.a.createElement("th",{scope:"col"},"City"),l.a.createElement("th",{scope:"col",className:"text-center"},"Favourites"))),l.a.createElement("tbody",null,m))}function O(e){var a=Object(n.useState)(1),t=Object(f.a)(a,2),c=t[0],r=t[1],s=Object(n.useState)(10),i=Object(f.a)(s,2),o=i[0],m=(i[1],c*o),u=m-o,d=e.banks.slice(u,m);return l.a.createElement("div",null,l.a.createElement(w,{banks:d}),e.banks.length>10?l.a.createElement(b,{currentPage:c,totalItems:e.banks.length,itemsPerPage:o,changePageHandler:function(e,a){e.preventDefault(),r(a)}}):"")}function C(e){return l.a.createElement("div",null,e.loading?l.a.createElement(h,null):l.a.createElement(O,{banks:e.filteredBanks}))}function j(e){return l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("select",{className:"custom-select",onChange:function(a){return e.changed(a)}},l.a.createElement("option",{value:"chennai"},"Chennai"),l.a.createElement("option",{value:"banglore"},"Banglore"),l.a.createElement("option",{value:"mumbai"},"Mumbai"),l.a.createElement("option",{value:"delhi"},"Delhi"),l.a.createElement("option",{value:"kolkata"},"Kolkata"))))}function B(e){return l.a.createElement("div",{className:"col-8"},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",onChange:function(a){return e.searching(a.target.value)},className:"form-control",placeholder:"Search"})))}function x(e){if(e.location.state)var a=e.location.state,t=a.bank_name,n=a.address,c=a.branch,r=a.city,s=a.ifsc,i=a.state;return l.a.createElement("div",{className:"card text-center my-5"},e.location.state?l.a.createElement("div",{className:"card-body"},l.a.createElement("h3",{className:"card-title mb-5"},t),l.a.createElement("dl",{className:"row"},l.a.createElement("dt",{className:"col-sm-5"},"Address"),l.a.createElement("dd",{className:"col-sm-7"},l.a.createElement("p",null,n)),l.a.createElement("dt",{className:"col-sm-5"},"Branch"),l.a.createElement("dd",{className:"col-sm-7"},l.a.createElement("p",null,c)),l.a.createElement("dt",{className:"col-sm-5"},"IFSC"),l.a.createElement("dd",{className:"col-sm-7"},l.a.createElement("p",null,s)),l.a.createElement("dt",{className:"col-sm-5"},"City"),l.a.createElement("dd",{className:"col-sm-7"},l.a.createElement("p",null,r)),l.a.createElement("dt",{className:"col-sm-5"},"State"),l.a.createElement("dd",{className:"col-sm-7"},l.a.createElement("p",null,i))),l.a.createElement("a",{href:"#",onClick:function(){return e.history.goBack()},className:"btn btn-primary"},"Go Back")):l.a.createElement("h1",null,"Not Available"))}var D=t(16),I=t.n(D),P=t(37),H=(t(71),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={banks:[],filteredBanks:[],loading:!0},t.fetchCachedData=function(e){var a=JSON.parse(localStorage.getItem(e));t.setState({banks:a,filteredBanks:a,loading:!1})},t.dropdownHandler=function(e){var a=e.target.value;t.setState({loading:!0}),localStorage.getItem(a)?t.fetchCachedData(a):I.a.get("https://vast-shore-74260.herokuapp.com/banks?city=".concat(a.toUpperCase())).then(function(e){localStorage.setItem(a,JSON.stringify(e.data)),t.setState({banks:e.data,filteredBanks:e.data,loading:!1})})},t.filterData=function(e){t.setState({filteredBanks:t.getData(t.state.banks,e)})},t.getData=function(e,a){var t=new RegExp(a,"gi");return e.filter(function(e){for(var a=0,n=Object.values(e);a<n.length;a++){var l=n[a];if(t.test(l))return!0}return!1})},t.searchHandler=Object(P.debounce)(function(e){t.filterData(e)},500),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("chennai")?this.fetchCachedData("chennai"):I.a.get("https://vast-shore-74260.herokuapp.com/banks?city=CHENNAI").then(function(a){localStorage.setItem("chennai",JSON.stringify(a.data)),e.setState({banks:a.data,filteredBanks:a.data,loading:!1})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container mt-5"},l.a.createElement(p,null),l.a.createElement(E.d,null,l.a.createElement(E.b,{path:"/bank/:id",exact:!0,component:x}),l.a.createElement(E.b,{path:"/",render:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement(j,{changed:e.dropdownHandler}),l.a.createElement(B,{searching:e.searchHandler})),l.a.createElement(C,{loading:e.state.loading,filteredBanks:e.state.filteredBanks}))}}),l.a.createElement(E.a,{to:"/"})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(s.a,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.59ee1fd4.chunk.js.map