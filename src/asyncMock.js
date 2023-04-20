const products = [
      {
        id: 1,
        title: "Nike LD Waffle Sacai Black Nylon" ,
        price: 401,
        image: '../public/images/img01.jpg',
        category: "urbana",
        cantidad: 9,
      },
      {
        id: 2,
        title: "Nike Dunk Low Off-White Pine Green",
        price: 304,
        image: '../public/images/img02.jpg',
        category: "urbana",
        cantidad: 7
      },
      {
        id: 3,
        title: "Nike Air Force 1 Low Supreme Black",
        price: 475,
        image: '../public/images/img03.jpg',
        category: "deportiva",
        cantidad: 6
      },
      {
        id: 4,
        title: "Nike LD Waffle Sacai White Nylon",
        price: 399,
        image: '../public/images/img04.jpg',
        category: "urbana",
        cantidad: 5
      },
      {
        id: 5,
        title: "Nike Dunk Low SP Kentucky (2021)",
        price: 405,
        image: '../public/images/img05.jpg',
        category: "urbana",
        cantidad: 12
      },
      {
        id: 6,
        title: "Nike Dunk Low Off-White University",
        price: 285,
        image: '../public/images/img06.jpg',
        category: "urbana",
        cantidad: 10
      },
      {
        id: 7,
        title: "Nike Air Max 2 Light Atmos",
        price: 360,
        image: '../public/images/img07.jpg',
        category: "deportiva",
        cantidad: 10
      },
      {
        id: 8,
        title: "Nike Air Force 1 Low CLOT Blue Silk",
        price: 335,
        image: '../public/images/img08.jpg',
        category: "deportiva",
        cantidad: 11
      },
      {
        id: 9,
        title: "Nike Air Max 90 OG Volt (2020)",
        price: 799,
        image: '../public/images/img09.jpg',
        category: "deportiva",
        cantidad: 3
      },
      {
        id: 10,
        title: "Nike Dunk High Varsity Maize",
        price: 501,
        image: '../public/images/img10.jpg',
        category: "urbana",
        cantidad: 4
      },
      {
        id: 11,
        title: "Nike Air Rubber Dunk Off-White UNC",
        price: 377,
        image: '../public/images/img011.jpg',
        category: "deportiva",
        cantidad: 5
      }
  ]

export const getProducts = () => {
  return new Promise( (resolve) =>
    setTimeout( () => {
      resolve(products)
    },500)  
  )
}


export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = products.find((producto) => producto.id === parseInt(productId))
      if (producto) {
        resolve(producto)
      } else {
        reject('Producto no encontrado')
      }
    }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject)=>{
    setTimeout( () => {
      const productsByCategory = products.filter( prod => prod.category === categoryId);
      if (productsByCategory.length === 0) {
        reject(new Error(`No se encontraron productos para la categoría ${categoryId}`));
      } else {
        resolve(productsByCategory);
      }
    }, 500)
  })
}


