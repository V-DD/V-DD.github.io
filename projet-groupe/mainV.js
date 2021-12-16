/*--carousel--*/

let left;
let right;

function number() {
  if (window.innerWidth > 1150) {
    left = 1;
    right = 4;
  } else if (window.innerWidth > 900) {
    left = 1;
    right = 3;
  } else {
    left = 1;
    right = 2;
  }
  show();
}

number();

window.addEventListener("resize", function () {
  if (window.innerWidth > 1150) {
    left = 1;
    right = 4;
  } else if (window.innerWidth > 900) {
    left = 1;
    right = 3;
  } else {
    left = 1;
    right = 2;
  }
  for (let i = 1; i <= 7; i++) {
    document.getElementById("c" + i).style.display = "none";
  }
  show();
});

function show() {
  for (i = left; i <= right; i++) {
    document.getElementById("c" + i).style.display = "inline-block";
  }
}


function moveLeft() {
  if (left <= 3 && right <= 7) {
    document.getElementById("c" + left).style.display = "none";
    left += 1;
    right += 1;

    for (i = left; i <= right; i++) {
      document.getElementById("c" + i).style.display = "inline-block";
    }
  } else return;
}


function moveRight() {
  if (left >= 2 && right >= 5) {
    document.getElementById("c" + right).style.display = "none";
    left -= 1;
    right -= 1;

    for (i = left; i <= right; i++) {
      document.getElementById("c" + i).style.display = "inline-block";
    }
  } else return;
}


/*--end carousel--*/



/*--start cart number--*/

let carts = document.querySelector('.add-cart');



// for (let i=0; i < carts.length; i++){
//     carts[i].addEventListener('click', () => {
//         cartNumbers();
//     })
// }

//---------------
carts.addEventListener('click', () => {
           cartNumbers();
})

//------------------
function cartNumbers(){
  
  let productNumbers = localStorage.getItem('cartNumbers');
  console.log(productNumbers)
  productNumbers = parseInt(productNumbers);
  
  if( productNumbers ){
      localStorage.setItem('cartNumbers', productNumbers + 1);
      document.querySelector('.cart span').textContent = productNumbers;
  }else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }

}

window.addEventListener('load', () => {
  localStorage.clear();
});

/*--end cart number--*/

