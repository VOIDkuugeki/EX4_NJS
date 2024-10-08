    var product = [
        {
            id:"mk1",
            name:"MODEROID Fafner Mark Dreizehn Kai Chronos (Fafner in the Azure THE BEYOND)",
            img : "mk1.jpg",
            brand: "Good Smile Company",
            price:122000,
        },
        {
            id:"mk2",
            name:"1/144 Linebarrel Overdrive (Linebarrels of Iron)",
            img : "mk2.jpg",
            brand: "Bandai",
            price:400000,
        },
        {
            id:"mk3",
            name:"Gundam Universe ASW-G-08 Gundam Barbatos Lupus",
            img : "mk3.jpg",
            brand: "Bandai",
            price:350000,
        },
        {
            id:"mk4",
            name:"1/100 MG Gundam Vidar (Mobile Suit Gundam Iron-Blooded Orphans)",
            img : "mk4.jpg",
            brand: "Bandai",
            price:564000,
        },
        {
            id:"fg1",
            name:"1/7 Blue Archive: Mari (Gym uniform) Memorial lobby Ver.",
            img : "fg1.jpg",
            brand:"Good Smile Company",
            price:654000,
        },
        {
            id:"fg2",
            name:"Nendoroid Anya Forger (SPY x FAMILY)",
            img : "fg2.jpg",
            brand:"Good Smile Company",
            price:123000,
        },
        {
            id:"fg3",
            name:"1/7 PRISMA WING Re:Zero Starting Life in Another World Echidna Glass Edition",
            img : "fg3.jpg",
            brand: "Good Smile Company",
            price:345000,
        },
        {
            id:"to1",
            name:"Blade One Nipper L",
            img : "to1.jpg",
            brand: "Tamiya",
            price:258000,
        },
    ];

    // đẩy mảng product vào local
    function save(){
        localStorage.setItem('listProduct',JSON.stringify(product))
    }

    //lấy sản phẩm 
    function load(){
        product = JSON.parse(localStorage.getItem('listProduct'));
    } 

    //xuất sản phẩm ra html
    if (localStorage.getItem("listProduct") != null) {
        load();
    }
    save();

    var listLocal = function() {
        var listproduct = "";
        for (var i in product) {
            var data = JSON.parse(JSON.stringify(product[i]));
            listproduct += generateProductHTML(data);
        }
        document.getElementById("banchay").innerHTML = listproduct;
        save();
    }
    
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = product.filter(product => product.name.toLowerCase().includes(query));
    
        displayProducts(filteredProducts);
    });
    
    function displayProducts(products) {
        const banchayElement = document.getElementById("banchay");
        banchayElement.innerHTML = ''; // Empty product list
    
        products.forEach(product => {
            const data = JSON.parse(JSON.stringify(product));
            banchayElement.innerHTML += generateProductHTML(data);
        });
    }
    
    function generateProductHTML(data) {
        let listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
        listproduct += '<div class="card product p-2" style="width:auto" onclick="showProductModal(\'' + data.id + '\')">';
        listproduct += '<img class="card-img-top" src="img/' + data.img + '" alt="...">';
        listproduct += '<div class="card-title product-title text-center h5">' + data.name + '</div>';
        listproduct += '<div class="price text-center h6">' + data.price + '₫</div>';
        listproduct += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '" onclick="tks(event)">';
        listproduct += '<a>';
        listproduct += '<i class="fas fa-cart-plus"></i>';
        listproduct += '</a>';
        listproduct += '</span>';
        listproduct += '</div>';
        listproduct += '</div>';
        return listproduct;
    }

    function showProductModal(productId) {
        const product = getProductById(productId);
        if (product) {
            document.getElementById('modalProductImg').src = 'img/' + product.img;
            document.getElementById('modalProductName').textContent = product.name;
            document.getElementById('modalProductBrand').textContent = 'Brand: ' + product.brand;
            document.getElementById('modalProductPrice').textContent = 'Price: ' + product.price + '₫';
            $('#productModal').modal('show');
        }
    }

    function getProductById(productId) {
        console.log(product.find(p => p.id === productId));
        return product.find(p => p.id === productId);
    }

listLocal();


