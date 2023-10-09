var bold_count = 1;
var italic_count = 1;
var default_size = 22;
var height_count = default_size;
var letter_space_count = 2;
var indent_count = 0;
var get_size = document.getElementById("number");
get_size.value = 22;


function bold(){
    let get = document.getElementById("input");
    let gets = document.getElementById("printableContent");
    if(bold_count%2){
    get.style.fontWeight = "bold";
    gets.style.fontWeight = "bold";}
    else{
    get.style.fontWeight = "normal";
    gets.style.fontWeight = "normal";
    }
    bold_count++;
}

function italic(){
    let get = document.getElementById("input");
    let gets = document.getElementById("printableContent");
    if(italic_count%2){
    get.style.fontStyle = "italic";
    gets.style.fontStyle = "italic";}
    else{
    get.style.fontStyle = "normal";
    gets.style.fontStyle = "normal";}
    italic_count++;
}

function upper(){
    let get = document.getElementById("input"); 
    get.style.textTransform  = "uppercase"; 
    document.getElementById("printableContent").style.textTransform  = "uppercase";
}

function lower(){
    let get = document.getElementById("input"); 
    get.style.textTransform  = "lowercase"; 
    document.getElementById("printableContent").style.textTransform  = "lowercase";
}

function capitalize(){
    let get = document.getElementById("input"); 
    get.style.textTransform  = "capitalize"; 
    document.getElementById("printableContent").style.textTransform  = "capitalize";
}

function line_height(){
    height_count+=1;
    let height = `${height_count*1.5}px`;
    let get = document.getElementById("input");
    get.style.lineHeight = height;
    document.getElementById("printableContent").style.lineHeight = height;
}

function line_height_decrease(){
    if(height_count>20){
    height_count-=1;
    let height = `${height_count*1.5}px`;
    let get = document.getElementById("input");
    get.style.lineHeight = height;
    document.getElementById("printableContent").style.lineHeight = height;
    }
}

function align_left(){
    let get = document.getElementById("input"); 
    get.style.textAlign = "left"; 
    document.getElementById("printableContent").style.textAlign = "left"; 
}

function align_center(){
    let get = document.getElementById("input"); 
    get.style.textAlign = "center"; 
    document.getElementById("printableContent").style.textAlign = "center";
}

function align_right(){
    let get = document.getElementById("input"); 
    get.style.textAlign = "right"; 
    document.getElementById("printableContent").style.textAlign = "right";
}

function align_justify(){
    let get = document.getElementById("input"); 
    get.style.textAlign = "justify"; 
    document.getElementById("printableContent").style.textAlign = "justify";
}

function letter_space(){
    let get = document.getElementById("input"); 
    let space = `${++letter_space_count}px`
    get.style.letterSpacing = space;
    document.getElementById("printableContent").style.letterSpacing = space;
}

function letter_space_decrease(){
    if(letter_space_count>2){
    let get = document.getElementById("input"); 
    let space = `${--letter_space_count}px`
    get.style.letterSpacing = space;
    document.getElementById("printableContent").style.letterSpacing = space;
    }
}

function text_indent(){
    let get = document.getElementById("input");
    let indent = `${indent_count+=3}px`
    get.style.textIndent = indent;
    document.getElementById("printableContent").style.textIndent = indent;
}

function text_indent_decrease(){
    if(indent_count!=0){
    let get = document.getElementById("input");
    let indent = `${indent_count-=3}px`
    get.style.textIndent = indent;
    document.getElementById("printableContent").style.textIndent = indent;
    }
}

function underline(){
    let get = document.getElementById("input"); 
    get.style.textDecoration = "underline";      
    document.getElementById("printableContent").style.textDecoration = "underline";    
}

function overline(){
    let get = document.getElementById("input"); 
    get.style.textDecoration = "overline";  
    document.getElementById("printableContent").style.textDecoration = "overline";        
}

function throughline(){
    let get = document.getElementById("input"); 
    get.style.textDecoration = "line-through";  
    document.getElementById("printableContent").style.textDecoration = "line-through";        
}

function cancel(){
    let get = document.querySelector("textarea");
    get.style.fontWeight = "normal";
    get.style.fontStyle = "normal";
    get.style.textTransform  = "none";
    get.style.lineHeight = "33px";
    get.style.textAlign = "justify";
    get.style.letterSpacing = "1px";
    get.style.textIndent = "0px";
    get.style.textDecoration = "none";
    get.style.fontVariant = "normal";
    get.style.color = "#000000";
    get.style.fontFamily = "'Roboto', sans-serif";
    document.querySelector("input").value ="#000000";
    document.getElementById("number").value = "22";
    get.style.fontSize = "22px";
    get.value = " ";
}

