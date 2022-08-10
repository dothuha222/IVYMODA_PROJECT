const boxProduct = document.querySelector('#products');
// console.log(boxProduct);

const app = {
    products:[
        
 
        {
             name:'Áo Thun Gân Cổ Xoắn ',
             link: './detailHtml/detail_ao-thun-gan-co-xoan.html',
             image1: '../img/allProduct/ao-thun-gan-co-xoan-be-1.jpg',
             image2: '../img/allProduct/ao-thun-gan-co-xoan-be-2.jpg',
             image3: '../img/allProduct/ao-thun-gan-co-xoan-vang-1.jpg',
             image4: '../img/allProduct/ao-thun-gan-co-xoan-vang-2.jpg',
             image5: '../img/allProduct/ao-thun-gan-co-xoan-den-1.jpg',
             image6: '../img/allProduct/ao-thun-gan-co-xoan-den-2.jpg',
             color1: '../img/allProduct/color-be.png',
             color2: '../img/allProduct/color-yellow.png',
             color3: '../img/allProduct/color-black.png',
             curprice: '450.000đ',
             oldprice: '600.000đ',
         },
 
 
         {
            name:'Áo Thun MONGTOGHI ',
            link: './detailHtml/detail_ao-thun-mongtoghi.html',
            image1: '../img/allProduct/ao-thun-mongtoghi-den-1.jpg',
            image2: '../img/allProduct/ao-thun-mongtoghi-den-2.jpg',
            image3: '../img/allProduct/ao-thun-mongtoghi-green-1.jpg',
            image4: '../img/allProduct/ao-thun-mongtoghi-green-2.jpg',
            image5: '../img/allProduct/ao-thun-mongtoghi-vang-1.jpg',
            image6: '../img/allProduct/ao-thun-mongtoghi-vang-2.jpg',
            color1: '../img/allProduct/color-black.png',
            color2: '../img/allProduct/color-green.png',
            color3: '../img/allProduct/color-yellow.png',
            curprice: '450.000đ',
            oldprice: '600.000đ',
        },

         {
             name:'Áo Thun Hai Dây ',
             link: './detailHtml/detail_aothunhaiday.html',
             image1: '../img/allProduct/ao-thun-2-day-trang-1.jpg',
             image2: '../img/allProduct/ao-thun-2-day-trang-2.jpg',
             image3: '../img/allProduct/ao-thun-2-day-be-1.jpg',
             image4: '../img/allProduct/ao-thun-2-day-be-2.jpg',
             image5: '../img/allProduct/ao-thun-2-day-den-1.jpg',
             image6: '../img/allProduct/ao-thun-2-day-den-2.jpg',
             color1: '../img/allProduct/color-white.png',
             color2: '../img/allProduct/color-be.png',
             color3: '../img/allProduct/color-black.png',
             curprice: '450.000đ',
             oldprice: '600.000đ',
         },
 
         
 
         {
             name:'Áo Thun Polo Dáng Croptop ',
             link: './detailHtml/detail_ao-thun-polo-croptop.html',
             image1: '../img/allProduct/ao-thun-polo-croptop-red-1.jpg',
             image2: '../img/allProduct/ao-thun-polo-croptop-red-2.jpg',
             image3: '../img/allProduct/ao-thun-polo-croptop-black-1.jpg',
             image4: '../img/allProduct/ao-thun-polo-croptop-black-2.jpg',
             image5: '../img/allProduct/ao-thun-polo-croptop-nau-1.jpg',
             image6: '../img/allProduct/ao-thun-polo-croptop-nau-2.jpg',
             color1: '../img/allProduct/color-red.png',
             color2: '../img/allProduct/color-be.png',
             color3: '../img/allProduct/color-vang-chanh.png',
             curprice: '450.000đ',
             oldprice: '600.000đ',
         },

         {
            name:'Áo Thun In Chữ',
            link: './detailHtml/detail_ao-thun-in-chu.html',
            image1: '../img/allProduct/ao-thun-in-chu-hong-1.jpg',
            image2: '../img/allProduct/ao-thun-in-chu-hong-2.jpg',
            image3: '../img/allProduct/ao-thun-in-chu-trang-1.jpg',
            image4: '../img/allProduct/ao-thun-in-chu-trang-2.jpg',
            image5: '../img/allProduct/ao-thun-in-chu-xanh-1.jpg',
            image6: '../img/allProduct/ao-thun-in-chu-xanh-2.jpg',
            color1: '../img/allProduct/color-pink-nhat.png',
            color2: '../img/allProduct/color-white.png',
            color3: '../img/allProduct/color-blue.png',
            curprice: '450.000đ',
            oldprice: '600.000đ',
        },
 
        {
            name:'Áo Thun Dáng Xuông ',
            link: './detailHtml/detail_ao-thun-dang-xuong.html',
            image1: '../img/allProduct/ao-thun-dang-xuong-xanh-1.jpg',
            image2: '../img/allProduct/ao-thun-dang-xuong-xanh-2.jpg',
            image3: '../img/allProduct/ao-thun-dang-xuong-trang-1.jpg',
            image4: '../img/allProduct/ao-thun-dang-xuong-trang-2.jpg',
            image5: '../img/allProduct/ao-thun-dang-xuong-tim-1.jpg',
            image6: '../img/allProduct/ao-thun-dang-xuong-tim-2.jpg',
            color1: '../img/allProduct/color-green.png',
            color2: '../img/allProduct/color-white.png',
            color3: '../img/allProduct/color-tim.png',
            curprice: '450.000đ',
            oldprice: '600.000đ',
         },
 
        {
            name:'Áo Thun Nốt Nhạc ',
            link: './detailHtml/detail_aothunnotnhac.html',
            image1: '../img/allProduct/ao-thun-not-nhac-hong-1.jpg',
            image2: '../img/allProduct/ao-thun-not-nhac-hong-2.jpg',
            image3: '../img/allProduct/ao-thun-not-nhac-do-1.jpg',
            image4: '../img/allProduct/ao-thun-not-nhac-do-2.jpg',
            image5: '../img/allProduct/ao-thun-not-nhac-den-1.jpg',
            image6: '../img/allProduct/ao-thun-not-nhac-den-2.jpg',
            color1: '../img/allProduct/color-pink-nhat.png',
            color2: '../img/allProduct/color-red.png',
            color3: '../img/allProduct/color-black.png',
            curprice: '450.000đ',
            oldprice: '600.000đ',
        },
    
        {
            name:'Áo Thun Cest Pouvoir ',
            link: './detailHtml/detail_ao-thun-cest-pouvoir.html',
            image1: '../img/allProduct/ao-thun-cess-poivoir-trang-1.jpg',
            image2: '../img/allProduct/ao-thun-cess-poivoir-trang-2.jpg',
            image3: '../img/allProduct/ao-thun-cess-poivoir-vang-1.jpg',
            image4: '../img/allProduct/ao-thun-cess-poivoir-vang-2.jpg',
            image5: '../img/allProduct/ao-thun-cess-poivoir-den-1.jpg',
            image6: '../img/allProduct/ao-thun-cess-poivoir-den-2.jpg',
            color1: '../img/allProduct/color-white.png',
            color2: '../img/allProduct/color-vang-chanh.png',
            color3: '../img/allProduct/color-black.png',
            curprice: '450.000đ',
            oldprice: '600.000đ',
        },
    
       ],

       render: function() {
            const htmls = this.products.map(function(product,index){
                return `
                <div class="col-3 col-md-6 col-sm-12">
                    <div class="product__card">
                        <a href= ${product.link}>
                            <div class="product__card-img">
                                <img class =" image__1" src= ${product.image1} alt="">
                                <img class =" image__2" src= ${product.image2} style = "display: none" alt="">
                                <img class =" image__3" src= ${product.image3} style = "display: none" alt="">
                                <img class =" image__4" src= ${product.image4} style = "display: none" alt="">
                                <img class =" image__5" src= ${product.image5} style = "display: none" alt="">
                                <img class =" image__6" src= ${product.image6} style = "display: none" alt="">
                            </div>
                        </a>
                        <div class="product__card-info">
                            <div class="product__card-color">
                                <button class="btn-flat checked btn-hover btn-now btn-now1"  style="background-image: url(${product.color1}"></button>
                                <button class="btn-flat btn-hover btn-extra btn-now2"  style="background-image:url(${product.color2}")></button>
                                <button class="btn-flat btn-hover btn-extra btn-now3"  style="background-image: url(${product.color3}"></button>
                            </div>
                            <div class="product__cart-name">
                                <span>${product.name}</span>
                            </div>
                            <div class="product__card-price">
                                <span class="current__price">${product.curprice}</span>
                            <span class="old__price"><del>${product.oldprice}</del></span>
                            </div>
                        </div>
                    </div>
                </div>
                `
           })
           boxProduct.innerHTML = htmls.join('');
       }
}
app.render();
  
