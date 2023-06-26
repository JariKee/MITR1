let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");

let mode = "EenTweeDrie";

for(let i = 0; 1 < arrowButtons.length; i++){
    arrowButtons[i].onclick = function(){
        if (mode == "EenTweeDrie"){
            reviews[0].style.display = "none";
            reviews[1].style.display = "none";
            reviews[2].style.display = "none";
            reviews[3].style.display = "block";
            reviews[4].style.display = "block";
            reviews[5].style.display = "block"; 
            mode = "VierVijfZes"; 
        }
        else{
            reviews[0].style.display = "block";
            reviews[1].style.display = "block";
            reviews[2].style.display = "block";
            reviews[3].style.display = "none";
            reviews[4].style.display = "none";
            reviews[5].style.display = "none";
            mode = "EenTweeDrie";  
        }

    }
}


     
var priceRange = document.getElementById("priceRange");
var priceLabel = document.getElementById("priceLabel");
var materialSelect = document.getElementById("materialSelect");
var nameInput = document.getElementById("nameInput");
var productContainer = document.getElementById("productContainer");

fetch("products2.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var products = data.products;

    priceLabel.textContent = "€" + priceRange.value;

    function createProductElements() {
      productContainer.innerHTML = "";

      var selectedPrice = parseInt(priceRange.value);
      var selectedMaterial = materialSelect.value;
      var searchText = nameInput.value.toLowerCase().trim();

      var filteredProducts = products.filter(function(product) {
        var isPriceMatched = parseFloat(product.productPrice) <= selectedPrice;
        var isMaterialMatched = selectedMaterial === "All" || product.productMaterial === selectedMaterial;
        var isNameMatched = product.productName.toLowerCase().includes(searchText);
        return isPriceMatched && isMaterialMatched && isNameMatched;
      });

      filteredProducts.forEach(function(product) {
        var ulElement = document.createElement("ul");
        ulElement.className = "product-kaartje";

        if (product.productLink) {
          var aElement = document.createElement("a");
          aElement.className = "link-productpagina";
          aElement.href = product.productLink;

          var imgElement = document.createElement("img");
          imgElement.className = "product-img";
          imgElement.src = product.productImgSrc;
          imgElement.alt = "";

          aElement.appendChild(imgElement);
          ulElement.appendChild(aElement);
        } else {
          var imgElement = document.createElement("img");
          imgElement.className = "product-img";
          imgElement.src = product.productImgSrc;
          imgElement.alt = "";

          ulElement.appendChild(imgElement);
        }

        var h2Element = document.createElement("h2");
        h2Element.className = "product-naam";
        h2Element.textContent = product.productName;

        if (product.productLink) {
          h2Element.style.textDecoration = "none";
        }

        ulElement.appendChild(h2Element);

        var pElement = document.createElement("p");
        pElement.className = "product-prijs";
        pElement.textContent = product.productPrice;
        ulElement.appendChild(pElement);

        productContainer.appendChild(ulElement);
      });
    }

    priceRange.addEventListener("input", function() {
      priceLabel.textContent = "€" + priceRange.value;
      createProductElements();
    });

    materialSelect.addEventListener("change", function() {
      createProductElements();
    });

    nameInput.addEventListener("input", function() {
      createProductElements();
    });

    createProductElements();
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });