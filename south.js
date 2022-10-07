let fetchBtn = document.getElementById('bd');


let mainContainer = document.getElementById('mainContainer');

//  console.log("done");


const xhr = new XMLHttpRequest();

//xhr.open('GET' , 'https://jsonplaceholder.typicode.com/photos' , true);
//xhr.open('GET' , 'https://ak6414119.github.io/snackgame/api.json.txt' , true);


xhr.open('GET', '/jsons/south.json', true);


xhr.onload = function() {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let lists = json.lists;
    //console.log(lists);
    let listsHtml = "";

    lists.forEach(function(element) {

      let movies = `<div class="col-md-4" id="${element.Ids}" >
          <div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${element.Thumbnail}" alt="">

            <div class="card-body card-light bg-dark">
              <h2 class="card-title text-light">${element.Title}</h2>
              <p class="card-text text-danger">${element.Description}</p>
              
              
                <div class="d-flex justify-content-between align-items-end">
                            
                              <div class="btn-group">
                                <a href="${element._1080P}"> <button type="button" class="btn btn-outline-primary " style="width: 100px;">1080P</button></a>
                              </div>
                      
                            </div>  
                            
                            
                            <div class="d-flex justify-content-between align-items-end my-1 ">
                                          
                                            <div class="btn-group">
                                              <a href="${element._720P}"> <button type="button" class="btn btn-outline-primary " style="width: 100px;">720P</button></a>
                                            </div>
                                        </div>
              
              
                <div class="d-flex justify-content-between align-items-end">
                                          
                                            <div class="btn-group">
                                              <a href="${element._480P}"> <button type="button" class="btn btn-outline-primary " style="width: 100px;">480P</button></a>
                                            </div>
                                        </div>
              
              
              
              <div class="d-flex justify-content-between align-items-end my-4">
              
                <div class="btn-group">
                
                
                
               
                
                
                <a href="${element.Trailer}">
                  <button type="button" class="btn btn-outline-success" style="width: 100px;">TRAILER</button>
                  </a>
                 
                  
                  
                  
                  
                  
                </div>
                <small class="text-muted">${element.Time} ${element.Am_Pm}</small>
              </div>
            </div>
          </div>
        </div>`;

      listsHtml += movies;


    });

    mainContainer.innerHTML = listsHtml;
    //mainContainer.innerHTML = movies;





  }
  else {
    console.log("Somthing error.");
  }
}


xhr.send();





/*  <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="https://cdn.wallpapersafari.com/36/26/NmwIaD.jpg" alt="">

            <div class="card-body card-light bg-dark">
              <h2 class="card-title text-light">Marvel's Studio</h2>
              <p class="card-text text-danger">Here you will get all movies of Marvel's Studio.</p>
              <div class="d-flex justify-content-between align-items-end">
                <div class="btn-group">
                  <a href="#"> <button type="button" class="btn btn-outline-primary " style="width: 100px;">View</button></a>
                </div>
                <small class="text-muted">10:43 PM</small>
              </div>
            </div>
          </div>
        </div>

*/
