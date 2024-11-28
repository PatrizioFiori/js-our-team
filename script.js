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
    <div class="col-12 col-md-4 team-col d-flex align-items-center bg-warning-subtle mb-5 mt-5">
        <img class="w-50 px-1" src="./${img}" alt="placeholder">
        <div class="info w-50 p-2">
            <h4>${name}</h4>
            <p>${role}</p>
            <a href="${email}">${email}</a>
        </div>
    </div> 
`
document.getElementById("containerMembri").innerHTML += col


}