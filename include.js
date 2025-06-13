//Function include
document.addEventListener("DOMContentLoaded", () => {
    const includes= document.querySelectorAll('[data-include]');

    includes.forEach(async el => {
        const file = el.getAttribute('data-include')
        try {
            const resp = await fetch(file);
            if(resp.ok){
                const html = await resp.text();
                el.innerHTML = html;
            }else {
                el.innerHTML = "<!-- No se pudo cargar el archivo: " + file +"-->";
            }
        } catch (e) {
            el.innerHTML = "<!--Error cargando " + file +  "-->";
            
        }
    });
});