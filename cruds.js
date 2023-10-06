var Submit = document.getElementById('submit')
var ProductTitle = document.getElementById('title')
var ProductPrice = document.getElementById('price')
var ProductTaxes = document.getElementById('taxes')
var ProductAds   =   document.getElementById('ads')
var ProductDiscount = document.getElementById('discount')
var ProductTotal = document.getElementById('total')
var ProductCount = document.getElementById('count')
var ProductCategroy = document.getElementById('categroy')

// function getTotal(){
// console.log('omar');
// }

//عملت الحدث ده عشان لما ادخل رقم في اي مكان من دول ياخد الرقم ويطاع المجموع

ProductPrice.addEventListener('keyup',function getTotal(){
    if(price.value !=''){
    var result = (Number(price.value )+ Number(taxes.value) + Number(ads.value)) - Number(discount.value)
    total.innerHTML = result
    total.style.background ='#040'
    }else{
        total.innerHTML = ''
        total.style.background ='#0856cf'

    }
})
ProductTaxes.addEventListener('keyup',function getTotal(){
    if(taxes.value !=''){
    var result = (Number(price.value )+ Number(taxes.value) + Number(ads.value)) - Number(discount.value)
    total.innerHTML = result
    
    }//else{
    //      total.innerHTML = ''
    //     total.style.background ='#0856cf'
    //  }
})
ProductAds.addEventListener('keyup',function getTotal(){
    if(ads.value !=''){
    var result = (Number(price.value )+ Number(taxes.value) + Number(ads.value)) - Number(discount.value)
    total.innerHTML = result
    
    }//else{
    //     total.innerHTML = ''
    //     total.style.background ='#0856cf'
    // }
})
ProductDiscount.addEventListener('keyup',function getTotal(){
    if(discount.value !=''){
    var result = (Number(price.value )+ Number(taxes.value) + Number(ads.value)) - Number(discount.value)
    total.innerHTML = result
    
    }//else{
    //     total.innerHTML = ''
    //     total.style.background ='#0856cf'
    // }
})

//هنا عملت arry عشان كل مدخل data جديده تتحفظ فيه
let datapro = []

//عملت الحدث ده عشان لما اضغط علي الزرار يضيف منتج جديد
Submit.addEventListener('click',function(){
var Product ={
    title: ProductTitle.value,
    price: ProductPrice.value,
    taxes: ProductTaxes.value,
    ads: ProductAds.value,
    discount: ProductDiscount.value,
    total: ProductTotal.innerHTML,
    count: ProductCount.value,
    categroy: ProductCategroy.value,

}
datapro.push(Product)
//local storge
//localStorage.setItem('product',JSON.stringify(datapro))
//console.log(datapro)
cleardata()
showdata()
})
//عملت ال funcation دي عشان امسح البيانات
function cleardata(){
    title.value =''
    price.value =''
    taxes.value =''
    ads.value =''
    discount.value =''
    total.innerHTML =''
    count.value =''
    categroy.value =''

}
//عملت funcation عشان اعرض البيانات في الجدول

function showdata(){
var table = ''
for(var i=0;i<datapro.length;i++){
table += ` <tr>
<td>${i}</td>
<td>${datapro[i].title}</td>
<td>${datapro[i].price}</td>
<td>${datapro[i].taxes}</td>
<td>${datapro[i].ads}</td>
<td>${datapro[i].discount}</td>
<td>${datapro[i].categroy}</td>
<td>${datapro[i].total}</td>
<td><button id="update">update</button></td>
<td><button id="delete">delete</button></td>

</tr>
`
}

document.getElementById('tbody').innerHTML = table
}
showdata()

