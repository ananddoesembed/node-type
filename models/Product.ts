const products = []

class Product{
    title:string
    constructor(t){
        this.title =t.title
    }
    save(){
        products.push(this)
    }
}

export {Product}