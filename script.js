const items = document.querySelectorAll(".item");

const expand = (item, i) => {
    const overlay = item.querySelector(".overlay");
    const menu = item.querySelector(".menu");

    items.forEach((it, ind) => {
        if (i === ind) return;
        it.clicked = false;
    });

    gsap.killTweensOf(items);
    gsap.to(items, {
        width: item.clicked ? "10vw" : "8vw",
        duration: 2,
        ease: "elastic(1, .6)"
    });

    gsap.killTweensOf(item);
    item.clicked = !item.clicked;
    gsap.to(item, {
        width: item.clicked ? "25vw" : "10vw",
        duration: 2,
        ease: "elastic(1, .3)"
    });
};

items.forEach((item, i) => {
    item.clicked = false;

    item.addEventListener("click", () => expand(item, i));
});

function validateForm(event) {
  event.preventDefault(); // Mencegah reload form

  const first = document.getElementById("firstName").value.trim();
  const last = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const birthDate = document.getElementById("birthDate").value.trim();
  const gender = document.qetElementById('input[name="gender"]:checked');
  const message = document.queryElementById("message").value.trim();

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (!nameRegex.test(first) || !nameRegex.test(last)) {
    alert("First and Last name must contain letters only.");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Email must be a valid Gmail address (example@gmail.com).");
    return false;
  }

    document.querySelector("form").classList.add("hidden");
    document.getElementById("thankYouPage").classList.remove("hidden");
  if (!birthDate) {
    alert("Please enter your date of birth.");
    return false;
  }

  if (!gender) {
    alert("Please select your gender.");
    return false;
  }

   if (!emailRegex.test(message)) {
    alert("Please enter your message.");
    return false;
  }

  // Kalau valid, pindah ke halaman "Thank You"
  window.location.href = "thankyou.html";
  return true;
}
