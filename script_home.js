const eventLink=document.getElementById('eventLink');
eventLink.addEventListener('click',function(event){
    event.preventDefault();
    console.log("hi");
    window.location.href='eventpage.html';
});