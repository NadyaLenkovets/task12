const filterButton = document.querySelector('.filter__button');
const filterMenu = document.querySelector('.filter-menu');
const topCategoriesItems = document.querySelectorAll('.top-categories__item');
const tableBody = document.getElementById('table-body');
const checkboxAll = document.getElementById('checkbox-all');
const searchInput = document.getElementById('search-input');
const error = document.getElementById('error');
const downArrows = document.getElementsByClassName('.down-arrow');

let totalAmount = document.getElementById('total-amount');
let collection = document.querySelector('.table-body').children;  // живая коллекция всех рядов таблицы
let viewMoreItems = document.getElementsByClassName('table-row__item--view-more');




//  ==========  TOP CATEGORIES ITEMS ==========  //

topCategoriesItems.forEach((topCategoriesItem) => {
   topCategoriesItem.addEventListener("click", function() {
      // всем убираем класс active
      topCategoriesItems.forEach((topCategoriesItem) => {
         topCategoriesItem.classList.remove('active');
      })

      // кликнутому добавляем класс active
      this.classList.add('active');
   })
})



//  ==========  CHECK ALL CHECKBOXES  ==========  //

function checkAllCheckboxes() {
   let checkboxes = document.querySelectorAll('.checkbox');
   if(checkboxAll.checked) {
      checkboxes.forEach((checkbox) => {
         checkbox.checked = true;
      })
   } else {
      checkboxes.forEach((checkbox) => {
         checkbox.checked = false;
      })
   }
}


//  ==========  JSON  ==========  //

let clientsArr = JSON.parse(clients);

// текущий массив, который содержит всеx, либо paid/unpaid/overdue пользователей,
// из которого происходит создание table rows. Изначально равен clientsArr.
let currentArr = clientsArr;
let paidArr = [];
let unpaidArr = [];
let overdueArr = [];



//  ==========  PAGINATION  ==========  //


const paginationNextArrow = document.querySelector('.next-arrow');
const paginationPrevArrow = document.querySelector('.prev-arrow');
let rowsPerPageValue = document.getElementById('rows-per-page').value;
let totalElemsShown = document.querySelector('.total-elems-shown');
let currentElemsShown = document.querySelector('.current-elems-shown');



let start = +rowsPerPageValue - rowsPerPageValue;
let end = +rowsPerPageValue;
let pageCounter = 0;
showCurrentElem(rowsPerPageValue, pageCounter);
showTotalElems(currentArr);



// ловим изменения в select
document.getElementById('rows-per-page').addEventListener('change', checkRowsPerPageValue);


function checkRowsPerPageValue() { 
   rowsPerPageValue = document.getElementById('rows-per-page').value;
   start = +rowsPerPageValue - rowsPerPageValue;
   end = +rowsPerPageValue;
   pageCounter = 0;

   showCurrentElem(rowsPerPageValue, pageCounter);
   showTotalElems(currentArr);
   createTableRows(currentArr);
}

// показать текущие элементы
function showCurrentElem(rowsPerPageValue, pageCounter) {

   let elemsLeft = currentArr.length - (rowsPerPageValue * pageCounter);
   if( elemsLeft < rowsPerPageValue) {
      currentElemsShown.innerHTML = (+pageCounter + 1) + '-' + elemsLeft;
   } else {
      currentElemsShown.innerHTML = (+pageCounter + 1) + '-' + rowsPerPageValue;
   }
}


// показать общее кол-во элементов
function showTotalElems(currentArr) {
   totalElemsShown.innerHTML = currentArr.length; // общее количество table-rows 
}


//  ==========  pagination next arrow  ==========  //

paginationNextArrow.addEventListener('click', function() {
   paginationPrevArrow.disabled = false;
   pageCounter++;
   console.log(pageCounter);
   start += +rowsPerPageValue;

   checkPaginationNextArrow(rowsPerPageValue);

   currentElemsShown.innerHTML = (start+1) + '-' + end;
   
   createTableRows(currentArr);
   collectionClick();
})


//  ==========  pagination prev arrow  ==========  //

paginationPrevArrow.addEventListener('click', function() {
   paginationNextArrow.disabled = false;
   pageCounter--;
   console.log(pageCounter);

   if((end - start) < rowsPerPageValue) {
      end -= +(end - start);
   } else {
      end -= +rowsPerPageValue;
   }

   start -= +rowsPerPageValue;

   checkPaginationPrevArrow();

   currentElemsShown.innerHTML = (start+1) + '-' + end;
   
   createTableRows(currentArr);
   collectionClick();
})


