document.querySelector("form").addEventListener("submit", function(){
    let height = Number(document.querySelector(".heightInp").value)
    let weight = Number(document.querySelector(".weightInp").value)

    let bmi = weight/Math.pow(height,2)

    if(bmi < 18.6){
        document.querySelector("#output").textContent = `you are under weight, ${bmi}`
    }
    else if(bmi >= 18.6 && bmi < 24.9){
        document.querySelector("#output").textContent = `congratulations you are perfect ${bmi}`
    }  
    else{
        document.querySelector("#output").textContent = `You are over weight, ${bmi}`
    }

    let gender = document.querySelector("#gender").value
    if(gender == "male"){
        document.querySelector("body").className = "mainBodyM"
    }
    else{
        document.querySelector("body").className = "mainBodyF"
    }
})