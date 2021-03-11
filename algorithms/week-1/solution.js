const address = '255.100.50.0'

// Solution #1
const defang = addr => addr.split('.').join('[.]')

// Solution #2
const defang = addr => {
    let address = ''
    for(var i=0; i < addr.length; i++) {
        addr[i] === '.' ? address+= '[.]' : address+=addr[i]
    }
    
    return address
}

console.log(defang(address))