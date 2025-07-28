

/**
 * MULTI_LEVEL_CONDITON
 */

const price=5000;
if(price >= 5000){
    // 10%iscount
    const discount=price*10/100;
    const payamount=price-discount
    console.log(payamount);
}
else if(price>2500){
    //5%discunt
    const discount=price*5/100;
    const payamount=price-discount;
    console.log(payamount);


}
else{
    console.log('price')
}