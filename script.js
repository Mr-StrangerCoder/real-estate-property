let data = [{ id: 1, name: "Light and modern house", address: "7409 Knollwood Cove, Austin, TX, 78731", bedroom: 3, bathroom: 2, area: 1950, imgpath: "./assest/lightone.png" },
{ id: 2, name: "Light and modern house", address: "7409 Knollwood Cove, Austin, TX, 78731", bedroom: 3, bathroom: 2, area: 1950, imgpath: "./assest/lighttwo.png" },
{ id: 3, name: "Light and modern house", address: "7409 Knollwood Cove, Austin, TX, 78731", bedroom: 3, bathroom: 2, area: 1950, imgpath: "./assest/lightthree.png" },
{ id: 4, name: "Light and modern house", address: "7409 Knollwood Cove, Austin, TX, 78731", bedroom: 3, bathroom: 2, area: 1950, imgpath: "./assest/lightfour.png" }
]

document.querySelector("#renderdata").innerHTML = data.map((p) => `
                    <div class = "col-12 col-md-6 col-lg-3>
                    <div class="card" style="width: 17.8rem;">
  <img src="${p.imgpath}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text"><i class="fa-solid fa-location-dot"></i>${p.address}</p>
  </div>
</div>
            </div>

`).join("")