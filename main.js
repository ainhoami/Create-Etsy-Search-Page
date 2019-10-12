const html = items.results
.map(r =>{
    return `
    <div class="product">
        <a class="productlink" target="blank" href="${r.url}">
            <img src="${r.Images[0].url_170x135}">
        </a>
            
        <div class="desc">
            <p>${r.title}</p>
            <p class="seller">${r.Shop.shop_name} </p>
            <p class="stars">rating:</p>
            <p class="price">$${r.price}</p>
                
        </div>
    </div>
    `
}).join("")

document.querySelector("#products").innerHTML=html;