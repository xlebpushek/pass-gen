const template = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const generator = () => {
  let password = "";

  for (let i = 0; i < 3; i++) {
    for (let i = 0; i <= 6; i++) {
      const random_number = Math.floor(Math.random() * template.length);
      password += template.substring(random_number, random_number + 1);
    }

    if (i < 2) password += "-";
  }

  document.getElementById("password").textContent = password;
};

generator();

const copy = () => {
  const el = document.getElementById("password");
  navigator.clipboard.writeText(el.textContent);
};