function checkPaginationNextArrow(rowsPerPageValue) {
   let elemsLeft = currentArr.length - (rowsPerPageValue * pageCounter);
   console.log(elemsLeft);
   if( elemsLeft <= rowsPerPageValue) {
      end += +elemsLeft;
      paginationNextArrow.disabled = true;
   } else {
      end += +rowsPerPageValue;
      paginationNextArrow.disabled = false;
   }
}

function checkPaginationPrevArrow() {
   if(start == 0) {
      paginationPrevArrow.disabled = true;
   }
}

checkPaginationPrevArrow();



// ============  DROPDOWN CUSTOMIZATION  ============ 

const multiDefault = () => {
   const select = document.querySelector('#rows-per-page');
   const choices = new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
   });
};

multiDefault();
                                  

//  ==========  CREATE TABLE ROWS  ==========  //

function createTableRows(clientsArr) {
   let i = 0; // счетчик для чекбоксов
   tableBody.innerHTML = '';

   // создаем подтаблицу
   let subtableBody = document.createElement('div');
   subtableBody.classList.add('subtable-body');

   for (let j = start; j < end; j++) {
      let subTableRowTemplate;

      if(clientsArr[j]) { // если clientsArr[j] существует
         if("sub" in clientsArr[j] == false) {
            subtableBody.innerHTML = '';
            subTableRowTemplate = `
               <div class="subtable-row">
                  <div class="no-records">No records found</div>
               </div>
            `;
            subtableBody.insertAdjacentHTML('beforeend', subTableRowTemplate);
            
         } else {
            subtableBody.innerHTML = '';
            for (let k = 0; k < clientsArr[j].sub.length; k++) {
               
               subTableRowTemplate = `
                  <div class="subtable-row">
                     <div class="subtable-row__date">${convertDate(clientsArr[j].sub[k].date)}</div>
                     <div class="subtable-row__user-activity">${(clientsArr[j].sub[k]['user activity'])}</div>
                     <div class="subtable-row__detail">${(clientsArr[j].sub[k].detail)}</div>
                  </div>
                  `;
               // console.log(subTableRowTemplate);
               
               subtableBody.insertAdjacentHTML('beforeend', subTableRowTemplate);
         
            }
         }
      } else {
         continue;
      }
      
   

      let tableRowTemplate = `
         <div class="table-row">
            <div class="table-row__body">
               <div class="table-row__item table-row__item--checkbox">
                  <div class="checkbox-block">
                     <input type="checkbox" class="checkbox" id="checkbox${i}"> 
                     <label class="checkbox__label" for="checkbox${i}"></label>
                  </div>
                  <div class="down-arrow">
                     <img class="down-arrow" src="img/union.svg" alt="">
                  </div>
               </div>
               <div class="table-row__item table-row__item--name">
                  <div class="user__name">${clientsArr[j]['first name']} ${clientsArr[j]['last name']}</div>
                  <div class="user__email">${clientsArr[j].email}</div>
               </div>
               <div class="table-row__item table-row__item--user-status">
                  <div class="user__status user__status--${(clientsArr[j]['user status']).toLowerCase()}">${clientsArr[j]['user status']}</div>
                  <div class="user__last-login">Last login: ${convertDate(clientsArr[j]['last login'])}</div>
               </div>
               <div class="table-row__item table-row__item--payment-status">
                  <div class="user__payment-status user__payment-status--${(clientsArr[j]['payment status']).toLowerCase()}">${clientsArr[j]['payment status']}</div>
                  <div class="user__paid-on">Paid on ${convertDate(clientsArr[j]['payment info'])}</div>
               </div>
               <div class="table-row__item table-row__item--amount">
                  <div class="user__sum">$${clientsArr[j].amount}</div>
                  <div class="user__currency">${clientsArr[j].currency}</div>
               </div>
               <div class="table-row__item table-row__item--view-more"><span class="view-more__span">View More</span> <img class="view-more__img" src="img/more.svg" alt="">
                  <div class="more-window">
                     <h5 class="more-window__item">Edit</h5>
                     <div class="more-window__item">View Profile</div>
                     <div class="more-window__item more-window__item--activate">Activate User</div>
                     <div class="more-window__item more-window__item--delete">Delete</div>
                     <div class="more-window__close"></div>
                  </div>
               </div>
            </div>
            <div class="subtable">
               <div class="subtable-header">
                  <div class="subtable-header__date">Date</div>
                  <div class="subtable-header__user-activity">User Activity</div>
                  <div class="subtable-header__detail-icon">Detail <img src="img/detail.svg" alt="">
                     <div class="tooltip">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget.</div>
                  </div>
               </div>
               ${subtableBody.innerHTML}
            </div>
         </div>
      `;
      
      tableBody.insertAdjacentHTML('beforeend', tableRowTemplate);
      i++;
   }
   countTotalAmount(); // запускаем подсчет суммы paid
}

