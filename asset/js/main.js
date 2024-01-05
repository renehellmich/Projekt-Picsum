console.log(fetch("https://picsum.photos/v2/list"));

let ratio = 0;

fetch("https://picsum.photos/v2/list")
.then((resp) => resp.json())
.then((data) => {
    console.log(data)
    
    data.forEach(el => {
        const btnCaption = "See More"

        let imgTag = el.download_url
        let id = el.id
        let url = el.url
        let header = el.author
        ratio = el.height / el.width

        let div = document.createElement("div")
        
        let img = document.createElement("img")
        img.setAttribute("src", imgTag)
        img.setAttribute("alt", url)
        div.appendChild(img)

        let h2 = document.createElement("h2")
        h2.textContent = header
        div.appendChild(h2)

        let btnSeeMore = document.createElement("button")
        btnSeeMore.textContent = btnCaption
        btnSeeMore.addEventListener("click", () => {
            window.open(url, "_blank")
        })
        div.appendChild(btnSeeMore)
        document.querySelector("#picsum").appendChild(div)
    });
})

// let globalSettings = document.querySelector(':root');
// console.log(ratio);
// const setSettings = () => {
//     let globalWidth = getComputedStyle(globalSettings).getPropertyValue('--width-img')
//     console.log(globalWidth);
//     globalSettings.style.setProperty('--heigth-img', globalWidth * ratio)
//     console.log(`calc(${globalWidth} * ${ratio})`);
//     globalSettings.style.setProperty('--heigth-img', `calc(${globalWidth} * ${ratio})`);
// }

// setSettings()