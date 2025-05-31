export const Products = [
    {
        id: 1,
        title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
        price: 70,
        image: `${process.env.PUBLIC_URL}//images/dataProduct/item1.png`,
        // image: "../images/dataProduct/item1.png",
        type: "mobile",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>
        ] ,
        end:"(82K)",
        offPrice: "Hot",
        stock: "IN STOCK",
        discount: "100"
    },
    {
        id: 2,
        title: "Samsung Electronics Samsung Galexy S21 5G",
        price: 2300,
        image: `${process.env.PUBLIC_URL}//images/dataProduct/item2.png`,
        type: "mobile",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>
        ] ,
        end:"(82K)",
        offPrice: "",
        stock: "OUT OF STOCK ",
        discount: ""
    },
        {
        id: 3,
        title: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
        price: 360,
        image: `${process.env.PUBLIC_URL}//images/dataProduct/item3.png`,
        type: "headphone",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star-half-stroke'></i>
        ] ,
        end:"(82K)",
        offPrice: "BEST DEALS",
        discount: ""
    },
        {
        id: 4,
        title: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
        price: 80,
        image: `${process.env.PUBLIC_URL}//images/dataProduct/item4.png`,
        type: "headphone",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star-half-stroke'></i>
        ] ,
        end:"(82K)",
        offPrice: "",
        discount: ""
    },
        {
        id: 5,
        title: "Wired Over-Ear Gaming Headphones with USB",
        price: 1500,
        image: `${process.env.PUBLIC_URL}//images/dataProduct/item5.png`,
        type: "new",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star-half-stroke'></i>
        ] ,
        end:"(82K)",
        offPrice: "",
        discount: ""
    },
        {
        id: 6,
        title: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
        price: 1200,
        image: `${process.env.PUBLIC_URL}//images/dataProduct/item6.png`,
        type: "tv",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star-half-stroke'></i>
        ] ,
        end:"(82K)",
        offPrice: "25% OFF",
        discount: "300"
    },
        {
        id: 7,
        title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
        price: 250,
        image: `${process.env.PUBLIC_URL}//images/dataProduct/item7.png`,
        type: "tv",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star-half-stroke'></i>
        ] ,
        end:"(82K)",
        offPrice: "",
        discount: ""
    },
        {
        id: 8,
        title: "4K UHD LED Smart TV with Chromecast Built-in",
        price: 220,
        image: `${process.env.PUBLIC_URL}//images/dataProduct/item8.png`,
        type: "new",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star-half-stroke'></i>
        ] ,
        end:"(82K)",
        offPrice: "",
        discount: ""
    },

]

export const Category = [
    {
        id: 1,
        title: "Computer & Laptop",
        image: `${process.env.PUBLIC_URL}//images/category/Image1.png`,
        location: "https://www.amazon.com/s?k=computer+laptop&ref=nb_sb_noss_2"
    },
    {
        id: 2,
        title: "SmartPhone",
        image: `${process.env.PUBLIC_URL}//images/category/Image2.png`,
    },
    {
        id: 3,
        title: "Headphones",
        image: `${process.env.PUBLIC_URL}//images/category/Image3.png`,
    },
    {
        id: 4,
        title: "Accessories",
        image: `${process.env.PUBLIC_URL}//images/category/Image4.png`,
    },
    {
        id: 5,
        title: "Camera & Photo",
        image: `${process.env.PUBLIC_URL}//images/category/Image5.png`,
    },
    {
        id: 6,
        title: "TV & Homes",
        image: `${process.env.PUBLIC_URL}//images/category/Image6.png`,
    },
]

