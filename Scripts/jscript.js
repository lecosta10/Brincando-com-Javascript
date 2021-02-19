function funTrocaPais() {
    principal.className = sel_pais.value;
    img_capa.src = "imagens/" + sel_pais.value + "_capa.jpg";
    img_capa.alt = img_capa.title = texto_capa.innerHTML = sel_pais.value;
    window.scrollTo(0,0);

}
function FunTrocaFonte() {
    principal.style.fontFamily = sel_fonte.value;
    
}
function funExibe(par_alt, par_src) {
    img_destaque.src = par_src;
    img_destaque.alt = img_destaque.title = p_destaque.innerHTML = par_alt;


}