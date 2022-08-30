let searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup',function(event){
  let searchQuery = event.target.value.toLowerCase();

  let allNamesDOMCollection  = document.getElementsByClassName('name') 

for(let i=0;i<allNamesDOMCollection.length;i++){
        const currentName = allNamesDOMCollection[i].textContent.toLowerCase();

        if(currentName.includes(searchQuery))  
        {
          allNamesDOMCollection[i].style.display = 'block';
        }   
        else{
            allNamesDOMCollection[i].style.display = 'none';
        }

    }
})


function handleClass(node, className, action = "add") {
  node.classList[action](className);
}

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(function (accordion) {
  const heading = accordion.querySelector(".accordion__title");
  const accordionContentWrap = accordion.querySelector(
    ".accordion__content-wrap"
  );
  const originalHeight = accordionContentWrap.offsetHeight;
  accordionContentWrap.style.height = 0;

  let accordionActiveClass = "accordion__active";

  heading.addEventListener("click", function () {
    if (this.parentNode.classList.contains(accordionActiveClass)) {
      handleClass(this.parentNode, accordionActiveClass, "remove");
      accordionContentWrap.style.height = 0 + "px";
    } else {
      handleClass(this.parentNode, accordionActiveClass);
      accordionContentWrap.style.height = originalHeight + "px";
    }
  });
});