function copyText() {
    var copyText = document.getElementById("input");
    var range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    let get = document.getElementById("copy").innerHTML;
    document.getElementById("copy").innerHTML = "Copied";
    setTimeout(()=> {
        document.getElementById("copy").innerHTML = get;
     },1500)
  }


  function printText() {
    const content = document.getElementById('input').value;
    /*
    const printableContent = document.createElement('div');
    printableContent.id = 'printableContent';*/
    printableContent.innerText = content;  

    document.body.appendChild(printableContent);
    window.print();

    // Remove the printable content after printing
    printableContent.remove();
  }





  function variant(){
    let get = document.getElementById("input"); 
    get.style.fontVariant = "small-caps";
    document.getElementById("printableContent").style.fontVariant = "small-caps";
  }

  function color(){
    setTimeout(()=> {
        let get_color = document.querySelector("input").value;
        document.getElementById("input").style.color=get_color;
        document.getElementById("printableContent").style.color=get_color;
     },1500)    
  }

 

  let gather = document.getElementById("select");
  gather.addEventListener("click",()=>{
    let collect = gather.options[gather.selectedIndex].text;
    get_size.value = collect;
    var get_size2 = document.getElementById("number").value;
    let change = `${get_size2}px`;
    let get = document.getElementById("input"); 
    get.style.fontSize = change;
    document.getElementById("printableContent").style.fontSize = change;
  })

  get_size.addEventListener("keyup",()=>{
    var get_size2 = document.getElementById("number").value;
    let change = `${get_size2}px`;
    let get = document.getElementById("input"); 
    get.style.fontSize = change;
    document.getElementById("printableContent").style.fontSize = change;
  })

  let get = document.getElementById("font");
  get.addEventListener("click",()=>{
    let come =Number(get.value);
    var gets = document.getElementById("input");
    switch(come)
    {
        case 1:  
            gets.style.fontFamily = "'Roboto', sans-serif"; 
            document.getElementById("printableContent").style.fontFamily = "'Roboto', sans-serif";
        break;   
        case 2:  
            gets.style.fontFamily = "'Young Serif', serif"; 
            document.getElementById("printableContent").style.fontFamily = "'Young Serif', serif";
        break;
        case 3:  
            gets.style.fontFamily = "'Gabarito', cursive"; 
            document.getElementById("printableContent").style.fontFamily = "'Gabarito', cursive";
        break;
        case 4:  
            gets.style.fontFamily = "'Roboto Mono', monospace"; 
            document.getElementById("printableContent").style.fontFamily = "'Roboto Mono', monospace";
        break;
        case 5:  
        gets.style.fontFamily = "'Oswald', sans-serif"; 
        document.getElementById("printableContent").style.fontFamily = "'Oswald', sans-serif";
        break;
        case 6:  
        gets.style.fontFamily = "'Dela Gothic One', cursive"; 
        document.getElementById("printableContent").style.fontFamily = "'Dela Gothic One', cursive";
        break;
        case 7:  
        gets.style.fontFamily = "'Martian Mono', monospace"; 
        document.getElementById("printableContent").style.fontFamily = "'Martian Mono', monospace";
        break;
        case 8:  
        gets.style.fontFamily = "'Josefin Sans', sans-serif"; 
        document.getElementById("printableContent").style.fontFamily = "'Josefin Sans', sans-serif";
        break;
        case 9:  
        gets.style.fontFamily = "'Bebas Neue', sans-serif"; 
        document.getElementById("printableContent").style.fontFamily =  "'Bebas Neue', sans-serif";
        break;
        case 10:  
        gets.style.fontFamily = "'Dancing Script', cursive"; 
        document.getElementById("printableContent").style.fontFamily = "'Oswald', sans-serif";
        break;
        case 11:  
        gets.style.fontFamily = "'Pacifico', cursive"; 
        document.getElementById("printableContent").style.fontFamily = "'Dancing Script', cursive";
        break;
        case 12:  
        gets.style.fontFamily = "'Autour One', cursive"; 
        document.getElementById("printableContent").style.fontFamily = "'Autour One', cursive";;
        break;
        case 13:  
        gets.style.fontFamily = "'Space Grotesk', sans-serif"; 
        document.getElementById("printableContent").style.fontFamily = "'Space Grotesk', sans-serif";
        break;
        case 14:  
        gets.style.fontFamily = "'Lobster', cursive"; 
        document.getElementById("printableContent").style.fontFamily = "'Lobster', cursive";
        break;
        case 15:  
        gets.style.fontFamily = "'Outfit', sans-serif"; 
        document.getElementById("printableContent").style.fontFamily = "'Outfit', sans-serif";
        break;
        case 16:  
        gets.style.fontFamily = "'Satisfy', cursive"; 
        document.getElementById("printableContent").style.fontFamily = "'Satisfy', cursive";
        break;
        case 17:  
        gets.style.fontFamily = "'Kalam', cursive"; 
        document.getElementById("printableContent").style.fontFamily =  "'Kalam', cursive";
        break;
        case 18:  
        gets.style.fontFamily = "'Righteous', cursive"; 
        document.getElementById("printableContent").style.fontFamily = "'Righteous', cursive";
        break;
        case 19:  
        gets.style.fontFamily = "'Great Vibes', cursive"; 
        document.getElementById("printableContent").style.fontFamily = "'Great Vibes', cursive";
        break;
        case 20:  
        gets.style.fontFamily = " 'Kaushan Script', cursive"; 
        document.getElementById("printableContent").style.fontFamily = " 'Kaushan Script', cursive";
        break;
    }
  })
