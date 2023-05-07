const getTodos = (callback) =>{

    const request = new XMLHttpRequest();
    
    
    
    
    request.addEventListener("readystatechange",()=>{
        //console.log(request,request.readyState);
        if(request.readyState ===4 && request.status === 200){
            const arr = JSON.parse(request.responseText);
            console.log(arr);
            callback()
    
        }else if(request.readyState === 4){
            console.log("could not fetch the data")
            callback()
        }
    });
    
    
    
    //setting up a request 
    request.open("GET","https://jsonplaceholder.typicode.com/todos/");
    // sending a request 
    request.send();
    
    console.log(request)
    //format something in code
    //response code :200
    
    //status of 200
    };
    
    getTodos(()=>{
        console.log("call back fired");
    });
    