const form = document.getElementById("pdfFiles");

async function clickFiles(){
    const inputFiles = document.getElementById("inputFiles").files;
    const formData = new FormData();
    console.log(inputFiles)

    const array = Array.from(inputFiles);
    console.log(array);

    array.forEach((value) => {
        formData.append(value.name, value)
    })
    
    const response = await fetch("http://localhost:3003/PDFs", {
        method: "POST",
        body: formData,
      });

      const json = await response.json();

      const short = json.message
      const split = short.split(',')
      console.log(split)
      
    split.forEach(name => listItems(name) )
    console.log(json);
}

function listItems(name){
    const elementList = document.getElementById("list")

    const link = document.createElement("a");
    link.setAttribute("href", name),
    link.setAttribute("class", "links")

    const list = document.createElement("li");

    link.innerHTML = name

    elementList.appendChild(list);
    list.appendChild(link)

}

async function getFiles(){
    try {
        const res = await fetch("/PDFs");
        const json = await res.json();
        console.log(json);
        json.forEach((x) => {
            listItems(x.name)
        })
    } catch (error) {
        console.log(error)
    }
}    
getFiles()


form.addEventListener("submit", (e) => {
    e.preventDefault();
    clickFiles();
  });