// Xử lý khi click vào choosse color và hover vào ảnh

// Xử lý click
const btn1List = document.querySelectorAll('.btn-now1');
const btn2List = document.querySelectorAll('.btn-now2');
const btn3List = document.querySelectorAll('.btn-now3');

const image1List = document.querySelectorAll('.image__1');
const image2List = document.querySelectorAll('.image__2');
const image3List = document.querySelectorAll('.image__3');
const image4List = document.querySelectorAll('.image__4');
const image5List = document.querySelectorAll('.image__5');
const image6List = document.querySelectorAll('.image__6');


// console.log(btn1List);
btn1List.forEach(function(btn1,index){
    btn1.addEventListener('click',function(){
        btn1.classList.add('checked');
        btn2List[index].classList.remove('checked');
        btn3List[index].classList.remove('checked');
        // console.log(btn1,index);
        image1List[index].style.display = 'block';
        image2List[index].style.display = 'none';
        image3List[index].style.display = 'none';
        image4List[index].style.display = 'none';
        image5List[index].style.display = 'none';
        image6List[index].style.display = 'none';

        // image1List[index].classList.remove('visuallyhidden') ;
        // image2List[index].classList.add('visuallyhidden') ;
        // image3List[index].classList.add('visuallyhidden') ;
        // image4List[index].classList.add('visuallyhidden') ;
        // image5List[index].classList.add('visuallyhidden') ;
        // image6List[index].classList.add('visuallyhidden') ;

    })
})

