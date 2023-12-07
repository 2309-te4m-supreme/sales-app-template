const db = require('./client')
const SALT_COUNT = 10;

const createOrders_Product = async ({
    order_id,
    product_id,
    quantity  }) => {

      try {
      const { rows: [orders_product] } = await db.query(`
      INSERT INTO orders_products(
        order_id,
        product_id,
        quantity  )
      VALUES($1, $2, $3)
      RETURNING *`, [
        order_id,
        product_id,
        quantity]);
      return orders_product;
  } catch (err) {
      throw err;
  }
}

const getAllProductsByOrderId = async (orderId) => {
  try {
    console.log(orderId)
    const { rows } = await db.query(`
    SELECT * FROM orders_products
    WHERE order_id = $1;`, [
      orderId,]);
    return rows;
  } catch (err) {
      throw err;
  }
}

const checkForPendingCart = async (userId) => {
  try {
    const { rows: order} = await db.query(`
      SELECT * FROM orders
      WHERE user_id=$1 AND order_status='Pending';`, [
        userId
      ])
    return order;
  } catch (err) {
    throw err;
  }
}

const removeFromCartByID = async (orderId, productId) => {
  try {
    console.log(orderId)
    const { rows } = await db.query(`
    DELETE FROM orders_products
    WHERE order_id = $1 AND product_id = $2
    RETURNING * ;`, [
      orderId, productId]);
    return rows;
  } catch (err) {
      throw err;
  }
}



// POSSIBLE Update for Total
// const updateOrderTotal = async (product_id) => {
//     try {
//       const productPrice= await db.query(`
//       SELECT product_price FROM products
//       WHERE product_id = $1
//       VALUES($1);`[
//        product_id
//       ]
//     ) 
  
//    const getQuantity = await db.query(`
//      SELECT quantity FROM orders_products
//      WHERE product_id = $1
//      VALUES($1);`[
//        product_id
//      ]
//    )

//    return getQuantity * productPrice
//     } catch (error) {
//        throw err;
//     }
// }






module.exports = { createOrders_Product, getAllProductsByOrderId, checkForPendingCart, removeFromCartByID}