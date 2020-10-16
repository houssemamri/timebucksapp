function subme() {
var request = new XMLHttpRequest();

request.open('POST', 'https://api.moosend.com/v3/subscribers/8282e987-b973-47f8-9f54-60765f904513/subscribe.json?apikey=c20f81f5-ccac-4c9a-80ed-113ebc536a7e');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'Name': 'Paul',
  'Email': 'someEmail@email.com',
  'HasExternalDoubleOptIn': false,
  'CustomFields': [
    'Age=25',
    'Country=USA'
  ]
};

request.send(JSON.stringify(body));
}
