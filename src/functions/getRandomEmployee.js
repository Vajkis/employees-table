import getId from "./getId";
import randName from "./randName";
import randNum from "./randNum";

function getRandomEmployee() {

    return {
        id: getId(),
        name: randName(),
        age: randNum(18, 62),
        city: ['Vilnius', 'Kaunas', 'Klaipėda'][randNum(0, 2)],
        deleted: false,
        focus: false,
        check: false
    };
}

export default getRandomEmployee;