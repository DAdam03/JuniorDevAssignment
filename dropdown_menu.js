var dropdownData = {
    "Inspiration":[
        "Inspiration 1",
        "Inspiration 2",
        "Inspiration 3"
    ],
    "Courses":[
        "Course 1",
        "Course 2",
        "Course 3"
    ]
};

var openMenu = null;
var lastTarget = null;


function bodyClicked(){
    if(openMenu != null){
        document.body.removeChild(openMenu);
        openMenu = null;
    }
    if(lastTarget != event.target){
        if(event.target.classList != undefined && event.target.classList.contains("nav-button")){
            dropdownClicked(event.target.getAttribute("name"));
        }
        lastTarget = event.target;
    }else{
        lastTarget = null;
    }
}


function dropdownClicked(buttonName){
    if(buttonName in dropdownData){
        
        let menuDiv = document.createElement("div");
        menuDiv.classList.add("menu-container");
        
        for(let i=0; i<dropdownData[buttonName].length; i++){
            let siteDiv = document.createElement("div");
            siteDiv.classList.add("site-div");
            siteDiv.classList.add("clickable");
            siteDiv.innerText = dropdownData[buttonName][i];

            menuDiv.appendChild(siteDiv);
        }

        document.body.appendChild(menuDiv);
        
        let buttonRect = event.target.getBoundingClientRect()
        menuDiv.style.top = buttonRect.top+event.target.offsetHeight+"px";
        menuDiv.style.left = buttonRect.left+"px";
        
        openMenu = menuDiv
    }
}



