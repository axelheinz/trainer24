(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(82)},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(26),l=a.n(s),c=a(7),o=a(8),i=a(10),m=a(9),u=a(11),h=a(90),d=a(91),f=a(92),p=a(93),g=a(84),E=a(83),v=a(85),b=a(86),y=a(87),O=a(88),N=a(89),w=function(e){return console.log(e),r.a.createElement(E.a,{md:"3"},r.a.createElement(g.a,{to:e.cardLink},r.a.createElement(v.a,{style:{},className:"shadow my-2"},r.a.createElement(b.a,{className:"bg-secondary p-5 text-light",src:e.cardImage,alt:e.cardImage}),r.a.createElement(y.a,null,r.a.createElement(O.a,{tag:"h5"},e.cardTitle),r.a.createElement(N.a,null,e.cardText)))))},j=a(23),C=a.n(j),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={cardArray:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getCourses",value:function(){var e=this;return C.a.create({baseURL:"http://localhost:5000/api",withCredentials:!0}).get("/offers").then(function(t){var a=t.data.map(function(e,t){return r.a.createElement(w,{key:t,cardTitle:e.courseTitle,cardText:e.courseDetails,cardImage:e.courseImage,cardLink:e.courseLink})});e.setState({cardArray:a})}).catch(function(e){return console.log(e),e})}},{key:"cardSpace",value:function(){return console.log(this.state.cardArray),r.a.createElement(h.a,null,this.state.cardArray)}},{key:"componentDidMount",value:function(){this.getCourses()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement("h1",{className:"display-4"},"Trainer24"),r.a.createElement("p",{className:"lead"},"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",null,"It uses utility classes for typography and spacing to space content out within the larger container."),r.a.createElement(f.a,{color:"primary",size:"lg",tag:g.a,to:"/login"},"Learn more")),r.a.createElement(p.a,{fluid:!0,className:"p-2"},r.a.createElement("h2",{className:"display-5 my-2 mb-4"},"Check out our classes:"),this.cardSpace()))}}]),t}(n.Component),S=a(16),k=a(6),U=a(94),I=a(95),T=a(96),L=a(97),D=a(98),M=a(99),P=a(100),R=a(101),F=a(102);a(68).config();var A=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e,a,n,r,s){return t.service.post("/signup",{username:e,password:a,email:n,firstname:r,lastname:s}).then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})};var a=C.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_URL||"http://localhost:5000/api",withCredentials:!0});this.service=a},q=(a(37),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).logoutUser=function(){a.service.logout().then(function(){a.setState({loggedInUser:null}),a.props.setUser(null)})},a.toggle=a.toggle.bind(Object(k.a)(Object(k.a)(a))),a.state={collapsed:!0,loggedInUser:null},a.service=new A,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(S.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"toggle",value:function(){this.setState(function(e){return{collapsed:!e.collapsed}})}},{key:"logoutButton",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement(U.a,null,r.a.createElement(f.a,{onClick:function(){return e.logoutUser()}},"Logout")):null}},{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",null,r.a.createElement(I.a,{expand:"lg",dark:!0,color:"primary",sticky:"top"},r.a.createElement(T.a,{onClick:this.toggle,"aria-controls":"navbarContents","aria-expanded":!this.state.collapsed,"aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement(L.a,{href:"/"},"Trainer24"),r.a.createElement(D.a,{navbar:!0,id:"navbarContents",isOpen:!this.state.collapsed},r.a.createElement(M.a,{navbar:!0,className:"mr-auto mt-2 mt-lg-0"},r.a.createElement(U.a,{active:!0},r.a.createElement(P.a,{href:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),!this.state.loggedInUser&&r.a.createElement(U.a,null,r.a.createElement(P.a,{href:"login"},"Login")),!this.state.loggedInUser&&r.a.createElement(U.a,null,r.a.createElement(P.a,{href:"signup"},"Signup")),this.logoutButton(),r.a.createElement(U.a,null,r.a.createElement(P.a,{href:"dashboard"},"Dashboard")),this.state.loggedInUser&&r.a.createElement(U.a,null,r.a.createElement(P.a,{href:"profile"},"My Profile"))),r.a.createElement(R.a,{inline:!0,className:"my-2 my-lg-0"},r.a.createElement(F.a,{className:"mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement(f.a,{outline:!0,color:"success",className:"my-2 my-sm-0",type:"submit"},"Search")))))}}]),t}(n.Component)),_=a(109),B=a(108),J=a(19),W=a(107),z=a(110),H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).setRedirect=function(){a.setState({redirect:!0})},a.renderRedirect=function(){if(a.state.redirect)return r.a.createElement(W.a,{to:"/dashboard"})},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password,s=t.firstname,l=t.lastname,c=t.email;a.service.signup(n,r,s,l,c).then(function(e){a.setState({username:"",password:"",firstname:"",lastname:"",email:""}),a.props.setUser(e),a.setRedirect()}).catch(function(e){console.log(e.response),a.setState({errorMessage:e.response.data.message}),console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(J.a)({},n,r))},a.state={lastname:"",firstname:"",username:"",password:"",email:"",errorMessage:"",redirect:!1},a.service=new A,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.renderRedirect(),r.a.createElement("div",{className:"container text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 offset-md-4"},r.a.createElement("h2",null,"Create your account"),r.a.createElement("form",{className:"form-signin",onSubmit:this.handleFormSubmit},r.a.createElement("img",{class:"mb-4",src:"",alt:"",width:"72",height:"72"}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First name:"),r.a.createElement("input",{type:"text",className:"form-control",name:"firstname",value:this.state.firstname,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last name:"),r.a.createElement("input",{type:"text",className:"form-control",name:"lastname",value:this.state.lastname,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Register")),r.a.createElement("hr",null),this.state.errorMessage&&r.a.createElement(z.a,{color:"warning"},this.state.errorMessage),r.a.createElement("p",null,"Already have account?",r.a.createElement(g.a,{to:"/login"},"Login"))))))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).setRedirect=function(){a.setState({redirect:!0})},a.renderRedirect=function(){if(a.state.redirect)return r.a.createElement(W.a,{to:"/dashboard"})},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.service.login(n,r).then(function(e){a.setState({username:"",password:""}),a.props.setUser(e),a.setRedirect()}).catch(function(e){console.log(e.response),a.setState({errorMessage:e.response.data.message}),console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(J.a)({},n,r))},a.state={username:"",password:"",email:"",redirect:!1,errorMessage:""},a.service=new A,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.renderRedirect(),r.a.createElement("div",{className:"container text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 offset-md-4"},r.a.createElement("h2",null,"Login"),r.a.createElement("form",{className:"form-signin",onSubmit:this.handleFormSubmit},r.a.createElement("img",{class:"mb-4",src:"https://images-na.ssl-images-amazon.com/images/I/41lCbd6yFlL.jpg",alt:"",width:"72",height:"72"}),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Username or Email:"),r.a.createElement("input",{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"Login")),r.a.createElement("hr",null),this.state.errorMessage&&r.a.createElement(z.a,{color:"warning"},this.state.errorMessage),r.a.createElement("p",null,"You don't have account yet?",r.a.createElement(g.a,{to:"/signup"},"Signup"))))))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a.card={cardTitle:"Card title",cardText:"Some quick example text to build on the card title and make up the bulk of the card's content.",cardImage:"Card Image"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"cardSpace",value:function(){return r.a.createElement(h.a,{className:"mt-4"},r.a.createElement(w,{card:this.card}),r.a.createElement(w,{card:this.card}),r.a.createElement(w,{card:this.card}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{id:"heading",className:"text-center mt-4"},r.a.createElement("h1",null,"My Dashboard")),r.a.createElement(p.a,{id:"content",className:"mt-3"},r.a.createElement("h2",null," My Courses"),this.cardSpace(),r.a.createElement(f.a,{tag:g.a,to:"/createoffer",className:"mt-3"},"Add course"),r.a.createElement("hr",{className:"mt-5 mb-5"}),r.a.createElement("h2",null," Courses history"),this.cardSpace()))}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a.user={firstName:"Jane",lastName:"Doe",occupation:"Life Coach and Trainer for just about everything",description:"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat."},a.card={cardTitle:"Card title",cardText:"Some quick example text to build on the card title and make up the bulk of the card's content.",cardImage:"Card Image"},a.profileImageStyle={backgroundImage:"url(https://mobirise.com/extensions/realtym4/assets/images/face4.jpg)",backgroundSize:"cover",backgroundPosition:"center",minHeight:"100px"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"cardSpace",value:function(){return r.a.createElement(h.a,{className:"mt-4"},r.a.createElement(w,{card:this.card}),r.a.createElement(w,{card:this.card}),r.a.createElement(w,{card:this.card}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{id:"heading",className:"text-center mt-4"},r.a.createElement("h1",null,"My Profile")),r.a.createElement(p.a,null,r.a.createElement(h.a,{className:"mt-3"},r.a.createElement(v.a,{mb:"4",className:"shadow d-flex flex-md-row"},r.a.createElement(b.a,{className:"bg-secondary text-light",src:"https://mobirise.com/extensions/realtym4/assets/images/face4.jpg",alt:"https://mobirise.com/extensions/realtym4/assets/images/face4.jpg"}),r.a.createElement(y.a,null,r.a.createElement(N.a,null,r.a.createElement("h2",{className:"text-primary mt-2"},this.user.firstName," ",this.user.lastName),r.a.createElement("h4",{className:"text-secondary my-2"},this.user.occupation),r.a.createElement("p",{className:"text-secondary mt-3"},this.user.description)))))),r.a.createElement(p.a,{id:"content",className:"mt-3"},r.a.createElement("h2",null," My Offers"),this.cardSpace(),r.a.createElement("hr",{className:"mt-5 mb-5"}),r.a.createElement("h2",null," Courses history"),this.cardSpace()))}}]),t}(n.Component),$=function(){function e(){var t=this;Object(c.a)(this,e),this.createoffer=function(e,a,n,r,s){return t.service.post("/create",{offername:e,offertype:a,offerdescription:n,imageUrl:r,loggedInUser:s}).then(function(e){return e.data})};var a=C.a.create({baseURL:"http://localhost:5000/api/offers",withCredentials:!0});this.service=a}return Object(o.a)(e,[{key:"handleUpload",value:function(e){return this.service.post("/imageupload",e).then(function(e){return e.data}).catch(function(e){throw e})}},{key:"getOfferDetail",value:function(e){return this.service.get("/".concat(e)).then(function(e){return e.data}).catch(function(e){return console.log(e)})}}]),e}(),K=a(103),Q=a(104),X=a(105),Z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.offername,r=t.offertype,s=t.offerdescription,l=t.imageUrl,c=a.props.userInSession;a.service.createoffer(n,r,s,l,c).then(function(e){a.setState({offername:"",offertype:"",offerdescription:"",imageUrl:void 0})}).catch(function(e){console.log(e.response),a.setState({errorMessage:e.response.data.message}),console.log(e)})},a.handleFileUpload=function(e){console.log("The file to be uploaded is: ",e.target.files[0]);var t=new FormData;t.append("imageUrl",e.target.files[0]),a.service.handleUpload(t).then(function(e){a.setState({imageUrl:e.secure_url}),console.log(a.state)}).catch(function(e){console.log("Error while uploading the file: ",e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(J.a)({},n,r))},a.state={offername:"",offertype:"",offerdescription:"",imageUrl:void 0},a.service=new $,console.log(a.props),console.log(a.state),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{className:"m-5"},r.a.createElement("h2",{className:"text-center"},"Create a new offer"),r.a.createElement("p",null,"your selection > here add component to search courses from udemy that you want to create an offer for"),r.a.createElement(R.a,{onSubmit:this.handleFormSubmit},r.a.createElement(K.a,{row:!0},r.a.createElement(Q.a,{for:"offerName",sm:2},"Title of your offer"),r.a.createElement(E.a,{sm:10},r.a.createElement(F.a,{onChange:this.handleChange,value:this.state.offername,type:"text",name:"offername",id:"offerName",placeholder:"Title of your offer"}))),r.a.createElement(K.a,{row:!0},r.a.createElement(Q.a,{for:"offerType",sm:2},"Type of offer"),r.a.createElement(E.a,{sm:10},r.a.createElement(F.a,{onChange:this.handleChange,type:"select",name:"offertype",id:"offerType",value:this.state.offertype}," ",r.a.createElement("option",null,"Please select")," />",r.a.createElement("option",{value:"Private Lesson"},"Private lesson")," />",r.a.createElement("option",{value:"Study Group"},"Study group")))),r.a.createElement(K.a,null,r.a.createElement(Q.a,{for:"exampleSelect"},"Select")),r.a.createElement(K.a,{row:!0},r.a.createElement(Q.a,{for:"offerDescription",sm:2},"Your offer in a nutshell"),r.a.createElement(E.a,{sm:10},r.a.createElement(F.a,{onChange:this.handleChange,value:this.state.offerdescription,type:"textarea",name:"offerdescription",id:"offerDescription"}))),r.a.createElement(K.a,{row:!0},r.a.createElement(Q.a,{for:"exampleFile",sm:2},"File"),r.a.createElement(E.a,{sm:10},r.a.createElement(F.a,{onChange:this.handleFileUpload,type:"file",name:"file",id:"exampleFile"}),r.a.createElement(X.a,{color:"muted"},"This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line."))),r.a.createElement(K.a,{check:!0,row:!0},r.a.createElement(E.a,{className:"text-center"},r.a.createElement(f.a,{type:"submit",outline:!0,color:"primary"},"Publish your offer")))))}}]),t}(n.Component),ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={theOffer:{}},a.service=new $,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getOfferDetails",value:function(e){var t=this;this.service.getOfferDetail(e).then(function(e){t.setState({theOffer:e})}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){var e=this.props.match.params;this.getOfferDetails(e.id)}},{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(h.a,{className:"mt-3"},r.a.createElement(v.a,{mb:"4",className:"shadow w-100"},r.a.createElement(b.a,{className:"bg-secondary text-light mx-auto my-1",src:this.state.theOffer.courseImage,alt:this.state.theOffer.courseImage,style:{height:"25vh",maxWidth:"50vh"}}),r.a.createElement(y.a,null,r.a.createElement(N.a,null,r.a.createElement("h2",{className:"text-primary my-4"},this.state.theOffer.courseTitle),r.a.createElement("h5",{className:"my-2"},this.state.theOffer.courseType),r.a.createElement("h5",null,"Trainer: ",this.state.theOffer.ownerProfileLink&&r.a.createElement(g.a,{to:this.state.theOffer.ownerProfileLink},this.state.theOffer.courseOwner)),r.a.createElement("h5",{className:"mt-4"},"Description:"),r.a.createElement("p",{className:"mt-2"},this.state.theOffer.courseDetails),r.a.createElement("h5",{className:"mt-4"},"Location:"),r.a.createElement("p",null,this.state.theOffer.location)),r.a.createElement("div",{className:"text-center"},r.a.createElement(f.a,{primary:!0,className:"w-25 mt-3"},"Join this Course")))))))}}]),t}(n.Component),te=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).setTheUser=function(e){a.setState({loggedInUser:e})},a.state={loggedInUser:null},a.service=new A,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),r.a.createElement("div",{className:"App"},r.a.createElement(q,{userInSession:this.state.loggedInUser,setUser:this.setTheUser}),r.a.createElement(_.a,null,r.a.createElement(B.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(Y,{setUser:e.setTheUser})}}),r.a.createElement(B.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(H,{setUser:e.setTheUser})}}),r.a.createElement(B.a,{exact:!0,path:"/dashboard",render:function(){return r.a.createElement(G,null)}}),r.a.createElement(B.a,{exact:!0,path:"/createoffer",render:function(){return r.a.createElement(Z,{userInSession:e.state.loggedInUser})}}),r.a.createElement(B.a,{exact:!0,path:"/profile",render:function(){return r.a.createElement(V,null)}}),r.a.createElement(B.a,{exact:!0,path:"/OfferDetail/:id",component:ee}),r.a.createElement(B.a,{exact:!0,path:"/",component:x})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=a(106);a(81);l.a.render(r.a.createElement(ae.a,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.66938d5d.chunk.js.map