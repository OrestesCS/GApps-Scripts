//You will need to load jquery, this one or latest version:
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

//Then you basically just take the URL in js and split the part you want and then replace the URL that loads the embeded form to pass the UTM tag
//of the initial website , then add this script before </body> : 

 <script>
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

//this where your utm tags should be going given your URL looks like : https://www.whatever.com?utm_source=Facebook  you can 
//build your URLS here : https://ga-dev-tools.appspot.com/campaign-url-builder/

const utm_source = urlParams.get('utm_source')

typeformWidget = $("[data-url]");

//the hidden field's name you created at typeform must go here, for this example the field is named: 'source', 
//you can add more fields but you need first to get them (check above)and then adjust the new url line, it would be typeformWidget.attr('data-url')+'?source='+utm_source+'?medium='+utm_medium  etc. etc.;
newurl=typeformWidget.attr('data-url')+'?source='+utm_source;

//you need to load jquery for this
$("[data-url]").attr("data-url", newurl);
</script>
