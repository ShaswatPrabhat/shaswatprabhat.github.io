(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[2],{107:function(e,t,a){"use strict";a.r(t);var n,i,o,r,c,s,d,l,h,u,p,m,b,f,g,j,x,y,O,w,k=a(0),v=a.n(k),S=a(85),A=a.n(S),I=(a(96),a(97),a(33)),P=a(6),T=a(110),W=a(113),C=a(16),H=a(86),M=a.n(H),z=a(4),F=a(5),B="320px",D="375px",L="425px",N="768px",Y="1024px",R="1440px",E="2560px",G=function(e){return{mobileS:"(".concat(e,"-width: ").concat(B,")"),mobileM:"(".concat(e,"-width: ").concat(D,")"),mobileL:"(".concat(e,"-width: ").concat(L,")"),tablet:"(".concat(e,"-width: ").concat(N,")"),laptop:"(".concat(e,"-width: ").concat(Y,")"),laptopL:"(".concat(e,"-width: ").concat(R,")"),desktop:"(".concat(e,"-width: ").concat(E,")"),desktopL:"(".concat(e,"-width: ").concat(E,")")}},J=F.a.div(n||(n=Object(z.a)(["\n  padding: 20px;\n  position: fixed;\n  z-index: 100;\n  width: 15%;\n"]))),V=F.a.div(i||(i=Object(z.a)(["\n  z-index: 100;\n  position: fixed;\n  margin-top: 20px;\n  margin-left: 20px;\n  @media "," {\n    bottom: 0;\n    right: 0;\n    margin-right: 30px;\n    margin-bottom: 60px;\n  }\n"])),G("max").tablet),q=F.a.nav(o||(o=Object(z.a)(["\n  z-index: 50;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  opacity: 1;\n  background: #000;\n  transform: ",";\n  height: 100vh;\n  text-align: left;\n  padding: 2rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.3s ease-in-out;\n\n  @media "," {\n    transform: ",";\n  }\n"])),(function(e){return e.open?"translateX(0%)":"translateX(-100%)"}),G("max").tablet,(function(e){return e.open?"translateZ(-100)":"translateZ(50)"})),K=a(112),U=F.a.div(r||(r=Object(z.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n  z-index: 99;\n"]))),X=F.a.header(c||(c=Object(z.a)(["\n  min-height: 10vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n"]))),Z=F.a.header(s||(s=Object(z.a)(["\n  min-height: 10vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),Q=Object(F.a)(Object(K.a)(I.b))(d||(d=Object(z.a)(["\n  font-size: 2rem;\n  padding: 2rem 0;\n  letter-spacing: 0.5rem;\n  color: #61dafb;\n  text-decoration: none;\n  transition: color 0.3s linear;\n\n  @media (max-width: 576px) {\n    font-size: 1.5rem;\n    text-align: center;\n  }\n"]))),$=Object(F.a)(Object(K.a)(I.b))(l||(l=Object(z.a)(["\n  font-size: 3rem;\n  padding: 2rem 0;\n  letter-spacing: 0.3rem;\n  color: #fcfbf7;\n  text-decoration: none;\n  transition: color 0.3s linear;\n\n  @media (max-width: 576px) {\n    font-size: 1.5rem;\n    text-align: center;\n  }\n"]))),_=a(2),ee={opened:{scale:1,transition:{delay:.2,duration:.5}},closed:{scale:.8}},te=function(e){var t=e.burgerContents,a=Object(k.useState)(!1),n=Object(C.a)(a,2),i=n[0],o=n[1];return Object(_.jsxs)(J,{children:[Object(_.jsx)(V,{children:Object(_.jsx)(M.a,{className:"hamburgerMenu",animationDuration:.3,isOpen:i,menuClicked:function(){o((function(e){return!e}))},rotate:0,color:"#61dafb"})}),Object(_.jsx)(q,{open:i,children:t.map((function(e){var t=e.link,a=e.title;return Object(_.jsx)(Q,{variants:ee,animate:i?"opened":"closed",to:t,onClick:function(){o(!1)},children:a})}))})]})},ae="/",ne="/poems",ie="/hbdpnoki",oe=Object(F.a)(K.a.div)(h||(h=Object(z.a)(["\n  align-self: center;\n  flex: 0.1;\n  width: 80%;\n"]))),re=function(){return Promise.all([a.e(1),a.e(0)]).then(a.bind(null,115)).then((function(e){return e.default}))},ce=[{link:ae,title:"Programming"},{link:ae,title:"Books"},{link:ne,title:"Poems"}],se=function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsxs)(T.a,{features:re,children:[Object(_.jsx)(te,{burgerContents:ce}),Object(_.jsx)(X,{children:Object(_.jsx)(Q,{to:ae,children:"Shaswat's blog"})}),Object(_.jsx)(U,{children:Object(_.jsx)(W.a,{children:Object(_.jsxs)(oe,{initial:{scale:.85},animate:{scale:1},transition:{type:"spring",duration:1.8,bounce:.7},children:[Object(_.jsx)("h2",{children:"Welcome to my blog!"}),Object(_.jsx)("p",{children:"Here I will share my musings and general Shaswat stuff"})]})})})]})})},de=a(91),le=a.n(de),he=a(64),ue={initial:{scale:.7,opacity:.7},animate:{scale:1,opacity:1},transition:{type:"spring",duration:2}},pe=function(){return Object(_.jsx)(Z,{children:Object(_.jsx)($,Object(he.a)(Object(he.a)({to:ie},ue),{},{children:"Happy Birthday Pnoki!!"}))})},me=Object(F.a)(K.a.div)(u||(u=Object(z.a)(["\n  background: #0f0c29;\n  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);\n  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);\n"]))),be=Object(F.a)(K.a.p)(p||(p=Object(z.a)(["\n  color: #faf5e3;\n  letter-spacing: 2px;\n"]))),fe=Object(F.a)(K.a.p)(m||(m=Object(z.a)(["\n  color: #faf5e3;\n  letter-spacing: 0.3px;\n  font-size: 2vh;\n"]))),ge=Object(F.a)(K.a.p)(b||(b=Object(z.a)(["\n  color: #faf1d2;\n  font-weight: bold;\n"]))),je=Object(F.a)(K.a.h2)(f||(f=Object(z.a)(["\n  color: #f7ebc1;\n  font-family: 'Quintessential', cursive;\n  line-height: 120%;\n"]))),xe=(Object(F.a)(K.a.div)(g||(g=Object(z.a)(["\n  align-self: center;\n  flex: 0.1;\n  width: 50%;\n  height: 50%;\n"]))),F.a.div(j||(j=Object(z.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n  z-index: 99;\n  flex: 1;\n"])))),ye=Object(F.a)(K.a.div)(x||(x=Object(z.a)(["\n  z-index: 99;\n  max-width: 40%;\n  max-height: 500px;\n  flex-shrink: 100;\n  border-radius: 5%;\n  opacity: 0;\n  margin-top: -10vh;\n  padding-top: 2vh;\n  padding-bottom: 2vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: #d3cce3;\n  background: -webkit-linear-gradient(to right, #e9e4f0, #d3cce3);\n  background: linear-gradient(to right, #e9e4f0, #d3cce3);\n  @media "," {\n    max-width: 90%;\n    min-height: 300px;\n  }\n"])),G("max").tablet),Oe=Object(F.a)(K.a.div)(y||(y=Object(z.a)(["\n  width: 50vh;\n  height: 50vh;\n  border-radius: 5%;\n  opacity: 0;\n  margin-top: -10vh;\n  padding: 2vh;\n  background: #d3cce3;\n  background: -webkit-linear-gradient(to right, #e9e4f0, #d3cce3);\n  background: linear-gradient(to right, #e9e4f0, #d3cce3);\n  @media "," {\n    width: 80%;\n    height: 80%;\n  }\n"])),G("max").tablet),we=Object(F.a)(K.a.div)(O||(O=Object(z.a)(["\n  z-index: 80;\n  color: #5035ad;\n  opacity: 1;\n  align-self: center;\n  font-size: 100px;\n\n  @media "," {\n    font-size: 50px;\n    width: 10%;\n  }\n"])),G("max").tablet),ke=Object(F.a)(K.a.div)(w||(w=Object(z.a)(["\n  z-index: 80;\n  color: #5035ad;\n  opacity: 1;\n  align-self: center;\n  font-size: 100px;\n  @media "," {\n    font-size: 50px;\n    width: 10%;\n  }\n"])),G("max").tablet),ve=a(37),Se=a(59),Ae=a(114),Ie={opacity:1,scale:1.2,transition:{type:"spring",duration:2,delay:1}},Pe={opacity:0,scale:.7,transition:{type:"spring",mass:50}},Te=function(e){var t=e.onAnimationsComplete,a=Object(k.useState)(!1),n=Object(C.a)(a,2),i=n[0],o=n[1],r=Object(Ae.a)(),c=Object(Ae.a)(),s=Object(Ae.a)(),d=Object(Ae.a)();return Object(k.useEffect)((function(){var e=function(){var e=Object(Se.a)(Object(ve.a)().mark((function e(){return Object(ve.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.start(Ie);case 2:return e.next=4,c.start(Ie);case 4:return e.next=6,s.start(Ie);case 6:return e.next=8,d.start(Ie);case 8:o(!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(i){var a=function(){var e=Object(Se.a)(Object(ve.a)().mark((function e(){return Object(ve.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.start(Pe);case 2:return e.next=4,c.start(Pe);case 4:return e.next=6,s.start(Pe);case 6:return e.next=8,d.start(Pe);case 8:setTimeout((function(){t()}),500);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();setTimeout((function(){a()}),3e3)}setTimeout((function(){e()}),1e3)}),[r,c,s,d,i,t]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(K.a.div,{animate:r,style:{opacity:0},children:Object(_.jsxs)(be,{children:["\ud83d\udc4b Guess which of my favorite ",Object(_.jsx)("br",{}),"humans was born today ?"]})},"bodyLine1"),Object(_.jsx)(K.a.div,{animate:c,style:{opacity:0},children:Object(_.jsx)(ge,{children:"Hint: It's you! \ud83d\udc4a\ud83d\udc4a"})},"bodyLine2"),Object(_.jsx)(K.a.div,{animate:s,style:{opacity:0},children:Object(_.jsxs)(je,{children:["Pankhudi ",Object(_.jsx)("br",{}),"'Hegda Bhushi'",Object(_.jsx)("br",{})," Bhonsle"]})},"bodyLine3"),Object(_.jsx)(K.a.div,{animate:d,style:{opacity:0},children:Object(_.jsxs)(fe,{children:["I had to! \ud83d\ude08\ud83d\ude08 ",Object(_.jsx)("br",{}),"Sorry"]})},"bodyLine4")]})},We=function(e){var t=e.delay,a=e.children,n=e.fontWeight,i=e.fontSize;return Object(_.jsx)(K.a.p,{style:{color:"black",alignSelf:"center",opacity:0,fontWeight:n||100,fontSize:i||"80%"},animate:{opacity:1},transition:{type:"spring",duration:1,delay:t},children:a})},Ce=function(e){var t=e.onAnimationsComplete,a="Press me to eat some fragile male egos for breakfast!",n=Object(k.useState)(!1),i=Object(C.a)(n,2),o=i[0],r=i[1],c=Object(k.useState)(a),s=Object(C.a)(c,2),d=s[0],l=s[1];return Object(k.useEffect)((function(){setTimeout((function(){r(!0)}),2e4)}),[]),Object(_.jsxs)(Oe,{animate:{rotate:360,opacity:1},transition:{type:"spring",duration:5,bounce:.4,delay:1},children:[Object(_.jsx)(We,{delay:6,fontWeight:500,fontSize:"100%",children:"\ud83d\udc47Here are some facts to remind you why you are so awesome! \ud83d\udc47"}),!o&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(We,{delay:7,children:"\ud83d\ude0d You care for everyone"}),Object(_.jsx)(We,{delay:8,children:"\ud83e\udd0c You are an awesome barber"}),Object(_.jsx)(We,{delay:9,children:"\ud83c\udf70\ud83c\udfcb\ufe0f\u200d\u2640\ufe0f You are passionate about life and coding and food and..."}),Object(_.jsxs)(We,{delay:13,children:["Me telling no you awesome!!",Object(_.jsx)("br",{})," Believe it!",Object(_.jsx)("br",{}),"\ud83d\udc4a \ud83e\udd1b \ud83e\udd1c"]})]}),o&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(We,{delay:null,children:"but for me..."}),Object(_.jsxs)(We,{delay:7,children:["You are my best friend \ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc68 ",Object(_.jsx)("br",{}),"and the best human being I know \ud83d\udcaf ",Object(_.jsx)("br",{}),"and you inspire me to be better \ud83c\udfc3"]}),Object(_.jsxs)(We,{delay:15,children:["Hence proven!",Object(_.jsx)("br",{}),Object(_.jsx)(K.a.button,{style:{marginTop:"10%",padding:"2%",borderRadius:"3vh",flexGrow:1,maxWidth:"50%",backgroundColor:"white",borderStyle:"none",border:"0.5px solid black",boxShadow:"rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0",boxSizing:"border-box",fontSize:"1.5vh"},whileHover:{scale:1.1},whileTap:{scale:.9},onClick:function(){d===a?l("Nah! You do that everyday, Press to watch some aesthetic memories of yourself"):t()},type:"button",children:d})]})]})]})},He=a(111),Me=a.p+"static/media/dompiBus.8204388b.jpg",ze=a.p+"static/media/dompiDoughnut.b620784f.jpg",Fe=a.p+"static/media/dompiWithAnku.a1d17878.jpg",Be=a.p+"static/media/dompiChopsticks.9510a45f.jpg",De=a.p+"static/media/dompiWithPaaAnxious.3280e005.jpg",Le=a.p+"static/media/dompiWithPaaSpicy.afa328fc.jpg",Ne=a.p+"static/media/dompiEagerToTell.37e626c3.jpg",Ye=a.p+"static/media/dompiAtRajdhaniMumbai.50c3968f.jpg",Re=a.p+"static/media/dompiGameNight.78511b35.jpg",Ee=a.p+"static/media/dompiFeedback.cfc8c4d7.jpg",Ge=a.p+"static/media/dompi8thShop.47cd26a8.jpg",Je=a.p+"static/media/dompiWithAnkuMeInBackground.dda2b7a6.jpg",Ve=a.p+"static/media/dompiHWD.582439c5.jpeg",qe=a.p+"static/media/dompiAvengers.8b8faef2.jpg",Ke=a.p+"static/media/dompiHaeHaeWoman.b5e92ced.jpg",Ue=a.p+"static/media/dompiKudi.e6074dd8.jpg",Xe=a.p+"static/media/dompiJhumar.5b6d6899.jpg",Ze=a.p+"static/media/dompiAfterJhumar.26268b8a.jpg",Qe=a.p+"static/media/dompiEndorphins.e5919661.jpg",$e=a.p+"static/media/dompiTitleWaveFlower.5727734b.gif",_e=a.p+"static/media/dompiSunkissed.371977b8.jpg",et=a.p+"static/media/dompiSunKissed2.1d9d6178.jpg",tt=[{url:Fe,text:"Chronologically, the oldest picture I have...With Anku, your earliest friend since childhood times at Lodha."},{url:Be,text:"At Fatty Bao? I guess. I can never be sure of it. Just look at that happiness! Do you miss those Baos? "},{url:De,text:"With Paaa, always anxious about food. And restaurants. And cuisine. And RAS. And Anku. And her returning from Ranchi. And forgetting about it. And eating guiltily after forgetting"},{url:Le,text:"If one picture could sum up that night! We realized the importance of jet sprays. #SpicyNoodles"},{url:Ne,text:'"Wo dekha qya? Uske plate mein \u0915\u0947\u0915\u0921\u093c\u093e tha! Zinda wo bhi! Aee Aadi chal na \u0915\u0947\u0915\u0921\u093c\u093e khate hain"'},{url:Ye,text:'"Now I am content! Won\'t you order something? What do you mean we are sharing the same plate?"'},{url:Re,text:'"aaaand I win... again! No no I am playing this for the first time. What do you mean you are a pro? So, who is next? Who are up to play a round of Catan? "'},{url:Ee,text:"Always good at giving Feedbacks Dompi Kumar Bhonsle."},{url:Ge,text:'"Smiling in front of a physical manifestation of my birthday. I will buy this shop one day. And the Scooty. And the folks woking there!"'},{url:Je,text:"An entirely innocent person in between two wild creatures. Find yourself someone who looks at you the way pNoki looks at Anku."},{url:Ve,text:"This picture is a mood."},{url:qe,text:"Our friendly avengers from project!"},{url:Ke,text:"HaeHaeMon - the Pokemon that makes HaeHae noises"},{url:Ue,text:"Ikkk kudi jida na Mohabbat "},{url:Xe,text:"Me when I get my salary and have a Jhumar in my life"},{url:Ze,text:"Me after I have spent all my salary buying more Jhumars"},{url:Qe,text:"When we used to run to get those Endorphins instead of doom-scrolling Instagram"},{url:$e,text:"Used to be so fun dragging you to Title Waves, Or when you refused to go there on my birthday! #neverForget"},{url:_e,text:"The unofficial photographer of Mumbai evenings for a certain model like poser. Still asking for my payment! #StopExplotingFreelancers"},{url:a.p+"static/media/dompiCheckingOnThePhotographer.3b2afa4e.jpg",text:'"Wake up! We have just taken 967 pic today evening. Buckle up!"'},{url:a.p+"static/media/dompiSunKissedCollage.3627f0af.jpg",text:"The best phone ever! The best collages ever. No! It wasn't the Photos app! It was my phone! Still the best phone ever."},{url:a.p+"static/media/dompiEatingBun.e1e32fb9.jpg",text:"If I was paid one rupee for every food picture I have of you I would have exactly 2 rupees because you would take the rest to buy more food!"},{url:a.p+"static/media/dompiSalmanRush.c16aae23.jpg",text:"My FAV human with my FAV author at my FAV spot in my FAV residence of my FAV city. #missYouMumbai  "},{url:a.p+"static/media/dompiBookShelfAnimation.86a9e630.gif",text:'"Main hoon hi khud ki favorite!"'},{url:a.p+"static/media/dompiDoingHaeInRain.1448a550.jpg",text:"the Romantic, melancholic and often sneezy relation between Pnoki and Mumbai Rains"},{url:a.p+"static/media/dompiPosingInRain.cee897c1.jpg",text:"\u266a\u266a\u266a Uff! Teri Ada! I like the way you move...\u266a\u266a\u266a"},{url:a.p+"static/media/dompiFinallyOneCandidPhoto.83ed4657.jpg",text:"Ahh! Finally a candid photo. Or is it the calm before the Storm? #neverTooSafe"},{url:a.p+"static/media/dompiAngry1.b82bfc6f.jpg",text:'"What do you mean I will never be 25 years old again? I am always 25, forever 25. You, you are the oldie!"'},{url:a.p+"static/media/dompiA7X.c6feaaf0.jpg",text:"This was my first Metal T-Shirt. \nIt used to be mine. Now it is not. How does it look better on you?"},{url:a.p+"static/media/dompiTwerkShoot.48a8051b.jpg",text:"Dancing Pnoki is the 23rd best version of Pnoki. Twerk it! Twerk it! Twerk it....! "},{url:a.p+"static/media/dompiAfterVaccinationPaudha.c7b518d7.jpg",text:'"After getting first dose of vaccine, among my Paudha friends. I love Paudhas. Paudha is one of my favorite words."'},{url:et,text:"Look at that smile! So innocent, so pure, thinking about food aren't we ? You can tell me. I swear I will not make a slide with that information"},{url:a.p+"static/media/dompiBirthdayCollage.a7679c70.jpg",text:"Last birthday! Mumbai, Trauma, Covid, Cakes, Shoot! How time flies!"},{url:a.p+"static/media/dompiBirthdayShoot.b7a07ed1.gif",text:'"Such a beautiful Sunset! What do you mean it looked the same yesterday? Yesterday wasn\'t my birthday! Huh! Chal photu kheech photu..."'},{url:a.p+"static/media/dompiReadingDharmaForest.f48c3c94.jpg",text:'"Yeah! Draupadi was the queen! Who is DrishtaDaupna by the way? How can Bheem eat so much without farting? So Mahabharata, Very wow"'},{url:a.p+"static/media/dompiEatFrag.d8fe2889.jpg",text:"Huntress on the prowl! Each day! Every day! Lots of fragile male egos! Never go hungry #eatThemRaw"},{url:a.p+"static/media/dompiHairCutting.6bce4e27.jpg",text:"I might not have told this at the time but I was scared Pnoki might cut off one of my ears, Thankfully all three survived. Good old days."},{url:a.p+"static/media/dompiDoingHaaaaah.cdcd1713.jpg",text:"Is this how the T-Rex in Jurassic Park might have felt? Is the T-Rex your idol, apart from Su4ita and me ?"},{url:a.p+"static/media/dompiBubbleGum.4cf0cd3f.jpg",text:'"Yeah and just like that plop! I burst your bubble! Your Golang skills suck!!!"'},{url:a.p+"static/media/dompiWithPaaInMumbai.f168ca82.jpg",text:"My 2 FAV Human beings coming out of their depressive states for a few days was such a breath of fresh air. To rising above pain."},{url:a.p+"static/media/dompiPullingPaa.2bf8f1c0.jpg",text:'"Arrey Pankhu mere gardan mein dard hai." "Arrey dikha toh kidhar hai dard" '},{url:a.p+"static/media/dompiMakingList.c7b9916f.jpg",text:"Making lists is one of her favorite things. Here we are just after flat hunting. Often making lists about making lists!"},{url:a.p+"static/media/dompiCurdCheek.529a38be.jpg",text:'"You mean there is curd on my face around an area where my tongue cannot reach ? Are you sure ? Are you absolutely sure? Look me in the eyes when I am talking with you!"'},{url:a.p+"static/media/dompiMakingMala.a47ce4c4.jpg",text:"Apart from being skilled in arts, coding and finance Dompi is also a good gardener and costume designer."},{url:a.p+"static/media/dompiWithMe.d3d223e5.jpg",text:"The two of us! My love, my heart, my soul, my all"},{url:a.p+"static/media/dompiLookingFine.614dff42.jpg",text:"Beautiful Dompi, pretty effortlessly, show-off with a looootttt of effort"},{url:a.p+"static/media/dompiLaughingAtMGRoad.57ee3a8f.jpg",text:"I survived shopping with Dompi, This is her being happiest ever! We did not buy the dress though, because the reason of her happiness was me, of course. (Gingerly walking away from the shop)"},{url:a.p+"static/media/dompiAndMeTrekking.c11249bb.jpg",text:"Me and Dompi decided to go trekking till Uttarakhand. That day we embarked on an epic journey. Returned from a hill near Pune the same day, the trip was epic though"},{url:a.p+"static/media/dompiCycle.67d1b5c5.jpg",text:'"Hurry up we need to chase that car ASAP!" "But where am I going to sit?" "Who said anything about sitting? You are running behind my cycle. "'},{url:a.p+"static/media/dompiCallNotAnswered.027494bb.jpg",text:"TrueCaller is hunting for this photo! Also this face haunts Paaaaaaa's dreams till date. Sometimes even mine!"},{url:a.p+"static/media/dompiWithPaaa.096ce30f.jpg",text:"Look at these beautiful innocent faces! Yeah I fell for the same trap. #GhochuBachhe #LifeBlood"},{url:a.p+"static/media/dompiEmoji.b10eca60.jpg",text:"Yeah! So ummm this is hard to explain. If you know the emoji you know this face. If you don't then... how are you even alive ?"},{url:Me,text:"Here we see a Dompi in her natural habitat. Travelling, carefree and wearing a Noice T-Shirt. "},{url:a.p+"static/media/dompiGoaSunny.777fd13a.jpg",text:"Goa was chapters ending in our lives. Yet the sun never felt this good having my folks around. Sand Sun Pnoki. The old gang and new endings."},{url:a.p+"static/media/dompiPhoenix.fb95df3f.jpg",text:"We found a doll dressed just like Pnoki, as if someone had copied Pnoki and placed it there. It might have been the opposite but we refuse to believe that."},{url:a.p+"static/media/dompiSpreadingHappiness.7854cb13.jpg",text:"After CoVid, the only thing we were happy spreading was happiness. A fountain of Joy and thirsty travellers."},{url:ze,text:"Dompi is eating a doughnut. Dompi being a foodie has led me to explore so many new cuisines and food. Dompi has finished the doughnut"}],at={enter:function(e){return{x:e>0?1e3:-1e3,opacity:0}},center:{zIndex:99,x:0,opacity:1}},nt=function(){var e=Object(k.useState)([0,0]),t=Object(C.a)(e,2),a=Object(C.a)(t[0],2),n=a[0],i=a[1],o=t[1],r=Object(He.a)(0,tt.length,n),c=function(e){o([n+e,e])};return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(ye,{animate:{opacity:1},transition:{type:"ease-in",duration:1.5,delay:1},children:[Object(_.jsx)(we,{className:"next",onClick:function(){return c(-1)},whileHover:{scale:1.2},whileTap:{scale:.9},children:"\u2039"}),Object(_.jsx)(K.a.img,{src:tt[r].url,custom:i,variants:at,initial:"enter",animate:"center",loading:"eager",fetchpriority:"high",transition:{x:{type:"spring",stiffness:100,damping:30},opacity:{duration:.2}},style:{maxWidth:"40%"}},n),Object(_.jsx)(K.a.p,{style:{maxWidth:"40%",opacity:0,color:"black",alignSelf:"center",padding:"1vh"},animate:{opacity:1},transition:{opacity:{type:"spring",duration:2,delay:.5}},children:tt[r].text},tt[r].text),Object(_.jsx)(ke,{className:"prev",onClick:function(){return c(1)},whileHover:{scale:1.2},whileTap:{scale:.9},children:"\u203a"})]})})},it=function(){return Promise.all([a.e(1),a.e(0)]).then(a.bind(null,115)).then((function(e){return e.default}))},ot=function(){var e=Object(k.useState)(0),t=Object(C.a)(e,2),a=t[0],n=t[1];return Object(k.useEffect)((function(){return document.querySelector('meta[name="description"]').setAttribute("content","Happy Birthday Pnoki!!"),document.querySelector("title").textContent="Happy Birthday Pnoki!!",function(){document.querySelector('meta[name="description"]').setAttribute("content","Shaswat's blog"),document.querySelector("title").textContent="Shaswat's blog"}}),[]),Object(_.jsx)(me,{className:"HbdPnoki",children:Object(_.jsxs)(T.a,{features:it,children:[Object(_.jsx)(le.a,{}),Object(_.jsx)(pe,{}),Object(_.jsx)(xe,{children:Object(_.jsxs)(W.a,{children:[0===a&&Object(_.jsx)(Te,{onAnimationsComplete:function(){n(1)}}),1===a&&Object(_.jsx)(Ce,{onAnimationsComplete:function(){n(2)}}),2===a&&Object(_.jsx)(nt,{})]})})]})})},rt=function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(I.a,{basename:ae,children:Object(_.jsxs)(P.c,{children:[Object(_.jsx)(P.a,{exact:!0,path:ae,component:se}),Object(_.jsx)(P.a,{exact:!0,path:ne,component:se}),Object(_.jsx)(P.a,{exact:!0,path:ie,component:ot})]})})})},ct=function(e){e&&e instanceof Function&&a.e(5).then(a.bind(null,116)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),o(e),r(e)}))};A.a.render(Object(_.jsx)(v.a.StrictMode,{children:Object(_.jsx)(rt,{})}),document.getElementById("root")),ct()},96:function(e,t,a){},97:function(e,t,a){}},[[107,3,4]]]);
//# sourceMappingURL=main.5c436ba5.chunk.js.map