var icon = ["fab_fa-500px","fab_fa-accessible-icon","fab_fa-accusoft","fas_fa-address-book","far_fa-address-book","fas_fa-address-card","far_fa-address-card","fas_fa-adjust","fab_fa-adn","fab_fa-adversal","fab_fa-affiliatetheme","fab_fa-algolia","fas_fa-align-center","fas_fa-align-justify","fas_fa-align-left","fas_fa-align-right","fas_fa-allergies","fab_fa-amazon","fab_fa-amazon-pay","fas_fa-ambulance","fas_fa-american-sign-language-interpreting","fab_fa-amilia","fas_fa-anchor","fab_fa-android","fab_fa-angellist","fas_fa-angle-double-down","fas_fa-angle-double-left","fas_fa-angle-double-right","fas_fa-angle-double-up","fas_fa-angle-down","fas_fa-angle-left","fas_fa-angle-right","fas_fa-angle-up","fab_fa-angrycreative","fab_fa-angular","fab_fa-app-store","fab_fa-app-store-ios","fab_fa-apper","fab_fa-apple","fab_fa-apple-pay","fas_fa-archive","fas_fa-arrow-alt-circle-down","far_fa-arrow-alt-circle-down","fas_fa-arrow-alt-circle-left","far_fa-arrow-alt-circle-left","fas_fa-arrow-alt-circle-right","far_fa-arrow-alt-circle-right","fas_fa-arrow-alt-circle-up","far_fa-arrow-alt-circle-up","fas_fa-arrow-circle-down","fas_fa-arrow-circle-left","fas_fa-arrow-circle-right","fas_fa-arrow-circle-up","fas_fa-arrow-down","fas_fa-arrow-left","fas_fa-arrow-right","fas_fa-arrow-up","fas_fa-arrows-alt","fas_fa-arrows-alt-h","fas_fa-arrows-alt-v","fas_fa-assistive-listening-systems","fas_fa-asterisk","fab_fa-asymmetrik","fas_fa-at","fab_fa-audible","fas_fa-audio-description","fab_fa-autoprefixer","fab_fa-avianex","fab_fa-aviato","fab_fa-aws","fas_fa-backward","fas_fa-balance-scale","fas_fa-ban","fas_fa-band-aid","fab_fa-bandcamp","fas_fa-barcode","fas_fa-bars","fas_fa-baseball-ball","fas_fa-basketball-ball","fas_fa-bath","fas_fa-battery-empty","fas_fa-battery-full","fas_fa-battery-half","fas_fa-battery-quarter","fas_fa-battery-three-quarters","fas_fa-bed","fas_fa-beer","fab_fa-behance","fab_fa-behance-square","fas_fa-bell","far_fa-bell","fas_fa-bell-slash","far_fa-bell-slash","fas_fa-bicycle","fab_fa-bimobject","fas_fa-binoculars","fas_fa-birthday-cake","fab_fa-bitbucket","fab_fa-bitcoin"];
      
    init();
    var pickSymbol;
    function init(){
        pickSymbol = Math.floor(Math.random()*10);
        document.querySelector("#findItElement").style.display = "none";
        var par = document.querySelector("#displayElements");
        for( var i=0; i< 100; i++ ){
            var ediv = document.createElement("div");
            var iele = document.createElement("i");
            console.log(icon[pickSymbol].split("_"));
            var cl = ((i+1) % pickSymbol == 0) ? icon[pickSymbol].split("_") : icon[Math.floor(Math.random()*95)].split("_");
            iele.classList.add("node", cl[0], cl[1]);
            ediv.classList.add("elements");
            ediv.appendChild(iele);
            ediv.appendChild(document.createTextNode(i+1));
            par.appendChild(ediv);
        }
        
        var ele1 = Math.floor(Math.random()*1000);
        
        var cont = "Sum both digits of your number and multiply by sum of ( "+ele1+","+(pickSymbol-ele1)+" ), remember the symbol of the product, ready ?"
        document.querySelector("#playId").style.display = "none";
        document.querySelector("#findId").style.display = "block";
        document.querySelector("#rules").textContent = cont;
    }

   
    document.querySelector("#playId").addEventListener("click", function(e){
        document.querySelector("#displayElements").textContent="";
        init();
    });

    
    document.querySelector("#findId").addEventListener("click", function(e){
        document.querySelector("#findItElement").textContent="";
        document.querySelector("#findItElement").style.display = "block";
        var cl = icon[pickSymbol].split("_");
        var lo = document.createElement("i");
        lo.classList.add("appear", cl[0], cl[1]);
        document.querySelector("#findItElement").appendChild(lo);
        document.querySelector("#playId").style.display = "block";
        document.querySelector("#findId").style.display = "none";
    });
    
   