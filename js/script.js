const filterButton = document.querySelector('.filter__button');
const filterMenu = document.querySelector('.filter-menu');
const topCategoriesItems = document.querySelectorAll('.top-categories__item');
const tableBody = document.getElementById('table-body');
const checkboxAll = document.getElementById('checkbox-all');
const searchInput = document.getElementById('search-input');
const error = document.getElementById('error');
const downArrows = document.getElementsByClassName('.down-arrow');
const firstNameRadioButton = document.getElementById('first-name');
const lastNameRadioButton = document.getElementById('last-name');
const dueDateRadioButton = document.getElementById('due-date');
const lastLoginRadioButton = document.getElementById('last-login');
const activeRadioButton = document.getElementById('active');
const inactiveRadioButton = document.getElementById('inactive');
const categoryAll = document.getElementById('all');
const categoryPaid = document.getElementById('paid');
const categoryUnpaid = document.getElementById('unpaid');
const categoryOverdue = document.getElementById('overdue');

let totalAmount = document.getElementById('total-amount');
let collection = document.querySelector('.table-body').children;  // живая коллекция всех рядов таблицы
let viewMoreItems = document.getElementsByClassName('table-row__item--view-more');



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
let maxPage; // максимально возможная страница пагинации


checkPagination();
checkMaxPage(rowsPerPageValue);
checkPageCounter();



// ловим изменения в select
document.getElementById('rows-per-page').addEventListener('change', checkRowsPerPageValue);

function checkRowsPerPageValue() {
   checkPagination();
   checkMaxPage(rowsPerPageValue);
   checkPageCounter();
}


// показать текущие эллементы
function showCurrentElem() {
   let elemsLeft = currentArr.length - (rowsPerPageValue * pageCounter);
   if( elemsLeft < rowsPerPageValue) {
      currentElemsShown.innerHTML = ((pageCounter * rowsPerPageValue) + 1) + '-' + elemsLeft;
      
   } else {
      currentElemsShown.innerHTML = ((pageCounter * rowsPerPageValue) + 1) + '-' + rowsPerPageValue;
   }
}


// показать общее кол-во элементов
function showTotalElems() {
   totalElemsShown.innerHTML = currentArr.length; // общее количество table-rows 
}


function checkElemsLeft() {
   let elemsLeft = currentArr.length - (rowsPerPageValue * pageCounter);
   let nextStep;

   if (elemsLeft < rowsPerPageValue) {
      nextStep = elemsLeft;
   } else {
      nextStep = rowsPerPageValue;
   }
   return +nextStep;
}


function checkPagination() {
   rowsPerPageValue = document.getElementById('rows-per-page').value;
   pageCounter = 0;
   start = 0;
   end = rowsPerPageValue;
   createTableRows(currentArr);
   showCurrentElem();
   showTotalElems();
}


// вычисляем maxPage
function checkMaxPage(rowsPerPageValue) {
   maxPage = Math.ceil(currentArr.length / rowsPerPageValue);
}



//  ==========  pagination next arrow  ==========  //

paginationNextArrow.addEventListener('click', function() {
   paginationPrevArrow.disabled = false;
   pageCounter++;
   
   start += +rowsPerPageValue;
   end = +end + checkElemsLeft();

   showCurrentElem();
   currentElemsShown.innerHTML = (start+1) + '-' + end;
   checkPageCounter(); // проверяем блокировку стрелок
   createTableRows(currentArr);
   collectionClick();
})



//  ==========  pagination prev arrow  ==========  //

paginationPrevArrow.addEventListener('click', function() {
   paginationNextArrow.disabled = false;
   pageCounter--;

   if((end - start) < rowsPerPageValue) {
      end -= +(end - start);
   } else {
      end -= +rowsPerPageValue;
   }
   start -= +rowsPerPageValue;

   currentElemsShown.innerHTML = (start+1) + '-' + end;
   checkPageCounter(); // проверяем блокировку стрелок
   createTableRows(currentArr);
   collectionClick();
})


