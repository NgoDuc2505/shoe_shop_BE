import transporter from "./utils/mailer.js";

const postNewShoe = async (shoe) => {
  fetch("http://localhost:8080/api/shoe/add-shoe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shoe),
  })
    .then((response) => response.json())
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
};

const updateShoe = async (id, shoe) => {
  fetch(`http://localhost:8080/api/shoe/update-shoe/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shoe),
  })
    .then((response) => response.json())
    .then((data) => console.log("Success updated data:", data))
    .catch((error) => console.error("Error:", error));
};

const deleteShoe = async (id) => {
  fetch(`http://localhost:8080/api/shoe/delete-shoe/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log("Success updated data:", data))
    .catch((error) => console.error("Error:", error));
};

const signIn = async (data) => {
  fetch("http://localhost:8080/api/user/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
};

const login = async (data) => {
  fetch("http://localhost:8080/api/user/login",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
}
const test_order_from_user_API = async (data)=>{
  fetch(`http://localhost:8080/api/user/order-history`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response)=>response.json())
  .then((data)=>console.log("Success:", data))
  .catch((error)=>console.error("Error:", error));
}

const shoe = {
  color: ["red", "black"],
  desc: "Comfortable, durable and timeless—it's number one for a reason. The classic '80s construction pairs smooth leather with bold details for style that tracks whether you're on court or on the go.",
  img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png",
  name: "Nike Air Force 0NE",
  price: 99,
  brand: "nike",
  size: [30, 42, 45],
};

const shoe2 = {
  color: ["red", "pink"],
  desc: "More Air, less bulk. The Dn8 takes our Dynamic Air system and condenses it into a sleek, low-profile package. Powered by eight pressurised Air tubes, it gives you a responsive sensation with every step. Enter an unreal experience of movement.",
  img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3966977d-1d2e-4d9d-844d-e5b3f1bee59b/AIR+MAX+DN8+AMD.png",
  name: "Nike Air Max Dn8",
  price: 200,
  brand: "nike",
  size: [40, 42, 44, 45],
};

const shoe3 = {
  color: ["red", "pink"],
  desc: "Responsive cushioning in the Pegasus provides an energised ride for everyday road running. Experience lighter-weight energy return with dual Air Zoom units and a ReactX foam midsole. Improved engineered mesh on the upper decreases weight and increases breathability.",
  img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0dceb03f-c1e8-4f17-abce-0c2aac15f491/AIR+ZOOM+PEGASUS+41.png",
  name: "Nike Pegasus 41",
  price: 199,
  brand: "nike",
  size: [40, 42, 44, 45, 46, 47],
};

const shoe4 = {
  color: ["red"],
  desc: "Fine-tuned for marathon speed, the Alphafly 3 helps push you beyond what you thought possible. Three innovative technologies power your run: a double dose of Air Zoom units helps launch you into your next step; a full-length carbon-fibre plate helps propel you forwards with ease; and a heel-to-toe ZoomX foam midsole helps keep you fresh from start to 26.2. Time to leave your old personal records in the dust.",
  img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1a5c3044-5824-44b8-aadc-11ef214dce68/AIR+ZOOM+ALPHAFLY+NEXT%25+3.png",
  name: "Nike Alphafly 3",
  price: 400,
  brand: "nike",
  size: [44, 45, 46, 47],
};

const shoe5 = {
  color: ["white", "black"],
  desc: "Được gọi vui một cách thân thuộc là 'giày VANS đen' vốn là một sự phổ biến rất đặc biệt đối với các tín đồ của nhà VANS. Tới nay đôi giày chỉ với phối màu đen trắng này vẫn nằm trong top 'Best Seller' của VANS trên toàn thế giới",
  img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-old-skool-black-white-vn000d3hy28-1.jpg",
  name: "VANS OLD SKOOL CLASSIC BLACK/WHITE",
  price: 120,
  brand: "vans",
  size: [36, 37, 38, 42, 45],
};

const nikeShoes = [
  {
    name: "Nike Air Force 1 '07",
    desc: "Phiên bản cổ điển với thiết kế bền bỉ và phong cách vượt thời gian.",
    price: 150,
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e2d424e5-1f38-496b-9a2c-4df46d8a63d1/GIANNIS+IMMORTALITY+4+EP.png",
    color: ["white"],
    size: [40, 41, 42, 43, 44],
    brand: "nike",
  },
  {
    name: "Nike Air Max 1 '86 OG G",
    desc: "Giày golf với thiết kế cổ điển và công nghệ hiện đại.",
    price: 250,
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/29aae285-3c96-46d5-9020-9d2146343321/G.T.+CUT+CROSS+EP.png",
    color: ["white"],
    size: [41, 42, 43, 44],
    brand: "nike",
  },
  {
    name: "Air Jordan 1 Low",
    desc: "Phong cách bóng rổ cổ điển với thiết kế thấp cổ.",
    price: 300,
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f7660a9-7233-4159-abc8-1a066b7b0e8c/G.T.+CUT+CROSS+EP.png",
    color: ["black", "white"],
    size: [40, 41, 42, 43],
    brand: "nike",
  },
  {
    name: "Nike Pegasus Plus",
    desc: "Giày chạy bộ với đệm êm ái và thiết kế năng động.",
    price: 350,
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6a2304d8-0dc7-4fbe-a0a8-6e282bd3a1b7/JORDAN+B%27LOYAL.png",
    color: ["blue", "black"],
    size: [40, 41, 42, 43, 44],
    brand: "nike",
  },
  {
    name: "Nike Force 1 Low EasyOn",
    desc: "Dễ dàng mang vào với thiết kế tiện lợi cho trẻ em.",
    price: 100,
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f06dba73-3e1e-47ad-8bf3-e09a7cf1cdaf/KD18+EYBL+EP.png",
    color: ["white", "pink"],
    size: [28, 29, 30, 31],
    brand: "nike",
  },
  {
    name: "Nike Court Vision Low",
    desc: "Phong cách bóng rổ cổ điển với thiết kế thấp cổ.",
    price: 170,
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6e7323eb-4401-476a-8cb5-e496bdc133bb/ZOOMX+STREAKFLY+2.png",
    color: ["white", "black"],
    size: [40, 41, 42, 43],
    brand: "nike",
  },
  {
    name: "Nike Killshot 2 Leather",
    desc: "Thiết kế cổ điển với chất liệu da cao cấp.",
    price: 200,
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e8418bbf-acb4-4e0e-a648-071095b33908/JORDAN+TATUM+3+PF.png",
    color: ["white", "navy"],
    size: [40, 41, 42, 43],
    brand: "nike",
  },
  {
    name: "Nike Blazer Mid '77 Vintage",
    desc: "Phong cách retro với thiết kế mid-top cổ điển.",
    price: 300,
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ggph3qhx524pkw9jqfek/NIKE+SHOX+TL.png",
    color: ["white", "black"],
    size: [40, 41, 42, 43, 44],
    brand: "nike",
  },
  {
    name: "Nike Cortez",
    desc: "Thiết kế cổ điển từ những năm 70 với phong cách thể thao.",
    price: 120,
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8c9dce33-593c-40ff-9a0c-02a80760526e/AIR+FORCE+1+%2707+LV8.png",
    color: ["white", "red", "blue"],
    size: [36, 37, 38, 39],
    brand: "nike",
  },
  {
    name: "Nike P-6000",
    desc: "Phong cách retro chạy bộ với thiết kế đa lớp.",
    price: 230,
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/75a08905-26cc-4f14-aec0-ebbe410f1ff1/NIKE+FIELD+GENERAL.png",
    color: ["silver", "white"],
    size: [40, 41, 42, 43],
    brand: "nike",
  },
];

const adidasShoes = [
  {
    name: "adidas Samba OG",
    desc: "Phiên bản này trung thành với di sản, thể hiện qua thân giày bằng da mềm, dáng thấp, nhã nhặn, các chi tiết phủ ngoài bằng da lộn và đế gum.",
    price: 112.5,
    img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a7847ccfd3f4995b56d4d644403d104_9366/Samba_OG_Shoes_Green_IE3440_01_00_standard.jpg",
    color: ["trắng"],
    size: [38, 42, 46],
    brand: "adidas",
  },
  {
    name: "adidas Superstar - Đen",
    desc: "Suốt hơn 50 năm, giày sneaker adidas Superstar luôn là lựa chọn hàng đầu của các huyền thoại thể thao và thời trang đường phố.",
    price: 108.33,
    img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8684decf4664655866d449bcfba3771_9366/Campus_00s_Beta_Shoes_White_JI3158_01_00_standard.jpg",
    color: ["đen"],
    size: [35, 39, 45],
    brand: "adidas",
  },
  {
    name: "adidas Superstar - Trắng",
    desc: "Mẫu giày thiếu niên này ra mắt nhân dịp kỷ niệm 50 năm dòng giày adidas Superstar.",
    price: 108.33,
    img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3931dccdce5842f58d451b5760c85d35_9366/SL_72_RS_Shoes_Blue_JH5099_01_00_standard.jpg",
    color: ["trắng"],
    size: [36, 37, 43],
    brand: "adidas",
  },
  {
    name: "adidas Stan Smith",
    desc: "Vẻ đẹp kinh điển. Phong cách vốn dĩ. Đa năng hàng ngày. Suốt hơn 50 năm qua và chưa dừng ở đó, giày adidas Stan Smith luôn giữ vững vị trí là một biểu tượng.",
    price: 108.33,
    img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f4a9e5f0ebb1429f939337fb6cb9768c_9366/SL_72_RS_Shoes_Green_JH8643_01_00_standard.jpg",
    color: ["trắng"],
    size: [35, 41, 44],
    brand: "adidas",
  },
  {
    name: "adidas 100DB",
    desc: "Giày adidas 100DB với thiết kế đơn giản, thân giày bằng chất liệu tổng hợp và đế ngoài bằng cao su.",
    price: 83.33,
    img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e05ab9bfc6bd450bb4a7afe5160d73c5_9366/Runfalcon_5_Running_Shoes_White_IE8818_01_standard.jpg",
    color: ["trắng"],
    size: [36, 38, 42],
    brand: "adidas",
  },
  {
    name: "adidas Campus",
    desc: "Campus đặc trưng với phần thân trên làm bằng da lộn, tạo nên một phong cách retro mang hơi hướng hiện đại.",
    price: 108.33,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b8fb4a0e99dd42deaae3cbeaf99ce8d7_9366/Tracefinder_Trail_Running_Shoes_Blue_JI0958_01_00_standard.jpg",
    color: ["xám"],
    size: [37, 40, 43],
    brand: "adidas",
  },
  {
    name: "adidas Adizero Ubersonic 5",
    desc: "Giày tennis hiệu năng cao, thiết kế siêu nhẹ và cho cảm giác chân thật, hỗ trợ tăng tốc với thân giày bằng lưới.",
    price: 158.33,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c63fd9c974ba4532b5ca3d64833b965a_9366/Dropset_2_Trainer_Green_IE5489_01_standard.jpg",
    color: ["trắng", "xanh"],
    size: [39, 41, 45],
    brand: "adidas",
  },
  {
    name: "adidas Ultraboost 5",
    desc: "Giày chạy bộ với lớp đệm trợ lực dành cho chạy bộ hàng ngày, mang lại sự êm ái và hỗ trợ tối đa.",
    price: 142.92,
    img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/10a608ac9bac4ac38c487c927c9b9255_9366/Copa_Pure_3_League_Turf_Boots_Blue_ID9045_01_00_standard_hover.jpg",
    color: ["đen"],
    size: [35, 42, 47],
    brand: "adidas",
  },
  {
    name: "adidas Pureboost 5",
    desc: "Giày chạy bộ với thiết kế năng động, phù hợp cho mọi vận động viên thể thao.",
    price: 80.0,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/af305a3fb03d445c807250d677406654_9366/Acesmash_Shoes_Grey_JQ7456_01_00_standard.jpg",
    color: ["xám"],
    size: [36, 40, 44],
    brand: "adidas",
  },
  {
    name: "adidas Adistar",
    desc: "Giày chạy bộ với lớp đệm và bảo vệ tối cao, mang lại sự thoải mái và hỗ trợ tối đa.",
    price: 137.5,
    img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/2fcf0de2b2464bc09d8cfc7c4ae7c854_9366/Acesmash_Shoes_White_JQ2299_01_00_standard.jpg",
    color: ["trắng"],
    size: [37, 40, 43],
    brand: "adidas",
  },
];

const all_shoes = [
  ...nikeShoes,
  ...adidasShoes,
  shoe,
  shoe2,
  shoe3,
  shoe4,
  shoe5,
];

// const postNikeShoes = ()=>{
//     adidasShoes.forEach(shoe=>{
//         postNewShoe(shoe);
//       })
// }

const main = () => {
  const new_list = all_shoes.map((shoe) => {
    shoe["isDel"] = false;
    shoe["quantity"] = 15;
    shoe["category"] = "sport";
    return shoe;
  });
  // updateShoe("680c98cb68dce55ebcaa01d8", {
  //   name: "Nike Air Force 1 '08",
  //   desc: "Phiên bản cổ điển với thiết kế bền bỉ và phong cách vượt thời gian.",
  //   price: 150,
  //   img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e2d424e5-1f38-496b-9a2c-4df46d8a63d1/GIANNIS+IMMORTALITY+4+EP.png",
  //   color: ["white"],
  //   size: [40, 41, 42, 43, 44],
  //   brand: "nike",
  //   isDel: false,
  //   quantity: 15,
  //   category: "sport"
  // })

  // deleteShoe("680c98cb68dce55ebcaa01d9")
  // signIn({
  //   email: "ducnm.23ce@vku.udn.vn",
  //   password: "25052002Duc@",
  //   name: "Ngô Đức Minh",
  //   age: 22,
  // })
  // login({
  //   email: "ducnm.23ce@vku.udn.vn",
  //   password: "25052002Duc@"
  // })
  // signIn({
  //   email: "ngominhduc202@gmail.com",
  //   password: "25052002Duc#",
  //   name: "Shoe Shop Account",
  //   age: 30,
  // })
  // login({
  //   email: "ngominhduc202@gmail.com",
  //   password: "25052002Duc#"
  // })
};

const userId = '68106128968fa53b25654ddf';
const userId_2= '681050112fbe0541532d3381';

const test_order_from_user = ()=>{
  test_order_from_user_API({
    userId: userId_2,
    orderList: [
      {
        shoeId: "680c98cb68dce55ebcaa01dc",
        quantity: 1,
        name: "Nike Pegasus Plus",
        price: 350,
        color: ["black"],
        size: [40],
      },
      {
        shoeId: "680c98cb68dce55ebcaa01f1",
        quantity: 2,
        name: "VANS OLD SKOOL CLASSIC BLACK/WHITE",
        price: 120,
        color: ["blue"],
        size: [36, 38],
      }
    ]
  })
}

test_order_from_user()