
function addElement() {
    var toDoList = document.getElementById("input").value;
    var p = document.createElement("p");
    var txt = document.createTextNode(toDoList);
    p.appendChild(txt);
    var pAtt = document.createAttribute("class");
    pAtt.value = "pStyle";
    p.setAttributeNode(pAtt);
    p.addEventListener("click", lineThrough);
    document.getElementById("input").value = "";
    
    var btn = document.createElement("button");
    var bVal = document.createTextNode("\u2613");
    btn.appendChild(bVal);
    var bAtt = document.createAttribute("class");
    bAtt.value = "butStyle";
    btn.setAttributeNode(bAtt);
    btn.addEventListener("click", removeElement); 

    var s = document.createElement("span");
    var sVal = document.createTextNode("\u2714");
    s.appendChild(sVal);
    var sAtt = document.createAttribute("class");
    sAtt.value = "sStyle";
    s.setAttributeNode(sAtt);

    p.appendChild(btn);
    p.appendChild(s);
    document.getElementById("showToDoList").appendChild(p);
    
    var divE = document.getElementById("showToDoList");

    function lineThrough() {
        if (p.style.textDecoration == "line-through") {
            p.style.textDecoration = "none";
            s.style.display = "none";
        }
        else {
            p.style.textDecoration = "line-through";
            s.style.display = "inline-flex";
        }
    }

    function removeElement() {
        var parent = document.getElementById("showToDoList");
        parent.removeChild(p);
    }
}
 
     
 


