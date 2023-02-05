let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();  
  xhr.addEventListener("readystatechange", function() {
    if(xhr.readyState == xhr.DONE && xhr.status === 200) {
      let queryGet = document.getElementById("loader");
      queryGet.classList.remove("loader_active");
      let valueResp = JSON.parse(xhr.responseText);
      let answerDiv = document.getElementById("items");
      let arrayQuery = valueResp.response.Valute;
      for (let key in arrayQuery){
        let pasteDivs= ` 
        <div class="item">
          <div class="item__code">
            ${arrayQuery[key].CharCode}
          </div>
          <div class="item__value">
            ${arrayQuery[key].Value}
          </div>
          <div class="item__currency">
            руб.
          </div>
        </div>`;  

        answerDiv.insertAdjacentHTML("beforeEnd", pasteDivs);
      }
 //document.getElementsByClassName("item")[0].style.display = "flex";
// document.getElementsByClassName("item__value")[0].style.display = "";
    } 
  })