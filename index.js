let addCA = document.getElementById("addCurrentAssets").style.display = "";
let addInvestment = document.getElementById("addInvestment").style.display = "";
let addIntangibles = document.getElementById("addIntangibles").style.display = "";
let addCurrentLiabilities = document.getElementById("addCurrentLiabilities").style.display = "";
let addLTLiabilities = document.getElementById("addLTLiabilities").style.display = "";

let totalCurrentAssets = 0;
let totalInvestments = 0;
let totalIntangibles = 0;

let totalCurrentLiabilities = 0;
let totalLongTermLiabilities = 0;
let totalLiabilities = totalCurrentLiabilities + totalLongTermLiabilities;


function calcPosition(){
    tempCA = Number(calcCurrentAssets);
    tempCI = Number(calcInvestments);
    tempCInt = Number(calcIntangibles);
    let totalAssets = tempCA + tempCI + tempCInt;
    const outputAssets =  Number(document.getElementById("output-Assets"));
    outputAssets.innerHTML = totalAssets;

    totalCurrentLiabilities = calcCurrnetLiabilities;
    totalLongTermLiabilities = calcLTLiabilities;
    let totalLiabilities = totalCurrentLiabilities + totalLongTermLiabilities;

    let totalPosition = totalAssets - totalLiabilities;
}//end calcPosition

//Assets

function calcCurrentAssets(){
    totalCurrentAssets = Number(document.getElementById("input-Cash").value) + Number(document.getElementById("input-Inventory").value) + Number(document.getElementById("input-Supplies").value) + 
    Number(document.getElementById("input-tempInvestments").value);
    return totalCurrentAssets;
}//end calcCurrentAssets

function calcInvestments(){
    totalInvestments = Number(document.getElementById("input-Land").value) + Number(document.getElementById("input-Building").value) + Number(document.getElementById("input-Supplies").value) + 
    Number(document.getElementById("input-tempLandInvestment").value);
}//end calcInvestment

function calcIntangibles(){
    totalIntangibles =  Number(document.getElementById("input-Trade").value) + Number(document.getElementById("input-Goodwill").value);
}//end intangibles

//Liabilities

function calcCurrnetLiabilities(){
    totalCurrentLiabilities = document.getElementById("input-Accounts").value + document.getElementById("input-Notes").value + document.getElementById("input-Interest").value + 
    document.getElementById("input-Wages").value + document.getElementById("input-Accrued").value;
}

function calcLTLiabilities(){
    totalLongTermLiabilities = document.getElementById("input-Notes").value + document.getElementById("input-Bonds").value;
}

function showCA(){
    const addCA =  document.getElementById("addCurrentAssets");
    addCA.style.display = "block";
    
}//end showCA

function showInvestment(){
    const addInvestment = document.getElementById("addInvestment");
    addInvestment.style.display = "block";
}//end showInvestment

function showIntangibles(){
    const addIntangibles = document.getElementById("addIntangibles");
    addIntangibles.style.display = "block";
}//end showIntangibles

function showCLiabilities(){
    const addCurrentLiabilities = document.getElementById("addCurrentLiabilities");
    addCurrentLiabilities.style.display = "block";
}

function showLTLiabilities(){
    const addLTLiabilities = document.getElementById("addLTLiabilities");
    addLTLiabilities.style.display = "block";
}