// блокирует пагинацию в маленьких таблицах типа unpaid
function blockNextArrow() {
   if (currentArr.length <= rowsPerPageValue) {
      paginationNextArrow.disabled = true;
   } else {
      paginationNextArrow.disabled = false;
   }
}


// проверяем pageCounter чтобы отключить пагинацию
function checkPageCounter() {
   if (pageCounter == (maxPage - 1)) { 
      paginationNextArrow.disabled = true;
   } else {
      paginationNextArrow.disabled = false;
   }

   if (pageCounter == 0 && start == 0) {
      paginationPrevArrow.disabled = true;
   }
}

        


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




//  ==========  CATEGORIES  ==========  //

let actingArr;

categoryAll.addEventListener('click', checkArr);
categoryPaid.addEventListener('click', checkArr);
categoryUnpaid.addEventListener('click', checkArr);
categoryOverdue.addEventListener('click', checkArr);


// при нажатии на categories
function checkArr() {
   let attr = this.dataset.category;

   if (attr == "Paid") {
      paidArr = clientsArr.filter(checkPaid);
      actingArr = paidArr;
   } else if ((attr == "Unpaid")) {
      unpaidArr = clientsArr.filter(checkUnpaid);
      actingArr = unpaidArr;
   } else if ((attr == "Overdue")) {
      overdueArr = clientsArr.filter(checkOverdue);
      actingArr = overdueArr;
   } else if ((attr == "All")) {
      actingArr = clientsArr;
   } 
   pageCounter = 0;
   start = 0;
   end = +rowsPerPageValue;
   // проверяем оба фильтра
   checkFilters(actingArr);
}


// проверяем оба фильтра при переключении категорий
function checkFilters(actingArr) {
   // проверяем фильтр active / inactive
   let checkedActiveInactiveArr = checkActiveInactive(actingArr);

   // проверяем фильтр sort by
   let sortedByArr = sortBy(checkedActiveInactiveArr);
   createTableRows(sortedByArr);
   collectionClick();
   currentArr = sortedByArr;
   showTotalElems(sortedByArr);
   showCurrentElem(rowsPerPageValue, pageCounter);
   checkMaxPage(rowsPerPageValue);
   blockNextArrow();
   checkPageCounter();
}



//  ==========  FILTER  ==========  //

//  ==========  запускаем фильтр при выборе radio buttons  ==========  //


// запускает фильтр при нажатии на radio "sort by"
function activateSortBy() {
   // выбираем категорию all/paid/unpaid/overdue
   let categoryArr;
   if (categoryPaid.classList.contains('active')) {
      paidArr = clientsArr.filter(checkPaid);
      categoryArr = paidArr;
   } else if (categoryUnpaid.classList.contains('active')) {
      unpaidArr = clientsArr.filter(checkUnpaid);
      categoryArr = unpaidArr;
   } else if (categoryOverdue.classList.contains('active')) {
      overdueArr = clientsArr.filter(checkOverdue);
      categoryArr = overdueArr;
   } else if (categoryAll.classList.contains('active')) {
      categoryArr = clientsArr;
   }

   let checkedActiveInactiveArr = checkActiveInactive(categoryArr);
   let finishArr = sortBy(checkedActiveInactiveArr);

   createTableRows(finishArr);
   collectionClick();
   currentArr = finishArr;
   showTotalElems(finishArr);
   showCurrentElem(rowsPerPageValue, pageCounter);
   checkMaxPage(rowsPerPageValue);
   blockNextArrow();
}


