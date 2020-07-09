!function(e){function t(t){for(var n,l,c=t[0],s=t[1],i=t[2],d=0,p=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={0:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var u=s;a.push([29,1]),r()}([,,,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);t.StyledDropdown=n.default.div`
  position: relative;
  font-size: 1rem;
  padding: 1rem;
  border-radius: ${({isOpen:e})=>e?"2rem 0 0 0":"2rem"};
  color: ${({theme:e})=>e.primary};
  background-color: ${({isOpen:e,theme:{bgDark:t}})=>e?t:"transparent"};
  cursor: pointer;
  line-height: 0;
  .dropdown-menu {
    display: ${({isOpen:e})=>e?"block":"none"};
  }
`,t.StyledDropdownMenu=n.default.ul.attrs({className:"dropdown-menu"})`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 100%;
  .dropdown-item:last-child {
    border-radius: 0 0 2rem 2rem;
  }
`,t.StyledDropdownItem=n.default.li.attrs({className:"dropdown-item"})`
  font-size: 1rem;
  padding: 1rem;
  background-color: ${({theme:{bgDark:e}})=>e};
  color: ${({theme:e})=>e.primary};
  cursor: pointer;
  transition: 0.3s background-color ease-in-out;
  &:hover {
    background-color: ${({theme:e})=>e.bgLight};
  }
`},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(16),o=r(17);t.setValue=e=>({type:n.SET_VALUE,value:e}),t.setSelectedCurrency=e=>({type:n.SET_SELECTED_CURRENCY,selectedCurrency:e}),t.startSetRates=e=>t=>fetch(`https://api.exchangeratesapi.io/latest?base=${e}&symbols=USD,GBP,RUB,EUR`).then(o.handleErrors).then(({rates:e})=>{const r=Object.keys(e).map(t=>({title:t,rate:e[t],icon:o.icons[t]}));return t((e=>({type:n.SET_RATES,rates:e}))(r))}).catch(()=>{alert("An error occured while loading rates. Please try again later.")})},,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.colors={bgLight:"#545256",bg:"#4f4e51",bgDark:"#424244",primary:"#fdf173",boxShadow:"8px 8px 16px #424244, -8px -8px 16px #5c5a5e"}},function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0});const o=r(0),a=r(1);t.Icon=e=>{var{className:t,viewBox:r,primary:l,fill:c,glyph:s}=e,i=n(e,["className","viewBox","primary","fill","glyph"]);const{primary:u}=a.useTheme();return o.createElement("svg",Object.assign({fill:l?u:c||"",className:t,viewBox:r},i),o.createElement("use",{xlinkHref:`#${s}`}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SET_SELECTED_CURRENCY="SET_SELECTED_CURRENCY",t.SET_VALUE="SET_VALUE",t.SET_RATES="SET_RATES"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(18),o=r(19),a=r(20),l=r(21);t.getCurrencySign=e=>{switch(e.toLowerCase()){case"gbp":return"£";case"eur":return"€";case"rub":return"₽";case"usd":default:return"$"}},t.icons={EUR:n.default,GBP:o.default,USD:l.default,RUB:a.default},t.handleErrors=e=>{if(!e.ok)throw Error(e.statusText);return e.json()}},function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),a=r(3),l=r.n(a),c=new o.a({id:"eur",use:"eur-usage",viewBox:"0 0 512 512",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="eur"><path d="M256 0C114.8 0 0 114.8 0 256s114.8 256 256 256 256-114.8 256-256S397.2 0 256 0zM256 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224S379.5 480 256 480z" /><path d="M311 339.7C299.1 347.9 286 352 272 352c-29.5 0-55-19.5-68.9-48H256c8.8 0 16-7.2 16-16 0-8.8-7.2-16-16-16h-62.7c-0.7-5.2-1.3-10.5-1.3-16s0.6-10.8 1.3-16H272c8.8 0 16-7.2 16-16 0-8.8-7.2-16-16-16h-68.9c13.9-28.5 39.4-48 68.9-48 14 0 27.1 4.1 39 12.3 7.3 5 17.3 3.1 22.2-4.2 5-7.3 3.1-17.2-4.2-22.2C311.9 134.2 292.2 128 272 128c-46.9 0-87 33.2-103.7 80H144c-8.8 0-16 7.2-16 16 0 8.8 7.2 16 16 16h17.4c-0.6 5.3-1.4 10.5-1.4 16s0.8 10.7 1.4 16H144c-8.8 0-16 7.2-16 16 0 8.8 7.2 16 16 16h24.3c16.7 46.8 56.8 80 103.7 80 20.2 0 39.9-6.2 57-17.8 7.3-5 9.2-14.9 4.2-22.2C328.3 336.6 318.3 334.8 311 339.7z" /></symbol>'});l.a.add(c);t.default=c},function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),a=r(3),l=r.n(a),c=new o.a({id:"gbp",use:"gbp-usage",viewBox:"0 0 490 490",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490" id="gbp"><path d="M245 0C109.5 0 0 109.5 0 245s109.5 245 245 245 245-109.5 245-245S380.5 0 245 0zM245 449.3c-112.6 0-204.3-91.7-204.3-204.3S132.4 40.7 245 40.7 449.3 132.4 449.3 245 357.6 449.3 245 449.3z" /><path d="M333.5 319.1c-5.3-8.1-16.3-10.7-24.2-5.2 -22.6 15.9-52.9 0.6-55.7-0.2 -10.4-2.7-23.8-2.2-36.8-0.4 1.9-4.3 3.5-8.7 5-13.4 4-12.6 6.1-25.4 6.3-37.5h37.2c9.7 0 17.5-7.8 17.5-17.5s-7.8-17.5-17.5-17.5h-42.6c0-0.1-0.1-0.3-0.1-0.4 -8.3-22.4-3.4-61.2 21-64.6 32.6-4.4 38.6 29.4 38.7 30.5 0.8 8.9 8.3 15.8 17.4 15.8 16.9 0 17.6-16.1 17.3-19.7l0 0c-0.2-1.6-8.6-65.2-73.5-61.6 -59.9 3.4-62.8 81-57.6 100h-12.5c-9.7 0-17.5 7.8-17.5 17.5 0 9.7 7.8 17.5 17.5 17.5h19.7c-0.7 26-13.8 54.7-29.1 64.5 -7.4 4.8-10.9 14.7-6.4 22.3 6.8 11.3 19.5 9.7 21.3 9 19.4-6.5 52.6-14.1 65.8-10.6 2.6 0.7 45.3 22.4 83.6-4.4C336.3 337.7 338.8 327.2 333.5 319.1z" /></symbol>'});l.a.add(c);t.default=c},function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),a=r(3),l=r.n(a),c=new o.a({id:"rub",use:"rub-usage",viewBox:"0 0 512 512",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="rub"><path d="m288.1 128.5h-80.3c-8.3 0-15 6.7-15 15v113.5h-17.1c-8.3 0-15 6.7-15 15s6.7 15 15 15h17.1v34.3h-17.1c-8.3 0-15 6.7-15 15s6.7 15 15 15h17.1v33.2c0 8.3 6.7 15 15 15s15-6.7 15-15v-33.2h65.3c8.3 0 15-6.7 15-15s-6.7-15-15-15h-65.3v-34.3h65.3c43.7 0 79.3-35.6 79.3-79.3 0-44.8-36.5-79.3-79.3-79.3zm0 128.5h-65.3v-98.5h65.3c27 0 49.3 21.8 49.3 49.3 0 27.2-22.1 49.3-49.3 49.3z" /><path d="m256 0c-141.2 0-256 114.8-256 256s114.8 256 256 256 256-114.8 256-256-114.8-256-256-256zm0 482c-124.6 0-226-101.4-226-226s101.4-226 226-226 226 101.4 226 226-101.4 226-226 226z" /></symbol>'});l.a.add(c);t.default=c},function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),a=r(3),l=r.n(a),c=new o.a({id:"usd",use:"usd-usage",viewBox:"0 0 512 512",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="usd"><path d="M437 75C388.7 26.6 324.4 0 256 0S123.3 26.6 75 75C26.6 123.3 0 187.6 0 256s26.6 132.7 75 181C123.3 485.4 187.6 512 256 512s132.7-26.6 181-75C485.4 388.7 512 324.4 512 256S485.4 123.3 437 75zM256 482C131.4 482 30 380.6 30 256S131.4 30 256 30s226 101.4 226 226S380.6 482 256 482z" /><path d="M272.1 241h-32.1c-18.3 0-33.2-14.9-33.2-33.2 0-18.3 14.9-33.2 33.2-33.2H304.2c8.3 0 15-6.7 15-15s-6.7-15-15-15H271v-33.2c0-8.3-6.7-15-15-15s-15 6.7-15 15v33.2h-1.1c-34.8 0-63.2 28.4-63.2 63.2 0 34.8 28.4 63.2 63.2 63.2h32.1c18.3 0 33.2 14.9 33.2 33.2 0 18.3-14.9 33.2-33.2 33.2h-64.3c-8.3 0-15 6.7-15 15s6.7 15 15 15H241v33.2c0 8.3 6.7 15 15 15s15-6.7 15-15V367.4h1.1c34.8 0 63.2-28.4 63.2-63.2S306.9 241 272.1 241z" /></symbol>'});l.a.add(c);t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);t.Card=n.default.div`
  background-color: ${({theme:e})=>e.bg};
  padding: 2rem;
  border-radius: 32px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);t.animatedBoxShadow=e=>n.keyframes`