export const Category2 = [
    {
        id: 1,
        title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
        price: 2300,
        image: `${process.env.PUBLIC_URL}//images/category2/Image1.png`,
        type: "mobile",
        offPrice: "HOT",
        discount: "100"
    },
    {
        id: 2,
        title: "Samsung Electronics Samsung Galexy S21 5G",
        price: 220,
        image: `${process.env.PUBLIC_URL}//images/category2/Image2.png`,
        type: "mobile",
        offPrice: "",
        discount: ""
    },
        {
        id: 3,
        title: "4K UHD LED Smart TV with Chromecast Built-in",
        price: 360,
        image: `${process.env.PUBLIC_URL}//images/category2/Image3.png`,
        type: "headphone",
        offPrice: "19% OFF",
        discount: ""
    },
        {
        id: 4,
        title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
        price: 1200,
        image: `${process.env.PUBLIC_URL}//images/category2/Image4.png`,
        type: "headphone",
        offPrice: "",
        discount: ""
    },
        {
        id: 5,
        title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
        price: 299,
        image: `${process.env.PUBLIC_URL}//images/category2/Image5.png`,
        type: "new",
        offPrice: "",
        discount: ""
    },
        {
        id: 6,
        title: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
        price: 1200,
        image: `${process.env.PUBLIC_URL}//images/category2/Image6.png`,
        type: "tv",
        offPrice: "25% OFF",
        discount: "300"
    },
        {
        id: 7,
        title: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
        price: 250,
        image: `${process.env.PUBLIC_URL}//images/category2/Image7.png`,
        type: "tv",
        offPrice: "HOT",
        discount: ""
    },
        {
        id: 8,
        title: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black",
        price: 220,
        image: `${process.env.PUBLIC_URL}//images/category2/Image8.png`,
        type: "new",
        offPrice: "32% OFF",
        discount: ""
    },

]

export const CategoryLeft = [
    {
        id: 1,
        title: "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...",
        image: `${process.env.PUBLIC_URL}//images/box-left.png`,
        price: 442 ,
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>
        ] ,
        end:"(82K)",
        offPrice: "Hot",
        discount: "32% OFF",
        p: "Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
    },
    {
        id: 2,
        title: "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...",
        image: `${process.env.PUBLIC_URL}//images/box-left.png`,
        price: 442 ,
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star-half-stroke'></i>
        ] ,
        end:"(82K)",
        offPrice: "Hot",
        discount: "32% OFF",
        p: "Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
    },
    {
        id: 3,
        title: "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...",
        image: `${process.env.PUBLIC_URL}//images/box-left.png`,
        price: 442 ,
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>
        ] ,
        end:"(82K)",
        offPrice: "Hot",
        discount: "32% OFF",
        p: "Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
    },
    {
        id: 4,
        title: "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...",
        image: `${process.env.PUBLIC_URL}//images/box-left.png`,
        price: 442 ,
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>
        ] ,
        end:"(82K)",
        offPrice: "Hot",
        discount: "32% OFF",
        p: "Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
    },
]
// New Category
export const NewFlashSale = [
    {
        id: 1,
        title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
        image: `${process.env.PUBLIC_URL}//images/newCategory/Image1.png`,
        price: 1500
    },
    {
        id: 2,
        title: "Simple Mobile 4G LTE Prepaid Smartphone",
        image: `${process.env.PUBLIC_URL}//images/newCategory/Image2.png`,
        price: 1500
    },
    {
        id: 3,
        title: "4K UHD LED Smart TV with Chromecast Built-in",
        image: `${process.env.PUBLIC_URL}//images/newCategory/Image3.png`,
        price: 1500
    }
]
export const NewBest = [
    {
        id: 1,
        title: "Xbox Series S - 512GB SSD Console with Wireless Controller...",
        image: `${process.env.PUBLIC_URL}//images/newCategory/Image4.png`,
        price: 1500
    },
    {
        id: 2,
        title: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
        image: `${process.env.PUBLIC_URL}//images/newCategory/Image5.png`,
        price: 1500
    },
    {
        id: 3,
        title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
        image: `${process.env.PUBLIC_URL}//images/newCategory/Image6.png`,
        price: 1500
    }
]
export const NewRated = [
    {
        id: 1,
        title: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
        image: `${process.env.PUBLIC_URL}//images/newCategory/Image7.png`,
        price: 1500
    },
        {
        id: 2,
        title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
        image: `${process.env.PUBLIC_URL}//images/newCategory/Image8.png`,
        price: 1500
    },
        {
        id: 3,
        title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
        image: `${process.env.PUBLIC_URL}//images/newCategory/Image9.png`,
        price: 1500
    }
]
export const NewArrival = [
    {
        id: 1,
        title: "TOZO T6 True Wireless Earbuds Bluetooth Headpho...",
        image: `${process.env.PUBLIC_URL}//images/newCategory/Image10.png`,
        price: 1500
    },
        {
        id: 2,
        title: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...",
        image: `${process.env.PUBLIC_URL}//images/newCategory/Image11.png`,
        price: 1500
    },
        {
        id: 3,
        title: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...",
        image: `${process.env.PUBLIC_URL}//images/newCategory/Image12.png`,
        price: 1500
    }
]

