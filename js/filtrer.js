/* j'ai créé une fonction qui rediger l'utilisateur vers la page séléctée dans la liste select (parceque select n'accepte pas la balise <a>)*/  
function redirectToPage(){
            const select = document.getElementById('cat');
            const selectedValue = select.value;

            if(selectedValue !== 'all'){
                window.location.href = selectedValue
            }
            
        };