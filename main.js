const html = items.results
.map(r =>{
    //let starsnumber = Math.floor(Math.random() * 5);
    //    let percent = (starsnumber/  5) *100;
    //   document.getElementsByClassName("rate").style.width=`${percent}%;`
   let elegible=false;

if (r.Shop.is_calculated_eligible)
{
    elegible=true;
    return `
    <a class="productlink" target="blank" href="${r.url}">
    <div class="product">
        <div class="heart">
            <img src="img/heart.png">
        </div>
        
            <img src="${r.Images[0].url_170x135}" title="${r.title}">
        
        <div class="desc">
            <p>${r.title}</p>
            <p class="seller">${r.Shop.shop_name} </p>
            <div id="rating">
                <div class="rate"></div>
            </div>
            <p class="price">$${r.price}</p>
            <p class="elegible">Free Shipping elegible</p>
                
        </div>
    </div>
    </a>
    `
}else
return `
    <a class="productlink" target="blank" href="${r.url}">
    <div class="product">
        <div class="heart">
            <img src="img/heart.png">
        </div>
        
            <img src="${r.Images[0].url_170x135}" title="${r.title}">
        
        <div class="desc">
            <p>${r.title}</p>
            <p class="seller">${r.Shop.shop_name} </p>
            <div id="rating">
                <div class="rate"></div>
            </div>
            <p class="price">$${r.price}</p>               
        </div>
    </div>
    </a>
    `

}).join("")

document.querySelector("#products").innerHTML=html;
