
/* first -> shift -> second */

//I made this task in kind of a difficult way as I didn't knew how to make an EventListener for holding the shift key and checking checkbox at the same time
//So , I used KeyUp Eventlistener as it may act like the real selection in Gmail

//Every CheckBox has an index starting from 0 to 8 respectively

var items = document.getElementsByClassName('chkbx');  //array that contains all checkboxes in the html file
var chckitems = [];  //array will contain checkboxes that will be checked
var state; //boolean that will be used to prevent repititon of indices of already selected checkboxes 

//This part is responsible for adding an EventListener for every CheckBox 
//when any CheckBox is clicked , we check if it is unchecked then do nothing
// But if it is checked the push it to to the array chckitems 
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
        if (items[i].checked) {
            chckitems.push(i);
        }
    });
}


//So when the user checks the first CheckBox then press shift then the second CheckBox he holds the shift Button 
//But I actually i made it do the same functionality when the shift Button is UP after pressing it so it seems like he/she is holding it

//Here , I added an EventListener for a KeyBoard Button which is the SHIFT Button with KeyCode 16
///When it is pressed and the left to go UP again it does the following:
//loops for all the checkboxes in the array items , if it is unchecked then do nothing
//But if it is checked it see if it is already added to the array chckitems when it was clicked , if it wasn't added before then add it 
//and then by the time the user leves the SHIFT button it loops between the last 2 indices in the array chckitems and make them checked
window.addEventListener('keyup', up, false);
function up(key) {
    if (key.keyCode == "16") {
        for (var i = 0; i < items.length; i++) {
            if (items[i].checked) {
                state = true;
                for (var z = 0; z < chckitems.length; z++) {
                    if (i == chckitems[z]) {
                        state = false;
                    }
                }
                if (state) {
                    chckitems.push(i);
                }

            }
        }

        //Determines the Max and Min between the last 2 indices to loop betwween them
        var max = Math.max(chckitems[chckitems.length - 2], chckitems[chckitems.length - 1]);
        var min = Math.min(chckitems[chckitems.length - 2], chckitems[chckitems.length - 1]);
        for (var i = min; i <= max; i++) {
            items[i].checked = true;
            if (!items[i].checked) {
                chckitems.push(i);
            }

        }
    }
}

