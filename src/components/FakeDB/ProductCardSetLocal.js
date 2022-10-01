
const FakeDB = props => {
    const id = props?.id

    let shopingCard;
    const getStoredCards = localStorage.getItem('om_shoping')

    if (getStoredCards) {
        shopingCard = JSON.parse(getStoredCards)
    }else{
        shopingCard = {}
    }
    console.log('defult', shopingCard);
    const qunttity = shopingCard[id]
    console.log(qunttity);
    if(qunttity){
        const newQunttity = parseInt(qunttity) + 1
        shopingCard[id] = newQunttity
    }else{
        shopingCard[id] = 1
    }
    console.log('after', shopingCard);

    localStorage.setItem("om_shoping" , JSON.stringify(shopingCard))
}
export default FakeDB;

// qunttity mane hocce jodi shoping card a kono id thake tahle oi id ke 1 1 kore barabe r jodi kono id na thake 1 send korbe
// ami locul store a only shoping card sent kortechi 
// 1. age theke local store kono kicho store kora na thake local store entry object sent hobe