$("#submit").on("click", function(event) {
event.preventDefault();
var name = $("#termKey").val().trim();
var limit = $(".form-group").val();
var startYear = $("#startYear").val().trim();
var endYear = $("#endYear").val().trim();
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
  'q' : name,
  'fq': limit,
  'begin_date': startYear,
  'end_date': endYear
});
$.ajax({
  url: url,
  method: 'GET',
}).then(function(response){

    console.log(response);
    console.log(response.name);
    console.log(response.limit);
    console.log(response.startYear);
    console.log(response.endYear);
})
})
