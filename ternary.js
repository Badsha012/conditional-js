

/***
 * ++++++++ TARARY--------
 * 
 * 
 *       ?
 * 
 * 
 * 
 *    condition ? do go something true :do something false
 */
const age=20;

// -------NORMAL TERNARY
// if(age>=18){
//     console.log('You can vote');

// }
// else{
//     console.log('jow bacc ghumia thako');
// }

//age >=18 ? console.log('Vote dio') : console.log('Gumia thako')
  const isLeadar=true;
  let  price=500;
  if(isLeadar==true)
  {
    price=0;
  }
  else{
    price=price+100;
  }
//   console.log(price);


price=isLeadar==true ? 0:price+100;



// optional :semi-advance

if(isLeadar==true){
    if(price>1000){
        price=price/2;

    }
    else{
        price=0;
    }
}
    else{
        price=price+1000;
    }

    price>100
    price=isLeadar===true ?  price>1000 ? price/2:0 :price+1000;