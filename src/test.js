
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
}

const shoe = {
    color: ["red","black"],
    desc: "Comfortable, durable and timeless—it's number one for a reason. The classic '80s construction pairs smooth leather with bold details for style that tracks whether you're on court or on the go.",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png",
    name: "Nike Air Force 0NE",
    price: 99,
    brand: "nike",
    size: [30,42,45]
    }

postNewShoe(shoe);