0% {
  box-shadow: none;
  opacity: 0;
  transform: scale(0);
}
35% {
  transform: scale(1.1);
}
45% {
  transform: scale(0.90);
}
50% {
  opacity: 1;
  box-shadow: none;
  transform: scale(1);
}
100% {
  box-shadow: ${e.theme.boxShadow};
}
`,t.animatedShadow=e=>n.keyframes`
0% {
  box-shadow: none;
}
100% {
  box-shadow: ${e.theme.boxShadow};
}
`},,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(0),o=r(7),a=r(34);o.render(n.createElement(a.App,null),document.getElementById("app"))},,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(0),o=r(1),a=r(6),l=r(41),c=r(14),s=r(42),i=r(55),u=r(56);t.App=()=>n.createElement(n.Fragment,null,n.createElement(l.GlobalStyle,null),n.createElement(a.Provider,{store:u.store},n.createElement(o.ThemeProvider,{theme:c.colors},n.createElement(i.Container,null,n.createElement(s.CurrencyConverter,null)))))},,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),o=r(14);t.GlobalStyle=n.createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  color: ${o.colors.primary};
}
html {
  font-size: 20px;
}
body {
  background-color: ${o.colors.bgLight};
}

small {
  font-size: 14px;
}

ul {
  list-style: none;
}

#app {
  display: flex;
  height: 100vh;
}
`},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(0),o=r(43),a=r(48),l=r(50),c=r(52),s=r(10),i=r(6);t.CurrencyConverter=()=>{const e=i.useDispatch(),{rates:t,selectedCurrency:r,value:u}=i.useSelector(e=>({rates:e.rates,selectedCurrency:e.selectedCurrency,value:e.value}));n.useEffect(()=>{e(s.startSetRates(r))},[r]);const d=e=>{e.current.select(),document.execCommand("copy")};return n.createElement(l.AnimatedCard,null,n.createElement(l.StyledTitle,null,"Currency converter"),n.createElement(l.StyledRow,null,n.createElement(o.CurrencySelector,null),n.createElement(a.AmountInput,null)),n.createElement(l.StyledLayout,null,t.map(({title:e,rate:t,icon:r})=>n.createElement(l.StyledLayoutItem,{key:e},n.createElement(c.CurrencyCard,{handleCopy:d,value:u,type:e,rate:t,icon:r})))))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(0),o=r(6),a=r(44),l=r(46),c=r(47),s=r(15),i=r(10),u=r(17);t.CurrencySelector=()=>{const e=o.useDispatch(),{currencies:t,selectedCurrency:r}=o.useSelector(e=>({currencies:e.rates,selectedCurrency:e.selectedCurrency})),d=t=>{e(i.setSelectedCurrency(t))};return n.createElement(a.Dropdown,null,n.createElement(s.Icon,{primary:!0,glyph:u.icons[r].id,viewBox:u.icons[r].viewBox,width:"24px",height:"24px"}),n.createElement(l.DropdownMenu,null,t.filter(({title:e})=>e!==r).map(({title:e,icon:t})=>n.createElement(c.DropdownItem,{key:e,onClick:d.bind(null,e)},n.createElement(s.Icon,{primary:!0,glyph:t.id,viewBox:t.viewBox,width:"24px",height:"24px"})))))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(0),o=r(9),a=r(45);t.Dropdown=({children:e})=>{const[t,r]=n.useState(!1),l=n.useRef(null);return a.useOuterClick(l,r.bind(null,!1)),n.createElement(o.StyledDropdown,{ref:l,isOpen:t,onClick:r.bind(null,!t)},e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(0);t.useOuterClick=(e,t)=>{const r=r=>{e.current&&!e.current.contains(r.target)&&t()};n.useEffect(()=>(document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(9);t.DropdownMenu=n.StyledDropdownMenu},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(9);t.DropdownItem=n.StyledDropdownItem},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(0),o=r(6),a=r(49),l=r(10);t.AmountInput=()=>{const e=o.useDispatch(),t=o.useSelector(e=>e.value);return n.createElement(a.Input,{placeholder:"Enter amount",autoFocus:!0,onChange:t=>{!/^\d{1,}(\.\d{0,2})?$/.test(t.target.value)&&t.target.value||e(l.setValue(t.target.value))},value:t})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);t.Input=n.default.input`
  color: ${({theme:e})=>e.primary};
  padding: 1rem;
  background-color: ${({theme:e})=>e.bgDark};
  border: none;
  border-radius: 0 2rem 2rem 0;
  outline: none;
  width: 100%;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
  &::placeholder {
    color: ${({theme:e})=>e.bgLight};
    font-weight: 700;
  }
`},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),o=r(51),a=r(22),l=r(23);t.StyledTitle=n.default(o.Title)`
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 425px) {
    text-align: center;
    font-size: 1.25rem;
  }
`,t.StyledRow=n.default.div`
  display: flex;
  border-radius: 2rem;
  animation: ${l.animatedShadow} 0.5s ease-in-out 1.5s forwards;
  margin-bottom: 2rem;
`,t.StyledLayout=n.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: -1rem;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
`,t.StyledLayoutItem=n.default.div`
  padding: 0 0.5rem;
  flex: 0 0 50%;
  max-width: 50%;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`,t.AnimatedCard=n.default(a.Card)`
  animation: ${l.animatedBoxShadow} 1.5s ease-in-out 0s forwards;
`},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);t.Title=n.default.h1`
  color: ${({theme:e})=>e.primary};
  font-size: 2.5rem;
`},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(0),o=r(53),a=r(54);t.CurrencyCard=({rate:e,type:t,icon:r,value:l,handleCopy:c})=>{const s=n.useRef(null);return n.createElement(o.StyledCard,{type:t},n.createElement(o.StyledSmall,null,n.createElement(o.StyledExchangeIcon,{primary:!0,glyph:a.default.id,viewBox:a.default.viewBox,width:"12px",height:"12px"}),e.toFixed(4),n.createElement(o.StyledCurrencyIcon,{primary:!0,glyph:r.id,viewBox:r.viewBox,width:"32px",height:"32px"})),n.createElement(o.StyledReadonlyInput,{onFocus:c.bind(null,s),ref:s,readOnly:!0,value:(e*Number(l)).toFixed(2),tabIndex:-1}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),o=r(15),a=r(22),l=r(23);t.StyledExchangeIcon=n.default(o.Icon)`
  margin-right: 0.2rem;
`,t.StyledCurrencyIcon=n.default(o.Icon)`
  margin-left: auto;
`,t.StyledCard=n.default(a.Card)`
  padding: 1rem;
  margin-bottom: 1rem;
  animation: ${l.animatedShadow} 0.5s ease-in-out 2s forwards;
`,t.StyledSmall=n.default.small`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-left: auto;
`,t.StyledReadonlyInput=n.default.input`
  border: none;
  text-align: right;
  width: 100%;
  padding: 0.25rem;
  border-radius: 5px;
  background-color: ${({theme:e})=>e.bgDark};
  &:hover {
    cursor: copy;
  }
  &:focus {
    outline: 2px solid ${({theme:e})=>e.primary};
  }

  &::selection {
    background-color: transparent;
  }
`},function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),a=r(3),l=r.n(a),c=new o.a({id:"exchange",use:"exchange-usage",viewBox:"0 0 423.8 423.8",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 423.8 423.8" id="exchange"><path d="M43.8 281.5c-18.6-44.9-18.6-94.3 0-139.2 10.6-25.7 26.7-48.2 46.9-66.1l60.9 60.9V15.1H29.6l39.9 39.9c-64.3 58.4-88.5 153.2-53.4 238 14.2 34.2 37.1 64.2 66.2 86.6 28.3 21.8 61.9 36.2 97.2 41.7l4.6-29.6C120.8 381.8 68.3 340.6 43.8 281.5z" /><path d="M407.5 292.9c21.7-52.3 21.7-109.8 0-162.1 -14.2-34.2-37.1-64.2-66.2-86.6C313 22.4 279.4 8 244.1 2.5l-4.6 29.6c63.3 9.8 115.8 51 140.3 110.1 18.6 44.9 18.6 94.3 0 139.2 -10.6 25.7-26.7 48.2-46.9 66.1l-60.9-60.9v121.9h121.9l-39.8-39.8C377.1 348.1 395.3 322.3 407.5 292.9z" /></symbol>'});l.a.add(c);t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);t.Container=n.default.div`
  margin: auto;
  width: 30rem;
  padding: 0.75rem;
`},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(11),o=r(57),a=r(58);t.store=n.createStore(a.currenciesReducer,n.applyMiddleware(o.default))},,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(16),o=r(18),a=r(19),l=r(20),c={value:"",selectedCurrency:"USD",rates:[{title:"USD",rate:0,icon:r(21).default},{title:"EUR",rate:0,icon:o.default},{title:"GBP",rate:0,icon:a.default},{title:"RUB",rate:0,icon:l.default}]};t.currenciesReducer=(e=c,t)=>{switch(t.type){case n.SET_RATES:return Object.assign(Object.assign({},e),{rates:t.rates});case n.SET_SELECTED_CURRENCY:return Object.assign(Object.assign({},e),{selectedCurrency:t.selectedCurrency});case n.SET_VALUE:return Object.assign(Object.assign({},e),{value:t.value});default:return e}}}]);