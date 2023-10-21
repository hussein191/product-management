let All_info = document.querySelector('.All_info')
let masseg = document.querySelector('.masseg')
let search = document.querySelector('.search')
let Search_titel = document.querySelector('.Search_titel')
let CounterProductes = document.querySelector('.CounterProductes')
let Search_calegory = document.querySelector('.Search_calegory')
let titel_Product = document.querySelector('.titel_Product')
let DeletAll = document.querySelector('.DeletAll')
let price = document.querySelector('.price')
let taxes = document.querySelector('.taxes')
let ads = document.querySelector('.ads')
let discount = document.querySelector('.discount')
let count = document.querySelector('.count')
let category = document.querySelector('.category')
let Create = document.querySelector('.Create')
let min = document.querySelector('.min')
let warin = document.querySelector('.warin')
let counter = 1
let UpdeteEl = false
let postionEL;

//When you click on the add data button
Create.addEventListener("click",function(e){
    if(!titel_Product.value || !price.value || !taxes.value || !ads.value || !discount.value || !count.value || !category.value ){
        e.preventDefault()
        min.style.display = "flex"
    }else{
        let totels = Number(price.value) + Number(taxes.value) + Number(ads.value) - Number(discount.value)
        // Add new data
        if(UpdeteEl === false){
            SaveE(titel_Product.value,price.value,taxes.value,ads.value,discount.value,totels,count.value,category.value)
        }else{
        //Update old data
        let UpedteTitel = JSON.parse(localStorage.getItem("Titels"))
        let UpdetePrice = JSON.parse(localStorage.getItem("Prices"))
        let UpdeteTaxe = JSON.parse(localStorage.getItem("Taxes"))
        let updeteAds = JSON.parse(localStorage.getItem("Adss"))
        let UpdeteDIscount = JSON.parse(localStorage.getItem("Discounts"))
        let UpdeteTotil = JSON.parse(localStorage.getItem("Totels"))
        let UpdeteCount = JSON.parse(localStorage.getItem("CountS"))
        let UpdeteCategory = JSON.parse(localStorage.getItem("Categorys"))

        UpedteTitel[postionEL] = titel_Product.value
        UpdetePrice[postionEL] = price.value
        UpdeteTaxe[postionEL] = taxes.value
        updeteAds[postionEL] = ads.value
        UpdeteDIscount[postionEL] = discount.value
        UpdeteTotil[postionEL] = totels
        UpdeteCount[postionEL] = count.value
        UpdeteCategory[postionEL] = category.value

        localStorage.setItem("Titels",JSON.stringify(UpedteTitel))
        localStorage.setItem("Prices",JSON.stringify(UpdetePrice))
        localStorage.setItem("Taxes",JSON.stringify(UpdeteTaxe))
        localStorage.setItem("Adss",JSON.stringify(updeteAds))
        localStorage.setItem("Discounts",JSON.stringify(UpdeteDIscount))
        localStorage.setItem("Totels",JSON.stringify(UpdeteTotil))
        localStorage.setItem("CountS",JSON.stringify(UpdeteCount))
        localStorage.setItem("Categorys",JSON.stringify(UpdeteCategory))
    }
}
})