btn2List.forEach(function(btn2,index){
    btn2.addEventListener('click',function(){
        btn2.classList.add('checked');
        btn1List[index].classList.remove('checked');
        btn3List[index].classList.remove('checked');
        // console.log(btn2,index);
        image1List[index].style.display = 'none';
        image2List[index].style.display = 'none';
        image3List[index].style.display = 'block';
        image4List[index].style.display = 'none';
        image5List[index].style.display = 'none';
        image6List[index].style.display = 'none';

        // image1List[index].classList.add('visuallyhidden');
        // image2List[index].classList.add('visuallyhidden');
        // image3List[index].classList.remove('visuallyhidden');
        // image4List[index].classList.add('visuallyhidden');
        // image5List[index].classList.add('visuallyhidden');
        // image6List[index].classList.add('visuallyhidden');
    })
})

btn3List.forEach(function(btn3,index){
    btn3.addEventListener('click',function(){
        btn3.classList.add('checked');
        btn1List[index].classList.remove('checked');
        btn2List[index].classList.remove('checked');
        // console.log(btn3,index);
        image1List[index].style.display = 'none';
        image2List[index].style.display = 'none';
        image3List[index].style.display = 'none';
        image4List[index].style.display = 'none';
        image5List[index].style.display = 'block';
        image6List[index].style.display = 'none';

        // image1List[index].classList.add('visuallyhidden');
        // image2List[index].classList.add('visuallyhidden');
        // image3List[index].classList.add('visuallyhidden');
        // image4List[index].classList.add('visuallyhidden');
        // image5List[index].classList.remove('visuallyhidden');
        // image6List[index].classList.add('visuallyhidden');
    })
})