// All Products
export const shopPage = [
    {
        id: 1,
        title: "4K UHD LED Smart TV with Chromecast Built-in",
        price: 70,
        image: `${process.env.PUBLIC_URL}//images/AllProduct/img1.png`,
        type: "mobile",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>
        ] ,
        end:"(82K)",
        offPrice: "Hot",
        stock: "IN STOCK",
        discount: "100"
    },
    {
        id: 2,
        title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
        price: 2300,
        image: `${process.env.PUBLIC_URL}//images/AllProduct/img5.png`,
        type: "mobile",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>
        ] ,
        end:"(82K)",
        offPrice: "",
        stock: "OUT OF STOCK ",
        discount: ""
    },
        {
        id: 3,
        title: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
        price: 360,
        image: `${process.env.PUBLIC_URL}//images/dataProduct/item3.png`,
        type: "headphone",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star-half-stroke'></i>
        ] ,
        end:"(82K)",
        offPrice: "BEST DEALS",
        discount: ""
    },
        {
        id: 4,
        title: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
        price: 80,
        image: `${process.env.PUBLIC_URL}//images/dataProduct/item4.png`,
        type: "headphone",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star-half-stroke'></i>
        ] ,
        end:"(82K)",
        offPrice: "",
        discount: ""
    },
        {
        id: 5,
        title: "Wired Over-Ear Gaming Headphones with USB",
        price: 1500,
        image: `${process.env.PUBLIC_URL}//images/dataProduct/item5.png`,
        type: "new",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star-half-stroke'></i>
        ] ,
        end:"(82K)",
        offPrice: "",
        discount: ""
    },
        {
        id: 6,
        title: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
        price: 1200,
        image: `${process.env.PUBLIC_URL}//images/dataProduct/item6.png`,
        type: "tv",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star-half-stroke'></i>
        ] ,
        end:"(82K)",
        offPrice: "25% OFF",
        discount: "300"
    },
        {
        id: 7,
        title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
        price: 250,
        image: `${process.env.PUBLIC_URL}//images/dataProduct/item7.png`,
        type: "tv",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star-half-stroke'></i>
        ] ,
        end:"(82K)",
        offPrice: "",
        discount: ""
    },
        {
        id: 8,
        title: "4K UHD LED Smart TV with Chromecast Built-in",
        price: 220,
        image: `${process.env.PUBLIC_URL}//images/dataProduct/item8.png`,
        type: "new",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star-half-stroke'></i>
        ] ,
        end:"(82K)",
        offPrice: "",
        discount: ""
    },
    {
        id: 9,
        title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
        price: 220,
        image: `${process.env.PUBLIC_URL}//images/dataProduct/item1.png`,
        type: "mobile",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>
        ] ,
        end:"(82K)",
        offPrice: "Hot",
        stock: "IN STOCK",
        discount: "100"
    },
    {
        id: 10,
        title: "Samsung Electronics Samsung Galexy S21 5G",
        price: 70,
        image: `${process.env.PUBLIC_URL}//images/AllProduct/img7.png`,
        type: "mobile",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>
        ] ,
        end:"(82K)",
        offPrice: "Hot",
        stock: "IN STOCK",
        discount: "100"
    },
        {
        id: 11,
        title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
        price: 70,
        image: `${process.env.PUBLIC_URL}//images/AllProduct/img3.png`,
        type: "mobile",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>
        ] ,
        end:"(82K)",
        offPrice: "Hot",
        stock: "IN STOCK",
        discount: "100"
    },
        {
        id: 12,
        title: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
        price: 100,
        image: `${process.env.PUBLIC_URL}//images/AllProduct/img4.png`,
        type: "mobile",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>
        ] ,
        end:"(82K)",
        offPrice: "Hot",
        stock: "IN STOCK",
        discount: "30"
    },
        {
        id: 13,
        title: "Samsung Electronics Samsung Galexy S21 5G",
        price: 260,
        image: `${process.env.PUBLIC_URL}//images/dataProduct/item2.png`,
        type: "mobile",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>
        ] ,
        end:"(82K)",
        offPrice: "Hot",
        stock: "IN STOCK",
        discount: ""
    },
    {
        id: 14,
        title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
        price: 200,
        image: `${process.env.PUBLIC_URL}//images/AllProduct/img6.png`,
        type: "mobile",
        start: [
            <i class='fa-solid fa-star'></i>, 
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>,
            <i class='fa-solid fa-star'></i> ,
            <i class='fa-solid fa-star'></i>
        ] ,
        end:"(82K)",
        offPrice: "Hot",
        stock: "IN STOCK",
        discount: "40"
    }
]
