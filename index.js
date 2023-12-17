
var siteNameInput = document.getElementById("siteNameInput")
var siteUrlInput = document.getElementById("siteUrlInput")

var sites = [];

if (localStorage.getItem("sites") != null) {
    sites = JSON.parse(localStorage.getItem("sites"))
    displaySites();
}

function addSite() {

  if (validateSiteName(siteNameInput.value)) {
        var site = { 
            name : siteNameInput.value,
            url : siteUrlInput.value
         }
        

        sites.push(site)
        displaySites();
       
        localStorage.setItem("sites", JSON.stringify(sites))
        clearForm()
      }else{
        alert(" Site Name is not valid plase enter [a-z or A-Z or 0-9 0r _]");
      }



      if (validateSiteUrl(siteUrlInput.value)) {
        var site = { 
            name : siteNameInput.value,
            url : siteUrlInput.value
         }
        

        sites.push(site)
        displaySites();
       
        localStorage.setItem("sites", JSON.stringify(sites))
        clearForm()
      }else{
        alert(" Site Url is not valid");
      }
    }

    



function displaySites() {
    var trs = ""

    for (var i = 0; i < sites.length; i++) {
        trs += ` <tr>
        <td>${i+1}</td>
        <td>${sites[i].name}</td>
        
        
        <td> <a href="${sites[i].url}" >
          <button class="btn btn-outline-warning">
          <i class="fa-solid fa-eye pe-2"> visit</i>
          </button>
          </a>
        </td>
        <td>
          <button onclick="deleteSite(${i})" class="btn btn-outline-danger">
          <i class="fa-solid fa fa-trash"> Delete</i>
          </button>
        </td>
      </tr>`
    }
    document.getElementById("tBody").innerHTML = trs
}

function clearForm() {
    siteNameInput.value = ""
    siteUrlInput.value = ""
    
}

function deleteSite(index) {
    // sites.splice(index, 1)
    // localStorage.setItem("sites", JSON.stringify(sites))
    // displaySites()

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        sites.splice(index, 1)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

        localStorage.setItem("sites", JSON.stringify(sites))
       displaySites()
      }
    });
    
}


function validateSiteName(siteName) {
  var siteNameRegEx = /^[a-zA-Z0-9]{3,}$/

  return siteNameRegEx.test(siteName)
}

function validateSiteUrl(siteUrl) {
  var siteUrlRegEx = /^[a-zA-Z0-9]{3,}\.com$/

  return siteUrlRegEx.test(siteUrl)
}