createTableRows(clientsArr); // создать table-rows при запуске





//  ==========  VIEW MORE / SHOW SUBTABLE ==========  //

function collectionClick() {

   for (let elem of collection) {
      elem.addEventListener("click", function(e) {
   
         //  ==========  view more  ==========  //
   
         let moreWindow = elem.querySelector('.more-window');
         let userStatus = elem.querySelector('.user__status');
   
         if(e.target.classList.contains('view-more__span') || e.target.classList.contains('view-more__img')) {
            moreWindow.classList.add('open'); // открываем more window
         } 
   
         if(e.target.classList.contains('more-window__close')) {
            moreWindow.classList.remove('open'); // закрываем more window
         } 
   
         // активировать / деактивировать пользователя
         if(e.target.classList.contains('more-window__item--activate')) {
            if(userStatus.classList.contains('user__status--active')) {
               userStatus.classList.remove('user__status--active');
               userStatus.classList.add('user__status--inactive');
               userStatus.innerHTML = 'Inactive';
            } else {
               userStatus.classList.remove('user__status--inactive');
               userStatus.classList.add('user__status--active');
               userStatus.innerHTML = 'Active';
            }
         }
   
   
         //  ==========  show subtable  ==========  //
   
         let subTable = elem.lastElementChild;
         
         if(e.target.classList.contains('down-arrow')) {
            subTable.classList.toggle('open');
            this.firstElementChild.classList.toggle('active');
         }
      })
   }
}

collectionClick();




//  ==========  TOP CATEGORIES  ==========  //

//  ==========  all  ==========  //

const categoryAll = document.getElementById('all');
categoryAll.addEventListener("click", showUsers);

function showUsers() {
   currentArr = clientsArr;
   createTableRows(clientsArr);
   collectionClick();
   checkPaginationPrevArrow();
   paginationNextArrow.disabled = false;
   checkRowsPerPageValue();
}



//  ==========  paid  ==========  //

const categoryPaid = document.getElementById('paid');
categoryPaid.addEventListener("click", showPaid);

// создаем массив с paid
clientsArr.forEach((clientsObj) => {
   if(clientsObj['payment status'] == 'Paid') {
      paidArr.push(clientsObj);
   }
})

function showPaid() {
   currentArr = paidArr; // заменяем текущий массив клиентов на клиентов только paid
   createTableRows(paidArr);
   collectionClick();
   checkPaginationPrevArrow();
   paginationNextArrow.disabled = false;
   checkRowsPerPageValue();
}



//  ==========  unpaid  ==========  //

const categoryUnpaid = document.getElementById('unpaid');
categoryUnpaid.addEventListener("click", showUnpaid);

// создаем массив с unpaid
clientsArr.forEach((clientsObj) => {
   if(clientsObj['payment status'] == 'Unpaid') {
      unpaidArr.push(clientsObj);
   }
})

function showUnpaid() {
   currentArr = unpaidArr; // заменяем текущий массив клиентов на клиентов только unpaid
   console.log(unpaidArr);
   createTableRows(unpaidArr);
   collectionClick();
   checkPaginationNextArrow(rowsPerPageValue);
   checkRowsPerPageValue();
}



//  ==========  overdue  ==========  //

const categoryOverdue = document.getElementById('overdue');
categoryOverdue.addEventListener("click", showOverdue);

// создаем массив с overdue
clientsArr.forEach((clientsObj) => {
   if(clientsObj['payment status'] == 'Overdue') {
      overdueArr.push(clientsObj);
   }
})


function showOverdue() {
   currentArr = overdueArr; // заменяем текущий массив клиентов на клиентов только overdue
   createTableRows(overdueArr);
   collectionClick();
   checkPaginationNextArrow(rowsPerPageValue);
   checkRowsPerPageValue();

}





//  ==========  TOTAL AMOUNT (PAID)  ==========  //

function countTotalAmount() {
   let totalSum = 0;

   let totalSumArr = clientsArr.filter(checkTotalSum); // создаем отфильтрованный массив с rows только active
   
   function checkTotalSum(elem) {
      if (elem['payment status'] == 'Paid') {
         return elem.amount;
      }
   }
   totalSumArr.forEach((user) => {
      totalSum += user.amount;
   })

   totalAmount.innerHTML = '$' + totalSum.toFixed(2);
}




