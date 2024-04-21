// let bagItems;
// onLoad();

// function onLoad() {
//   let bagItemsStr = localStorage.getItem("bagItems");
//   bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
//   displayItemsOnHomePage();
//   displayBagIcon();
// }

// function addToBag(itemId) {
//   bagItems.push(itemId);
//   localStorage.setItem("bagItems", JSON.stringify(bagItems));
//   displayBagIcon();
// }

// function displayBagIcon() {
//   let bagItemCountElement = document.querySelector(".bag-item-count");
//   if (bagItems.length > 0) {
//     console.log("I am here");
//     bagItemCountElement.style.visibility = "visible";
//     bagItemCountElement.innerText = bagItems.length;
//   } else {
//     bagItemCountElement.style.visibility = "hidden";
//   }
// }

// function displayItemsOnHomePage() {
//   let itemsContainerElement = document.querySelector(".items-container");
//   if (!itemsContainerElement) {
//     return;
//   }
//   let innerHtml = "";
//   items.forEach((item) => {
//     innerHtml += `
//     <div class="item-container">
//       <img class="item-image" src="${item.image}" alt="item image">
//       <div class="rating">
//           ${item.rating.stars} ⭐ | ${item.rating.count}
//       </div>
//       <div class="company-name">${item.company}</div>
//       <div class="item-name">${item.item_name}</div>
//       <div class="price">
//           <span class="current-price">Rs ${item.current_price}</span>
//           <span class="original-price">Rs ${item.original_price}</span>
//           <span class="discount">(${item.discount_percentage}% OFF)</span>
//       </div>
//       <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
//     </div>`;
//   });
//   itemsContainerElement.innerHTML = innerHtml;
// }

let itemsContainerElement = document.querySelector(".items-container");

let bagItems = [];
onload();

function onload() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displaybagicon();
  displayitemonhomepage();
}

function addToBag(itemid) {
  bagItems.push(itemid);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displaybagicon();
}

function displaybagicon() {
  let bagItemcountElement = document.querySelector(".bag-item-count");

  if (bagItems.length > 0) {
    bagItemcountElement.style.visibility = "visible";
    bagItemcountElement.innerText = bagItems.length;
  } else {
    bagItemcountElement.style.visibility = "hidden";
  }
}

function displayitemonhomepage() {
  let itemsContainerElement = document.querySelector(".items-container");

  if (!itemsContainerElement) {
    return;
  }
  let innerHTML = " ";
  items.forEach((item) => {
    innerHTML += `
      <div class="item-container">
                  <img class="item-image" src="${item.image}" alt="image">
                  <div class="rating">
                  ${item.rating.stars} ⭐⭐| ${item.rating.count}
                  </div>
                  <div class="company-name">${item.company}</div>
                  <div class="item-name">${item.item_name}</div>
                  <div class="price">
                      <span class="current-price">${item.current_price}</span>
                      <span class="original-price">${item.original_price}</span>
                      <span class="discount">${item.discount_percentage}% OFF</span>
                  </div>
                  <button class="btn-add-bag" onclick = "addToBag(${item.id});">Add To Bag</button>
  </div> 
      `;
  });

  itemsContainerElement.innerHTML = innerHTML;
}
