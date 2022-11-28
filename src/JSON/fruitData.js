const fruit = [
    {
        "genus": "Malus",
        "name": "Apple",
        "imgUrl": "https://images.unsplash.com/photo-1628486930972-c1db82d528da?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8YXBwbGV8fHx8fHwxNjYwODg1NzU5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1280",
        "id": 6,
        "family": "Rosaceae",
        "order": "Rosales",
        "nutritions": {
            "carbohydrates": 11.4,
            "protein": 0.3,
            "fat": 0.4,
            "calories": 5.2,
            "sugar": 10.3
        }
    },
    {
        "genus": "Prunus",
        "name": "Apricot",
        "imgUrl": "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2016/10/12/537326-a.jpg?im=Resize=(1280,720)",
        "id": 35,
        "family": "Rosaceae",
        "order": "Rosales",
        "nutritions": {
            "carbohydrates": 3.9,
            "protein": 0.5,
            "fat": 0.1,
            "calories": 1.5,
            "sugar": 3.2
        }
    },
    {
        "genus": "Musa",
        "name": "Banana",
        "imgUrl": "https://images.unsplash.com/photo-1635843115461-0c29b8509b2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8QmFuYW5hfHx8fHx8MTY2MDg4NTg4OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1280",
        "id": 1,
        "family": "Musaceae",
        "order": "Zingiberales",
        "nutritions": {
            "carbohydrates": 22,
            "protein": 1,
            "fat": 0.2,
            "calories": 9.6,
            "sugar": 17.2
        }
    },
    {
        "genus": "Rubus",
        "name": "Blackberry",
        "imgUrl": "https://www.itslife.in/wp-content/uploads/2019/12/Blackberry-1280x720.jpg",
        "id": 64,
        "family": "Rosaceae",
        "order": "Rosales",
        "nutritions": {
            "carbohydrates": 9,
            "protein": 1.3,
            "fat": 0.4,
            "calories": 4.0,
            "sugar": 4.5
        }
    },
    {
        "genus": "Fragaria",
        "name": "Blueberry",
        "imgUrl": "https://images.unsplash.com/photo-1589793052464-ce572b4af507?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8Qmx1ZWJlcnJ5fHx8fHx8MTY2MDg4NTY2OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1280",
        "id": 33,
        "family": "Rosaceae",
        "order": "Rosales",
        "nutritions": {
            "carbohydrates": 5.5,
            "protein": 0,
            "fat": 0.4,
            "calories": 2.9,
            "sugar": 5.4
        }
    },
    {
        "genus": "Prunus",
        "name": "Cherry",
        "imgUrl": "https://s1.1zoom.me/big0/494/Cherry_Bowl_578829_1280x720.jpg",
        "id": 9,
        "family": "Rosaceae",
        "order": "None",
        "nutritions": {
            "carbohydrates": 12,
            "protein": 1,
            "fat": 0.3,
            "calories": 5.0,
            "sugar": 8
        }
    },
    {
        "genus": "Durio",
        "name": "Durian",
        "imgUrl": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/06/02/688877-durian-asia-fruit-java-food-indonesia-1033485.jpg",
        "id": 60,
        "family": "Malvaceae",
        "order": "Malvales",
        "nutritions": {
            "carbohydrates": 27.1,
            "protein": 1.5,
            "fat": 5.3,
            "calories": 14.7,
            "sugar": 6.75
        }
    },
    {
        "genus": "Ficus",
        "name": "Fig",
        "imgUrl": "https://images.wallpaperscraft.com/image/single/figs_slices_fruit_191653_1280x720.jpg",
        "id": 68,
        "family": "Moraceae",
        "order": "Rosales",
        "nutritions": {
            "carbohydrates": 19,
            "protein": 0.8,
            "fat": 0.3,
            "calories": 7.4,
            "sugar": 16
        }
    },
    {
        "genus": "Ribes",
        "name": "Gooseberry",
        "imgUrl": "https://cdn.pixabay.com/photo/2017/06/21/20/53/gooseberry-2428533_1280.jpg",
        "id": 69,
        "family": "Grossulariaceae",
        "order": "Saxifragales",
        "nutritions": {
            "carbohydrates": 10,
            "protein": 0.9,
            "fat": 0.6,
            "calories": 4.4,
            "sugar": 0
        }
    },
    {
        "genus": "Vitis",
        "name": "Grapes",
        "imgUrl": "https://images.wallpaperscraft.com/image/single/grapes_berries_fruits_113345_1280x720.jpg",
        "id": 47,
        "family": "Vitaceae",
        "order": "Vitales",
        "nutritions": {
            "carbohydrates": 18.1,
            "protein": 0.72,
            "fat": 0.16,
            "calories": 6.9,
            "sugar": 15.48
        }
    },
    {
        "genus": "Malus",
        "name": "GreenApple",
        "imgUrl": "https://cdn.pixabay.com/photo/2016/02/28/20/36/fruit-1227552_1280.jpg",
        "id": 72,
        "family": "Rosaceae",
        "order": "Rosales",
        "nutritions": {
            "carbohydrates": 3.1,
            "protein": 0.4,
            "fat": 0.1,
            "calories": 2.1,
            "sugar": 6.4
        }
    },
    {
        "genus": "Psidium",
        "name": "Guava",
        "imgUrl": "https://assets.epicurious.com/photos/5947e93c183afa60aeb90b2c/16:9/w_1280,c_limit/Guava%2006192017.jpg",
        "id": 37,
        "family": "Myrtaceae",
        "order": "Myrtales",
        "nutritions": {
            "carbohydrates": 14,
            "protein": 2.6,
            "fat": 1,
            "calories": 6.8,
            "sugar": 9
        }
    },
    {
        "genus": "Apteryx",
        "name": "Kiwi",
        "imgUrl": "https://images.wallpaperscraft.com/image/single/kiwi_fruit_ripe_122153_1280x720.jpg",
        "id": 66,
        "family": "Actinidiaceae",
        "order": "Struthioniformes",
        "nutritions": {
            "carbohydrates": 15,
            "protein": 1.1,
            "fat": 0.5,
            "calories": 6.1,
            "sugar": 9
        }
    },
    {
        "genus": "Citrus",
        "name": "Lemon",
        "imgUrl": "https://images.wallpaperscraft.com/image/single/lemons_fruit_citrus_branch_107206_1280x720.jpg",
        "id": 26,
        "family": "Rutaceae",
        "order": "Sapindales",
        "nutritions": {
            "carbohydrates": 9,
            "protein": 1.1,
            "fat": 0.3,
            "calories": 2.9,
            "sugar": 2.5
        }
    },
    {
        "genus": "Citrus",
        "name": "Lime",
        "imgUrl": "https://images.wallpaperscraft.com/image/single/lime_citrus_cut_fruit_116171_1280x720.jpg",
        "id": 44,
        "family": "Rutaceae",
        "order": "Sapindales",
        "nutritions": {
            "carbohydrates": 8.4,
            "protein": 0.3,
            "fat": 0.1,
            "calories": 2.5,
            "sugar": 1.7
        }
    },
    {
        "genus": "Vaccinium",
        "name": "Lingonberry",
        "imgUrl": "https://parentinghealthybabies.com/app/phb-data/uploads/2019/01/lingonberry-1280x720.jpg",
        "id": 65,
        "family": "Ericaceae",
        "order": "Ericales",
        "nutritions": {
            "carbohydrates": 11.3,
            "protein": 0.75,
            "fat": 0.34,
            "calories": 5.0,
            "sugar": 5.74
        }
    },
    {
        "genus": "Litchi",
        "name": "Lychee",
        "imgUrl": "https://vaya.in/news/wp-content/uploads/2019/06/Lychee-1280x720.jpg",
        "id": 67,
        "family": "Sapindaceae",
        "order": "Sapindales",
        "nutritions": {
            "carbohydrates": 17,
            "protein": 0.8,
            "fat": 0.44,
            "calories": 6.6,
            "sugar": 15
        }
    },
    {
        "genus": "Mangifera",
        "name": "Mango",
        "imgUrl": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/06/13/979298-791494-mangoes-02.jpg",
        "id": 27,
        "family": "Anacardiaceae",
        "order": "Sapindales",
        "nutritions": {
            "carbohydrates": 15,
            "protein": 0.82,
            "fat": 0.38,
            "calories": 6.0,
            "sugar": 13.7
        }
    },
    {
        "genus": "Cucumis",
        "name": "Melon",
        "imgUrl": "https://dailytimes.com.pk/assets/uploads/2018/06/03/Watermelon-1280x720.jpg",
        "id": 41,
        "family": "Cucurbitaceae",
        "order": "Cucurbitaceae",
        "nutritions": {
            "carbohydrates": 8,
            "protein": 0,
            "fat": 0,
            "calories": 3.4,
            "sugar": 8
        }
    },
    {
        "genus": "Citrus",
        "name": "Orange",
        "imgUrl": "https://images.wallpaperscraft.com/image/single/orange_fruit_citrus_159655_1280x720.jpg",
        "id": 2,
        "family": "Rutaceae",
        "order": "Sapindales",
        "nutritions": {
            "carbohydrates": 8.3,
            "protein": 1,
            "fat": 0.2,
            "calories": 4.3,
            "sugar": 8.2
        }
    },
    {
        "genus": "Carica",
        "name": "Papaya",
        "imgUrl": "https://images.wallpaperscraft.com/image/single/papaya_fruit_tropical_144771_1280x720.jpg",
        "id": 42,
        "family": "Caricaceae",
        "order": "Caricacea",
        "nutritions": {
            "carbohydrates": 11,
            "protein": 0,
            "fat": 0.4,
            "calories": 4.3,
            "sugar": 1
        }
    },
    {
        "genus": "Passiflora",
        "name": "Passionfruit",
        "imgUrl": "https://ritajuice.vn/wp-content/uploads/2021/11/Chanh-d%C3%A2y-v%E1%BB%8F-t%C3%ADm-%C4%91%C6%B0%E1%BB%A3c-tr%E1%BB%93ng-ph%E1%BB%95-bi%E1%BA%BFn-%E1%BB%9F-n%C6%B0%E1%BB%9Bc-ta.jpg",
        "id": 70,
        "family": "Passifloraceae",
        "order": "Malpighiales",
        "nutritions": {
            "carbohydrates": 22.4,
            "protein": 2.2,
            "fat": 0.7,
            "calories": 9.7,
            "sugar": 11.2
        }
    },
    {
        "genus": "Pyrus",
        "name": "Pear",
        "imgUrl": "https://images.wallpaperscraft.com/image/single/pear_branch_fruit_113873_1280x720.jpg",
        "id": 4,
        "family": "Rosaceae",
        "order": "Rosales",
        "nutritions": {
            "carbohydrates": 15,
            "protein": 0.4,
            "fat": 0.1,
            "calories": 5.7,
            "sugar": 10
        }
    },
    {
        "genus": "Diospyros",
        "name": "Persimmon",
        "imgUrl": "https://www.nippon.com/en/ncommon/contents/blog/289784/289784.jpg",
        "id": 52,
        "family": "Ebenaceae",
        "order": "Rosales",
        "nutritions": {
            "carbohydrates": 18,
            "protein": 0,
            "fat": 0,
            "calories": 8.1,
            "sugar": 18
        }
    },
    {
        "genus": "Ananas",
        "name": "Pineapple",
        "imgUrl": "https://images.wallpaperscraft.com/image/single/pineapple_sliced_fruit_70465_1280x720.jpg",
        "id": 10,
        "family": "Bromeliaceae",
        "order": "Poales",
        "nutritions": {
            "carbohydrates": 13.12,
            "protein": 0.54,
            "fat": 0.12,
            "calories": 5.0,
            "sugar": 9.85
        }
    },
    {
        "genus": "Prunus",
        "name": "Plum",
        "imgUrl": "https://images.wallpaperscraft.com/image/single/plum_fruit_leaves_183479_1280x720.jpg",
        "id": 71,
        "family": "Rosaceae",
        "order": "Rosales",
        "nutritions": {
            "carbohydrates": 11.4,
            "protein": 0.7,
            "fat": 0.28,
            "calories": 4.6,
            "sugar": 9.92
        }
    },
    {
        "genus": "Rubus",
        "name": "Raspberry",
        "imgUrl": "https://www.healthkart.com/connect/wp-content/uploads/2021/11/900x500_banner_HK-Connect_IHow-are-raspberries-beneficial-for-you-1280x720.jpg",
        "id": 23,
        "family": "Rosaceae",
        "order": "Rosales",
        "nutritions": {
            "carbohydrates": 12,
            "protein": 1.2,
            "fat": 0.7,
            "calories": 5.3,
            "sugar": 4.4
        }
    },
    {
        "genus": "Fragaria",
        "name": "Strawberry",
        "imgUrl": "https://images.wallpaperscraft.com/image/single/strawberries_fruit_berry_176457_1280x720.jpg",
        "id": 3,
        "family": "Rosaceae",
        "order": "Rosales",
        "nutritions": {
            "carbohydrates": 5.5,
            "protein": 0.8,
            "fat": 0.4,
            "calories": 2.9,
            "sugar": 5.4
        }
    },
    {
        "genus": "Solanum",
        "name": "Tomato",
        "imgUrl": "https://images.tv9hindi.com/wp-content/uploads/2022/01/Is-a-tomato-vegetable-or-fruit.jpg",
        "id": 5,
        "family": "Solanaceae",
        "order": "Solanales",
        "nutritions": {
            "carbohydrates": 3.9,
            "protein": 0.9,
            "fat": 0.2,
            "calories": 7.4,
            "sugar": 2.6
        }
    },
    {
        "genus": "Spondias",
        "name": "Umbu",
        "imgUrl": "https://i.ytimg.com/vi/gxq70EVBbkI/maxresdefault.jpg",
        "id": 73,
        "family": "Anacardiaceae",
        "order": "0",
        "nutritions": {
            "carbohydrates": 5.87,
            "protein": 1.01,
            "fat": 0.31,
            "calories": 6.5,
            "sugar": 1.5
        }
    },
    {
        "genus": "Citrullus",
        "name": "Watermelon",
        "imgUrl": "https://www.whataboutwatermelon.com/wp-content/uploads/2018/11/watermelon-varieties-1280x720.jpg",
        "id": 25,
        "family": "Cucurbitaceae",
        "order": "Cucurbitales",
        "nutritions": {
            "carbohydrates": 8,
            "protein": 0.6,
            "fat": 0.2,
            "calories": 3.0,
            "sugar": 6
        }
    }
]

export default fruit;