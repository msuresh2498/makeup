fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`).then((data)=>{
        console.log(data) //data get from api
        return data.json();
    }).then((getdata)=>{ // convert the data element1 to objectData
        console.log(getdata);

       //using map method

        let Data ="";  
    getdata.map((value)=>{
        Data +=`<tr>
        <td>${value.brand}</td>
        <td>${value.name}</td>
        <td>${value.description}</td>
        <td>${value.price}$</td>
        <td><a href="${value.product_link}" class="btn btn-outline-danger">Get Product</button></td>
        <td><img src="${value.image_link}"/></td>
      </tr>`
    });
    document.getElementById("tablebody").innerHTML = Data; 
   
    //error handling
    }).catch((error)=>{
        console.log(error)
    })