// запускает фильтр при нажатии на radio "active/inactive"
function activateActiveInactive() {
   // выбираем категорию all/paid/unpaid/overdue
   let categoryArr;
   if (categoryPaid.classList.contains('active')) {
      paidArr = clientsArr.filter(checkPaid);
      categoryArr = paidArr;
   } else if (categoryUnpaid.classList.contains('active')) {
      unpaidArr = clientsArr.filter(checkUnpaid);
      categoryArr = unpaidArr;
   } else if (categoryOverdue.classList.contains('active')) {
      overdueArr = clientsArr.filter(checkOverdue);
      categoryArr = overdueArr;
   } else if (categoryAll.classList.contains('active')) {
      categoryArr = clientsArr;
   }

   pageCounter = 0;
   start = 0;
   end = +rowsPerPageValue;

   let checkedSortedArr = sortBy(categoryArr);
   let finishArr = checkActiveInactive(checkedSortedArr);
   currentArr = finishArr;
   createTableRows(finishArr);
   collectionClick();
   showTotalElems(finishArr);
   showCurrentElem(rowsPerPageValue, pageCounter);
   checkMaxPage(rowsPerPageValue);
   blockNextArrow();
   checkPageCounter();
}



//  ==========  сама проверка active/inactive и сортировка  ==========  //

// проверка на active/inactive
function checkActiveInactive(actingArr) {
   let activeInactiveArr;
   
   if (activeRadioButton.checked == true) {
      activeArr = actingArr.filter(checkActive);
      activeInactiveArr = activeArr;
   } else if (inactiveRadioButton.checked == true) {
      inactiveArr = actingArr.filter(checkInactive);
      activeInactiveArr = inactiveArr;
   } else {
      activeInactiveArr = actingArr;
   }

   return activeInactiveArr;
}


// сортировка
function sortBy(checkedActiveInactiveArr) {
   if (firstNameRadioButton.checked == true) {
      checkedActiveInactiveArr = filterBy('first name', checkedActiveInactiveArr);
   } else if (lastNameRadioButton.checked == true) {
      checkedActiveInactiveArr = filterBy('last name', checkedActiveInactiveArr);
   } else if (dueDateRadioButton.checked == true) {
      checkedActiveInactiveArr = filterBy('payment info', checkedActiveInactiveArr);
   } else if (lastLoginRadioButton.checked == true) {
      checkedActiveInactiveArr = filterBy('last login', checkedActiveInactiveArr);
   } else {
      checkedActiveInactiveArr = checkedActiveInactiveArr;
   }

   return checkedActiveInactiveArr;
}


//  ==========  check paid / unpaid / overdue / active / inactive  ==========  //

function checkPaid(elem) {
   if (elem['payment status'] == 'Paid') {
      return true;
   }
}

function checkUnpaid(elem) {
   if (elem['payment status'] == 'Unpaid') {
      return true;
   }
}

function checkOverdue(elem) {
   if (elem['payment status'] == 'Overdue') {
      return true;
   }
}

function checkActive(elem) {
   if (elem['user status'] == 'Active') {
      return true;
   }
}

function checkInactive(elem) {
   if (elem['user status'] == 'Inactive') {
      return true;
   }
}


// функция, которая фильтрует по заданному параметру
function filterBy(param, arr) {
   let sortedArr = arr.slice();
   sortedArr.sort((a, b) => a[param] > b[param] ? 1 : -1);
   return sortedArr;
}



//  ==========  TOTAL AMOUNT (PAID)  ==========  //

function countTotalAmount() {
   let totalSum = 0;
   let totalSumArr = clientsArr.filter(checkTotalSum);
   
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
      let searchArr = [];

      clientsArr.forEach((elem) => {
         let name = (elem['first name'] + elem['last name']).toLowerCase();
         if(name.indexOf(searchValue) != -1) {
            searchArr.push(elem);
         }
      })
   
      if (searchArr.length == 0) {
         error.classList.add('show');
         setTimeout(hideError, 2000);
      } else {
         createTableRows(searchArr);
         collectionClick();
         currentArr = searchArr;
         showTotalElems();
         showCurrentElem();
         checkMaxPage(rowsPerPageValue);
         checkPageCounter();
      }
   }
})

function hideError() {
   error.classList.remove('show');
}



// ============  DROPDOWN CUSTOMIZATION  ============ 

const multiDefault = () => {
   const select = document.querySelector('#rows-per-page');
   const choices = new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
   });
};

multiDefault();
 


