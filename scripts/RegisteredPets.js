import { getPets } from "./database.js";

export const RegisteredPets = () => {
    const pets = getPets();
    let petHTML = "<ul>";

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`;
    }

    petHTML += "</ul>";

    return petHTML;
};

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    if (itemClicked.id.startsWith("pet")) {
        const [, petId] = itemClicked.id.split("--");
        const pets = getPets();

        for (const pet of pets) {
            if (pet.id === parseInt(petId)) {
                window.alert(`${pet.name} barks at you`);
            }
        }
    }
});
