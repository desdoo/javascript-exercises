const caesar = function(string,offset) {

    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    
    let newString = ''
    let letterCrypted
    
    for (let i=0; i<string.length;i++) {
     
        if(string[i] === '!' || string[i]===',' || string[i]===' ') {
            letterCrypted = string[i]
            }
        else {
            //find value in alphabet 
                stringLow = string.charAt(i).toLowerCase()
                letterIndex = alphabet.indexOf(stringLow)
                    switch (true) {
                        //if the offset value is behind 'z'
                        case    (alphabet.length-1-(letterIndex+offset)) < 0:
                            
                                    newIndex = letterIndex+offset-alphabet.length
                                    letterCrypted = alphabet[newIndex]
                                    break;
                            
                        //if the offset value is before 'a'
                        case    ((letterIndex+offset)<0):
                                    newIndex=alphabet.length+2-letterIndex+offset
                                    letterCrypted = alphabet[newIndex]
                                    break;
                        default :
                                    letterCrypted = alphabet[letterIndex+offset]
                    }
                
                if(string.charAt(i) === string.charAt(i).toUpperCase()){
                    letterCrypted = letterCrypted.toUpperCase()
                    }
    
            }   
        newString = newString+letterCrypted
        
    
    }
    return newString
    }
    
    module.exports = caesar