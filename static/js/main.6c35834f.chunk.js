(this["webpackJsonpshopify-challenge"]=this["webpackJsonpshopify-challenge"]||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var i,r,o,a,c,s=t(1),l=t.n(s),d=t(9),x=t.n(d),p=(t(21),t(2)),h=t(7),b=t(10),f=t(11),m=t(16),u=t(15),j=t(3),g=t.p+"static/media/bullet.f6877e63.svg",O=t(0);var v,w,k,y=function(n){var e=n.movie,t=n.favorite,i=n.clickHandler;return Object(O.jsxs)(S,{children:[Object(O.jsx)(T,{src:g}),Object(O.jsxs)(H,{children:["".concat(e.Title," (").concat(e.Year,") "),t?Object(O.jsx)(I,{children:"Nominate"}):Object(O.jsx)(C,{onClick:function(){return i(e)},children:"Nominate"})]})]})},S=j.a.div(i||(i=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin: 0px 40px;    \n  "]))),H=j.a.p(r||(r=Object(p.a)(["\n    margin: 10px 4px;\n  "]))),T=j.a.img(o||(o=Object(p.a)(["\n    width: 1.5vw;\n    height: 1.5vh;\n  "]))),C=j.a.button(a||(a=Object(p.a)(["\n    padding: 6px 12px;\n    color: #fff;\n    background-color: #008060;\n    border: 1px solid #008060;\n    border-radius: 3px;\n\n    &:hover {\n      color: #fff;\n      background-color: #5fbb64;\n      border: 1px solid #5fbb64;\n      cursor: pointer;\n    }\n  "]))),I=j.a.button(c||(c=Object(p.a)(["\n    padding: 6px 12px;\n    color: #fff;\n    background-color: #008060;\n    index: 100;\n    border: 1px solid #008060;\n    opacity: 0.5;\n    font-weight: bold;\n    border-radius: 3px;\n  "])));var M,N,z,L,R=function(n){var e=n.results,t=n.error,i=n.clickHandler,r=n.searchTerm,o=n.nominations;return Object(O.jsxs)(D,{children:[Object(O.jsxs)(F,{children:["Results for '",r,"'"]}),e?e.sort((function(n,e){return e.Year-n.Year})).map((function(n){return o.find((function(e){return e.imdbID===n.imdbID}))?Object(O.jsx)(y,{favorite:!0,movie:n,clickHandler:i},e.indexOf(n)):Object(O.jsx)(y,{movie:n,clickHandler:i},e.indexOf(n))})):"Incorrect IMDb ID."===t?null:Object(O.jsx)(Y,{children:t})]})},D=j.a.div(v||(v=Object(p.a)(["\n    background-color: #fff;\n    width: 50vw;\n    height: 50vh;\n    overflow: scroll;\n    margin-right: 10px;\n    padding-bottom: 15px;\n    border-radius: 2px;\n    box-shadow: 0px 2px 4px 2px rgb(0,0,0,.15);\n    @media (max-width: 480px) {\n        width: 100%;\n        height: 225px;\n    }\n"]))),F=j.a.header(w||(w=Object(p.a)(["\n    padding: 20px;\n    font-size: calc(3px + 2vmin);\n    font-weight: bold;\n"]))),Y=j.a.p(k||(k=Object(p.a)(["\n    margin: 10px 40px;   \n"])));var E,q,B=function(n){var e=n.movie,t=n.clickHandler;return Object(O.jsxs)(J,{children:[Object(O.jsx)(A,{src:g}),Object(O.jsxs)(P,{children:[e.Title," (",e.Year,") ",Object(O.jsx)(G,{onClick:function(){return t(e)},children:"Remove"})]})]})},J=j.a.div(M||(M=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin: 0px 40px;    \n"]))),P=j.a.p(N||(N=Object(p.a)(["\n    margin: 10px 4px;\n  "]))),A=j.a.img(z||(z=Object(p.a)(["\n    width: 1.5vw;\n    height: 1.5vh;\n  "]))),G=j.a.button(L||(L=Object(p.a)(["\n    padding: 6px 12px;\n    color: #fff;\n    background-color: black;\n    border: 1px solid black;\n    border-radius: 3px;\n\n    &:hover {\n      color: #fff;\n      background-color: grey;\n      border: 1px solid grey;\n      cursor: pointer;\n    }\n  "])));var K,Q,U,V,W,X,Z,$,_,nn,en,tn,rn,on,an=function(n){var e=n.nominations,t=n.clickHandler;return Object(O.jsxs)(cn,{children:[Object(O.jsx)(sn,{children:"Nominations"}),e?e.map((function(n){return Object(O.jsx)(B,{movie:n,clickHandler:t},e.indexOf(n))})):null]})},cn=j.a.div(E||(E=Object(p.a)(["\n    background-color: #fff;\n    width: 50vw;\n    height: 50vh;\n    margin-left: 10px;\n    padding-bottom: 15px;\n    border-radius: 2px;\n    overflow: scroll;\n    box-shadow: 0px 2px 4px 2px rgb(0,0,0,.15);\n    @media (max-width: 480px) {\n        margin: 0;\n        width: 100%;\n        height: 225px;\n    }   \n"]))),sn=j.a.header(q||(q=Object(p.a)(["\n    padding: 20px;\n    font-size: calc(3px + 2vmin);\n    font-weight: bold;\n"]))),ln=t.p+"static/media/logo.4733f16b.gif",dn=t.p+"static/media/search.961fcc37.svg",xn="https://www.omdbapi.com/?apikey=".concat("f090039a","&type=movie&s="),pn=function(n){Object(m.a)(t,n);var e=Object(u.a)(t);function t(){var n;Object(b.a)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={searchTerm:"",error:"",results:[],nominations:[],nominationLimit:!1},n.renderSearchTerm=function(e){n.setState({searchTerm:e.target.value}),n.fetchResults(e.target.value)},n.fetchResults=function(e){fetch(xn+e).then((function(n){return n.json()})).then((function(e){n.renderResults(e)}))},n.renderResults=function(e){e.Error?n.setState({error:e.Error,results:null}):n.setState({error:null,results:e.Search})},n.addNominationClickHandler=function(e){var t=Object(h.a)(n.state.nominations);if(5!==n.state.nominations.length)t.push(e),n.setState({nominations:t});else if(5===n.state.nominations.length){n.setState({nominationLimit:!0}),document.querySelector(".nominationModal").style.display="flex"}},n.removeNominationClickHandler=function(e){var t=Object(h.a)(n.state.nominations),i=t.find((function(n){return n===e})),r=t.indexOf(i);t.splice(r,1),n.setState({nominations:t})},n.closeModal=function(){n.setState({nominationLimit:!1}),document.querySelector(".nominationModal").style.display="none"},n}return Object(f.a)(t,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[this.state.nominationLimit?Object(O.jsx)(hn,{}):null,Object(O.jsxs)(Sn,{className:"nominationModal",style:{display:"none"},children:[Object(O.jsx)(gn,{src:ln}),Object(O.jsx)("h3",{children:"You have no more nominations left."}),Object(O.jsx)(Hn,{onClick:this.closeModal,children:"ok"})]}),5===this.state.nominations.length?Object(O.jsx)(bn,{children:Object(O.jsx)(fn,{children:"nomination limit filled"})}):null,Object(O.jsxs)(mn,{children:[Object(O.jsx)(un,{children:Object(O.jsx)(jn,{children:"The Shoppies"})}),Object(O.jsxs)(On,{children:[Object(O.jsx)(wn,{children:"Movie title"}),Object(O.jsx)(vn,{src:dn}),Object(O.jsx)(kn,{value:this.state.searchTerm,onChange:this.renderSearchTerm})]}),Object(O.jsxs)(yn,{children:[Object(O.jsx)(R,{results:this.state.results,error:this.state.error,searchTerm:this.state.searchTerm,nominations:this.state.nominations,clickHandler:this.addNominationClickHandler}),Object(O.jsx)(an,{nominations:this.state.nominations,clickHandler:this.removeNominationClickHandler})]})]})]})}}]),t}(l.a.Component),hn=j.a.div(K||(K=Object(p.a)(["\n    background-color: #fff;\n    opacity: 0.7; \n    position: absolute; \n    zIndex: 1; \n    width: 100vw; \n    height: 100vh;\n    @media (max-width: 480px) {\n        height: 140%;\n    }\n"]))),bn=j.a.div(Q||(Q=Object(p.a)(["\n    display: flex;\n    font-weight: bold;\n    flex-direction: row;\n    justify-content: center;\n    align-content: center;\n    align-item: center;\n    background-color: #212326;\n    letter-spacing: 3px;\n    height: 8vh;\n    text-transform: uppercase;\n    padding: 15px;\n"]))),fn=j.a.h3(U||(U=Object(p.a)(["\n    color: #fff;\n"]))),mn=j.a.div(V||(V=Object(p.a)(["\n    margin: 100px 200px;\n    @media (max-width: 480px) {\n        margin: 60px 15px;\n    }\n"]))),un=j.a.div(W||(W=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: start;\n    margin-bottom: 10px;\n"]))),jn=j.a.h1(X||(X=Object(p.a)(["\n    margin: 0px;\n    color: white;\n"]))),gn=j.a.img(Z||(Z=Object(p.a)(["\n    width: 6vw;\n    height: 7vh;\n    margin: 0;\n    @media (max-width: 480px) {\n        width: 14vw;\n        height: 11vh;\n        margin: 0;\n    }\n  "]))),On=j.a.div($||($=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    background-color: #fff;\n    padding: 20px;\n    border-radius: 2px;\n    box-shadow: 0px 2px 4px 2px rgb(0,0,0,.15);\n"]))),vn=j.a.img(_||(_=Object(p.a)(["\n    width: 4vw;\n    height: 4vh;\n    padding-top: 27px;\n    position: absolute; \n    zIndex: 1px;\n"]))),wn=j.a.p(nn||(nn=Object(p.a)(["\n    margin: 0px;\n    padding-bottom: 5px;\n    font-size: 14px;\n"]))),kn=j.a.input(en||(en=Object(p.a)(["\n    height: 4vh;\n    border: 1px solid lightgrey;\n    padding-left: 40px;\n"]))),yn=j.a.div(tn||(tn=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin: 20px 0px;\n    @media (max-width: 480px) {\n        flex-direction: column;\n        justify-content: space-between;\n        height: 500px;\n    }\n"]))),Sn=j.a.div(rn||(rn=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #008060;\n    width: 450px;\n    height: auto;\n    z-index: 2;\n    padding: 20px;\n    color: white;\n    @media (max-width: 480px) {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        margin: 0;\n        width: 250px;\n        text-align: center;\n    }\n"]))),Hn=j.a.button(on||(on=Object(p.a)(["\n    padding: 6px 12px;\n    color: #ffffff;\n    background-color: #212326;\n    border: 1px solid #212326;\n    border-radius: 3px;\n    font-weight: bold;\n    text-transform: uppercase;\n    &:hover {\n        color: #fff;\n        background-color: black;\n        border: 1px solid black;\n        cursor: pointer;\n    }\n"])));var Tn=function(){return Object(O.jsx)(pn,{})},Cn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),i(n),r(n),o(n),a(n)}))};x.a.render(Object(O.jsx)(l.a.StrictMode,{children:Object(O.jsx)(Tn,{})}),document.getElementById("root")),Cn()}},[[25,1,2]]]);
//# sourceMappingURL=main.6c35834f.chunk.js.map