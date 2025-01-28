/**
 * Uso do color-scheme para modificar o tema (claro-escuro)
 * Uso de "local storage" para armazenamento no banco de dados do browser
 * @author João Victor
 */

const hmtl = document.querySelector('html')
 // Uso do banco de dados do navegador 
const tema = localStorage.getItem('mode')

// Capturar e implementar  a preferencia do usuario (light ou dark)
if(tema === "light") {
    light()
}

if(tema === "dark") {
    dark()
}

function light() {
    hmtl.style.setProperty("color-scheme" , "light")
    localStorage.setItem('mode', "light")
}

function dark() {
    hmtl.style.setProperty("color-scheme" , "dark")
    localStorage.setItem('mode', "dark")
}

function auto() {
    hmtl.style.setProperty("color-scheme" , "light dark")
    localStorage.removeItem('mode')
}