console.log("hello js");

// head icon //

function heardAdd (){

    const loveIconGrow = Number(document.getElementById("h-number-grow").innerText);
    document.getElementById("h-number-grow").innerText = loveIconGrow + 1 
    
};


   //function call button section

    const allCalls = [];
    
    function  btnClick (btnAdd, headTitle, numberAdd){

        document.getElementById(btnAdd).addEventListener("click", function(){

            const coinGrow = Number(document.getElementById("coin-gro").innerText);

            const headTi = document.getElementById(headTitle).innerText;
            const impNumber = document.getElementById(numberAdd).innerText;

        if(coinGrow < 20){
            alert ("❌You do not have enough coins. You need at least 20 coins to make a call")
            return;

        }
        document.getElementById("coin-gro").innerText = coinGrow - 20
         alert(`📞calling ${headTi} ${impNumber}...`)

         const callHistory ={
            callName : headTi,
            number : impNumber,
            time : new Date().toLocaleTimeString()

         }

         allCalls.push(callHistory);

         disHistory();

        });

    }

     function disHistory(){

        const allCallHistory = document.getElementById("call-history");
        allCallHistory.innerHTML = "";

       for(const callHistory of allCalls) {
        const div = document.createElement("div");

        div.className =  "bg-[#f5fff6] flex justify-between items-center rounded-lg p-4 mb-2";
        
        div.innerHTML = `

                 <div>
                     <h2 class="font-semibold">${callHistory.callName}</h2>
                     <h4 class="text-gray-700">${callHistory.number}</h4>
                 </div>

                 <h2>${callHistory.time}</h2>
        
         `

           allCallHistory.appendChild(div);

      }

    };

    // all contact call button //
      
    // National hotline
    btnClick("national-hotline-btn", "national-hotline", "national-hotline-number");

    //Police hotline
    btnClick("police-hotline-btn", "police-hotline", "police-hotline-number");

    //fire hotline
    btnClick("fire-hotline-btn", "fire-hotline", "fire-hotline-number");

    //ambulance hotline
    btnClick("ambulance-hotline-btn", "ambulance-hotline", "ambulance-hotline-number");

    //women hotline
    btnClick("women-hotline-btn", "women-hotline", "women-hotline-number");

    // anti hotline
    btnClick("anti-hotline-btn", "anti-hotline", "anti-hotline-number")

    // electric hotline
    btnClick("electric-hotline-btn", "electric-hotline", "electric-hotline-number")

    //brac hotline
    btnClick("brac-hotline-btn", "brac-hotline", "brac-hotline-number");

    //railway hotline
    btnClick("railway-hotline-btn", "railway-hotline", "railway-hotline-number")

//Clear Button
 document.getElementById("clear-button").addEventListener("click", function(){
      
    document.getElementById("call-history").innerText = ""
    allCalls.length = 0;


 });

 // copy count





