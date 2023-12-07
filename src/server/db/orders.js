const db = require('./client')
const SALT_COUNT = 10;

const getAllOrders = async() => {
    try {
        const {rows} = await db.query(`
            SELECT * FROM orders;
        `)
        return rows
    } catch (error) {
        throw error;
    }
}

const getOrderById = async(orderId) => {
    try {
        const { rows: order } = await db.query(`
            SELECT * FROM orders
            WHERE order_id=$1;
        `, [orderId])
        return order
    } catch (error) {
        throw error;
    }
}

const getOrderByUserId = async(userId) => {
    try {
        console.log(userId)
        const { rows: order } = await db.query(`
            SELECT * FROM orders
            WHERE user_id=$1 AND order_status="Pending";
        `, [userId])
        return order
    } catch (error) {
        throw error;
    }
}


const createOrder = async (
      user_id, 
      order_total,
      order_status) => {
        try {
        let order_date = new Date()
        if(!order_status){order_status = "Pending"}
        const { rows: [order] } = await db.query(`
        INSERT INTO orders(
            user_id, 
            order_date, 
            order_status,
            order_total )
        VALUES($1, $2, $3, $4)
        RETURNING *`, [
            user_id, 
            order_date, 
            order_status,
            order_total]);
        return order;
    } catch (err) {
        throw err;
    }
}

// const deleteOrder = async (orderId) => {
//     try {
//         const { rows: order } = await db.query(`
//             DELETE FROM orders
//             WHERE order_id=$1;
//         `, [orderId])
//         return order
//     } catch (error) {
//         throw error;
//     }
// }

module.exports = { getAllOrders, getOrderById, getOrderByUserId, createOrder}