



function teach() {
    try {
        console.log('teaching begins...');

        var name = "Nag"; // Moved to heap before conhtext destroy
        var i = 100;
       
        setTimeout(function () {
            console.log('after 5s lunch..'+name + " back to session");
            //throw new Error('ooops');
        }, 5000);
        
        //console.log('teaching further... ends');

        //window.alert('teach ends..');         

    } catch (e) {
        console.log('i caught '+e.message);
    }
}

teach();