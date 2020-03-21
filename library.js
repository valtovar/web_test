function GetContent ()
{
   fetch('https://script.google.com/macros/s/AKfycbybcPDNxhjYRtD6jaeuk2oHd3lVxvjXNeps-u_n2u5gP0Ziyow/exec')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.SnowCoverage);
  });
  alert("hola");
}
