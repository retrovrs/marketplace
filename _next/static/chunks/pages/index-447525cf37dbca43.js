(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5075)}])},5075:function(e,n,i){"use strict";i.r(n);var s=i(85893),r=i(214),a=i.n(r),t=i(41664),c=i.n(t),l=i(52391),d=i(11163);n.default=function(){var e=(0,d.useRouter)(),n=(0,l.cq)("0x25ad15012B615DeA43d309263Afc7f176F700231","marketplace").contract,i=(0,l.Os)(n),r=i.data,t=i.isLoading;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:a().container,children:[(0,s.jsx)("h1",{className:a().h1,children:"NFT Marketplace w/ thirdweb + Next.JS"}),(0,s.jsxs)("p",{className:a().explain,children:["Build an NFT marketplace using"," ",(0,s.jsxs)("b",{children:[" ",(0,s.jsx)("a",{href:"https://thirdweb.com/",target:"_blank",rel:"noopener noreferrer",className:a().purple,children:"thirdweb"})]})," ","to list your ERC721 and ERC1155 tokens for auction or for direct sale."]}),(0,s.jsx)("hr",{className:a().divider}),(0,s.jsx)("div",{style:{marginTop:32,marginBottom:32},children:(0,s.jsx)(c(),{href:"/create",children:(0,s.jsx)("a",{className:a().mainButton,style:{textDecoration:"none"},children:"Create A Listing"})})}),(0,s.jsx)("div",{className:"main",children:t?(0,s.jsx)("div",{children:"Loading listings..."}):(0,s.jsx)("div",{className:a().listingGrid,children:null===r||void 0===r?void 0:r.map((function(n){return(0,s.jsxs)("div",{className:a().listingShortView,onClick:function(){return e.push("/listing/".concat(n.id))},children:[(0,s.jsx)(l.W8,{src:n.asset.image,style:{borderRadius:16,width:"100%",height:"100%"}}),(0,s.jsx)("h2",{className:a().nameContainer,children:(0,s.jsx)(c(),{href:"/listing/".concat(n.id),children:(0,s.jsx)("a",{className:a().name,children:n.asset.name})})}),(0,s.jsxs)("p",{children:[(0,s.jsx)("b",{children:n.buyoutCurrencyValuePerToken.displayValue})," ",n.buyoutCurrencyValuePerToken.symbol]})]},n.id)}))})})]})})}},11163:function(e,n,i){e.exports=i(90387)}},function(e){e.O(0,[774,888,179],(function(){return n=48312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);