const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


for (let key of teamMembers){

const {name, role, email, img}  = key 


const col = `
    <div class="col-3 d-flex align-items-center border p-3 mt-5 mx-2 gap-4">
        <img class="w-50" src="./${img}" alt="placeholder">
        <div class="info w-50">
            <h4>${name}</h4>
            <p>${role}</p>
            <p>${email}</p>
        </div>
    </div> 
`
document.getElementById("containerMembri").innerHTML += col


}