const categ = document.querySelectorAll(".right-result_title");
const sco = document.querySelectorAll("#score");
const ico = document.querySelectorAll(".wrapper img");

async function jsonFetch() {
    const fetchedData = await fetch("data.json");
    const json = await fetchedData.json();
    return json
}


async function writingData() {

    const data = await jsonFetch()

    for (let i = 0; i < data.length; i++) {
        const ele = data[i];
        const eachTitle = categ[i];
        const eachScore = sco[i];
        const eachIcon = ico[i];

        eachTitle.textContent = `${ele.category}`;
        eachScore.textContent += `${ele.score}`;
        eachIcon.setAttribute('src', `${ele.icon}`);
    }    

}

writingData();