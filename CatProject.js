// declaring variables
const allCategories = document.querySelector(".all-categories")
const images = document.querySelector(".images")
const more = document.querySelector(".more")
let defaultImg
// creating varibales
let ul = document.createElement("ul")
const loadMore = document.createElement("p")
loadMore.innerHTML = ""
loadMore.style.textAlign = "center"
// appending
more.append(loadMore)
allCategories.append(ul)
let imagesChild
// function for default photos
function getDefPhotos(url){
    fetch(url,{headers: {
        'x-api-key': "api_key"
      }})
      .then(responce => responce.json())
      .then(res => {
        res.forEach(img => {
            defaultImg = document.createElement("img")
            defaultImg.src = img.url
            defaultImg.className = "images-children"
            images.append( defaultImg)
        })
      })
}
getDefPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1")
// function for fetching photos
function getPhotos(url){
    fetch(url,{headers: {
        'x-api-key': "api_key"
      }})
      .then(responce => responce.json())
      .then(res => {
        res.forEach(img => {
            imagesChild = document.createElement("img")
            imagesChild.src = img.url
            imagesChild.className = "images-children"
            images.append(imagesChild)
        })
      })
}
// function for getting categories
function getCategories(url){
    fetch(url)
    .then(val => val.json())
    .then(res => {
        res.forEach(cat => {
            let li = document.createElement("li")
            li.innerHTML = cat.name
            li.className = "categories-child"
            ul.append(li)
            li.addEventListener("click", (e) => {
                if(e.target.innerHTML === "boxes"){
                    images.innerHTML = ""
                    loadMore.innerHTML = ""
                    getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=5")
                    setTimeout(() => {
                        loadMore.innerHTML = "load more..."
                    }, 1500);
                }
                if(e.target.innerHTML === "clothes"){
                    images.innerHTML = ""
                    loadMore.innerHTML = ""
                    getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=15")
                    setTimeout(() => {
                        loadMore.innerHTML = "load more..."
                    }, 1500);
                }
                if(e.target.innerHTML === "hats"){
                    images.innerHTML = ""
                    loadMore.innerHTML = ""
                    getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1")
                    setTimeout(() => {
                        loadMore.innerHTML = "load more..."
                    }, 1500);
                }
                if(e.target.innerHTML === "sinks"){
                    images.innerHTML = ""
                    loadMore.innerHTML = ""
                    getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=14")
                    setTimeout(() => {
                        loadMore.innerHTML = "load more..."
                    }, 1500);
                }
                if(e.target.innerHTML === "space"){
                    images.innerHTML = ""
                    loadMore.innerHTML = ""
                    getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=2")
                    setTimeout(() => {
                        setTimeout(() => {
                            loadMore.innerHTML = "load more..."
                        }, 1500);
                    }, 1500);
                }
                if(e.target.innerHTML === "sunglasses"){
                    images.innerHTML = ""
                    loadMore.innerHTML = ""
                    getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=4")
                    setTimeout(() => {
                        loadMore.innerHTML = "load more..."
                    }, 1500);
                }
                if(e.target.innerHTML === "ties"){
                    images.innerHTML = ""
                    getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=7")
                    setTimeout(() => {
                        loadMore.innerHTML = "load more..."
                    }, 1500);
                }
                loadMore.addEventListener("click", (ev) => {
                    if(e.target.innerHTML === "boxes"){
                      
                        getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=5")
                        loadMore.innerHTML = "load more..."
                    }
                    if(e.target.innerHTML === "clothes"){
                        getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=15")
                        loadMore.innerHTML = "load more..."
                    }
                    if(e.target.innerHTML === "hats"){
                        getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1")
                        loadMore.innerHTML = "load more..."
                    }
                    if(e.target.innerHTML === "sinks"){
                        getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=14")
                        loadMore.innerHTML = "load more..."
                    }
                    if(e.target.innerHTML === "space"){
                        getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=2")
                        loadMore.innerHTML = "load more..."
                    }
                    if(e.target.innerHTML === "sunglasses"){
                        getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=4")
                        loadMore.innerHTML = "load more..."
                    }
                    if(e.target.innerHTML === "ties"){
                        getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=7")
                        loadMore.innerHTML = "load more..."
                    }
                })
            })
        })

    })
}
getCategories("https://api.thecatapi.com/v1/categories")