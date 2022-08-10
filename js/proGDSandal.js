const boxProduct = document.querySelector('#products');
// console.log(boxProduct);

const app = {
    products:[
        {
            name:'Giày Cao Gót Linny',
            link: './detailHtml/detail_giay-cao-got-linny.html',
            image1: '../img/allProduct/giay-cao-got-linny-hong-1.jpg',
            image2: '../img/allProduct/giay-cao-got-linny-hong-2.jpg',
            image3: '../img/allProduct/giay-cao-got-linny-be-1.jpg',
            image4: '../img/allProduct/giay-cao-got-linny-be-2.jpg',
            image5: '../img/allProduct/giay-cao-got-linny-black-1.jpg',
            image6: '../img/allProduct/giay-cao-got-linny-black-2.jpg',
            color1: '../img/allProduct/color-pink-dam.png',
            color2: '../img/allProduct/color-be.png',
            color3: '../img/allProduct/color-black.png',
            curprice: '680.000đ',
            oldprice: '990.000đ',
        },
    
        {
            name:'Giày Cao Gót Skingback Phối Khóa',
            link: './detailHtml/detail_giay-cao-got-skingback-khoa.html',
            image1: '../img/allProduct/giay-cao-got-skingback-khoa-be-1.jpg',
            image2: '../img/allProduct/giay-cao-got-skingback-khoa-be-2.jpg',
            image3: '../img/allProduct/giay-cao-got-skingback-khoa-den-1.jpg',
            image4: '../img/allProduct/giay-cao-got-skingback-khoa-den-2.jpg',
            image5: '../img/allProduct/giay-cao-got-skingback-khoa-da-1.jpg',
            image6: '../img/allProduct/giay-cao-got-skingback-khoa-da-2.jpg',
            color1: '../img/allProduct/color-be.png',
            color2: '../img/allProduct/color-black.png',
            color3: '../img/allProduct/color-white.png',
            curprice: '680.000đ',
            oldprice: '990.000đ',
        },
    
        {
            name:'Giày Cao Gót Skingback Tối Giản',
            link: './detailHtml/detail_giay-cao-got-skingback-eazy.html',
            image1: '../img/allProduct/giay-cao-got-skingback-eazy-tim-1.jpg',
            image2: '../img/allProduct/giay-cao-got-skingback-eazy-tim-2.jpg',
            image3: '../img/allProduct/giay-cao-got-skingback-eazy-hong-1.jpg',
            image4: '../img/allProduct/giay-cao-got-skingback-eazy-hong-2.jpg',
            image5: '../img/allProduct/giay-cao-got-skingback-eazy-black-1.jpg',
            image6: '../img/allProduct/giay-cao-got-skingback-eazy-black-2.jpg',
            color1: '../img/allProduct/color-tim.png',
            color2: '../img/allProduct/color-pink-dam.png',
            color3: '../img/allProduct/color-black.png',
            curprice: '680.000đ',
            oldprice: '990.000đ',
        },
    
        {
            name:'Giày Mules Mũi Nhọn Đính Khóa',
            link: './detailHtml/detail_giay-mules-mui-nhon.html',
            image1: '../img/allProduct/giay-mules-mui-nhon-be-1.jpg',
            image2: '../img/allProduct/giay-mules-mui-nhon-be-2.jpg',
            image3: '../img/allProduct/giay-mules-mui-nhon-da-1.jpg',
            image4: '../img/allProduct/giay-mules-mui-nhon-da-2.jpg',
            image5: '../img/allProduct/giay-mules-mui-nhon-black-1.jpg',
            image6: '../img/allProduct/giay-mules-mui-nhon-black-2.jpg',
            color1: '../img/allProduct/color-be.png',
            color2: '../img/allProduct/color-da.png',
            color3: '../img/allProduct/color-black.png',
            curprice: '680.000đ',
            oldprice: '990.000đ',
        },
    
        {
            name:'Giày Sandal Mũi Vuông Quai Xoắn',
            link: '../detail_giay-sandal-mui-vuong-quai-xoan.html',
            image1: '../img/allProduct/giay-sandal-mui-vuong-quai-xoan-be-1.jpg',
            image2: '../img/allProduct/giay-sandal-mui-vuong-quai-xoan-be-2.jpg',
            image3: '../img/allProduct/giay-sandal-mui-vuong-quai-xoan-da-1.jpg',
            image4: '../img/allProduct/giay-sandal-mui-vuong-quai-xoan-da-2.jpg',
            image5: '../img/allProduct/giay-sandal-mui-vuong-quai-xoan-black-1.jpg',
            image6: '../img/allProduct/giay-sandal-mui-vuong-quai-xoan-black-2.jpg',
            color1: '../img/allProduct/color-be.png',
            color2: '../img/allProduct/color-da.png',
            color3: '../img/allProduct/color-black.png',
            curprice: '560.000đ',
            oldprice: '800.000đ',
        },
    
        {
            name:'Giày Sandal Gót Trong',
            link: '../detail_giay-sandal-got-trong.html',
            image1: '../img/allProduct/giay-sandal-got-trong-be-1.jpg',
            image2: '../img/allProduct/giay-sandal-got-trong-be-2.jpg',
            image3: '../img/allProduct/giay-sandal-got-trong-den-1.jpg',
            image4: '../img/allProduct/giay-sandal-got-trong-den-2.jpg',
            image5: '../img/allProduct/giay-sandal-got-trong-trang-1.jpg',
            image6: '../img/allProduct/giay-sandal-got-trong-trang-2.jpg',
            color1: '../img/allProduct/color-be.png',
            color2: '../img/allProduct/color-black.png',
            color3: '../img/allProduct/color-white.png',
            curprice: '560.000đ',
            oldprice: '800.000đ',
        },
    
        {
            name:'Giày Sandal Gót Trụ',
            link: '../detail_giay-sandal-got-tru.html',
            image1: '../img/allProduct/giay-sandal-got-tru-hong-1.jpg',
            image2: '../img/allProduct/giay-sandal-got-tru-hong-2.jpg',
            image3: '../img/allProduct/giay-sandal-got-tru-den-1.jpg',
            image4: '../img/allProduct/giay-sandal-got-tru-den-2.jpg',
            image5: '../img/allProduct/giay-sandal-got-tru-be-1.jpg',
            image6: '../img/allProduct/giay-sandal-got-tru-be-2.jpg',
            color1: '../img/allProduct/color-pink-nhat.png',
            color2: '../img/allProduct/color-black.png',
            color3: '../img/allProduct/color-be.png',
            curprice: '560.000đ',
            oldprice: '800.000đ',
        },
    
        {
            name:'Giày Sandal Phối Quai Chéo',
            link: '../detail_giay-sandal-phoi-quai-cheo.html',
            image1: '../img/allProduct/giay-sandal-phoi-quai-cheo-da-1.jpg',
            image2: '../img/allProduct/giay-sandal-phoi-quai-cheo-da-2.jpg',
            image3: '../img/allProduct/giay-sandal-phoi-quai-cheo-den-1.jpg',
            image4: '../img/allProduct/giay-sandal-phoi-quai-cheo-den-2.jpg',
            image5: '../img/allProduct/giay-sandal-phoi-quai-cheo-white-1.jpg',
            image6: '../img/allProduct/giay-sandal-phoi-quai-cheo-white-2.jpg',
            color1: '../img/allProduct/color-da.png',
            color2: '../img/allProduct/color-black.png',
            color3: '../img/allProduct/color-white.png',
            curprice: '560.000đ',
            oldprice: '800.000đ',
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
