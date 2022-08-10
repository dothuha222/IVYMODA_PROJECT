const boxProduct = document.querySelector('#products');
// console.log(boxProduct);

const app = {
    products:[
        {
            name:'Đầm Xòe Signature',
            link: './detailHtml/detail_dam-xoe-signature.html',
            image1: '../img/allProduct/dam-xoe-signature-be-1.jpg',
            image2: '../img/allProduct/dam-xoe-signature-be-2.jpg',
            image3: '../img/allProduct/dam-xoe-signature-cam-1.jpg',
            image4: '../img/allProduct/dam-xoe-signature-cam-2.jpg',
            image5: '../img/allProduct/dam-xoe-signature-den-1.jpg',
            image6: '../img/allProduct/dam-xoe-signature-den-2.jpg',
            color1: '../img/allProduct/color-be.png',
            color2: '../img/allProduct/color-orange.png',
            color3: '../img/allProduct/color-black.png',
            curprice: '1.134.000đ',
            oldprice: '1.890.000đ',
        },

        {
            name:'Đầm Dự Tiệc Midi',
            link: './detailHtml/detail_dam-du-tiec-midi.html',
            image1: '../img/allProduct/dam-du-tiec-midi-nau-1.jpg',
            image2: '../img/allProduct/dam-du-tiec-midi-nau-2.jpg',
            image3: '../img/allProduct/dam-du-tiec-midi-hong-1.jpg',
            image4: '../img/allProduct/dam-du-tiec-midi-hong-2.jpg',
            image5: '../img/allProduct/dam-du-tiec-midi-do-1.jpg',
            image6: '../img/allProduct/dam-du-tiec-midi-do-2.jpg',
            color1: '../img/allProduct/color-brown.png',
            color2: '../img/allProduct/color-pink-nhat.png',
            color3: '../img/allProduct/color-red.png',
            curprice: '1.134.000đ',
            oldprice: '1.890.000đ',
        },

        {
            name:'Đầm Ren Đuôi Cá',
            link: './detailHtml/detail_dam-ren-duoi-ca.html',
            image1: '../img/allProduct/dam-ren-duoi-ca-be-1.jpg',
            image2: '../img/allProduct/dam-ren-duoi-ca-be-2.jpg',
            image3: '../img/allProduct/dam-ren-duoi-ca-trang-1.jpg',
            image4: '../img/allProduct/dam-ren-duoi-ca-trang-2.jpg',
            image5: '../img/allProduct/dam-ren-duoi-ca-da-1.jpg',
            image6: '../img/allProduct/dam-ren-duoi-ca-da-2.jpg',
            color1: '../img/allProduct/color-be.png',
            color2: '../img/allProduct/color-white.png',
            color3: '../img/allProduct/color-da.png',
            curprice: '1.134.000đ',
            oldprice: '1.890.000đ',
        },

        {
            name:'Đầm Voan Vai Lệch',
            link: './detailHtml/detail_dam-voan-vai-lech.html',
            image1: '../img/allProduct/dam-voan-vai-lech-trang-1.jpg',
            image2: '../img/allProduct/dam-voan-vai-lech-trang-2.jpg',
            image3: '../img/allProduct/dam-voan-vai-lech-hong-1.jpg',
            image4: '../img/allProduct/dam-voan-vai-lech-hong-2.jpg',
            image5: '../img/allProduct/dam-voan-vai-lech-do-1.jpg',
            image6: '../img/allProduct/dam-voan-vai-lech-do-2.jpg',
            color1: '../img/allProduct/color-white.png',
            color2: '../img/allProduct/color-pink-nhat.png',
            color3: '../img/allProduct/color-red.png',
            curprice: '1.134.000đ',
            oldprice: '1.890.000đ',
        },

        {
            name:'Đầm Dạ Hội Cổ Cách Điệu',
            link: './detailHtml/detail_dam-da-hoi-co-cach-dieu.html',
            image1: '../img/allProduct/dam-da-hoi-co-cach-dieu-dam-1.jpg',
            image2: '../img/allProduct/dam-da-hoi-co-cach-dieu-dam-2.jpg',
            image3: '../img/allProduct/dam-da-hoi-co-cach-dieu-hong-1.jpg',
            image4: '../img/allProduct/dam-da-hoi-co-cach-dieu-hong-2.jpg',
            image5: '../img/allProduct/dam-da-hoi-co-cach-dieu-be-1.jpg',
            image6: '../img/allProduct/dam-da-hoi-co-cach-dieu-be-2.jpg',
            color1: '../img/allProduct/color-pink-dam.png',
            color2: '../img/allProduct/color-pink-nhat.png',
            color3: '../img/allProduct/color-be.png',
            curprice: '1.192.000đ',
            oldprice: '1.490.000đ',
        },
    
        {
            name:'Đầm Ôm Vai Xếp',
            link: '../detail_dam-om-vai-xep.html',
            image1: '../img/allProduct/dam-om-vai-xep-xanh-1.jpg',
            image2: '../img/allProduct/dam-om-vai-xep-xanh-2.jpg',
            image3: '../img/allProduct/dam-om-vai-xep-red-1.jpg',
            image4: '../img/allProduct/dam-om-vai-xep-red-2.jpg',
            image5: '../img/allProduct/dam-om-vai-xep-black-1.jpg',
            image6: '../img/allProduct/dam-om-vai-xep-black-2.jpg',
            color1: '../img/allProduct/color-blue.png',
            color2: '../img/allProduct/color-red.png',
            color3: '../img/allProduct/color-black.png',
            curprice: '1.192.000đ',
            oldprice: '1.490.000đ',
        },
    
        {
            name:'Đầm Xòe Tùng Xếp Tầng',
            link: './detailHtml/detail_dam-xoe-xep-tang.html',
            image1: '../img/allProduct/dam-xoe-xep-tang-trang-1.jpg',
            image2: '../img/allProduct/dam-xoe-xep-tang-trang-2.jpg',
            image3: '../img/allProduct/dam-xoe-xep-tang-do-1.jpg',
            image4: '../img/allProduct/dam-xoe-xep-tang-do-2.jpg',
            image5: '../img/allProduct/dam-xoe-xep-tang-den-1.jpg',
            image6: '../img/allProduct/dam-xoe-xep-tang-den-2.jpg',
            color1: '../img/allProduct/color-white.png',
            color2: '../img/allProduct/color-red.png',
            color3: '../img/allProduct/color-black.png',
            curprice: '1.192.000đ',
            oldprice: '1.490.000đ',
        },
        
        {
            name:'Đầm Ôm Vải Tapta',
            link: '../detail_dam-om-vai-tapta.html',
            image1: '../img/allProduct/dam-om-vai-tapta-hong-1.jpg',
            image2: '../img/allProduct/dam-om-vai-tapta-hong-2.jpg',
            image3: '../img/allProduct/dam-om-vai-tapta-black-1.jpg',
            image4: '../img/allProduct/dam-om-vai-tapta-black-2.jpg',
            image5: '../img/allProduct/dam-om-vai-tapta-xanh-1.jpg',
            image6: '../img/allProduct/dam-om-vai-tapta-xanh-2.jpg',
            color1: '../img/allProduct/color-pink-dam.png',
            color2: '../img/allProduct/color-black.png',
            color3: '../img/allProduct/color-blue.png',
            curprice: '1.192.000đ',
            oldprice: '1.490.000đ',
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
