function loaded(){
    
    let articleImgContainer = document.querySelector("#article-img-container");
    //console.log(article_img_container);

    let latestArticlesContainer = document.querySelector("#latest-articles-container");
    
    let imageObserver = createObserver(articleImgContainer,imageObserved);

    let articleBoxObserver = createObserver(latestArticlesContainer,latestArticlesObserved);
    
}


function imageObserved(entries, observer){
    for(let i=0; i<entries.length; i++){
        //console.log(entries[i]);
        if(entries[i].isIntersecting){
            let images = entries[i].target.childNodes;
            for(let j=0; j<images.length; j++){
                if(images[j] instanceof Image){
                    //console.log(images[j].classList);
                    if(images[j].classList.contains("left-image") && !(images[j].classList.contains("left-image-anim"))){
                        images[j].classList.add("left-image-anim");
                    }else if(images[j].classList.contains("right-image") && !(images[j].classList.contains("right-image-anim"))){
                        images[j].classList.add("right-image-anim");
                    }
                }
                
            }
        }
    }
}


function latestArticlesObserved(entries, observer){
    for(let i=0; i<entries.length; i++){
        console.log(entries[i]);
        if(entries[i].isIntersecting){
            let articles = entries[i].target.childNodes;
            for(let j=0; j<articles.length; j++){
                if(articles[j].classList != undefined){
                    //console.log(articles[j].classList);
                    if(!(articles[j].classList.contains("article-box-anim"))){
                        articles[j].classList.add("article-box-anim");
                        articles[j].style.animationDelay = String(j/10)+"s"
                    }
                }
                
            }
        }
    }
}


function createObserver(target, callback){

    let observer = new IntersectionObserver(callback);

    observer.observe(target);

    return observer;
}



