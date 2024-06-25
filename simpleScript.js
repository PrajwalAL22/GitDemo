const sub = document.querySelector(".submit");

sub.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;

  document.querySelector(".new").innerHTML = `Welcome ${name} Email: ${email}`;
});
