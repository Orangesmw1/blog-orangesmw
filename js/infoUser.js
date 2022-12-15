const cardShowInfo = document.querySelector(".card-show-info");
const dataInfo = JSON.parse(localStorage.getItem("infoUser"))
const arrayInfoUser = [];
arrayInfoUser.push(dataInfo);

const showInfo = (dataInfo) => {
    let str = "";
    dataInfo.forEach(element => {
        str += `
        <div class="row no-gutters">
            <div class="col-md-4 img-info">
            <img src="../image/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Name: ${element.nameRegister}</h5>
                <p class="card-text">Email: ${element.emailRegister}</p>
                <p class="card-text">Password: ${element.passRegister}</p>
                <button> Change Password </button>
            </div>
            </div>
        </div>
        `
    });
    cardShowInfo.innerHTML = str;
}
showInfo(arrayInfoUser);

function outAccount() {
    Swal.fire({
        text: 'Do you want to login again?',
        icon: 'question',
        confirmButtonText: 'OK',
        showCloseButton: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
    }) .then((result => {
        if(result.isConfirmed) {
            localStorage.removeItem("dataUserLogin");
            window.location = "../index.html"
        } else {
            localStorage.removeItem("dataUserLogin");
            window.location = "../index.html"
        }
    })) 
    
 }