// // Xử lý hover
const productCard = document.querySelectorAll('.product__card-img');
// console.log(productCard);
productCard.forEach(function(e,index){
    e.addEventListener('mouseover', function(){
        if(btn1List[index].matches('.checked')){
            image1List[index].style.display = 'none';
            image2List[index].style.display = 'block';            
            image3List[index].style.display = 'none';
            image4List[index].style.display = 'none';
            image5List[index].style.display = 'none';
            image6List[index].style.display = 'none';

        // image1List[index].classList.add('visuallyhidden') ;
        // image2List[index].classList.remove('visuallyhidden') ;
        // image3List[index].classList.add('visuallyhidden') ;
        // image4List[index].classList.add('visuallyhidden') ;
        // image5List[index].classList.add('visuallyhidden') ;
        // image6List[index].classList.add('visuallyhidden') ;

        }
        if(btn2List[index].matches('.checked')){
            image1List[index].style.display = 'none';
            image2List[index].style.display = 'none';            
            image3List[index].style.display = 'none';
            image4List[index].style.display = 'block';
            image5List[index].style.display = 'none';
            image6List[index].style.display = 'none';

            
            // image1List[index].classList.add('visuallyhidden') ;
            // image2List[index].classList.add('visuallyhidden') ;
            // image3List[index].classList.add('visuallyhidden') ;
            // image4List[index].classList.remove('visuallyhidden') ;
            // image5List[index].classList.add('visuallyhidden') ;
            // image6List[index].classList.add('visuallyhidden') ;
        }
        if(btn3List[index].matches('.checked')){
            image1List[index].style.display = 'none';
            image2List[index].style.display = 'none';            
            image3List[index].style.display = 'none';
            image4List[index].style.display = 'none';
            image5List[index].style.display = 'none';
            image6List[index].style.display = 'block';

            // image1List[index].classList.add('visuallyhidden') ;
            // image2List[index].classList.add('visuallyhidden') ;
            // image3List[index].classList.add('visuallyhidden') ;
            // image4List[index].classList.add('visuallyhidden') ;
            // image5List[index].classList.add('visuallyhidden') ;
            // image6List[index].classList.remove('visuallyhidden') ;

        }
    })

    e.addEventListener('mouseleave', function(){
        if(btn1List[index].matches('.checked')){
            image1List[index].style.display = 'block';
            image2List[index].style.display = 'none';            
            image3List[index].style.display = 'none';
            image4List[index].style.display = 'none';
            image5List[index].style.display = 'none';
            image6List[index].style.display = 'none';

        //  image1List[index].classList.remove('visuallyhidden') ;
        // image2List[index].classList.add('visuallyhidden') ;
        // image3List[index].classList.add('visuallyhidden') ;
        // image4List[index].classList.add('visuallyhidden') ;
        // image5List[index].classList.add('visuallyhidden') ;
        // image6List[index].classList.add('visuallyhidden') ;

        }
        if(btn2List[index].matches('.checked')){
            image1List[index].style.display = 'none';
            image2List[index].style.display = 'none';            
            image3List[index].style.display = 'block';
            image4List[index].style.display = 'none';
            image5List[index].style.display = 'none';
            image6List[index].style.display = 'none';

        // image1List[index].classList.add('visuallyhidden') ;
        // image2List[index].classList.add('visuallyhidden') ;
        // image3List[index].classList.remove('visuallyhidden') ;
        // image4List[index].classList.add('visuallyhidden') ;
        // image5List[index].classList.add('visuallyhidden') ;
        // image6List[index].classList.add('visuallyhidden') ;
          
        }
        if(btn3List[index].matches('.checked')){
            image1List[index].style.display = 'none';
            image2List[index].style.display = 'none';            
            image3List[index].style.display = 'none';
            image4List[index].style.display = 'none';
            image5List[index].style.display = 'block';
            image6List[index].style.display = 'none';

        // image1List[index].classList.add('visuallyhidden') ;
        // image2List[index].classList.add('visuallyhidden') ;
        // image3List[index].classList.add('visuallyhidden') ;
        // image4List[index].classList.add('visuallyhidden') ;
        // image5List[index].classList.remove('visuallyhidden') ;
        // image6List[index].classList.add('visuallyhidden') ;
        }
    })
})
