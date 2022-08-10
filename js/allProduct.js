const boxProduct = document.querySelector('#products');
// console.log(boxProduct);

const app = {
    products:[
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
           name:'Áo Sơ Mi Phối Nơ Bản Lớn',
           link: './detailHtml/detail_ao-so-mi-phoi-no.html',
           image1: '../img/allProduct/ao-so-mi-phoi-no-trang-1.jpg',
           image2: '../img/allProduct/ao-so-mi-phoi-no-trang-2.jpg',
           image3: '../img/allProduct/ao-so-mi-phoi-no-be-1.jpg',
           image4: '../img/allProduct/ao-so-mi-phoi-no-be-2.jpg',
           image5: '../img/allProduct/ao-so-mi-phoi-no-green-1.jpg',
           image6: '../img/allProduct/ao-so-mi-phoi-no-green-2.jpg',
           color1: '../img/allProduct/color-white.png',
           color2: '../img/allProduct/color-be.png',
           color3: '../img/allProduct/color-green.png',
           curprice: '872.000đ',
           oldprice: '1.090.000đ',
       },
   
       {
           name:'Áo Sơ Mi Thêu Hoa Nổi',
           link: './detailHtml/detail_ao-so-mi-theu-hoa-noi.html',
           image1: '../img/allProduct/ao-so-mi-theu-hoa-noi-vang-1.jpg',
           image2: '../img/allProduct/ao-so-mi-theu-hoa-noi-vang-2.jpg',
           image3: '../img/allProduct/ao-so-mi-theu-hoa-noi-be-1.jpg',
           image4: '../img/allProduct/ao-so-mi-theu-hoa-noi-be-2.jpg',
           image5: '../img/allProduct/ao-so-mi-theu-hoa-noi-green-1.jpg',
           image6: '../img/allProduct/ao-so-mi-theu-hoa-noi-green-2.jpg',
           color1: '../img/allProduct/color-yellow.png',
           color2: '../img/allProduct/color-be.png',
           color3: '../img/allProduct/color-green.png',
           curprice: '872.000đ',
           oldprice: '1.090.000đ',
       },
   
       {
           name:'Áo Sơ Mi Cổ Đức',
           link: './detailHtml/detail_ao-so-mi-co-duc.html',
           image1: '../img/allProduct/ao-so-mi-co-duc-trang-1.jpg',
           image2: '../img/allProduct/ao-so-mi-co-duc-trang-2.jpg',
           image3: '../img/allProduct/ao-so-mi-co-duc-be-1.jpg',
           image4: '../img/allProduct/ao-so-mi-co-duc-be-2.jpg',
           image5: '../img/allProduct/ao-so-mi-co-duc-hong-1.jpg',
           image6: '../img/allProduct/ao-so-mi-co-duc-hong-2.jpg',
           color1: '../img/allProduct/color-white.png',
           color2: '../img/allProduct/color-be.png',
           color3: '../img/allProduct/color-pink-dam.png',
           curprice: '872.000đ',
           oldprice: '1.090.000đ',
       },
   
       {
           name:'Áo Sơ Mi Vải Tencel',
           link: './detailHtml/detail_ao-so-mi-vai-tencel.html',
           image1: '../img/allProduct/ao-so-mi-vai-tencel-green-1.jpg',
           image2: '../img/allProduct/ao-so-mi-vai-tencel-green-2.jpg',
           image3: '../img/allProduct/ao-so-mi-vai-tencel-red-1.jpg',
           image4: '../img/allProduct/ao-so-mi-vai-tencel-red-2.jpg',
           image5: '../img/allProduct/ao-so-mi-vai-tencel-be-1.jpg',
           image6: '../img/allProduct/ao-so-mi-vai-tencel-be-2.jpg',
           color1: '../img/allProduct/color-green.png',
           color2: '../img/allProduct/color-red.png',
           color3: '../img/allProduct/color-be.png',
           curprice: '872.000đ',
           oldprice: '1.090.000đ',
       },

        {
            name:'Set Áo Sơ Mi Lụa',
            link: '../detail_set-ao-so-mi-lua.html',
            image1: '../img/allProduct/set-ao-so-mi-lua-white-1.jpg',
            image2: '../img/allProduct/set-ao-so-mi-lua-white-2.jpg',
            image3: '../img/allProduct/set-ao-so-mi-lua-tim-1.jpg',
            image4: '../img/allProduct/set-ao-so-mi-lua-tim-2.jpg',
            image5: '../img/allProduct/set-ao-so-mi-lua-den-1.jpg',
            image6: '../img/allProduct/set-ao-so-mi-lua-den-2.jpg',
            color1: '../img/allProduct/color-white.png',
            color2: '../img/allProduct/color-red.png',
            color3: '../img/allProduct/color-black.png',
            curprice: '872.000đ',
            oldprice: '1.090.000đ',
        },
        {
            name:'Áo Sơ Mi Tay Dài Xếp Nếp',
            link: '../detail_ao-so-mi-tay-dai-xep-nep.html',
            image1: '../img/allProduct/ao-so-mi-tay-dai-xep-nep-white-1.jpg',
            image2: '../img/allProduct/ao-so-mi-tay-dai-xep-nep-white-2.jpg',
            image3: '../img/allProduct/ao-so-mi-tay-dai-xep-nep-be-1.jpg',
            image4: '../img/allProduct/ao-so-mi-tay-dai-xep-nep-be-2.jpg',
            image5: '../img/allProduct/ao-so-mi-tay-dai-xep-nep-vang-1.jpg',
            image6: '../img/allProduct/ao-so-mi-tay-dai-xep-nep-vang-2.jpg',
            color1: '../img/allProduct/color-white.png',
            color2: '../img/allProduct/color-be.png',
            color3: '../img/allProduct/color-yellow.png',
            curprice: '872.000đ',
            oldprice: '1.090.000đ',
        },
        {
            name:'Áo Sơ Mi Lụa Thêu Viền',
            link: '../detail_ao-so-mi-lua-theu-vien.html',
            image1: '../img/allProduct/ao-so-mi-lua-theu-vien-white-1.jpg',
            image2: '../img/allProduct/ao-so-mi-lua-theu-vien-white-2.jpg',
            image3: '../img/allProduct/ao-so-mi-lua-theu-vien-tim-1.jpg',
            image4: '../img/allProduct/ao-so-mi-lua-theu-vien-tim-2.jpg',
            image5: '../img/allProduct/ao-so-mi-lua-theu-vien-dam-1.jpg',
            image6: '../img/allProduct/ao-so-mi-lua-theu-vien-dam-2.jpg',
            color1: '../img/allProduct/color-white.png',
            color2: '../img/indexPage/choose-color2-4.png',
            color3: '../img/allProduct/color-pink-dam.png',
            curprice: '872.000đ',
            oldprice: '1.090.000đ',
        },
        {
            name:'Áo Sơ Mi Tay Lỡ',
            link: '../detail_ao-so-mi-tay-lo.html',
            image1: '../img/allProduct/ao-so-mi-tay-lo-be-1.jpg',
            image2: '../img/allProduct/ao-so-mi-tay-lo-be-2.jpg',
            image3: '../img/allProduct/ao-so-mi-tay-lo-black-1.jpg',
            image4: '../img/allProduct/ao-so-mi-tay-lo-black-2.jpg',
            image5: '../img/allProduct/ao-so-mi-tay-lo-ttrang-1.jpg',
            image6: '../img/allProduct/ao-so-mi-tay-lo-ttrang-2.jpg',
            color1: '../img/allProduct/color-be.png',
            color2: '../img/allProduct/color-black.png',
            color3: '../img/allProduct/color-white.png',
            curprice: '872.000đ',
            oldprice: '1.090.000đ',
        },
   
       {
           name:'Áo Vest Tay Kiểu',
           link: './detailHtml/detail_aovesttaykieu.html',
           image1: '../img/allProduct/ao-vest-tay-kieu-be-1.jpg',
           image2: '../img/allProduct/ao-vest-tay-kieu-be-2.jpg',
           image3: '../img/allProduct/ao-vest-tay-kieu-green-1.jpg',
           image4: '../img/allProduct/ao-vest-tay-kieu-green-2.jpg',
           image5: '../img/allProduct/ao-vest-tay-kieu-pink-1.jpg',
           image6: '../img/allProduct/ao-vest-tay-kieu-pink-2.jpg',
           color1: '../img/allProduct/color-be.png',
           color2: '../img/allProduct/color-green.png',
           color3: '../img/allProduct/color-pink-nhat.png',
           curprice: '1.272.000đ',
           oldprice: '1.590.000đ',
       },
   
       {
           name:'Áo Vest Viền Ngọc Trai',
           link: './detailHtml/detail_aovestvienngoctrai.html',
           image1: '../img/allProduct/ao-vest-vien-ngoc-trai-trang-1.jpg',
           image2: '../img/allProduct/ao-vest-vien-ngoc-trai-trang-2.jpg',
           image3: '../img/allProduct/ao-vest-vien-ngoc-trai-hong-nhat-1.jpg',
           image4: '../img/allProduct/ao-vest-vien-ngoc-trai-hong-nhat-2.jpg',
           image5: '../img/allProduct/ao-vest-vien-ngoc-trai-hong-dam-1.jpg',
           image6: '../img/allProduct/ao-vest-vien-ngoc-trai-hong-dam-2.jpg',
           color1: '../img/allProduct/color-white.png',
           color2: '../img/allProduct/color-pink-nhat.png',
           color3: '../img/allProduct/color-pink-dam.png',
           curprice: '1.272.000đ',
           oldprice: '1.590.000đ',
       },
   
       {
           name:'Áo Vest Tay Dài',
           link: '../detail_aovesttaydai.html',
           image1: '../img/allProduct/ao-vest-tay-dai-trang-1.jpg',
           image2: '../img/allProduct/ao-vest-tay-dai-trang-2.jpg',
           image3: '../img/allProduct/ao-vest-tay-dai-hong-1.jpg',
           image4: '../img/allProduct/ao-vest-tay-dai-hong-2.jpg',
           image5: '../img/allProduct/ao-vest-tay-dai-den-1.jpg',
           image6: '../img/allProduct/ao-vest-tay-dai-den-2.jpg',
           color1: '../img/allProduct/color-white.png',
           color2: '../img/allProduct/color-pink-nhat.png',
           color3: '../img/allProduct/color-black.png',
           curprice: '1.272.000đ',
           oldprice: '1.590.000đ',
       },
   
       {
           name:'Áo Vest Bộ',
           link: '../detail_aovestbo.html',
           image1: '../img/allProduct/ao-vest-bo-green-1.jpg',
           image2: '../img/allProduct/ao-vest-bo-green-2.jpg',
           image3: '../img/allProduct/ao-vest-bo-be-1.jpg',
           image4: '../img/allProduct/ao-vest-bo-be-2.jpg',
           image5: '../img/allProduct/ao-vest-bo-den-1.jpg',
           image6: '../img/allProduct/ao-vest-bo-den-2.jpg',
           color1: '../img/allProduct/color-green.png',
           color2: '../img/allProduct/color-be.png',
           color3: '../img/allProduct/color-black.png',
           curprice: '1.272.000đ',
           oldprice: '1.590.000đ',
       },
   
       {
           name:'Áo Khoác Dạ Khuy Ẩn',
           link: './detailHtml/detail_ao-khoac-da-khuy-an.html',
           image1: '../img/allProduct/ao-khoac-da-khuy-an-den-1.jpg',
           image2: '../img/allProduct/ao-khoac-da-khuy-an-den-2.jpg',
           image3: '../img/allProduct/ao-khoac-da-khuy-an-xanh-dam-1.jpg',
           image4: '../img/allProduct/ao-khoac-da-khuy-an-xanh-dam-2.jpg',
           image5: '../img/allProduct/ao-khoac-da-khuy-an-ghi-1.jpg',
           image6: '../img/allProduct/ao-khoac-da-khuy-an-ghi-2.jpg',
           color1: '../img/allProduct/color-black.png',
           color2: '../img/allProduct/color-xanh-dam.png',
           color3: '../img/allProduct/color-ghi.png',
           curprice: '1.400.000đ',
           oldprice: '2.990.000đ',
       },
   
       {
           name:'Áo Khoác Dạ Tay Bồng Kèm Đai',
           link: './detailHtml/detail_ao-khoac-da-tay-bong.html',
           image1: '../img/allProduct/ao-khoac-da-tay-bong-xanh-dam-1.jpg',
           image2: '../img/allProduct/ao-khoac-da-tay-bong-xanh-dam-2.jpg',
           image3: '../img/allProduct/ao-khoac-da-tay-bong-hong-1.jpg',
           image4: '../img/allProduct/ao-khoac-da-tay-bong-hong-2.jpg',
           image5: '../img/allProduct/ao-khoac-da-tay-bong-red-1.jpg',
           image6: '../img/allProduct/ao-khoac-da-tay-bong-red-2.jpg',
           color1: '../img/allProduct/color-xanh-dam.png',
           color2: '../img/allProduct/color-pink-nhat.png',
           color3: '../img/allProduct/color-brown.png',
           curprice: '1.400.000đ',
           oldprice: '2.990.000đ',
       },
   
       {
           name:'Áo Khoác Dạ Cổ Cao',
           link: '../detail_ao-khoac-da-co-cao.html',
           image1: '../img/allProduct/ao-khoac-da-co-cao-xanh-dam-1.jpg',
           image2: '../img/allProduct/ao-khoac-da-co-cao-xanh-dam-2.jpg',
           image3: '../img/allProduct/ao-khoac-da-co-cao-blue-1.jpg',
           image4: '../img/allProduct/ao-khoac-da-co-cao-blue-2.jpg',
           image5: '../img/allProduct/ao-khoac-da-co-cao-cam-1.jpg',
           image6: '../img/allProduct/ao-khoac-da-co-cao-cam-2.jpg',
           color1: '../img/allProduct/color-xanh-dam.png',
           color2: '../img/allProduct/color-blue.png',
           color3: '../img/allProduct/color-orange.png',
           curprice: '1.400.000đ',
           oldprice: '2.990.000đ',
       },
   
       {
           name:'Áo Khoác Dạ Tay Giắc Lăng',
           link: '../detail_ao-khoac-da-tay-gl.html',
           image1: '../img/allProduct/ao-khoac-da-tay-gl-be-1.jpg',
           image2: '../img/allProduct/ao-khoac-da-tay-gl-be-2.jpg',
           image3: '../img/allProduct/ao-khoac-da-tay-gl-vang-1.jpg',
           image4: '../img/allProduct/ao-khoac-da-tay-gl-vang-2.jpg',
           image5: '../img/allProduct/ao-khoac-da-tay-gl-den-1.jpg',
           image6: '../img/allProduct/ao-khoac-da-tay-gl-den-2.jpg',
           color1: '../img/allProduct/color-be.png',
           color2: '../img/allProduct/color-yellow.png',
           color3: '../img/allProduct/color-black.png',
           curprice: '1.400.000đ',
           oldprice: '2.990.000đ',
       },
   
       {
           name:'Quần Mini Jean Ống Gập',
           link: '../detail_quan-mini-jean-ong-gap.html',
           image1: '../img/allProduct/quan-mini-jean-ong-gap-xanh-dam-1.jpg',
           image2: '../img/allProduct/quan-mini-jean-ong-gap-xanh-dam-2.jpg',
           image3: '../img/allProduct/quan-mini-jean-ong-gap-den-1.jpg',
           image4: '../img/allProduct/quan-mini-jean-ong-gap-den-2.jpg',
           image5: '../img/allProduct/quan-mini-jean-ong-gap-blue-1.jpg',
           image6: '../img/allProduct/quan-mini-jean-ong-gap-blue-2.jpg',
           color1: '../img/allProduct/color-xanh-dam.png',
           color2: '../img/allProduct/color-black.png',
           color3: '../img/allProduct/color-blue.png',
           curprice: '872.000đ',
           oldprice: '1.090.000đ',
       },
   
       {
           name:'Quần Jean Dáng Baggy',
           link: '../detail_quan-jean-dang-baggy.html',
           image1: '../img/allProduct/quan-jean-dang-baggy-xanh-dam-1.jpg',
           image2: '../img/allProduct/quan-jean-dang-baggy-xanh-dam-2.jpg',
           image3: '../img/allProduct/quan-jean-dang-baggy-den-1.jpg',
           image4: '../img/allProduct/quan-jean-dang-baggy-den-2.jpg',
           image5: '../img/allProduct/quan-jean-dang-baggy-blue-1.jpg',
           image6: '../img/allProduct/quan-jean-dang-baggy-blue-2.jpg',
           color1: '../img/allProduct/color-xanh-dam.png',
           color2: '../img/allProduct/color-black.png',
           color3: '../img/allProduct/color-blue.png',
           curprice: '872.000đ',
           oldprice: '1.090.000đ',
       },
   
       {
           name:'Quần Jean Ống Loe',
           link: '../detail_quan-jean-ong-loe.html',
           image1: '../img/allProduct/quan-jean-ong-loe-xanh-dam-1.jpg',
           image2: '../img/allProduct/quan-jean-ong-loe-xanh-dam-2.jpg',
           image3: '../img/allProduct/quan-jean-ong-loe-blue-1.jpg',
           image4: '../img/allProduct/quan-jean-ong-loe-blue-2.jpg',
           image5: '../img/allProduct/quan-jean-ong-loe-xanh-nhat-1.jpg',
           image6: '../img/allProduct/quan-jean-ong-loe-xanh-nhat-2.jpg',
           color1: '../img/allProduct/color-xanh-dam.png',
           color2: '../img/allProduct/color-blue.png',
           color3: '../img/allProduct/color-blue-1.png',
           curprice: '872.000đ',
           oldprice: '1.090.000đ',
       },
   
       {
           name:'Quần Jean Ống Suông',
           link: '../detail_quan-jean-ong-suong.html',
           image1: '../img/allProduct/quan-jean-ong-suong-xanh-dam-1.jpg',
           image2: '../img/allProduct/quan-jean-ong-suong-xanh-dam-2.jpg',
           image3: '../img/allProduct/quan-jean-ong-suong-blue-1.jpg',
           image4: '../img/allProduct/quan-jean-ong-suong-blue-2.jpg',
           image5: '../img/allProduct/quan-jean-ong-suong-xanh-nhat-1.jpg',
           image6: '../img/allProduct/quan-jean-ong-suong-xanh-nhat-2.jpg',
           color1: '../img/allProduct/color-xanh-dam.png',
           color2: '../img/allProduct/color-blue.png',
           color3: '../img/allProduct/color-blue-1.png',
           curprice: '872.000đ',
           oldprice: '1.090.000đ',
       },
   
       {
           name:'Quần Dài Ống Suông',
           link: './detailHtml/detail_quan-dai-ong-suong.html',
           image1: '../img/allProduct/quan-dai-ong-suong-hong-1.jpg',
           image2: '../img/allProduct/quan-dai-ong-suong-hong-2.jpg',
           image3: '../img/allProduct/quan-dai-ong-suong-nau-1.jpg',
           image4: '../img/allProduct/quan-dai-ong-suong-nau-2.jpg',
           image5: '../img/allProduct/quan-dai-ong-suong-den-1.jpg',
           image6: '../img/allProduct/quan-dai-ong-suong-den-2.jpg',
           color1: '../img/allProduct/color-pink-nhat.png',
           color2: '../img/allProduct/color-brown.png',
           color3: '../img/allProduct/color-black.png',
           curprice: '952.000đ',
           oldprice: '1.190.000đ',
       },
   
       {
           name:'Quần Cài Đai Lệch',
           link: './detailHtml/detail_quan-cai-dai-lech.html',
           image1: '../img/allProduct/quan-cai-dai-lech-be-1.jpg',
           image2: '../img/allProduct/quan-cai-dai-lech-be-2.jpg',
           image3: '../img/allProduct/quan-cai-dai-lech-green-1.jpg',
           image4: '../img/allProduct/quan-cai-dai-lech-green-2.jpg',
           image5: '../img/allProduct/quan-cai-dai-lech-blue-1.jpg',
           image6: '../img/allProduct/quan-cai-dai-lech-blue-2.jpg',
           color1: '../img/allProduct/color-be.png',
           color2: '../img/allProduct/color-green.png',
           color3: '../img/allProduct/color-blue.png',
           curprice: '952.000đ',
           oldprice: '1.190.000đ',
       },
   
       {
           name:'Quần Tuysi Phối Khuy',
           link: './detailHtml/detail_quan-tuysi-phoi-khuy.html',
           image1: '../img/allProduct/quan-tuysi-phoi-khuy-nau-1.jpg',
           image2: '../img/allProduct/quan-tuysi-phoi-khuy-nau-2.jpg',
           image3: '../img/allProduct/quan-tuysi-phoi-khuy-tim-1.jpg',
           image4: '../img/allProduct/quan-tuysi-phoi-khuy-tim-2.jpg',
           image5: '../img/allProduct/quan-tuysi-phoi-khuy-den-1.jpg',
           image6: '../img/allProduct/quan-tuysi-phoi-khuy-den-2.jpg',
           color1: '../img/allProduct/color-brown.png',
           color2: '../img/allProduct/color-tim.png',
           color3: '../img/allProduct/color-black.png',
           curprice: '952.000đ',
           oldprice: '1.190.000đ',
       },
   
       {
           name:'Quần Baggy Phối Đai Bản Lớn',
           link: '../detail_quan-baggy-phoi-dai.html',
           image1: '../img/allProduct/quan-baggy-phoi-dai-be-1.jpg',
           image2: '../img/allProduct/quan-baggy-phoi-dai-be-2.jpg',
           image3: '../img/allProduct/quan-baggy-phoi-dai-ghi-1.jpg',
           image4: '../img/allProduct/quan-baggy-phoi-dai-ghi-2.jpg',
           image5: '../img/allProduct/quan-baggy-phoi-dai-nau-1.jpg',
           image6: '../img/allProduct/quan-baggy-phoi-dai-nau-2.jpg',
           color1: '../img/allProduct/color-be.png',
           color2: '../img/allProduct/color-ghi.png',
           color3: '../img/allProduct/color-brown.png',
           curprice: '952.000đ',
           oldprice: '1.190.000đ',
       },

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
            image1: '../img/allProduct/dam-du-tiec-midi-hong-1.jpg',
            image2: '../img/allProduct/dam-du-tiec-midi-hong-2.jpg',
            image3: '../img/allProduct/dam-du-tiec-midi-do-1.jpg',
            image4: '../img/allProduct/dam-du-tiec-midi-do-2.jpg',
            image5: '../img/allProduct/dam-du-tiec-midi-nau-1.jpg',
            image6: '../img/allProduct/dam-du-tiec-midi-nau-2.jpg',
            color1: '../img/allProduct/color-pink-nhat.png',
            color2: '../img/allProduct/color-red.png',
            color3: '../img/allProduct/color-brown.png',
            curprice: '1.134.000đ',
            oldprice: '1.890.000đ',
        },

        {
            name:'Đầm Ren Đuôi Cá',
            link: './detailHtml/detail_dam-ren-duoi-ca.html',
            image1: '../img/allProduct/dam-ren-duoi-ca-trang-1.jpg',
            image2: '../img/allProduct/dam-ren-duoi-ca-trang-2.jpg',
            image3: '../img/allProduct/dam-ren-duoi-ca-be-1.jpg',
            image4: '../img/allProduct/dam-ren-duoi-ca-be-2.jpg',
            image5: '../img/allProduct/dam-ren-duoi-ca-da-1.jpg',
            image6: '../img/allProduct/dam-ren-duoi-ca-da-2.jpg',
            color1: '../img/allProduct/color-white.png',
            color2: '../img/allProduct/color-be.png',
            color3: '../img/allProduct/color-da.png',
            curprice: '1.134.000đ',
            oldprice: '1.890.000đ',
        },

        {
            name:'Đầm Voan Vai Lệch',
            link: './detailHtml/detail_dam-voan-vai-lech.html',
            image1: '../img/allProduct/dam-voan-vai-lech-hong-1.jpg',
            image2: '../img/allProduct/dam-voan-vai-lech-hong-2.jpg',
            image3: '../img/allProduct/dam-voan-vai-lech-trang-1.jpg',
            image4: '../img/allProduct/dam-voan-vai-lech-trang-2.jpg',
            image5: '../img/allProduct/dam-voan-vai-lech-do-1.jpg',
            image6: '../img/allProduct/dam-voan-vai-lech-do-2.jpg',
            color1: '../img/allProduct/color-pink-nhat.png',
            color2: '../img/allProduct/color-white.png',
            color3: '../img/allProduct/color-red.png',
            curprice: '1.134.000đ',
            oldprice: '1.890.000đ',
        },

   
       {
           name:'Đầm Xếp Ly Cổ Yếm',
           link: '../detail_dam-xep-ly-co-yem.html',
           image1: '../img/allProduct/dam-xep-ly-co-yem-trang-1.jpg',
           image2: '../img/allProduct/dam-xep-ly-co-yem-trang-2.jpg',
           image3: '../img/allProduct/dam-xep-ly-co-yem-hong-1.jpg',
           image4: '../img/allProduct/dam-xep-ly-co-yem-hong-2.jpg',
           image5: '../img/allProduct/dam-xep-ly-co-yem-vang-1.jpg',
           image6: '../img/allProduct/dam-xep-ly-co-yem-vang-2.jpg',
           color1: '../img/allProduct/color-white.png',
           color2: '../img/allProduct/color-pink-dam.png',
           color3: '../img/allProduct/color-vang-chanh.png',
           curprice: '1.134.000đ',
           oldprice: '1.890.000đ',
       },
   
       {
           name:'Đầm Maxi 2 Dây',
           link: '../detail_dam-maxi-2-day.html',
           image1: '../img/allProduct/dam-maxi-2-day-nau-1.jpg',
           image2: '../img/allProduct/dam-maxi-2-day-nau-2.jpg',
           image3: '../img/allProduct/dam-maxi-2-day-be-1.jpg',
           image4: '../img/allProduct/dam-maxi-2-day-be-2.jpg',
           image5: '../img/allProduct/dam-maxi-2-day-hong-1.jpg',
           image6: '../img/allProduct/dam-maxi-2-day-hong-2.jpg',
           color1: '../img/allProduct/color-hoa-tiet-nau.png',
           color2: '../img/allProduct/color-hoa-tiet-be.png',
           color3: '../img/allProduct/color-hoa-tiet-hong.png',
           curprice: '1.134.000đ',
           oldprice: '1.890.000đ',
       },
   
       {
           name:'Đầm Lụa Cổ Yếm Phối Dây Sau',
           link: '../detail_dam-lua-co-yem.html',
           image1: '../img/allProduct/dam-lua-co-yem-hong-1.jpg',
           image2: '../img/allProduct/dam-lua-co-yem-hong-2.jpg',
           image3: '../img/allProduct/dam-lua-co-yem-nau-1.jpg',
           image4: '../img/allProduct/dam-lua-co-yem-nau-2.jpg',
           image5: '../img/allProduct/dam-lua-co-yem-be-1.jpg',
           image6: '../img/allProduct/dam-lua-co-yem-be-2.jpg',
           color1: '../img/allProduct/color-hoa-tiet-hong.png',
           color2: '../img/allProduct/color-hoa-tiet-nau.png',
           color3: '../img/allProduct/color-hoa-tiet-be.png',
           curprice: '1.134.000đ',
           oldprice: '1.890.000đ',
       },
   
       {
           name:'Đầm Chần Chun Cổ Vuông',
           link: '../detail_dam-chan-chun-co-vuong.html',
           image1: '../img/allProduct/dam-chan-chun-co-vuong-trang-1.jpg',
           image2: '../img/allProduct/dam-chan-chun-co-vuong-trang-2.jpg',
           image3: '../img/allProduct/dam-chan-chun-co-vuong-vang-1.jpg',
           image4: '../img/allProduct/dam-chan-chun-co-vuong-vang-2.jpg',
           image5: '../img/allProduct/dam-chan-chun-co-vuong-red-1.jpg',
           image6: '../img/allProduct/dam-chan-chun-co-vuong-red-2.jpg',
           color1: '../img/allProduct/color-white.png',
           color2: '../img/allProduct/color-vang-chanh.png',
           color3: '../img/allProduct/color-red.png',
           curprice: '1.134.000đ',
           oldprice: '1.890.000đ',
       },
   
       {
           name:'Đầm Dạ Hội Cổ Cách Điệu',
           link: './detailHtml/detail_dam-da-hoi-co-cach-dieu.html',
           image1: '../img/allProduct/dam-da-hoi-co-cach-dieu-hong-1.jpg',
           image2: '../img/allProduct/dam-da-hoi-co-cach-dieu-hong-2.jpg',
           image3: '../img/allProduct/dam-da-hoi-co-cach-dieu-dam-1.jpg',
           image4: '../img/allProduct/dam-da-hoi-co-cach-dieu-dam-2.jpg',
           image5: '../img/allProduct/dam-da-hoi-co-cach-dieu-be-1.jpg',
           image6: '../img/allProduct/dam-da-hoi-co-cach-dieu-be-2.jpg',
           color1: '../img/allProduct/color-pink-nhat-1.png',
           color2: '../img/allProduct/color-pink-dam.png',
           color3: '../img/allProduct/color-be.png',
           curprice: '1.192.000đ',
           oldprice: '1.490.000đ',
       },
   
       {
           name:'Đầm Ôm Vai Xếp',
           link: '../detail_dam-om-vai-xep.html',
           image1: '../img/allProduct/dam-om-vai-xep-red-1.jpg',
           image2: '../img/allProduct/dam-om-vai-xep-red-2.jpg',
           image3: '../img/allProduct/dam-om-vai-xep-black-1.jpg',
           image4: '../img/allProduct/dam-om-vai-xep-black-2.jpg',
           image5: '../img/allProduct/dam-om-vai-xep-xanh-1.jpg',
           image6: '../img/allProduct/dam-om-vai-xep-xanh-2.jpg',
           color1: '../img/allProduct/color-red.png',
           color2: '../img/allProduct/color-black.png',
           color3: '../img/allProduct/color-blue.png',
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
   
       {
           name:'Giày Sneaker Light Up',
           link: './detailHtml/detail_sneaker-light-up.html',
           image1: '../img/allProduct/sneaker-light-up-xanh-la-1.jpg',
           image2: '../img/allProduct/sneaker-light-up-xanh-la-2.jpg',
           image3: '../img/allProduct/sneaker-light-up-hong-1.jpg',
           image4: '../img/allProduct/sneaker-light-up-hong-2.jpg',
           image5: '../img/allProduct/sneaker-light-up-trang-1.jpg',
           image6: '../img/allProduct/sneaker-light-up-trang-2.jpg',
           color1: '../img/allProduct/color-xanh-la.png',
           color2: '../img/allProduct/color-hong-trang.png',
           color3: '../img/allProduct/color-white.png',
           curprice: '1.075.000đ',
           oldprice: '1.800.000đ',
       },
   
       {
           name:'Giày Sneaker Castle',
           link: './detailHtml/detail_sneaker-castle.html',
           image1: '../img/allProduct/sneaker-castle-den-1.jpg',
           image2: '../img/allProduct/sneaker-castle-den-2.jpg',
           image3: '../img/allProduct/sneaker-castle-trang-1.jpg',
           image4: '../img/allProduct/sneaker-castle-trang-2.jpg',
           image5: '../img/allProduct/sneaker-castle-da-1.jpg',
           image6: '../img/allProduct/sneaker-castle-da-2.jpg',
           color1: '../img/allProduct/color-castle-den.png',
           color2: '../img/allProduct/color-castle-trang.png',
           color3: '../img/allProduct/color-castle-hong.png',
           curprice: '1.075.000đ',
           oldprice: '1.800.000đ',
       },
   
       {
           name:'Giày Sneaker Jelly',
           link: './detailHtml/detail_sneaker-jelly.html',
           image1: '../img/allProduct/sneaker-jelly-xanh-1.jpg',
           image2: '../img/allProduct/sneaker-jelly-xanh-2.jpg',
           image3: '../img/allProduct/sneaker-jelly-hong-1.jpg',
           image4: '../img/allProduct/sneaker-jelly-hong-2.jpg',
           image5: '../img/allProduct/sneaker-jelly-da-1.jpg',
           image6: '../img/allProduct/sneaker-jelly-da-2.jpg',
           color1: '../img/allProduct/color-jelly-xanh.png',
           color2: '../img/allProduct/color-jelly-hong.png',
           color3: '../img/allProduct/color-be.png',
           curprice: '1.075.000đ',
           oldprice: '1.800.000đ',
       },
   
       {
           name:'Giày Sneakers Ocean Wave',
           link: './detailHtml/detail_sneaker-ocean-wave.html',
           image1: '../img/allProduct/sneaker-ocean-wave-xanh-1.jpg',
           image2: '../img/allProduct/sneaker-ocean-wave-xanh-2.jpg',
           image3: '../img/allProduct/sneaker-ocean-wave-hong-1.jpg',
           image4: '../img/allProduct/sneaker-ocean-wave-hong-2.jpg',
           image5: '../img/allProduct/sneaker-ocean-wave-da-1.jpg',
           image6: '../img/allProduct/sneaker-ocean-wave-da-2.jpg',
           color1: '../img/allProduct/color-ocean-1.png',
           color2: '../img/allProduct/color-ocean-2.png',
           color3: '../img/allProduct/color-ocean-3.png',
           curprice: '1.075.000đ',
           oldprice: '1.800.000đ',
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
                                <button class="btn-flat checked btn-hover btn-now btn-now1"  style="background-image: url(${product.color1});background-position: center;"></button>
                                <button class="btn-flat btn-hover btn-extra btn-now2"  style="background-image:url(${product.color2});background-position: center;")></button>
                                <button class="btn-flat btn-hover btn-extra btn-now3"  style="background-image: url(${product.color3});background-position: center;"></button>
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

