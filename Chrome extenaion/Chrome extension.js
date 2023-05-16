let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)


if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]
tabBtn.addEventListener("click",function(){
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      localStorage.setItem("myLeads", JSON.stringify(myLeads))
        myLeads.push(tabs[0].url)
        render(myLeads)  
    })
    
    
})

function render(Leads){
    let listItems = ""
    for (let i = 0; i < Leads.length; i++){
   // listItems += "<li><a target='_blank' href='"+ myLeads[i] +"'>"+ myLeads[i] + "</a></li>"
   listItems += `
        <li>
            <a target='_blank' href='${Leads[i]}'>
                 ${Leads[i]}
            </a>
        </li>
   `
   /* const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)*/

    }
    ulEl.innerHTML = listItems

}

inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
     inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})
deleteBtn.addEventListener('dblclick', function(){
    console.log("double clicked")
    localStorage.clear()
    myLeads = []
    render(myLeads)

})


/*const recipient = 'james' 
const sender = 'Waydon'
const email = `
    Hey ${recipient}!

    How is it going? Cheers

    ${sender}`
console.log(email)*/





