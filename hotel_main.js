
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen=navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen? "ri-close-line" : "ri-menu-3-line"
    );
});

const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_container h1",{
    ...ScrollRevealOption,
});
ScrollReveal().reveal(".header_content.section_description",{
    ...ScrollRevealOption,
});
ScrollRevealOption().reveal(".header_btns",{
    ...ScrollRevealOption,
    delay:1000,
})
ScrollReveal().reveal(".hotel_card",{
    ...ScrollRevealOption,
    interval:500,
})
ScrollReveal().reveal(".steps_card",{
    ...ScrollRevealOption,
    interval:500,
})

const inspiration=document.querySelector("inspiration_wrapper")
const inspirationImages=Array.from(inspiration.children)

inspirationImages.forEach(item=>{
    const duplicateNode=item_cloneNode(true)
    duplicateNode.setAttribute("aria-hidden", true)
    inspiration.appendChild(duplicateNode);
});

ScrollReveal().reveal(".property_card",{
    ...ScrollRevealOption,
    interval:500,
})

ScrollReveal().reveal(".trip_card",{
    ...ScrollRevealOption,
    interval:500,
})