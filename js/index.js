console.log("hello js");

// head icon //

function heardAdd (){

    const loveIconGrow = Number(document.getElementById("h-number-grow").innerText);
    document.getElementById("h-number-grow").innerText = loveIconGrow + 1 
    
};

// Call Buttons //


document.getElementById("call-button").addEventListener('click', function(){

    alert("call button click")
})