// for Save Date in the localStorage
function SaveE(titel,Price,Taxe,Ads,Discount,Totel,Count,Category){
        let Titels,Prices,Taxes,Adss,Discounts,Totels,CountS,Categorys;
        if(localStorage.getItem("Titels","Prices","Taxes","Adss","Discounts","Totels","CountS","Categorys") === null){
            Titels=[]; Prices=[]; Taxes=[]; Adss=[]; Discounts=[]; Totels=[]; CountS = [] ; Categorys=[]
            
        }else{
            Titels = JSON.parse(localStorage.getItem("Titels"))
            Prices = JSON.parse(localStorage.getItem("Prices"))
            Taxes = JSON.parse(localStorage.getItem("Taxes"))
            Adss = JSON.parse(localStorage.getItem("Adss"))
            Discounts = JSON.parse(localStorage.getItem("Discounts"))
            Totels = JSON.parse(localStorage.getItem("Totels"))
            CountS = JSON.parse(localStorage.getItem("CountS"))
            Categorys = JSON.parse(localStorage.getItem("Categorys"))
        }
        Titels.push(titel)
        Prices.push(Price)
        Taxes.push(Taxe)
        Adss.push(Ads)
        Discounts.push(Discount)
        Totels.push(Totel)
        CountS.push(Count)
        Categorys.push(Category)

        localStorage.setItem("Titels",JSON.stringify(Titels))
        localStorage.setItem("Prices",JSON.stringify(Prices))
        localStorage.setItem("Taxes",JSON.stringify(Taxes))
        localStorage.setItem("Adss",JSON.stringify(Adss))
        localStorage.setItem("Discounts",JSON.stringify(Discounts))
        localStorage.setItem("Totels",JSON.stringify(Totels))
        localStorage.setItem("CountS",JSON.stringify(CountS))
        localStorage.setItem("Categorys",JSON.stringify(Categorys))
}

//To show data from localStorage when the page loads
document.addEventListener("DOMContentLoaded",function(){
        let Titels,Prices,Taxes,Adss,Discounts,Totels,CountS,Categorys;
        if(localStorage.getItem("Titels","Prices","Taxes","Adss","Discounts","CountS","Categorys") === null){
            Titels=[]; Prices=[]; Taxes=[]; Adss=[]; Discounts=[]; Totels=[] ; CountS=[]; Categorys=[]
        }else{
            Titels = JSON.parse(localStorage.getItem("Titels"))
            Prices = JSON.parse(localStorage.getItem("Prices"))
            Taxes = JSON.parse(localStorage.getItem("Taxes"))
            Adss = JSON.parse(localStorage.getItem("Adss"))
            Discounts = JSON.parse(localStorage.getItem("Discounts"))
            Totels = JSON.parse(localStorage.getItem("Totels"))
            CountS = JSON.parse(localStorage.getItem("CountS"))
            Categorys = JSON.parse(localStorage.getItem("Categorys"))
        }
        localStorage.setItem("Titels",JSON.stringify(Titels))
        localStorage.setItem("Prices",JSON.stringify(Prices))
        localStorage.setItem("Taxes",JSON.stringify(Taxes))
        localStorage.setItem("Adss",JSON.stringify(Adss))
        localStorage.setItem("Discounts",JSON.stringify(Discounts))
        localStorage.setItem("Totels",JSON.stringify(Totels))
        localStorage.setItem("CountS",JSON.stringify(CountS))
        localStorage.setItem("Categorys",JSON.stringify(Categorys))
    
    for(let i=0; i<Titels.length;i++){
        let elment = `
        <div class="dates">
            <div>${counter}</div>
            <div>${Titels[i]}</div>
            <div>${Prices[i]}</div>
            <div>${Taxes[i]}</div>
            <div>${Adss[i]}</div>
            <div>${Discounts[i]}</div>
            <div>${Totels[i]}</div>
            <div>${CountS[i]}</div>
            <div>${Categorys[i]}</div>
            <div>
                <button class="Updete" id="${counter}" onclick="updete(this)">Updete</button>
            </div>
            <div>
                <button class="Delete" id="${counter}" onclick="delet(this)">Delete</button>
            </div>
        </div>
        `
        CounterProductes.textContent = counter
        let div = document.createElement("div")
        div.setAttribute("class","info_date")
        div.innerHTML = elment
        All_info.appendChild(div)
        counter++
    }
})

