const form = document.addItem;
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    alert("Thank you for joining the mailing list!");

    const item = form.title.value;
    form.title.value = "";
    console.log(item)
})