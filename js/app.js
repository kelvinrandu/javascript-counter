let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
      console.log(count);
      value.innerHTML = count;
    } else if (styles.contains("reset")) {
      count = 0;
      value.innerHTML = count;
      console.log(count);
    } else {
      count--;
      value.innerHTML = count;
      console.log(count);
    }

    //change counter text color based on counter value
    if (count < 0) {
      value.style.color = "red";
    } else if (count == 0) {
      value.style.color = "black";
    } else {
      value.style.color = "green";
    }
  });
});
