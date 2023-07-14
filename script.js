if(localStorage.getItem("itemsArray") != null){
    console.log("first table update");
    let stri = localStorage.getItem("itemsArray");
    itemsList=JSON.parse(stri);
    let z= "";
    itemsList.forEach((element, index) => {
        z +=`
        <tr>
                  <th scope="row">${index+1}</th>
                  <td>${element[0]}</td>
                  <td>${element[1]}</td>
                  <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
                </tr> `
                // console.log("updating into table");
    });

    document.getElementById("tablebody").innerHTML=z;
}
function update(){
        let item=document.getElementById("Item").value;
        let desc=document.getElementById("description").value;
        if(localStorage.getItem("itemsArray") == null){
            itemsList = [];
            itemsList.push([item,desc]);
            localStorage.setItem("itemsArray",JSON.stringify(itemsList));
        }
        else{
            let c = localStorage.getItem("itemsArray");
            itemsList=JSON.parse(c);
            itemsList.push([item,desc]);
            localStorage.setItem("itemsArray",JSON.stringify(itemsList));
        }
        console.log("Updtaing list....")
        let str="";
        itemsList.forEach((element, index) => {
            str +=`
            <tr>
                      <th scope="row">${index+1}</th>
                      <td>${element[0]}</td>
                      <td>${element[1]}</td>
                      <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
                    </tr> `
                    // console.log("updating into table");
        });
        document.getElementById("tablebody").innerHTML=str;
    }
// add=document.getElementById("submit");
// add.addEventListener("click",update());
function deleted(itemIndex){
    console.log("deleted",itemIndex);
    let c = localStorage.getItem("itemsArray");
    itemsList=JSON.parse(c);
    itemsList.splice(itemIndex, 1);
    localStorage.setItem("itemsArray",JSON.stringify(itemsList));
    let str="";
    itemsList.forEach((element, index) => {
        str +=`
        <tr>
                  <th scope="row">${index+1}</th>
                  <td>${element[0]}</td>
                  <td>${element[1]}</td>
                  <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
                </tr> `
                // console.log("updating into table");
    });
    document.getElementById("tablebody").innerHTML=str;
}
function clearList(){
    if(confirm("Do yo really want to clearlist")){
        console.log("clearinglist...");
        console.log("clearinglist...");
     localStorage.clear();
     document.getElementById("tablebody").innerHTML=null;
    }
}
