const mDash = document.querySelector(".mobile-showdash");
const mDashClose = document.querySelector(".mobile-closedash");

mDash.addEventListener('click' , () => {
    sidebar.classList.add('active');
    mDashClose.style.display="initial";
})

mDashClose.addEventListener('click' , () => {
    sidebar.classList.remove('active');
    mDashClose.style.display="none";
    /* mDash.style.display="flex"; */
})