// When you need Delete Product
function delet(ele){
    let postion = ele.id-1
    let Titels = JSON.parse(localStorage.getItem("Titels"))
    let Prices = JSON.parse(localStorage.getItem("Prices"))
    let Taxes = JSON.parse(localStorage.getItem("Taxes"))
    let Adss = JSON.parse(localStorage.getItem("Adss"))
    let Discounts = JSON.parse(localStorage.getItem("Discounts"))
    let Totels = JSON.parse(localStorage.getItem("Totels"))
    let CountS = JSON.parse(localStorage.getItem("CountS"))
    let Categorys = JSON.parse(localStorage.getItem("Categorys"))
    
    localStorage.setItem("Titels",JSON.stringify(Titels.filter(e => e !== Titels[postion])))
    localStorage.setItem("Prices",JSON.stringify(Prices.filter(e => e!==Prices[postion])))
    localStorage.setItem("Taxes",JSON.stringify(Taxes.filter(e => e!==Taxes[postion])))
    localStorage.setItem("Adss",JSON.stringify(Adss.filter(e => e !== Adss[postion])))
    localStorage.setItem("Discounts",JSON.stringify(Discounts.filter(e => e!== Discounts[postion])))
    localStorage.setItem("Totels",JSON.stringify(Totels.filter(e => e !==Totels[postion])))
    localStorage.setItem("CountS",JSON.stringify(CountS.filter(e =>e !==CountS[postion])))
    localStorage.setItem("Categorys",JSON.stringify(Categorys.filter(e => e!== Categorys[postion])))

    let getInfo_date = document.querySelectorAll('.info_date')
    getInfo_date[postion].remove()
    CounterProductes.textContent = getInfo_date.length-1
}

//When you click the update button
//It transfers data and places it into input for the user to update
function updete(ele){
    let Titels,Prices,Taxes,Adss,Discounts,Totels,CountS,Categorys;
    Titels = JSON.parse(localStorage.getItem("Titels"))
    Prices = JSON.parse(localStorage.getItem("Prices"))
    Taxes = JSON.parse(localStorage.getItem("Taxes"))
    Adss = JSON.parse(localStorage.getItem("Adss"))
    Discounts = JSON.parse(localStorage.getItem("Discounts"))
    Totels = JSON.parse(localStorage.getItem("Totels"))
    CountS = JSON.parse(localStorage.getItem("CountS"))
    Categorys = JSON.parse(localStorage.getItem("Categorys"))
        
    UpdeteEl = true
    postionEL = ele.id-1
    titel_Product.value = Titels[postionEL]
    price.value = Prices[postionEL]
    taxes.value = Taxes[postionEL]
    ads.value = Adss[postionEL]
    discount.value = Discounts[postionEL]
    count.value = CountS[postionEL]
    category.value = Categorys[postionEL]
}

// Search by titel Productes
Search_titel.addEventListener("click",function(e){
    Titels = JSON.parse(localStorage.getItem("Titels"))
    Search(e,Titels)
})
// search by calegory Productes
Search_calegory.addEventListener("click",function(e){
    let Categorys = JSON.parse(localStorage.getItem("Categorys"))
    Search(e,Categorys)
})

// function for search user
function Search(e,element){
    let getInfo_date = document.querySelectorAll('.info_date')
    if(!search.value){
        e.preventDefault()
    }else{
        for(let i=0; i<element.length;i++){
            if(search.value === element[i]){
                getInfo_date[i].style.display = "block"
                masseg.style.display = "none"
            }
            if(search.value !== element[i]){
                getInfo_date[i].style.display = "none"
                masseg.classList.add("Addmasseg")
            } 
        }
    }
}
// for Delete All Productes
DeletAll.addEventListener("click",function(){
    let getInfo_date = document.querySelectorAll('.info_date')
    getInfo_date.forEach(ele => ele.remove())
    localStorage.removeItem("Titels")
    localStorage.removeItem("Prices")
    localStorage.removeItem("Taxes")
    localStorage.removeItem("Adss")
    localStorage.removeItem("Discounts")
    localStorage.removeItem("Totels")
    localStorage.removeItem("CountS")
    localStorage.removeItem("Categorys")
    CounterProductes.textContent = "0"
})

// for cloes masseg warining
warin.addEventListener("click",function(){
    min.style.display = "none"
})

