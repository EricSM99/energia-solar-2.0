function soma(){

    var hgeladeira = window.document.getElementById('hgeladeira').value
var qgeladeira = window.document.getElementById('qgeladeira').value

var res = window.document.getElementById('res')

var geladeira = hgeladeira * 53
var geladeira1 = geladeira * qgeladeira

res.innerHTML = `<p>Consumo diario de ${geladeira1}(kWh)`

}

