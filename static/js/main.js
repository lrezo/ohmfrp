'use strict';
(function (){
    const nameButtonField = document.getElementById("name-button");
    const linkImageField = document.getElementById("link-image");
    const linkFunctionField = document.getElementById("link");
    const errLinkFunction = document.getElementById("errLink");
    const errLinkImage = document.getElementById("errLinkImage");
    const errNameButton  = document.getElementById("errNameButton");
    const form = document.querySelector("form");
    const downloadLink = document.querySelector("#downloadLink");

        if (form.hasAttribute("on")){
            form.classList.toggle("show");
            form.addEventListener("submit",(e)=>{
                e.preventDefault();
                hideErrors();
                let check = validateForm();
                if (check){
                    (async function(){
                        await fetch("http://localhost:3000/api/v1/landen",{
                            method:'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                            body:JSON.stringify({
                              linkImage:linkImageField.value,
                              linkFunction: linkFunctionField.value,
                              nameFunction: nameButtonField.value
                            })


                        })
                    })()
                    resetForm();
                }
            })
        }
    function resetForm(){
        nameButtonField.value = "";
        linkImageField.value = "";
        linkFunctionField.value = "";

    }

    function hideErrors(){
        errLinkFunction.style.display="none";
        errNameButton.style.display="none";
        errLinkImage.style.display="none";

        }

    function setErrorMessage(nameElement,message){
        nameElement.style.display="block";
        nameElement.textContent=message;
    }
    function validateForm(){
        let checker = true;
        if (nameButtonField.value === "" ){
            setErrorMessage(errNameButton,"Not a valid name function");
            checker=false;
        }
        if (linkImageField.value === ""){
            setErrorMessage(errLinkImage,"Its not a valid image link");
            checker =false;
        }
        if (linkFunctionField.value === ""){
            setErrorMessage(errLinkFunction,"Not a valid link");
            checker =false;
        }
        return checker;

    }
    downloadLink.addEventListener("click",()=>{
        downloadLink.setAttribute("href",
            `${downloadLink.getAttribute("href") === "https://github.com/vnrom/bypass/raw/master/FRP_vnROM.apk"
                ? "https://vnrom.ondex.app/FRP_vnROM(1).apk":"https://github.com/vnrom/bypass/raw/master/FRP_vnROM.apk"}`);

    })
})()