



function check(){
    const result = document.getElementById("results-div")
    const userInput = document.getElementById("user-input")
    const value = userInput.value.trim()
    const filter = /^(1?\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?\d{4}$/
    

    if (value === ""){
        alert("Please provide a phone number")
    }else if (value.match(filter)){
        result.innerText = `Valid US number: ${value}`
    }else{
        result.innerText = `Invalid US number: ${value}`
    }


  
}

function clearInput(){
    const result = document.getElementById("results-div")
    result.innerText = ""
}

// 27576227382
// (275)76227382 

// 1 (555) 555-5555
// 1(555)555-5555
// 1 555 555 5555
// 5555555555
// 555-555-5555
// (555)555-5555
