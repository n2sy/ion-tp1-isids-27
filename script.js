let btnAdd = document.getElementById("btn-add");
let inputIntitule = document.getElementById("intitule");
let inpMontant = document.getElementById("montant");
let category = document.getElementById("categorie");
let liste = document.getElementById("dep-list");
let spanTotal = document.getElementById("total-dep");

const categoriesConfig = {
  alimentation: { emoji: "🍽️", label: "Alimentation", color: "success" },
  transport: { emoji: "🚗", label: "Transport", color: "primary" },
  loisirs: { emoji: "🎮", label: "Loisirs", color: "warning" },
  sante: { emoji: "⚕️", label: "Santé", color: "danger" },
  education: { emoji: "📚", label: "Éducation", color: "tertiary" },
  autres: { emoji: "📦", label: "Autres", color: "secondary" },
};

let showNoDepenses = true;
let total = 0;

btnAdd.addEventListener("click", () => {
  if (showNoDepenses) {
    liste.innerHTML = "";
    showNoDepenses = false;
  }

  console.log(inputIntitule.value, inpMontant.value, category.value);

  let newItem = document.createElement("ion-item");

  let newBadge = document.createElement("ion-badge");
  newBadge.className = "category-badge";
  newBadge.color = categoriesConfig[category.value].color;
  newBadge.textContent = `${categoriesConfig[category.value].emoji} ${categoriesConfig[category.value].label}`;

  let newLabel = document.createElement("ion-label");
  newLabel.textContent = `${inputIntitule.value} : ${inpMontant.value}¥`;

  let newIcon = document.createElement("ion-icon");
  newIcon.name = "close";
  newIcon.color = "danger";
  newIcon.addEventListener("click", () => {
    presentAlert(newItem);
  });

  newItem.appendChild(newBadge);
  newItem.appendChild(newLabel);
  newItem.appendChild(newIcon);

  liste.appendChild(newItem);

  //   total += Number(inpMontant.value);
  total += +inpMontant.value;
  spanTotal.textContent = `${total} ¥`;
});

async function presentAlert(itemToDelete) {
  console.log(itemToDelete);
  const alert = document.createElement("ion-alert");
  alert.header = "Supprimer une dépense";
  alert.message = "Que voulez-vous faire ?";
  alert.buttons = [
    {
      text: "Supprimer cette dépense",
      handler: () => {
        //liste.removeChild(itemToDelete);
      },
    },
    {
      text: "Supprimer toutes les dépenses",
      handler: () => {
        console.log("choix 2");
      },
    },
    "Annuler",
  ];

  document.body.appendChild(alert);
  await alert.present();
}
