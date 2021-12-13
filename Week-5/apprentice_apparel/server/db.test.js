
const {db} = require('./db')
const {Admin, Cart, Category, Item, User} = require('./model/index')
import 'regenerator-runtime/runtime'





describe('Create Admin, Cart, Category, Item, User Tables', () => {

    //Runs the code prior to all test
    beforeAll(async () => {
        //the tables are recreated each time
        //the test suite run
        await db.sync({force: true})
    })

    test('can create an admin', async () => {
        const admin = await Admin.create({name: 'Tony', email: 'tony@multiverse.com'})
        expect(admin.name).toBe('Tony')
        expect(admin.email).toBe('tony@multiverse.com')
    })

    test('can create a user', async () => {
        const user = await User.create({
            name: 'madi', 
            email: 'madi@multiverse.com',
            password: 'ghsdyghghj53',
            admin: 3
        })
        expect(user.name).toBe('madi')
        expect(user.password).toBe('ghsdyghghj53')
    })

    // test('can create a cart', async () => {
    //     const cart = await Cart.create({UserId: 1, ItemId: 2})
    //     const allCart = cart.findAll()
    //     expect(allCart[0].UserId).toBe(1)
    //     //expect(cart.ItemId).toBe(2)
    // })

    test('can create a category', async () => {
        const category = await Category.create({name: "Electronics", image: "https://ecommerce.ccc2020.fr/wp-content/uploads/2020/10/electronic-gadgets.jpeg" })
        expect(category.name).toBe("Electronics")
    })

    test('can create an Item', async () => {
        const item = await Item.create({
            title: 'watch', 
            description: 'very fancy and luxurious watch',
            price: 500, 
            image: 'https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UX522_.jpg', 
            sale: 1
        })
        expect(item.title).toBe('watch')
        expect(item.price).toBe(500)
    })

})

describe('Tables associations', () => {
    beforeAll(async () => {
        await db.sync({force: true});
    })

    test('categories have items', async () => {
        const category = await Category.create({name: "Electronics", image: "https://ecommerce.ccc2020.fr/wp-content/uploads/2020/10/electronic-gadgets.jpeg" })
        const item = await Item.create({
            title: 'watch', 
            description: 'very fancy and luxurious watch',
            price: 500, 
            image: 'https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UX522_.jpg', 
            sale: 1
        })
        await category.addItem(item)
        const items = await category.getItems();
        expect(items[0].title).toBe('watch');
        
    })

    test('user have many items', async () => {
        const user = await User.create({
            name: 'madi', 
            email: 'madi@multiverse.com',
            password: 'ghsdyghghj53',
            admin: 3
        })
        const item = await Item.create({
            title: 'watch', 
            description: 'very fancy and luxurious watch',
            price: 500, 
            image: 'https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UX522_.jpg', 
            sale: 1
        })
        await user.addItem(item)
        const items = await user.getItems();
        expect(items[0].price).toBe(500)
    })

})