//  ==========  FILTER BUTTON ==========  //

filterButton.addEventListener("click", function() {
   filterMenu.classList.toggle('open');
})

filterMenu.addEventListener("click", function(e) {
   if(e.target.classList.contains('sort-by__button') || e.target.classList.contains('users__button')) {
      filterMenu.classList.remove('open');
   }
})



//  ==========  FILTER  ==========  //

let newClientsArr; // создаем копию исходного массива, чтобы его не менять


//  ==========  first name  ==========  //

function filterByFirstName(newClientsArr) {
   newClientsArr = currentArr.slice();
   newClientsArr.sort((a, b) => a['first name'] > b['first name'] ? 1 : -1);
   createTableRows(newClientsArr);
   currentArr = newClientsArr;
}


//  ==========  last name  ==========  //

function filterByLastName(newClientsArr) {
   newClientsArr = currentArr.slice();
   newClientsArr.sort((a, b) => a['last name'] > b['last name'] ? 1 : -1);
   createTableRows(newClientsArr);
}


//  ==========  due date  ==========  //

function filterByDueDate(newClientsArr) {
   newClientsArr = currentArr.slice();
   newClientsArr.sort((a, b) => a['payment info'] > b['payment info'] ? 1 : -1);
   createTableRows(newClientsArr);
}


//  ==========  last login  ==========  //

function filterByLastLogin(newClientsArr) {
   newClientsArr = currentArr.slice();
   newClientsArr.sort((a, b) => a['last login'] > b['last login'] ? 1 : -1);
   createTableRows(newClientsArr);
}


//  ==========  all  ==========  //

function showAll() {
   newClientsArr = currentArr.slice();
   createTableRows(newClientsArr);
   collectionClick();
}


//  ==========  active  ==========  //

function showActiveUsers(newClientsArr) {
   newClientsArr = currentArr.slice();
   let newClientsArrActive = newClientsArr.filter(checkActive); // создаем отфильтрованный массив с rows только active
   
   function checkActive(elem) {
      if (elem['user status'] == 'Active') {
         return elem;
      }
   }
   
   createTableRows(newClientsArrActive);
   collectionClick();
}


//  ==========  inactive  ==========  //

function showInactiveUsers(newClientsArr) {
   newClientsArr = currentArr.slice();
   let newClientsArrActive = newClientsArr.filter(checkInactive); // создаем отфильтрованный массив с rows только inactive
   
   function checkInactive(elem) {
      if (elem['user status'] == 'Inactive') {
         return elem;
      }
   }
   createTableRows(newClientsArrActive);
   collectionClick();
}



//  ==========  CONVERT DATE  ==========  //

function convertDate(date) {        // конвертируем дату из вида "2020-04-30" в "30/APR/2020" для добавления в html
   let newDate = date.split('-');
   let convertedDate = newDate[2] + '/' + checkMonth(newDate[1]) + '/' + newDate[0];
   return convertedDate;
}

function checkMonth(month) {
   switch(month) {
      case '01':
         return 'JAN';
      break;
      case '02':
         return 'FEB';
      break;
      case '03':
         return 'MAR';
      break;
      case '04':
         return 'APR';
      break;
      case '05':
         return 'MAY';
      break;
      case '06':
         return 'JUN';
      break;
      case '07':
         return 'JUL';
      break;
      case '08':
         return 'AUG';
      break;
      case '09':
         return 'SEP';
      break;
      case '10':
         return 'OCT';
      break;
      case '11':
         return 'NOV';
      break;
      case '12' :
         return 'DEС';
      break;
   }
}



//  ==========  SEARCH USERS  ==========  //

searchInput.addEventListener('keydown', function(event) {
   if (event.code == 'Enter' || event.code == 'NumpadEnter') {

      let searchValue = searchInput.value.toLowerCase();
      let counter = 0; // счетчик скрытых table-rows
      console.log(collection);
      
      for (let i = 0; i < collection.length; i++) {
         if(collection[i].classList.contains('hidden')) {
            collection[i].classList.remove('hidden');
         }

         let userName = collection[i].querySelector('.user__name').innerHTML.toLowerCase();
         if(userName.indexOf(searchValue) === -1) {
            collection[i].classList.add('hidden');
            counter++;
         }
      } 

      if (collection.length == counter) {
         error.classList.add('show');
         setTimeout(hideError, 2000);
      }
   }
})

function hideError() {
   error.classList.remove('show');
}
