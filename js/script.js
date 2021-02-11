var firstTitlInput = document.getElementById("firstTitlInput")
var firstAddressInput = document.getElementById("firstAddressInput")

var listContainer;


let message = document.getElementById("message");



 
if(localStorage.getItem("myList") == null )
{
    listContainer =[];
}
else
{
    listContainer = JSON.parse( localStorage.getItem("myList"));
    displayList()

}



function addText()
{
    if( firstTitlInput.value == "" || firstAddressInput.value == "" )
    {
        message.classList.replace("d-none" , "d-flex");
    }
    else
    {

        message.classList.replace("d-flex" , "d-none");

        var List=
        {
            titl: firstTitlInput.value,
            address: firstAddressInput.value,
        }
        listContainer.push(List)
        localStorage.setItem("myList" , JSON.stringify (listContainer))
        displayList()
        
        
        console.log(listContainer)
    }
    
}

function displayList()
{
    var cartonna = ""

    for(var i = 0 ;i<listContainer.length;i++)
    {
        cartonna+=`<div class="train d-flex align-items-center w-50 h-25">
        <div>
            <h5>`+listContainer[i].titl+`</h5>
           
            
        </div>
        <div>
        <button onclick="driveList(${i})" class=" btn btn-info">visit</button>
            <button onclick="deleteList()" class=" btn btn-danger">delete</button>
            
        </div>
        
    </div>`

    }

    document.getElementById("demo").innerHTML = cartonna;
}

function deleteList(listIndex)
{
    listContainer.splice(listIndex,1)
    displayList()

}


function driveList (visitIndex)
{
    

    var url = listContainer[visitIndex].address;
  if(listContainer[visitIndex].address.includes("http"))
  {
      
    window.open(url);
  }
  else
  {

    window.open("http://" +url);
  }

    

}



 

