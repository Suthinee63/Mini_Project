let count = 0;
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function checkAnswer(answer) {
    const result = document.getElementById('result');
    const result_Submit = document.getElementById('result_Submit');
    if (answer === 'b') {
        result.textContent = "correct";
        result.style.color = 'green';
        count = 1;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    result_Submit.textContent = "คุณได้คะแนนทั้งหมด " + count + " คะแนน"; 

 }

 function checkAnswer2(answer) {
    const result_2 = document.getElementById('result_2');
    const result_Submit = document.getElementById('result_Submit');
    if (answer === 'a') {
        result_2.textContent = "correct";
        result_2.style.color = 'green';
        count++;
    } else {
        result_2.textContent = "Incorrect! Try again.";
        result_2.style.color = 'red';
    }

    result_Submit.textContent = "คุณได้คะแนนทั้งหมด " + count + " คะแนน";   

 }

 function checkAnswer3(answer) {
    const result_3 = document.getElementById('result_3');
    const result_Submit = document.getElementById('result_Submit');
    if (answer === 'c') {
        result_3.textContent = "correct";
        result_3.style.color = 'green';
        count++;
    } else {
        result_3.textContent = "Incorrect! Try again.";
        result_3.style.color = 'red';
    }

    result_Submit.textContent = "คุณได้คะแนนทั้งหมด " + count + " คะแนน";   
    
 }

 function checkAnswer4(answer) {
    const result_4 = document.getElementById('result_4');
    const result_Submit = document.getElementById('result_Submit');
    if (answer === 'a') {
        result_4.textContent = "correct";
        result_4.style.color = 'green';
        count++;
    } else {
        result_4.textContent = "Incorrect! Try again.";
        result_4.style.color = 'red';
    }

    result_Submit.textContent = "คุณได้คะแนนทั้งหมด " + count + " คะแนน";   
  
 }
 function checkAnswer5(answer) {
    const result_5 = document.getElementById('result_5');
    const result_Submit = document.getElementById('result_Submit');
    if (answer === 'd') {
        result_5.textContent = "correct";
        result_5.style.color = 'green';
        count++;
    } else {
        result_5.textContent = "Incorrect! Try again.";
        result_5.style.color = 'red';
    }

    result_Submit.textContent = "คุณได้คะแนนทั้งหมด " + count + " คะแนน";   

 }


 