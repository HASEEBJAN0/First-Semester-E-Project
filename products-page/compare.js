for (var i = 0; i < dollarProducts.pens.length; i++) {
    document.getElementById("select1").innerHTML += `
                                       <option value="${i}">${dollarProducts.pens[i].title}</option>

   
    `

    document.getElementById("select2").innerHTML += `
                                       <option value="${i}">${dollarProducts.pens[i].title}</option>

   
    `
}

function compare1(a) {
    var select2 = document.getElementById("select2").value
    if (a != select2) {
        document.getElementById("pname1").innerText = dollarProducts.pens[a].title
        document.getElementById("pbrand1").innerText = dollarProducts.pens[a].brand
        document.getElementById("pcate1").innerText = dollarProducts.pens[a].category
        document.getElementById("pprice1").innerText = dollarProducts.pens[a].price
    }else{
        alert("Same Product Cannot Be Compared")
    }

}


function compare2(a) {
    var select1 = document.getElementById("select1").value
    if (a != select1) {
        document.getElementById("pname2").innerText = dollarProducts.pens[a].title
        document.getElementById("pbrand2").innerText = dollarProducts.pens[a].brand
        document.getElementById("pcate2").innerText = dollarProducts.pens[a].category
        document.getElementById("pprice2").innerText = dollarProducts.pens[a].price
    }else{
        alert("Same Product Cannot Be Compared")
    }

}