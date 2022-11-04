const submit_btn = document.getElementById('submit_btn')
submit_btn.addEventListener('click', () =>{
    submitFacts()
})

const submitFacts = () => {
    try{
        let selectedUsia = document.querySelector(
            "input[name='usia']:checked"
        ).value;

        let selectedWarna = document.querySelector(
            "input[name='warna']:checked"
        ).value;
        
        let selectedTekstur = document.querySelector(
            "input[name='tekstur']:checked"
        ).value;
        
        let selectedWaktu = document.querySelector(
            "input[name='waktu']:checked"
        ).value;

        let selectedBau = document.querySelector(
            "input[name='bau']:checked"
        ).value;
        
        let selectedSisi = document.querySelector(
            "input[name='sisi']:checked"
        ).value;

        let selectedGejala = document.querySelectorAll(
            "input[name='gejala']:checked"
        );
        let selectedGejalaArray = Array.from(selectedGejala)
        let gejalaValues = []
        
        selectedGejalaArray.forEach(gejala => {
            gejalaValues.push(gejala.value)
        })
        let facts = {
            usia: selectedUsia,
            warna: selectedWarna,
            tekstur: selectedTekstur,
            waktu: selectedWaktu,
            bau: selectedBau,
            sisi: selectedSisi,
            gejala: gejalaValues
        }
        fetch("/submit-facts", {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(facts)
          }).then(res => res.json())
          .then(res => {
            console.log(res)
            let comp = document.getElementById('result');
            if (res.length === 0) {
                comp.style.display = "block";
                comp.innerHTML = "<h2 id=\"title2\">Hasil Diagnosis</h2>"
                comp.innerHTML += "<li class=\"result\">" + "Belum terdapat diagnosis akurat" + "</li>" 
            } else {
                comp.innerHTML = "<h2 id=\"title2\">Hasil Diagnosis</h2>";
                comp.style.display = "block";
                res.forEach(element => {
                    comp.innerHTML += "<li class=\"result\">" + element.params.message + "</li>" 
                });
            }
            comp.innerHTML += "<br/> <p> Mohon periksa ke dokter untuk diagnosis lebih lanjut. </p>"
            window.scrollBy({
                top: -window.innerHeight,
                behavior: "smooth"
            });
        });
   
    }catch(err){
        console.log(err)
        alert("Tolong isi semua pertanyaan")

    }    
}