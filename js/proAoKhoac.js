const boxProduct = document.querySelector('#products');
// console.log(boxProduct);

const app = {
    products:[
        
        {
            name:'Áo Vest Tay Kiểu',
            link: './detailHtml/detail_aovesttaykieu.html',
            image1: './img/allProduct/ao-vest-tay-kieu-be-1.jpg',
            image2: './img/allProduct/ao-vest-tay-kieu-be-2.jpg',
            image3: './img/allProduct/ao-vest-tay-kieu-green-1.jpg',
            image4: './img/allProduct/ao-vest-tay-kieu-green-2.jpg',
            image5: './img/allProduct/ao-vest-tay-kieu-pink-1.jpg',
            image6: './img/allProduct/ao-vest-tay-kieu-pink-2.jpg',
            color1: './img/allProduct/color-be.png',
            color2: './img/allProduct/color-green.png',
            color3: './img/allProduct/color-pink-nhat.png',
            curprice: '1.272.000đ',
            oldprice: '1.590.000đ',
        },
    
        {
            name:'Áo Vest Viền Ngọc Trai',
            link: './detailHtml/detail_aovestvienngoctrai.html',
            image1: './img/allProduct/ao-vest-vien-ngoc-trai-trang-1.jpg',
            image2: './img/allProduct/ao-vest-vien-ngoc-trai-trang-2.jpg',
            image3: './img/allProduct/ao-vest-vien-ngoc-trai-hong-nhat-1.jpg',
            image4: './img/allProduct/ao-vest-vien-ngoc-trai-hong-nhat-2.jpg',
            image5: './img/allProduct/ao-vest-vien-ngoc-trai-hong-dam-1.jpg',
            image6: './img/allProduct/ao-vest-vien-ngoc-trai-hong-dam-2.jpg',
            color1: './img/allProduct/color-white.png',
            color2: './img/allProduct/color-pink-nhat.png',
            color3: './img/allProduct/color-pink-dam.png',
            curprice: '1.272.000đ',
            oldprice: '1.590.000đ',
        },
    
        {
            name:'Áo Vest Tay Dài',
            link: '../detail_aovesttaydai.html',
            image1: './img/allProduct/ao-vest-tay-dai-trang-1.jpg',
            image2: './img/allProduct/ao-vest-tay-dai-trang-2.jpg',
            image3: './img/allProduct/ao-vest-tay-dai-hong-1.jpg',
            image4: './img/allProduct/ao-vest-tay-dai-hong-2.jpg',
            image5: './img/allProduct/ao-vest-tay-dai-den-1.jpg',
            image6: './img/allProduct/ao-vest-tay-dai-den-2.jpg',
            color1: './img/allProduct/color-white.png',
            color2: './img/allProduct/color-pink-nhat.png',
            color3: './img/allProduct/color-black.png',
            curprice: '1.272.000đ',
            oldprice: '1.590.000đ',
        },
    
        {
            name:'Áo Vest Bộ',
            link: '../detail_aovestbo.html',
            image1: './img/allProduct/ao-vest-bo-green-1.jpg',
            image2: './img/allProduct/ao-vest-bo-green-2.jpg',
            image3: './img/allProduct/ao-vest-bo-be-1.jpg',
            image4: './img/allProduct/ao-vest-bo-be-2.jpg',
            image5: './img/allProduct/ao-vest-bo-den-1.jpg',
            image6: './img/allProduct/ao-vest-bo-den-2.jpg',
            color1: './img/allProduct/color-green.png',
            color2: './img/allProduct/color-be.png',
            color3: './img/allProduct/color-black.png',
            curprice: '1.272.000đ',
            oldprice: '1.590.000đ',
        },
    
        {
            name:'Áo Khoác Dạ Khuy Ẩn',
            link: './detailHtml/detail_ao-khoac-da-khuy-an.html',
            image1: './img/allProduct/ao-khoac-da-khuy-an-den-1.jpg',
            image2: './img/allProduct/ao-khoac-da-khuy-an-den-2.jpg',
            image3: './img/allProduct/ao-khoac-da-khuy-an-xanh-dam-1.jpg',
            image4: './img/allProduct/ao-khoac-da-khuy-an-xanh-dam-2.jpg',
            image5: './img/allProduct/ao-khoac-da-khuy-an-ghi-1.jpg',
            image6: './img/allProduct/ao-khoac-da-khuy-an-ghi-2.jpg',
            color1: './img/allProduct/color-black.png',
            color2: './img/allProduct/color-xanh-dam.png',
            color3: './img/allProduct/color-ghi.png',
            curprice: '1.400.000đ',
            oldprice: '2.990.000đ',
        },
    
        {
            name:'Áo Khoác Dạ Tay Bồng Kèm Đai',
            link: './detailHtml/detail_ao-khoac-da-tay-bong.html',
            image1: './img/allProduct/ao-khoac-da-tay-bong-xanh-dam-1.jpg',
            image2: './img/allProduct/ao-khoac-da-tay-bong-xanh-dam-2.jpg',
            image3: './img/allProduct/ao-khoac-da-tay-bong-hong-1.jpg',
            image4: './img/allProduct/ao-khoac-da-tay-bong-hong-2.jpg',
            image5: './img/allProduct/ao-khoac-da-tay-bong-red-1.jpg',
            image6: './img/allProduct/ao-khoac-da-tay-bong-red-2.jpg',
            color1: './img/allProduct/color-xanh-dam.png',
            color2: './img/allProduct/color-pink-nhat.png',
            color3: './img/allProduct/color-brown.png',
            curprice: '1.400.000đ',
            oldprice: '2.990.000đ',
        },
    
        {
            name:'Áo Khoác Dạ Cổ Cao',
            link: '../detail_ao-khoac-da-co-cao.html',
            image1: './img/allProduct/ao-khoac-da-co-cao-xanh-dam-1.jpg',
            image2: './img/allProduct/ao-khoac-da-co-cao-xanh-dam-2.jpg',
            image3: './img/allProduct/ao-khoac-da-co-cao-blue-1.jpg',
            image4: './img/allProduct/ao-khoac-da-co-cao-blue-2.jpg',
            image5: './img/allProduct/ao-khoac-da-co-cao-cam-1.jpg',
            image6: './img/allProduct/ao-khoac-da-co-cao-cam-2.jpg',
            color1: './img/allProduct/color-xanh-dam.png',
            color2: './img/allProduct/color-blue.png',
            color3: './img/allProduct/color-orange.png',
            curprice: '1.400.000đ',
            oldprice: '2.990.000đ',
        },
    
        {
            name:'Áo Khoác Dạ Tay Giắc Lăng',
            link: '../detail_ao-khoac-da-tay-gl.html',
            image1: './img/allProduct/ao-khoac-da-tay-gl-be-1.jpg',
            image2: './img/allProduct/ao-khoac-da-tay-gl-be-2.jpg',
            image3: './img/allProduct/ao-khoac-da-tay-gl-vang-1.jpg',
            image4: './img/allProduct/ao-khoac-da-tay-gl-vang-2.jpg',
            image5: './img/allProduct/ao-khoac-da-tay-gl-den-1.jpg',
            image6: './img/allProduct/ao-khoac-da-tay-gl-den-2.jpg',
            color1: './img/allProduct/color-be.png',
            color2: './img/allProduct/color-yellow.png',
            color3: './img/allProduct/color-black.png',
            curprice: '1.400.000đ',
            oldprice: '2.990.000đ',
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

