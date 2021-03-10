function includeHTML(callback) {

    var elment_Size, lenght, elment, file, xhr;
    elment_Size = document.getElementsByTagName("*");

    for(length = 0; length <elment_Size.length; length++) {

        elment = elment_Size[length];
        file = elment.getAttribute("include");

        if(file) {

            xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {

                if(this.readyState == 4) {

                    if(this.status == 200) { elment.innerHTML = this.responseText; }
                    if(this.status == 404) { elment.innerHTML = "Page not found."; }

                    elment.removeAttribute("include");
                    includeHTML(callback);
                    
                }

            };

            xhr.open("GET", file, true);
            xhr.send();
            return;

        }
    }

    setTimeout(function() { callback(); }, 0);
}