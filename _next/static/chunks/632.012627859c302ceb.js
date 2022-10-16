"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[632],{45632:function(t,r,e){e.r(r),e.d(r,{Multiwrap:function(){return o}});var n=e(17190),a=e(58124),s=e(61744);e(13550),e(25025),e(70332),e(8455),e(26729),e(54098),e(62555),e(26219),e(61303),e(49242),e(70565),e(13670),e(79120),e(97604),e(8187),e(19362),e(54730),e(36250),e(85725),e(38730),e(237),e(65609),e(77208),e(86841),e(49561),e(40553),e(26),e(69392),e(82037),e(64063),e(34161),e(50266),e(98839),e(51375),e(43320),e(65815),e(59189),e(40721),e(24601),e(46878),e(20583),e(92355),e(84194),e(51121),e(32484),e(78435);class o extends a.aE{constructor(t,r,e){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new a.cl(t,r,c,s),e,i),(0,n._)(this,"abi",void 0),(0,n._)(this,"encoder",void 0),(0,n._)(this,"estimator",void 0),(0,n._)(this,"metadata",void 0),(0,n._)(this,"events",void 0),(0,n._)(this,"roles",void 0),(0,n._)(this,"royalties",void 0),(0,n._)(this,"owner",void 0),this.abi=c,this.metadata=new a.ag(this.contractWrapper,a.cq,this.storage),this.roles=new a.ah(this.contractWrapper,o.contractRoles),this.encoder=new a.af(this.contractWrapper),this.estimator=new a.aQ(this.contractWrapper),this.events=new a.aR(this.contractWrapper),this.royalties=new a.ai(this.contractWrapper,this.metadata),this.owner=new a.aV(this.contractWrapper)}async getWrappedContents(t){const r=await this.contractWrapper.readContract.getWrappedContents(t),e=[],n=[],o=[];for(const c of r)switch(c.tokenType){case 0:{const t=await(0,a.cr)(this.contractWrapper.getProvider(),c.assetContract);e.push({contractAddress:c.assetContract,quantity:s.formatUnits(c.totalAmount,t.decimals)});break}case 1:n.push({contractAddress:c.assetContract,tokenId:c.tokenId});break;case 2:o.push({contractAddress:c.assetContract,tokenId:c.tokenId,quantity:c.totalAmount.toString()})}return{erc20Tokens:e,erc721Tokens:n,erc1155Tokens:o}}async wrap(t,r,e){const n=await(0,a.cs)(r,this.storage),s=e||await this.contractWrapper.getSignerAddress(),o=await this.toTokenStructList(t),c=await this.contractWrapper.sendTransaction("wrap",[o,n,s]),i=this.contractWrapper.parseLogs("TokensWrapped",null===c||void 0===c?void 0:c.logs);if(0===i.length)throw new Error("TokensWrapped event not found");const d=i[0].args.tokenIdOfWrappedToken;return{id:d,receipt:c,data:()=>this.get(d)}}async unwrap(t,r){const e=r||await this.contractWrapper.getSignerAddress();return{receipt:await this.contractWrapper.sendTransaction("unwrap",[t,e])}}async toTokenStructList(t){const r=[],e=this.contractWrapper.getProvider(),n=await this.contractWrapper.getSignerAddress();if(t.erc20Tokens)for(const s of t.erc20Tokens){const t=await(0,a.ct)(e,s.quantity,s.contractAddress);if(!(await(0,a.cu)(this.contractWrapper,s.contractAddress,t)))throw new Error(`ERC20 token with contract address "${s.contractAddress}" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("${s.contractAddress}").setAllowance("${this.getAddress()}", ${s.quantity});\n\n`);r.push({assetContract:s.contractAddress,totalAmount:t,tokenId:0,tokenType:0})}if(t.erc721Tokens)for(const s of t.erc721Tokens){if(!(await(0,a.cv)(this.contractWrapper.getProvider(),this.getAddress(),s.contractAddress,s.tokenId,n)))throw new Error(`ERC721 token "${s.tokenId}" with contract address "${s.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("${s.contractAddress}").setApprovalForToken("${this.getAddress()}", ${s.tokenId});\n\n`);r.push({assetContract:s.contractAddress,totalAmount:0,tokenId:s.tokenId,tokenType:1})}if(t.erc1155Tokens)for(const s of t.erc1155Tokens){if(!(await(0,a.cv)(this.contractWrapper.getProvider(),this.getAddress(),s.contractAddress,s.tokenId,n)))throw new Error(`ERC1155 token "${s.tokenId}" with contract address "${s.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("${s.contractAddress}").setApprovalForAll("${this.getAddress()}", true);\n\n`);r.push({assetContract:s.contractAddress,totalAmount:s.quantity,tokenId:s.tokenId,tokenType:2})}return r}async call(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),n=1;n<r;n++)e[n-1]=arguments[n];return this.contractWrapper.call(t,...e)}}(0,n._)(o,"contractRoles",["admin","transfer","minter","unwrap","asset"])}}]);