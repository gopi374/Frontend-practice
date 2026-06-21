// Vending Machine

function vendingMachine(){
    let insertedvalue=0;
    let inventory = {
    soda: { price: 50, stock: 5 },
    chips: { price: 20, stock: 3 },
    };

    return{
        insertcoin(value){
            insertedvalue += value;
            console.log(`Inserted coins: ${insertedvalue}`);
        },
        buyItem(item){
            let itemExist = inventory[item];
            if(itemExist){
                if(itemExist.price>insertedvalue){
                    console.log(`need more coins ${itemExist.price-insertedvalue} to buy this item- ${item}`);
                }else if(itemExist.cans<0){
                    console.log(`out of stock`)
                }
                else{
                    insertedvalue-=itemExist.price;
                    itemExist.quantity-=1;
                    console.log(`here is your item ${item}`)
                }
            }

        }

    }
}

let user = vendingMachine();
user.insertcoin(11.12563);
user.buyItem("chips");