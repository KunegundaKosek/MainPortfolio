//CV

const cv = document.getElementById('cv');
const text = document.getElementById('text');

cv.addEventListener("mouseover",function(){
    cvTxt.innerHTML = "Moje cv";
})

cv.addEventListener("mouseout",function(){
    cvTxt.innerHTML = "";
})

//Certyfikaty
const certificates = document.getElementById('certificates')
const certificatesTxt = document.getElementById('certificatesTxt')
certificates.addEventListener("mouseover",function(){
    certificatesTxt.innerHTML = "Certyfikaty";
})

certificates.addEventListener("mouseout",function(){
    certificatesTxt.innerHTML = "";
})

//GitHub

//Linkedin
